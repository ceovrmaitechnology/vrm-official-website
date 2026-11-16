import React, { useState, useEffect, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Modal } from 'react-bootstrap';

const TOKEN_KEY = 'vrm_admin_token';
const USER_KEY = 'vrm_admin_user_data';

function AdminCareers() {
    const location = useLocation();
    const navigate = useNavigate();

    // Check if on reset-password view
    const isResetPasswordPath = location.pathname.includes('/admin/reset-password');
    const searchParams = new URLSearchParams(location.search);
    const resetTokenParam = searchParams.get('token') || '';

    // Auth State
    const [token, setToken] = useState(() => sessionStorage.getItem(TOKEN_KEY) || localStorage.getItem(TOKEN_KEY) || '');
    const [currentUser, setCurrentUser] = useState(() => {
        try {
            const saved = sessionStorage.getItem(USER_KEY) || localStorage.getItem(USER_KEY);
            return saved ? JSON.parse(saved) : null;
        } catch (e) {
            return null;
        }
    });
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [authChecking, setAuthChecking] = useState(true);

    // Active Navigation Tab: 'jobs' | 'applications' | 'gallery' | 'admins'
    const [activeTab, setActiveTab] = useState('jobs');

    // Login Form State
    const [loginUser, setLoginUser] = useState('');
    const [loginPass, setLoginPass] = useState('');
    const [rememberMe, setRememberMe] = useState(true);
    const [loginError, setLoginError] = useState('');
    const [isLoggingIn, setIsLoggingIn] = useState(false);

    // Forgot Password State
    const [showForgotPassword, setShowForgotPassword] = useState(false);
    const [forgotIdentifier, setForgotIdentifier] = useState('');
    const [forgotStatus, setForgotStatus] = useState({ type: '', message: '' });
    const [isSendingForgot, setIsSendingForgot] = useState(false);

    // Reset Password Form State (for /admin/reset-password?token=...)
    const [resetToken, setResetToken] = useState(resetTokenParam);
    const [resetNewPass, setResetNewPass] = useState('');
    const [resetConfirmPass, setResetConfirmPass] = useState('');
    const [resetStatus, setResetStatus] = useState({ type: '', message: '' });
    const [isResetting, setIsResetting] = useState(false);

    // Change Password Modal State (for logged-in user)
    const [showChangePassModal, setShowChangePassModal] = useState(false);
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [changePassStatus, setChangePassStatus] = useState({ type: '', message: '' });
    const [isChangingPass, setIsChangingPass] = useState(false);

    // Jobs State
    const [jobs, setJobs] = useState([]);
    const [isLoadingJobs, setIsLoadingJobs] = useState(false);
    const [filterStatus, setFilterStatus] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');

    // Job Add/Edit Modal State
    const [showEditModal, setShowEditModal] = useState(false);
    const [editingJobId, setEditingJobId] = useState(null);
    const [isSaving, setIsSaving] = useState(false);
    const [formError, setFormError] = useState('');

    // Job Form Fields
    const [formTitle, setFormTitle] = useState('');
    const [formSlug, setFormSlug] = useState('');
    const [formDepartment, setFormDepartment] = useState('Engineering');
    const [formLocation, setFormLocation] = useState('Bengaluru');
    const [formEmploymentType, setFormEmploymentType] = useState('Full-time');
    const [formExperience, setFormExperience] = useState('2-4 Years');
    const [formShortDesc, setFormShortDesc] = useState('');
    const [formResponsibilities, setFormResponsibilities] = useState('');
    const [formRequirements, setFormRequirements] = useState('');
    const [formStatus, setFormStatus] = useState('draft');
    const [formApplyEmail, setFormApplyEmail] = useState('contactus@vrmaitechnology.com');
    const [formApplyLink, setFormApplyLink] = useState('');

    // Job Delete Modal State
    const [jobToDelete, setJobToDelete] = useState(null);
    const [isDeleting, setIsDeleting] = useState(false);

    // Applications State
    const [applications, setApplications] = useState([]);
    const [isLoadingApps, setIsLoadingApps] = useState(false);
    const [appFilterStatus, setAppFilterStatus] = useState('all');
    const [appSearchQuery, setAppSearchQuery] = useState('');
    const [selectedApp, setSelectedApp] = useState(null);
    const [appToDelete, setAppToDelete] = useState(null);
    const [isDeletingApp, setIsDeletingApp] = useState(false);

    // Gallery State
    const [gallery, setGallery] = useState([]);
    const [isLoadingGallery, setIsLoadingGallery] = useState(false);
    const [showUploadModal, setShowUploadModal] = useState(false);
    const [editingPhoto, setEditingPhoto] = useState(null);
    const [photoToDelete, setPhotoToDelete] = useState(null);
    const [isDeletingPhoto, setIsDeletingPhoto] = useState(false);
    const [isSavingPhoto, setIsSavingPhoto] = useState(false);
    const [galleryFormError, setGalleryFormError] = useState('');

    // Gallery Form Fields
    const [photoFile, setPhotoFile] = useState(null);
    const [photoPreview, setPhotoPreview] = useState('');
    const [photoCaption, setPhotoCaption] = useState('');
    const [photoCategory, setPhotoCategory] = useState('Fun Friday');
    const [photoEventDate, setPhotoEventDate] = useState(() => new Date().toISOString().slice(0, 10));
    const [photoAltText, setPhotoAltText] = useState('');
    const [photoStatus, setPhotoStatus] = useState('published');

    // Admin Users Management State (Superadmin only)
    const [adminUsers, setAdminUsers] = useState([]);
    const [isLoadingAdmins, setIsLoadingAdmins] = useState(false);
    const [showAddAdminModal, setShowAddAdminModal] = useState(false);
    const [editingAdmin, setEditingAdmin] = useState(null);
    const [adminToDelete, setAdminToDelete] = useState(null);
    const [isSavingAdmin, setIsSavingAdmin] = useState(false);
    const [isDeletingAdmin, setIsDeletingAdmin] = useState(false);
    const [adminFormError, setAdminFormError] = useState('');

    // Generated Temp Password Modal (Shown once!)
    const [tempPasswordModal, setTempPasswordModal] = useState({ show: false, username: '', password: '', message: '' });
    const [copySuccess, setCopySuccess] = useState(false);

    // Admin Form Fields
    const [adminFormUsername, setAdminFormUsername] = useState('');
    const [adminFormDisplayName, setAdminFormDisplayName] = useState('');
    const [adminFormEmail, setAdminFormEmail] = useState('');
    const [adminFormRole, setAdminFormRole] = useState('admin');
    const [adminFormActive, setAdminFormActive] = useState(true);

    const logout = useCallback(() => {
        sessionStorage.removeItem(TOKEN_KEY);
        sessionStorage.removeItem(USER_KEY);
        localStorage.removeItem(TOKEN_KEY);
        localStorage.removeItem(USER_KEY);
        setToken('');
        setCurrentUser(null);
        setIsAuthenticated(false);
        setJobs([]);
        setApplications([]);
        setGallery([]);
        setAdminUsers([]);
    }, []);

    // Save token and user object
    const saveSession = useCallback((newToken, userObj, remember = true) => {
        const storage = remember ? localStorage : sessionStorage;
        storage.setItem(TOKEN_KEY, newToken);
        storage.setItem(USER_KEY, JSON.stringify(userObj));
        setToken(newToken);
        setCurrentUser(userObj);
        setIsAuthenticated(true);
    }, []);

    // Verify Auth on mount / token change
    useEffect(() => {
        if (!token) {
            setIsAuthenticated(false);
            setAuthChecking(false);
            return;
        }

        fetch('/api/admin/me', {
            headers: { 'Authorization': `Bearer ${token}` }
        })
            .then(res => {
                if (res.ok) return res.json();
                throw new Error('Session invalid');
            })
            .then(data => {
                if (data && data.success && data.user) {
                    setIsAuthenticated(true);
                    setCurrentUser(data.user);
                    if (data.user.forcePasswordChange) {
                        setShowChangePassModal(true);
                    }
                } else {
                    logout();
                }
            })
            .catch(() => {
                logout();
            })
            .finally(() => {
                setAuthChecking(false);
            });
    }, [token, logout]);

    // Fetch Jobs
    const fetchJobs = useCallback(() => {
        if (!token) return;
        setIsLoadingJobs(true);

        fetch('/api/admin/careers/jobs', {
            headers: { 'Authorization': `Bearer ${token}` }
        })
            .then(res => {
                if (res.ok) return res.json();
                if (res.status === 401) {
                    logout();
                    throw new Error('Session expired');
                }
                throw new Error('Failed to fetch jobs');
            })
            .then(data => {
                if (data && data.success && Array.isArray(data.jobs)) {
                    setJobs(data.jobs);
                }
            })
            .catch(err => console.error(err))
            .finally(() => setIsLoadingJobs(false));
    }, [token, logout]);

    // Fetch Applications
    const fetchApplications = useCallback(() => {
        if (!token) return;
        setIsLoadingApps(true);

        fetch('/api/admin/careers/applications', {
            headers: { 'Authorization': `Bearer ${token}` }
        })
            .then(res => {
                if (res.ok) return res.json();
                if (res.status === 401) {
                    logout();
                    throw new Error('Session expired');
                }
                throw new Error('Failed to fetch applications');
            })
            .then(data => {
                if (data && data.success && Array.isArray(data.applications)) {
                    setApplications(data.applications);
                }
            })
            .catch(err => console.error(err))
            .finally(() => setIsLoadingApps(false));
    }, [token, logout]);

    // Fetch Gallery Photos
    const fetchGallery = useCallback(() => {
        if (!token) return;
        setIsLoadingGallery(true);

        fetch('/api/admin/gallery', {
            headers: { 'Authorization': `Bearer ${token}` }
        })
            .then(res => {
                if (res.ok) return res.json();
                if (res.status === 401) {
                    logout();
                    throw new Error('Session expired');
                }
                throw new Error('Failed to fetch gallery');
            })
            .then(data => {
                if (data && data.success && Array.isArray(data.gallery)) {
                    setGallery(data.gallery);
                }
            })
            .catch(err => console.error(err))
            .finally(() => setIsLoadingGallery(false));
    }, [token, logout]);

    // Fetch Admin Users (Superadmin only)
    const fetchAdminUsers = useCallback(() => {
        if (!token || currentUser?.role !== 'superadmin') return;
        setIsLoadingAdmins(true);

        fetch('/api/admin/users', {
            headers: { 'Authorization': `Bearer ${token}` }
        })
            .then(res => {
                if (res.ok) return res.json();
                if (res.status === 401) {
                    logout();
                    throw new Error('Session expired');
                }
                throw new Error('Failed to fetch admins');
            })
            .then(data => {
                if (data && data.success && Array.isArray(data.users)) {
                    setAdminUsers(data.users);
                }
            })
            .catch(err => console.error(err))
            .finally(() => setIsLoadingAdmins(false));
    }, [token, currentUser, logout]);

    useEffect(() => {
        if (isAuthenticated) {
            fetchJobs();
            fetchApplications();
            fetchGallery();
            if (currentUser?.role === 'superadmin') {
                fetchAdminUsers();
            }
        }
    }, [isAuthenticated, currentUser?.role, fetchJobs, fetchApplications, fetchGallery, fetchAdminUsers]);

    // Handle Login Submit
    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        setLoginError('');
        setIsLoggingIn(true);

        try {
            const res = await fetch('/api/admin/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username: loginUser, password: loginPass })
            });

            const data = await res.json().catch(() => ({}));

            if (res.ok && data.success && data.token) {
                saveSession(data.token, data.user, rememberMe);
                setLoginUser('');
                setLoginPass('');
                if (data.user?.forcePasswordChange) {
                    setShowChangePassModal(true);
                }
            } else {
                setLoginError(data.message || 'Invalid username or password.');
            }
        } catch (err) {
            setLoginError('Connection error. Please try again.');
        } finally {
            setIsLoggingIn(false);
        }
    };

    // Handle Forgot Password Submit
    const handleForgotSubmit = async (e) => {
        e.preventDefault();
        setForgotStatus({ type: '', message: '' });
        setIsSendingForgot(true);

        try {
            const res = await fetch('/api/admin/forgot-password', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ identifier: forgotIdentifier.trim() })
            });
            const data = await res.json().catch(() => ({}));
            setForgotStatus({
                type: 'success',
                message: data.message || 'If the account exists, a reset email was sent.'
            });
        } catch (err) {
            setForgotStatus({ type: 'error', message: 'Failed to request password reset. Try again.' });
        } finally {
            setIsSendingForgot(false);
        }
    };

    // Handle Reset Password Submit (From reset link)
    const handleResetSubmit = async (e) => {
        e.preventDefault();
        if (resetNewPass.length < 12) {
            setResetStatus({ type: 'error', message: 'Password must be at least 12 characters long.' });
            return;
        }
        if (resetNewPass !== resetConfirmPass) {
            setResetStatus({ type: 'error', message: 'Passwords do not match.' });
            return;
        }

        setIsResetting(true);
        setResetStatus({ type: '', message: '' });

        try {
            const res = await fetch('/api/admin/reset-password', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ token: resetToken, newPassword: resetNewPass })
            });
            const data = await res.json().catch(() => ({}));

            if (res.ok && data.success) {
                setResetStatus({
                    type: 'success',
                    message: data.message || 'Password has been reset successfully! You can now log in.'
                });
                setResetNewPass('');
                setResetConfirmPass('');
            } else {
                setResetStatus({ type: 'error', message: data.message || 'Failed to reset password.' });
            }
        } catch (err) {
            setResetStatus({ type: 'error', message: 'Connection error. Please try again.' });
        } finally {
            setIsResetting(false);
        }
    };

    // Handle Change Password Submit (Logged-in admin)
    const handleChangePasswordSubmit = async (e) => {
        e.preventDefault();
        if (newPassword.length < 12) {
            setChangePassStatus({ type: 'error', message: 'New password must be at least 12 characters.' });
            return;
        }
        if (newPassword !== confirmNewPassword) {
            setChangePassStatus({ type: 'error', message: 'New passwords do not match.' });
            return;
        }

        setIsChangingPass(true);
        setChangePassStatus({ type: '', message: '' });

        try {
            const res = await fetch('/api/admin/change-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ currentPassword, newPassword })
            });
            const data = await res.json().catch(() => ({}));

            if (res.ok && data.success) {
                setChangePassStatus({ type: 'success', message: 'Password updated successfully!' });
                if (data.token) {
                    saveSession(data.token, data.user, true);
                }
                setTimeout(() => {
                    setShowChangePassModal(false);
                    setCurrentPassword('');
                    setNewPassword('');
                    setConfirmNewPassword('');
                    setChangePassStatus({ type: '', message: '' });
                }, 1500);
            } else {
                setChangePassStatus({ type: 'error', message: data.message || 'Failed to change password.' });
            }
        } catch (err) {
            setChangePassStatus({ type: 'error', message: 'Connection error. Please try again.' });
        } finally {
            setIsChangingPass(false);
        }
    };

    // --------------------------------------------------------------------------
    // JOBS ACTIONS
    // --------------------------------------------------------------------------
    const handleTitleChange = (val) => {
        setFormTitle(val);
        if (!editingJobId) {
            const autoSlug = val
                .toLowerCase()
                .trim()
                .replace(/[^\w\s-]/g, '')
                .replace(/[\s_-]+/g, '-')
                .replace(/^-+|-+$/g, '');
            setFormSlug(autoSlug);
        }
    };

    const handleOpenAddModal = () => {
        setEditingJobId(null);
        setFormTitle('');
        setFormSlug('');
        setFormDepartment('Engineering');
        setFormLocation('Bengaluru');
        setFormEmploymentType('Full-time');
        setFormExperience('2-4 Years');
        setFormShortDesc('');
        setFormResponsibilities('');
        setFormRequirements('');
        setFormStatus('draft');
        setFormApplyEmail('contactus@vrmaitechnology.com');
        setFormApplyLink('');
        setFormError('');
        setShowEditModal(true);
    };

    const handleOpenEditModal = (job) => {
        setEditingJobId(job.id);
        setFormTitle(job.title || '');
        setFormSlug(job.slug || '');
        setFormDepartment(job.department || 'Engineering');
        setFormLocation(job.location || 'Bengaluru');
        setFormEmploymentType(job.employmentType || 'Full-time');
        setFormExperience(job.experience || '');
        setFormShortDesc(job.shortDescription || '');
        setFormResponsibilities(Array.isArray(job.responsibilities) ? job.responsibilities.join('\n') : (job.responsibilities || ''));
        setFormRequirements(Array.isArray(job.requirements) ? job.requirements.join('\n') : (job.requirements || ''));
        setFormStatus(job.status || 'draft');
        setFormApplyEmail(job.applyEmail || 'contactus@vrmaitechnology.com');
        setFormApplyLink(job.applyLink || '');
        setFormError('');
        setShowEditModal(true);
    };

    const handleSaveJob = async (e) => {
        e.preventDefault();
        setFormError('');
        setIsSaving(true);

        const payload = {
            title: formTitle.trim(),
            slug: formSlug.trim(),
            department: formDepartment.trim(),
            location: formLocation.trim(),
            employmentType: formEmploymentType.trim(),
            experience: formExperience.trim(),
            shortDescription: formShortDesc.trim(),
            responsibilities: formResponsibilities.split('\n').map(s => s.trim()).filter(Boolean),
            requirements: formRequirements.split('\n').map(s => s.trim()).filter(Boolean),
            status: formStatus,
            applyEmail: 'contactus@vrmaitechnology.com',
            applyLink: formApplyLink.trim()
        };

        const url = editingJobId ? `/api/admin/careers/jobs/${editingJobId}` : '/api/admin/careers/jobs';
        const method = editingJobId ? 'PUT' : 'POST';

        try {
            const res = await fetch(url, {
                method,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(payload)
            });

            const data = await res.json().catch(() => ({}));
            if (res.ok && data.success) {
                setShowEditModal(false);
                fetchJobs();
            } else {
                setFormError(data.message || 'Failed to save job posting.');
            }
        } catch (err) {
            setFormError('Connection error. Failed to save job.');
        } finally {
            setIsSaving(false);
        }
    };

    const handleQuickStatusChange = async (jobId, newStatus) => {
        try {
            const res = await fetch(`/api/admin/careers/jobs/${jobId}/status`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ status: newStatus })
            });
            if (res.ok) {
                fetchJobs();
            }
        } catch (err) {
            console.error('Failed to update job status:', err);
        }
    };

    const handleDeleteJob = async () => {
        if (!jobToDelete) return;
        setIsDeleting(true);

        try {
            const res = await fetch(`/api/admin/careers/jobs/${jobToDelete.id}`, {
                method: 'DELETE',
                headers: { 'Authorization': `Bearer ${token}` }
            });
            if (res.ok) {
                setJobToDelete(null);
                fetchJobs();
            }
        } catch (err) {
            console.error('Failed to delete job:', err);
        } finally {
            setIsDeleting(false);
        }
    };

    // --------------------------------------------------------------------------
    // APPLICATIONS ACTIONS
    // --------------------------------------------------------------------------
    const handleUpdateAppStatus = async (appId, newStatus) => {
        try {
            const res = await fetch(`/api/admin/careers/applications/${appId}/status`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ status: newStatus })
            });
            if (res.ok) {
                fetchApplications();
                if (selectedApp && selectedApp.id === appId) {
                    setSelectedApp(prev => ({ ...prev, status: newStatus }));
                }
            }
        } catch (err) {
            console.error('Failed to update application status:', err);
        }
    };

    const handleDeleteApp = async () => {
        if (!appToDelete) return;
        setIsDeletingApp(true);

        try {
            const res = await fetch(`/api/admin/careers/applications/${appToDelete.id}`, {
                method: 'DELETE',
                headers: { 'Authorization': `Bearer ${token}` }
            });
            if (res.ok) {
                setAppToDelete(null);
                if (selectedApp && selectedApp.id === appToDelete.id) {
                    setSelectedApp(null);
                }
                fetchApplications();
            }
        } catch (err) {
            console.error('Failed to delete application:', err);
        } finally {
            setIsDeletingApp(false);
        }
    };

    const handleDownloadResume = (app) => {
        if (!app || !app.storedFileName) return;
        window.open(`/api/admin/careers/applications/${app.id}/resume?token=${encodeURIComponent(token)}`, '_blank');
    };

    // --------------------------------------------------------------------------
    // GALLERY ACTIONS (Life at VRM)
    // --------------------------------------------------------------------------
    const handleOpenUploadModal = () => {
        setEditingPhoto(null);
        setPhotoFile(null);
        setPhotoPreview('');
        setPhotoCaption('');
        setPhotoCategory('Fun Friday');
        setPhotoEventDate(new Date().toISOString().slice(0, 10));
        setPhotoAltText('');
        setPhotoStatus('published');
        setGalleryFormError('');
        setShowUploadModal(true);
    };

    const handleOpenEditPhotoModal = (photo) => {
        setEditingPhoto(photo);
        setPhotoFile(null);
        setPhotoPreview(photo.thumbPath || photo.imagePath);
        setPhotoCaption(photo.caption || '');
        setPhotoCategory(photo.category || 'Team Event');
        setPhotoEventDate(photo.eventDate || (photo.createdAt || '').slice(0, 10));
        setPhotoAltText(photo.altText || '');
        setPhotoStatus(photo.status || 'published');
        setGalleryFormError('');
        setShowUploadModal(true);
    };

    const handlePhotoFileChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        if (file.size > 8 * 1024 * 1024) {
            setGalleryFormError('File size exceeds 8 MB limit.');
            return;
        }

        setPhotoFile(file);
        setGalleryFormError('');
        const reader = new FileReader();
        reader.onload = () => setPhotoPreview(reader.result);
        reader.readAsDataURL(file);
    };

    const handleSavePhoto = async (e) => {
        e.preventDefault();
        setGalleryFormError('');

        if (!photoAltText.trim()) {
            setGalleryFormError('Alt text is required for accessibility and privacy compliance.');
            return;
        }

        setIsSavingPhoto(true);

        try {
            if (editingPhoto) {
                // Update photo metadata
                const res = await fetch(`/api/admin/gallery/${editingPhoto.id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                    body: JSON.stringify({
                        caption: photoCaption.trim(),
                        category: photoCategory,
                        eventDate: photoEventDate,
                        altText: photoAltText.trim(),
                        status: photoStatus
                    })
                });
                const data = await res.json().catch(() => ({}));
                if (res.ok && data.success) {
                    setShowUploadModal(false);
                    fetchGallery();
                } else {
                    setGalleryFormError(data.message || 'Failed to update photo.');
                }
            } else {
                // Upload new photo
                if (!photoFile) {
                    setGalleryFormError('Please select a photo to upload.');
                    setIsSavingPhoto(false);
                    return;
                }

                const formData = new FormData();
                formData.append('photo', photoFile);
                formData.append('caption', photoCaption.trim());
                formData.append('category', photoCategory);
                formData.append('eventDate', photoEventDate);
                formData.append('altText', photoAltText.trim());
                formData.append('status', photoStatus);

                const res = await fetch('/api/admin/gallery', {
                    method: 'POST',
                    headers: { 'Authorization': `Bearer ${token}` },
                    body: formData
                });
                const data = await res.json().catch(() => ({}));
                if (res.ok && data.success) {
                    setShowUploadModal(false);
                    fetchGallery();
                } else {
                    setGalleryFormError(data.message || 'Failed to upload photo.');
                }
            }
        } catch (err) {
            setGalleryFormError('Connection error. Failed to save photo.');
        } finally {
            setIsSavingPhoto(false);
        }
    };

    const handleTogglePhotoStatus = async (photo) => {
        const nextStatus = photo.status === 'published' ? 'hidden' : 'published';
        try {
            const res = await fetch(`/api/admin/gallery/${photo.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ status: nextStatus })
            });
            if (res.ok) fetchGallery();
        } catch (err) {
            console.error('Failed to toggle status:', err);
        }
    };

    const handleReorderPhoto = async (index, direction) => {
        const targetIndex = index + direction;
        if (targetIndex < 0 || targetIndex >= gallery.length) return;

        const newGallery = [...gallery];
        const [moved] = newGallery.splice(index, 1);
        newGallery.splice(targetIndex, 0, moved);

        const orderedIds = newGallery.map(g => g.id);
        setGallery(newGallery);

        try {
            await fetch('/api/admin/gallery/reorder', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ orderedIds })
            });
        } catch (err) {
            console.error('Failed to persist order:', err);
            fetchGallery();
        }
    };

    const handleDeletePhoto = async () => {
        if (!photoToDelete) return;
        setIsDeletingPhoto(true);

        try {
            const res = await fetch(`/api/admin/gallery/${photoToDelete.id}`, {
                method: 'DELETE',
                headers: { 'Authorization': `Bearer ${token}` }
            });
            if (res.ok) {
                setPhotoToDelete(null);
                fetchGallery();
            }
        } catch (err) {
            console.error('Failed to delete photo:', err);
        } finally {
            setIsDeletingPhoto(false);
        }
    };

    // --------------------------------------------------------------------------
    // ADMIN USERS ACTIONS (Superadmin only)
    // --------------------------------------------------------------------------
    const handleOpenAddAdminModal = () => {
        setEditingAdmin(null);
        setAdminFormUsername('');
        setAdminFormDisplayName('');
        setAdminFormEmail('');
        setAdminFormRole('admin');
        setAdminFormActive(true);
        setAdminFormError('');
        setShowAddAdminModal(true);
    };

    const handleOpenEditAdminModal = (adm) => {
        setEditingAdmin(adm);
        setAdminFormUsername(adm.username);
        setAdminFormDisplayName(adm.displayName || '');
        setAdminFormEmail(adm.email || '');
        setAdminFormRole(adm.role || 'admin');
        setAdminFormActive(adm.active !== false);
        setAdminFormError('');
        setShowAddAdminModal(true);
    };

    const handleSaveAdminUser = async (e) => {
        e.preventDefault();
        setAdminFormError('');
        setIsSavingAdmin(true);

        try {
            if (editingAdmin) {
                const res = await fetch(`/api/admin/users/${editingAdmin.id}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                    body: JSON.stringify({
                        displayName: adminFormDisplayName.trim(),
                        email: adminFormEmail.trim(),
                        role: adminFormRole,
                        active: adminFormActive
                    })
                });
                const data = await res.json().catch(() => ({}));
                if (res.ok && data.success) {
                    setShowAddAdminModal(false);
                    fetchAdminUsers();
                } else {
                    setAdminFormError(data.message || 'Failed to update admin account.');
                }
            } else {
                const res = await fetch('/api/admin/users', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                    body: JSON.stringify({
                        username: adminFormUsername.trim(),
                        displayName: adminFormDisplayName.trim(),
                        email: adminFormEmail.trim(),
                        role: adminFormRole
                    })
                });
                const data = await res.json().catch(() => ({}));
                if (res.ok && data.success) {
                    setShowAddAdminModal(false);
                    fetchAdminUsers();
                    // Display One-Time Temporary Password
                    setTempPasswordModal({
                        show: true,
                        username: data.user.username,
                        password: data.tempPassword,
                        message: `Admin user "${data.user.username}" created successfully! Please share this one-time temporary password with them. They will be required to change it on their first login.`
                    });
                    setCopySuccess(false);
                } else {
                    setAdminFormError(data.message || 'Failed to create admin account.');
                }
            }
        } catch (err) {
            setAdminFormError('Connection error. Failed to save admin account.');
        } finally {
            setIsSavingAdmin(false);
        }
    };

    const handleResetAdminPassword = async (adminId, adminUsername) => {
        if (!window.confirm(`Generate a new temporary password for "${adminUsername}"? Their current session will be invalidated.`)) {
            return;
        }

        try {
            const res = await fetch(`/api/admin/users/${adminId}/reset-password`, {
                method: 'POST',
                headers: { 'Authorization': `Bearer ${token}` }
            });
            const data = await res.json().catch(() => ({}));

            if (res.ok && data.success) {
                setTempPasswordModal({
                    show: true,
                    username: adminUsername,
                    password: data.tempPassword,
                    message: `Password reset for "${adminUsername}". Please copy and securely share this one-time temporary password with them.`
                });
                setCopySuccess(false);
            } else {
                alert(data.message || 'Failed to reset password.');
            }
        } catch (err) {
            alert('Failed to reset password. Connection error.');
        }
    };

    const handleDeleteAdmin = async () => {
        if (!adminToDelete) return;
        setIsDeletingAdmin(true);

        try {
            const res = await fetch(`/api/admin/users/${adminToDelete.id}`, {
                method: 'DELETE',
                headers: { 'Authorization': `Bearer ${token}` }
            });
            const data = await res.json().catch(() => ({}));

            if (res.ok && data.success) {
                setAdminToDelete(null);
                fetchAdminUsers();
            } else {
                alert(data.message || 'Failed to delete admin.');
            }
        } catch (err) {
            alert('Connection error while deleting admin.');
        } finally {
            setIsDeletingAdmin(false);
        }
    };

    const copyTempPasswordToClipboard = () => {
        if (tempPasswordModal.password) {
            navigator.clipboard.writeText(tempPasswordModal.password);
            setCopySuccess(true);
            setTimeout(() => setCopySuccess(false), 2500);
        }
    };

    // Filtered Jobs
    const filteredJobs = jobs.filter(job => {
        const matchesStatus = filterStatus === 'all' || job.status === filterStatus;
        const matchesSearch = !searchQuery ||
            job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            job.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
            job.location.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesStatus && matchesSearch;
    });

    // Filtered Applications
    const filteredApplications = applications.filter(app => {
        const matchesStatus = appFilterStatus === 'all' || app.status === appFilterStatus;
        const matchesSearch = !appSearchQuery ||
            app.fullName.toLowerCase().includes(appSearchQuery.toLowerCase()) ||
            app.email.toLowerCase().includes(appSearchQuery.toLowerCase()) ||
            app.position.toLowerCase().includes(appSearchQuery.toLowerCase()) ||
            app.phone.toLowerCase().includes(appSearchQuery.toLowerCase());
        return matchesStatus && matchesSearch;
    });

    const jobStats = {
        total: jobs.length,
        published: jobs.filter(j => j.status === 'published').length,
        draft: jobs.filter(j => j.status === 'draft').length,
        closed: jobs.filter(j => j.status === 'closed').length
    };

    const appStats = {
        total: applications.length,
        new: applications.filter(a => a.status === 'new').length,
        reviewed: applications.filter(a => a.status === 'reviewed').length,
        shortlisted: applications.filter(a => a.status === 'shortlisted').length,
        rejected: applications.filter(a => a.status === 'rejected').length
    };

    const galleryStats = {
        total: gallery.length,
        published: gallery.filter(g => g.status === 'published').length,
        hidden: gallery.filter(g => g.status === 'hidden').length
    };

    if (authChecking) {
        return (
            <div className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh', background: '#f8fafc' }}>
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    // --------------------------------------------------------------------------
    // VIEW: RESET PASSWORD (From email link /admin/reset-password?token=...)
    // --------------------------------------------------------------------------
    if (isResetPasswordPath || (resetTokenParam && !isAuthenticated)) {
        return (
            <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0b132b 0%, #1c2539 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
                <Helmet>
                    <title>Reset Password | VRM AI Technology</title>
                    <meta name="robots" content="noindex, nofollow" />
                </Helmet>

                <div className="card shadow-lg border-0" style={{ maxWidth: '440px', width: '100%', borderRadius: '16px', overflow: 'hidden' }}>
                    <div className="p-4 p-md-5 bg-white">
                        <div className="text-center mb-4">
                            <img src="/assets/images/logo/logo-header.webp" alt="VRM AI Technology" style={{ height: '44px', marginBottom: '16px' }} />
                            <h3 className="h4 fw-bold" style={{ color: '#1c2539' }}>Reset Admin Password</h3>
                            <p className="text-muted small">Choose a secure new password (min 12 characters)</p>
                        </div>

                        {resetStatus.message && (
                            <div className={`alert ${resetStatus.type === 'success' ? 'alert-success' : 'alert-danger'} py-2 px-3 small rounded-3 mb-4`}>
                                <i className={`fas ${resetStatus.type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'} me-2`}></i>
                                {resetStatus.message}
                            </div>
                        )}

                        {resetStatus.type === 'success' ? (
                            <div className="text-center">
                                <Link to="/admin/careers" className="btn btn-primary w-100 py-2 fw-semibold" style={{ borderRadius: '8px' }}>
                                    Proceed to Sign In
                                </Link>
                            </div>
                        ) : (
                            <form onSubmit={handleResetSubmit}>
                                {!resetTokenParam && (
                                    <div className="mb-3">
                                        <label className="form-label small fw-semibold text-dark">Reset Token</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Paste reset token from email"
                                            value={resetToken}
                                            onChange={(e) => setResetToken(e.target.value)}
                                            required
                                            style={{ borderRadius: '8px', padding: '10px 14px' }}
                                        />
                                    </div>
                                )}

                                <div className="mb-3">
                                    <label className="form-label small fw-semibold text-dark">New Password (min 12 chars)</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="Enter new password"
                                        value={resetNewPass}
                                        onChange={(e) => setResetNewPass(e.target.value)}
                                        required
                                        minLength={12}
                                        style={{ borderRadius: '8px', padding: '10px 14px' }}
                                    />
                                    <div className="form-text" style={{ fontSize: '11px' }}>Must be at least 12 characters with mixed case and numbers.</div>
                                </div>

                                <div className="mb-4">
                                    <label className="form-label small fw-semibold text-dark">Confirm New Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="Repeat new password"
                                        value={resetConfirmPass}
                                        onChange={(e) => setResetConfirmPass(e.target.value)}
                                        required
                                        minLength={12}
                                        style={{ borderRadius: '8px', padding: '10px 14px' }}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isResetting}
                                    className="btn btn-primary w-100 py-2 fw-semibold"
                                    style={{ borderRadius: '8px' }}
                                >
                                    {isResetting ? 'Resetting Password...' : 'Save New Password'}
                                </button>
                            </form>
                        )}

                        <div className="text-center mt-4 pt-3 border-top">
                            <Link to="/admin/careers" className="text-muted small text-decoration-none">
                                <i className="far fa-arrow-left me-1"></i> Back to login
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // --------------------------------------------------------------------------
    // VIEW: UNAUTHENTICATED (Sign In / Forgot Password)
    // --------------------------------------------------------------------------
    if (!isAuthenticated) {
        return (
            <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0b132b 0%, #1c2539 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
                <Helmet>
                    <title>Admin Login | VRM AI Technology</title>
                    <meta name="robots" content="noindex, nofollow" />
                </Helmet>

                <div className="card shadow-lg border-0" style={{ maxWidth: '440px', width: '100%', borderRadius: '16px', overflow: 'hidden' }}>
                    <div className="p-4 p-md-5 bg-white">
                        <div className="text-center mb-4">
                            <img src="/assets/images/logo/logo-header.webp" alt="VRM AI Technology" style={{ height: '44px', marginBottom: '16px' }} />
                            <h3 className="h4 fw-bold" style={{ color: '#1c2539' }}>Careers Admin</h3>
                            <p className="text-muted small">
                                {showForgotPassword ? 'Reset your admin password' : 'Sign in to manage openings, candidates & gallery'}
                            </p>
                        </div>

                        {loginError && !showForgotPassword && (
                            <div className="alert alert-danger py-2 px-3 small rounded-3 mb-4">
                                <i className="fas fa-exclamation-circle me-2"></i>
                                {loginError}
                            </div>
                        )}

                        {forgotStatus.message && showForgotPassword && (
                            <div className={`alert ${forgotStatus.type === 'success' ? 'alert-success' : 'alert-danger'} py-2 px-3 small rounded-3 mb-4`}>
                                <i className={`fas ${forgotStatus.type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'} me-2`}></i>
                                {forgotStatus.message}
                            </div>
                        )}

                        {showForgotPassword ? (
                            <form onSubmit={handleForgotSubmit}>
                                <div className="mb-3">
                                    <label className="form-label small fw-semibold text-dark">Username or Registered Email</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="e.g. admin or contactus@vrmaitechnology.com"
                                        value={forgotIdentifier}
                                        onChange={(e) => setForgotIdentifier(e.target.value)}
                                        required
                                        style={{ borderRadius: '8px', padding: '10px 14px' }}
                                    />
                                    <div className="form-text" style={{ fontSize: '11px' }}>
                                        A secure password reset link (valid for 30 minutes) will be emailed to the registered address.
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSendingForgot}
                                    className="btn btn-primary w-100 py-2 fw-semibold mb-3"
                                    style={{ borderRadius: '8px' }}
                                >
                                    {isSendingForgot ? 'Sending Reset Link...' : 'Send Reset Link'}
                                </button>

                                <button
                                    type="button"
                                    className="btn btn-link text-decoration-none w-100 small text-muted"
                                    onClick={() => {
                                        setShowForgotPassword(false);
                                        setForgotStatus({ type: '', message: '' });
                                    }}
                                >
                                    <i className="far fa-arrow-left me-1"></i> Back to sign in
                                </button>
                            </form>
                        ) : (
                            <form onSubmit={handleLoginSubmit}>
                                <div className="mb-3">
                                    <label className="form-label small fw-semibold text-dark">Username or Email</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter username or email"
                                        value={loginUser}
                                        onChange={(e) => setLoginUser(e.target.value)}
                                        required
                                        style={{ borderRadius: '8px', padding: '10px 14px' }}
                                    />
                                </div>

                                <div className="mb-2">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <label className="form-label small fw-semibold text-dark mb-0">Password</label>
                                        <button
                                            type="button"
                                            className="btn btn-link p-0 text-decoration-none small"
                                            style={{ fontSize: '12px' }}
                                            onClick={() => {
                                                setShowForgotPassword(true);
                                                setLoginError('');
                                            }}
                                        >
                                            Forgot password?
                                        </button>
                                    </div>
                                    <input
                                        type="password"
                                        className="form-control mt-1"
                                        placeholder="Enter password"
                                        value={loginPass}
                                        onChange={(e) => setLoginPass(e.target.value)}
                                        required
                                        style={{ borderRadius: '8px', padding: '10px 14px' }}
                                    />
                                </div>

                                <div className="d-flex justify-content-between align-items-center mb-4 mt-3">
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="rememberMe"
                                            checked={rememberMe}
                                            onChange={(e) => setRememberMe(e.target.checked)}
                                        />
                                        <label className="form-check-label small text-muted" htmlFor="rememberMe">
                                            Keep me logged in
                                        </label>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isLoggingIn}
                                    className="btn btn-primary w-100 py-2 fw-semibold"
                                    style={{ borderRadius: '8px' }}
                                >
                                    {isLoggingIn ? (
                                        <span><span className="spinner-border spinner-border-sm me-2"></span>Signing In...</span>
                                    ) : 'Sign In'}
                                </button>
                            </form>
                        )}

                        <div className="text-center mt-4 pt-3 border-top">
                            <Link to="/careers" className="text-muted small text-decoration-none">
                                <i className="far fa-arrow-left me-1"></i> Back to public site
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // --------------------------------------------------------------------------
    // VIEW: AUTHENTICATED ADMIN DASHBOARD
    // --------------------------------------------------------------------------
    const isSuperAdmin = currentUser?.role === 'superadmin';

    return (
        <div style={{ minHeight: '100vh', background: '#f8fafc' }}>
            <Helmet>
                <title>Careers Admin | VRM AI Technology</title>
                <meta name="robots" content="noindex, nofollow" />
            </Helmet>

            {/* Top Navigation */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3" style={{ background: '#0b132b' }}>
                <div className="container-fluid px-4">
                    <div className="d-flex align-items-center gap-3">
                        <Link to="/" className="navbar-brand d-flex align-items-center gap-2">
                            <img src="/assets/images/logo/logo-header.webp" alt="VRM AI" style={{ height: '32px' }} />
                            <span className="badge bg-primary text-uppercase" style={{ fontSize: '10px', letterSpacing: '1px' }}>Admin</span>
                        </Link>
                    </div>

                    <div className="d-flex align-items-center gap-2 gap-md-3">
                        <Link to="/careers" target="_blank" className="btn btn-outline-light btn-sm px-3 d-none d-sm-inline-flex align-items-center">
                            <i className="far fa-external-link me-1"></i> View Live Site
                        </Link>

                        <div className="d-flex align-items-center gap-2 bg-white bg-opacity-10 px-3 py-1 rounded-pill">
                            <span className="text-white small fw-semibold">
                                {currentUser?.displayName || currentUser?.username}
                            </span>
                            <span className={`badge ${isSuperAdmin ? 'bg-danger' : 'bg-primary'} text-uppercase`} style={{ fontSize: '9px' }}>
                                {currentUser?.role || 'admin'}
                            </span>
                        </div>

                        <button
                            onClick={() => {
                                setChangePassStatus({ type: '', message: '' });
                                setShowChangePassModal(true);
                            }}
                            className="btn btn-outline-light btn-sm"
                            title="Change Password"
                        >
                            <i className="fas fa-key me-1"></i>
                            <span className="d-none d-md-inline">Password</span>
                        </button>

                        <button onClick={logout} className="btn btn-outline-danger btn-sm">
                            <i className="far fa-sign-out me-1"></i> Logout
                        </button>
                    </div>
                </div>
            </nav>

            {/* Forced Password Change Notice Banner */}
            {currentUser?.forcePasswordChange && (
                <div className="alert alert-warning mb-0 border-0 rounded-0 py-3 px-4 d-flex justify-content-between align-items-center">
                    <div>
                        <i className="fas fa-shield-alt text-warning me-2 fs-5"></i>
                        <strong>Temporary Password In Use:</strong> You are currently logged in with a temporary password. Please set a new personal password (min 12 characters) to secure your account.
                    </div>
                    <button
                        className="btn btn-warning btn-sm fw-bold px-3"
                        onClick={() => {
                            setChangePassStatus({ type: '', message: '' });
                            setShowChangePassModal(true);
                        }}
                    >
                        Change Password Now
                    </button>
                </div>
            )}

            <div className="container-fluid px-4 py-4">
                {/* Navigation Tabs */}
                <div className="d-flex flex-wrap justify-content-between align-items-center mb-4 border-bottom pb-3 gap-3">
                    <ul className="nav nav-pills gap-2 mb-0">
                        <li className="nav-item">
                            <button
                                className={`nav-link px-4 py-2 fw-semibold ${activeTab === 'jobs' ? 'active' : 'text-dark bg-white border'}`}
                                onClick={() => setActiveTab('jobs')}
                            >
                                <i className="fas fa-briefcase me-2"></i>
                                Job Openings ({jobStats.total})
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className={`nav-link px-4 py-2 fw-semibold position-relative ${activeTab === 'applications' ? 'active' : 'text-dark bg-white border'}`}
                                onClick={() => setActiveTab('applications')}
                            >
                                <i className="fas fa-file-alt me-2"></i>
                                Applications ({appStats.total})
                                {appStats.new > 0 && (
                                    <span className="badge bg-danger rounded-pill ms-2" style={{ fontSize: '11px' }}>
                                        {appStats.new} new
                                    </span>
                                )}
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className={`nav-link px-4 py-2 fw-semibold ${activeTab === 'gallery' ? 'active' : 'text-dark bg-white border'}`}
                                onClick={() => setActiveTab('gallery')}
                            >
                                <i className="fas fa-images me-2"></i>
                                Life at VRM ({galleryStats.total})
                            </button>
                        </li>
                        {isSuperAdmin && (
                            <li className="nav-item">
                                <button
                                    className={`nav-link px-4 py-2 fw-semibold ${activeTab === 'admins' ? 'active' : 'text-dark bg-white border'}`}
                                    onClick={() => setActiveTab('admins')}
                                >
                                    <i className="fas fa-user-shield me-2"></i>
                                    Manage Admins ({adminUsers.length})
                                </button>
                            </li>
                        )}
                    </ul>

                    {activeTab === 'jobs' && (
                        <button onClick={handleOpenAddModal} className="btn btn-primary px-4 py-2 fw-semibold d-flex align-items-center gap-2">
                            <i className="fas fa-plus"></i> Post New Job
                        </button>
                    )}

                    {activeTab === 'gallery' && (
                        <button onClick={handleOpenUploadModal} className="btn btn-primary px-4 py-2 fw-semibold d-flex align-items-center gap-2">
                            <i className="fas fa-camera"></i> Upload Photo
                        </button>
                    )}

                    {activeTab === 'admins' && isSuperAdmin && (
                        <button onClick={handleOpenAddAdminModal} className="btn btn-primary px-4 py-2 fw-semibold d-flex align-items-center gap-2">
                            <i className="fas fa-user-plus"></i> Add New Admin
                        </button>
                    )}
                </div>

                {/* ============================================================== */}
                {/* TAB 1: JOB OPENINGS                                            */}
                {/* ============================================================== */}
                {activeTab === 'jobs' && (
                    <>
                        {/* Stats Cards */}
                        <div className="row g-3 mb-4">
                            <div className="col-6 col-md-3">
                                <div className="bg-white p-3 rounded-3 shadow-sm border border-light">
                                    <div className="text-muted small fw-semibold">Total Roles</div>
                                    <div className="h3 fw-bold text-dark mb-0 mt-1">{jobStats.total}</div>
                                </div>
                            </div>
                            <div className="col-6 col-md-3">
                                <div className="bg-white p-3 rounded-3 shadow-sm border border-light">
                                    <div className="text-muted small fw-semibold">Published (Live)</div>
                                    <div className="h3 fw-bold text-success mb-0 mt-1">{jobStats.published}</div>
                                </div>
                            </div>
                            <div className="col-6 col-md-3">
                                <div className="bg-white p-3 rounded-3 shadow-sm border border-light">
                                    <div className="text-muted small fw-semibold">Drafts</div>
                                    <div className="h3 fw-bold text-warning mb-0 mt-1">{jobStats.draft}</div>
                                </div>
                            </div>
                            <div className="col-6 col-md-3">
                                <div className="bg-white p-3 rounded-3 shadow-sm border border-light">
                                    <div className="text-muted small fw-semibold">Closed</div>
                                    <div className="h3 fw-bold text-secondary mb-0 mt-1">{jobStats.closed}</div>
                                </div>
                            </div>
                        </div>

                        {/* Search & Filter Bar */}
                        <div className="card shadow-sm border-0 mb-4 rounded-3">
                            <div className="card-body p-3">
                                <div className="row g-2 align-items-center">
                                    <div className="col-md-6 col-lg-7">
                                        <div className="input-group">
                                            <span className="input-group-text bg-white border-end-0">
                                                <i className="fas fa-search text-muted"></i>
                                            </span>
                                            <input
                                                type="text"
                                                className="form-control border-start-0"
                                                placeholder="Search by job title, department, location..."
                                                value={searchQuery}
                                                onChange={(e) => setSearchQuery(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-5 d-flex gap-2 justify-content-md-end">
                                        <select
                                            className="form-select"
                                            value={filterStatus}
                                            onChange={(e) => setFilterStatus(e.target.value)}
                                            style={{ maxWidth: '200px' }}
                                        >
                                            <option value="all">All Statuses ({jobs.length})</option>
                                            <option value="published">Published ({jobStats.published})</option>
                                            <option value="draft">Drafts ({jobStats.draft})</option>
                                            <option value="closed">Closed ({jobStats.closed})</option>
                                        </select>
                                        <button onClick={fetchJobs} className="btn btn-outline-secondary" title="Refresh">
                                            <i className="fas fa-sync-alt"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Jobs Table */}
                        <div className="card shadow-sm border-0 rounded-3 overflow-hidden">
                            <div className="table-responsive">
                                <table className="table table-hover align-middle mb-0">
                                    <thead className="table-light">
                                        <tr>
                                            <th className="ps-4 py-3">Job Title & Details</th>
                                            <th className="py-3">Department</th>
                                            <th className="py-3">Location</th>
                                            <th className="py-3">Type</th>
                                            <th className="py-3">Status</th>
                                            <th className="py-3">Posted Date</th>
                                            <th className="pe-4 py-3 text-end">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {isLoadingJobs ? (
                                            <tr>
                                                <td colSpan="7" className="text-center py-5">
                                                    <div className="spinner-border text-primary spinner-border-sm me-2" role="status"></div>
                                                    Loading job postings...
                                                </td>
                                            </tr>
                                        ) : filteredJobs.length === 0 ? (
                                            <tr>
                                                <td colSpan="7" className="text-center py-5 text-muted">
                                                    <div className="mb-2"><i className="far fa-folder-open fs-2"></i></div>
                                                    No job postings found. Click <strong>Post New Job</strong> to create one.
                                                </td>
                                            </tr>
                                        ) : (
                                            filteredJobs.map(job => (
                                                <tr key={job.id}>
                                                    <td className="ps-4">
                                                        <div className="fw-bold text-dark">{job.title}</div>
                                                        <div className="small text-muted font-monospace">/careers/{job.slug}</div>
                                                    </td>
                                                    <td><span className="badge bg-light text-dark border">{job.department}</span></td>
                                                    <td><i className="far fa-map-marker-alt text-muted me-1"></i> {job.location}</td>
                                                    <td>{job.employmentType}</td>
                                                    <td>
                                                        <select
                                                            className={`form-select form-select-sm fw-semibold ${
                                                                job.status === 'published' ? 'text-success border-success' :
                                                                job.status === 'draft' ? 'text-warning border-warning' : 'text-secondary border-secondary'
                                                            }`}
                                                            value={job.status}
                                                            onChange={(e) => handleQuickStatusChange(job.id, e.target.value)}
                                                            style={{ width: '130px' }}
                                                        >
                                                            <option value="published">Published</option>
                                                            <option value="draft">Draft</option>
                                                            <option value="closed">Closed</option>
                                                        </select>
                                                    </td>
                                                    <td className="small text-muted">
                                                        {job.postedAt ? new Date(job.postedAt).toLocaleDateString() : '—'}
                                                    </td>
                                                    <td className="pe-4 text-end">
                                                        <div className="btn-group btn-group-sm">
                                                            <Link
                                                                to={`/careers/${job.slug}`}
                                                                target="_blank"
                                                                className="btn btn-outline-secondary"
                                                                title="Preview live page"
                                                            >
                                                                <i className="far fa-external-link"></i>
                                                            </Link>
                                                            <button
                                                                onClick={() => handleOpenEditModal(job)}
                                                                className="btn btn-outline-primary"
                                                                title="Edit job"
                                                            >
                                                                <i className="far fa-edit"></i>
                                                            </button>
                                                            <button
                                                                onClick={() => setJobToDelete(job)}
                                                                className="btn btn-outline-danger"
                                                                title="Delete job"
                                                            >
                                                                <i className="far fa-trash-alt"></i>
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </>
                )}

                {/* ============================================================== */}
                {/* TAB 2: APPLICATIONS                                            */}
                {/* ============================================================== */}
                {activeTab === 'applications' && (
                    <>
                        {/* Stats Cards */}
                        <div className="row g-3 mb-4">
                            <div className="col-6 col-md-3">
                                <div className="bg-white p-3 rounded-3 shadow-sm border border-light">
                                    <div className="text-muted small fw-semibold">Total Received</div>
                                    <div className="h3 fw-bold text-dark mb-0 mt-1">{appStats.total}</div>
                                </div>
                            </div>
                            <div className="col-6 col-md-3">
                                <div className="bg-white p-3 rounded-3 shadow-sm border border-light">
                                    <div className="text-muted small fw-semibold">New Applications</div>
                                    <div className="h3 fw-bold text-danger mb-0 mt-1">{appStats.new}</div>
                                </div>
                            </div>
                            <div className="col-6 col-md-3">
                                <div className="bg-white p-3 rounded-3 shadow-sm border border-light">
                                    <div className="text-muted small fw-semibold">Shortlisted</div>
                                    <div className="h3 fw-bold text-success mb-0 mt-1">{appStats.shortlisted}</div>
                                </div>
                            </div>
                            <div className="col-6 col-md-3">
                                <div className="bg-white p-3 rounded-3 shadow-sm border border-light">
                                    <div className="text-muted small fw-semibold">Reviewed</div>
                                    <div className="h3 fw-bold text-primary mb-0 mt-1">{appStats.reviewed}</div>
                                </div>
                            </div>
                        </div>

                        {/* Search & Filter Bar */}
                        <div className="card shadow-sm border-0 mb-4 rounded-3">
                            <div className="card-body p-3">
                                <div className="row g-2 align-items-center">
                                    <div className="col-md-6 col-lg-7">
                                        <div className="input-group">
                                            <span className="input-group-text bg-white border-end-0">
                                                <i className="fas fa-search text-muted"></i>
                                            </span>
                                            <input
                                                type="text"
                                                className="form-control border-start-0"
                                                placeholder="Search candidates by name, email, phone, position..."
                                                value={appSearchQuery}
                                                onChange={(e) => setAppSearchQuery(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-5 d-flex gap-2 justify-content-md-end">
                                        <select
                                            className="form-select"
                                            value={appFilterStatus}
                                            onChange={(e) => setAppFilterStatus(e.target.value)}
                                            style={{ maxWidth: '200px' }}
                                        >
                                            <option value="all">All Statuses ({applications.length})</option>
                                            <option value="new">New ({appStats.new})</option>
                                            <option value="reviewed">Reviewed ({appStats.reviewed})</option>
                                            <option value="shortlisted">Shortlisted ({appStats.shortlisted})</option>
                                            <option value="rejected">Rejected ({appStats.rejected})</option>
                                        </select>
                                        <button onClick={fetchApplications} className="btn btn-outline-secondary" title="Refresh">
                                            <i className="fas fa-sync-alt"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Applications Table */}
                        <div className="card shadow-sm border-0 rounded-3 overflow-hidden">
                            <div className="table-responsive">
                                <table className="table table-hover align-middle mb-0">
                                    <thead className="table-light">
                                        <tr>
                                            <th className="ps-4 py-3">Applicant Name</th>
                                            <th className="py-3">Position Applied</th>
                                            <th className="py-3">Contact</th>
                                            <th className="py-3">Experience</th>
                                            <th className="py-3">Resume</th>
                                            <th className="py-3">Status</th>
                                            <th className="py-3">Applied At</th>
                                            <th className="pe-4 py-3 text-end">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {isLoadingApps ? (
                                            <tr>
                                                <td colSpan="8" className="text-center py-5">
                                                    <div className="spinner-border text-primary spinner-border-sm me-2" role="status"></div>
                                                    Loading applications...
                                                </td>
                                            </tr>
                                        ) : filteredApplications.length === 0 ? (
                                            <tr>
                                                <td colSpan="8" className="text-center py-5 text-muted">
                                                    <div className="mb-2"><i className="far fa-inbox fs-2"></i></div>
                                                    No applications match your filter criteria.
                                                </td>
                                            </tr>
                                        ) : (
                                            filteredApplications.map(app => (
                                                <tr key={app.id}>
                                                    <td className="ps-4">
                                                        <div className="fw-bold text-dark">{app.fullName}</div>
                                                        <div className="small text-muted">{app.email}</div>
                                                    </td>
                                                    <td>
                                                        <span className="badge bg-light text-primary border">{app.position}</span>
                                                    </td>
                                                    <td className="small">
                                                        <div><i className="fas fa-phone-alt text-muted me-1"></i> {app.phone}</div>
                                                    </td>
                                                    <td className="small">{app.experience}</td>
                                                    <td>
                                                        {app.storedFileName ? (
                                                            <button
                                                                onClick={() => handleDownloadResume(app)}
                                                                className="btn btn-sm btn-outline-primary d-inline-flex align-items-center gap-1"
                                                                style={{ fontSize: '12px' }}
                                                            >
                                                                <i className="fas fa-file-download"></i> Download
                                                            </button>
                                                        ) : (
                                                            <span className="text-muted small">None</span>
                                                        )}
                                                    </td>
                                                    <td>
                                                        <select
                                                            className={`form-select form-select-sm fw-semibold ${
                                                                app.status === 'new' ? 'text-danger border-danger' :
                                                                app.status === 'shortlisted' ? 'text-success border-success' :
                                                                app.status === 'reviewed' ? 'text-primary border-primary' : 'text-secondary border-secondary'
                                                            }`}
                                                            value={app.status}
                                                            onChange={(e) => handleUpdateAppStatus(app.id, e.target.value)}
                                                            style={{ width: '130px' }}
                                                        >
                                                            <option value="new">New</option>
                                                            <option value="reviewed">Reviewed</option>
                                                            <option value="shortlisted">Shortlisted</option>
                                                            <option value="rejected">Rejected</option>
                                                        </select>
                                                    </td>
                                                    <td className="small text-muted">
                                                        {app.appliedAt ? new Date(app.appliedAt).toLocaleDateString() : '—'}
                                                    </td>
                                                    <td className="pe-4 text-end">
                                                        <div className="btn-group btn-group-sm">
                                                            <button
                                                                onClick={() => setSelectedApp(app)}
                                                                className="btn btn-outline-primary"
                                                                title="View details"
                                                            >
                                                                <i className="far fa-eye"></i>
                                                            </button>
                                                            <button
                                                                onClick={() => setAppToDelete(app)}
                                                                className="btn btn-outline-danger"
                                                                title="Delete application"
                                                            >
                                                                <i className="far fa-trash-alt"></i>
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </>
                )}

                {/* ============================================================== */}
                {/* TAB 3: LIFE AT VRM GALLERY                                     */}
                {/* ============================================================== */}
                {activeTab === 'gallery' && (
                    <>
                        {/* Stats Cards */}
                        <div className="row g-3 mb-4">
                            <div className="col-4">
                                <div className="bg-white p-3 rounded-3 shadow-sm border border-light">
                                    <div className="text-muted small fw-semibold">Total Photos</div>
                                    <div className="h3 fw-bold text-dark mb-0 mt-1">{galleryStats.total}</div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="bg-white p-3 rounded-3 shadow-sm border border-light">
                                    <div className="text-muted small fw-semibold">Published (Live)</div>
                                    <div className="h3 fw-bold text-success mb-0 mt-1">{galleryStats.published}</div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="bg-white p-3 rounded-3 shadow-sm border border-light">
                                    <div className="text-muted small fw-semibold">Hidden</div>
                                    <div className="h3 fw-bold text-secondary mb-0 mt-1">{galleryStats.hidden}</div>
                                </div>
                            </div>
                        </div>

                        {/* Privacy Reminder Banner */}
                        <div className="alert alert-info py-3 px-4 rounded-3 mb-4 d-flex align-items-center">
                            <i className="fas fa-shield-alt text-primary fs-4 me-3"></i>
                            <div>
                                <strong>Employee Privacy Notice:</strong> Only upload photos of employees who have explicitly agreed to their photo being published on the public website.
                            </div>
                        </div>

                        {/* Gallery Table / Grid */}
                        <div className="card shadow-sm border-0 rounded-3 overflow-hidden">
                            <div className="table-responsive">
                                <table className="table table-hover align-middle mb-0">
                                    <thead className="table-light">
                                        <tr>
                                            <th className="ps-4 py-3" style={{ width: '80px' }}>Order</th>
                                            <th className="py-3" style={{ width: '100px' }}>Thumbnail</th>
                                            <th className="py-3">Caption & Alt Text</th>
                                            <th className="py-3">Category</th>
                                            <th className="py-3">Event Date</th>
                                            <th className="py-3">Status</th>
                                            <th className="pe-4 py-3 text-end">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {isLoadingGallery ? (
                                            <tr>
                                                <td colSpan="7" className="text-center py-5">
                                                    <div className="spinner-border text-primary spinner-border-sm me-2" role="status"></div>
                                                    Loading team gallery...
                                                </td>
                                            </tr>
                                        ) : gallery.length === 0 ? (
                                            <tr>
                                                <td colSpan="7" className="text-center py-5 text-muted">
                                                    <div className="mb-2"><i className="far fa-images fs-2"></i></div>
                                                    No photos uploaded yet. Click <strong>Upload Photo</strong> to share employee moments.
                                                </td>
                                            </tr>
                                        ) : (
                                            gallery.map((item, idx) => (
                                                <tr key={item.id}>
                                                    <td className="ps-4">
                                                        <div className="d-flex align-items-center gap-1">
                                                            <span className="fw-bold text-muted me-1">{idx + 1}</span>
                                                            <div className="btn-group-vertical btn-group-sm">
                                                                <button
                                                                    className="btn btn-outline-secondary btn-sm py-0 px-1"
                                                                    disabled={idx === 0}
                                                                    onClick={() => handleReorderPhoto(idx, -1)}
                                                                    title="Move Up"
                                                                >
                                                                    <i className="fas fa-caret-up"></i>
                                                                </button>
                                                                <button
                                                                    className="btn btn-outline-secondary btn-sm py-0 px-1"
                                                                    disabled={idx === gallery.length - 1}
                                                                    onClick={() => handleReorderPhoto(idx, 1)}
                                                                    title="Move Down"
                                                                >
                                                                    <i className="fas fa-caret-down"></i>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <img
                                                            src={item.thumbPath || item.imagePath}
                                                            alt={item.altText || item.caption}
                                                            style={{ width: '80px', height: '56px', objectFit: 'cover', borderRadius: '6px', border: '1px solid #eee' }}
                                                        />
                                                    </td>
                                                    <td>
                                                        <div className="fw-semibold text-dark">{item.caption || 'No caption'}</div>
                                                        <small className="text-muted d-block">
                                                            <i className="fas fa-universal-access me-1 text-primary"></i> Alt: {item.altText}
                                                        </small>
                                                    </td>
                                                    <td>
                                                        <span className="badge bg-light text-primary border">{item.category}</span>
                                                    </td>
                                                    <td className="small text-muted">
                                                        <i className="far fa-calendar-alt me-1"></i> {item.eventDate || '—'}
                                                    </td>
                                                    <td>
                                                        <button
                                                            onClick={() => handleTogglePhotoStatus(item)}
                                                            className={`btn btn-sm ${item.status === 'published' ? 'btn-success' : 'btn-outline-secondary'} rounded-pill px-3 py-1`}
                                                            style={{ fontSize: '12px' }}
                                                        >
                                                            <i className={`fas ${item.status === 'published' ? 'fa-eye' : 'fa-eye-slash'} me-1`}></i>
                                                            {item.status === 'published' ? 'Published' : 'Hidden'}
                                                        </button>
                                                    </td>
                                                    <td className="pe-4 text-end">
                                                        <div className="btn-group btn-group-sm">
                                                            <button
                                                                onClick={() => handleOpenEditPhotoModal(item)}
                                                                className="btn btn-outline-primary"
                                                                title="Edit photo details"
                                                            >
                                                                <i className="far fa-edit"></i>
                                                            </button>
                                                            <button
                                                                onClick={() => setPhotoToDelete(item)}
                                                                className="btn btn-outline-danger"
                                                                title="Delete photo"
                                                            >
                                                                <i className="far fa-trash-alt"></i>
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </>
                )}

                {/* ============================================================== */}
                {/* TAB 4: MANAGE ADMINS (Superadmin only)                         */}
                {/* ============================================================== */}
                {activeTab === 'admins' && isSuperAdmin && (
                    <>
                        <div className="card shadow-sm border-0 mb-4 rounded-3">
                            <div className="card-body p-4">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div>
                                        <h5 className="fw-bold mb-1" style={{ color: '#1c2539' }}>Admin Account Management</h5>
                                        <p className="text-muted small mb-0">Create, manage roles, disable accounts, and trigger password resets.</p>
                                    </div>
                                    <button onClick={handleOpenAddAdminModal} className="btn btn-primary btn-sm px-3 fw-semibold">
                                        <i className="fas fa-plus me-1"></i> Add Admin
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="card shadow-sm border-0 rounded-3 overflow-hidden">
                            <div className="table-responsive">
                                <table className="table table-hover align-middle mb-0">
                                    <thead className="table-light">
                                        <tr>
                                            <th className="ps-4 py-3">Username & Display Name</th>
                                            <th className="py-3">Email Address</th>
                                            <th className="py-3">Role</th>
                                            <th className="py-3">Account Status</th>
                                            <th className="py-3">Last Updated</th>
                                            <th className="pe-4 py-3 text-end">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {isLoadingAdmins ? (
                                            <tr>
                                                <td colSpan="6" className="text-center py-5">
                                                    <div className="spinner-border text-primary spinner-border-sm me-2" role="status"></div>
                                                    Loading admin accounts...
                                                </td>
                                            </tr>
                                        ) : adminUsers.length === 0 ? (
                                            <tr>
                                                <td colSpan="6" className="text-center py-5 text-muted">
                                                    No admin accounts found.
                                                </td>
                                            </tr>
                                        ) : (
                                            adminUsers.map(adm => {
                                                const isSelf = String(adm.id) === String(currentUser?.id);
                                                return (
                                                    <tr key={adm.id}>
                                                        <td className="ps-4">
                                                            <div className="fw-bold text-dark">
                                                                {adm.displayName || adm.username}
                                                                {isSelf && <span className="badge bg-secondary ms-2" style={{ fontSize: '10px' }}>You</span>}
                                                            </div>
                                                            <div className="small text-muted font-monospace">{adm.username}</div>
                                                        </td>
                                                        <td>{adm.email || '—'}</td>
                                                        <td>
                                                            <span className={`badge ${adm.role === 'superadmin' ? 'bg-danger' : 'bg-primary'} text-uppercase`} style={{ fontSize: '11px' }}>
                                                                {adm.role}
                                                            </span>
                                                        </td>
                                                        <td>
                                                            <span className={`badge ${adm.active ? 'bg-success' : 'bg-secondary'} rounded-pill px-2 py-1`}>
                                                                {adm.active ? 'Active' : 'Disabled'}
                                                            </span>
                                                            {adm.forcePasswordChange && (
                                                                <span className="badge bg-warning text-dark ms-1" style={{ fontSize: '10px' }}>Temp Pwd</span>
                                                            )}
                                                        </td>
                                                        <td className="small text-muted">
                                                            {adm.updatedAt ? new Date(adm.updatedAt).toLocaleDateString() : '—'}
                                                        </td>
                                                        <td className="pe-4 text-end">
                                                            <div className="btn-group btn-group-sm">
                                                                <button
                                                                    onClick={() => handleOpenEditAdminModal(adm)}
                                                                    className="btn btn-outline-primary"
                                                                    title="Edit Admin"
                                                                >
                                                                    <i className="far fa-edit"></i>
                                                                </button>
                                                                <button
                                                                    onClick={() => handleResetAdminPassword(adm.id, adm.username)}
                                                                    className="btn btn-outline-warning text-dark"
                                                                    title="Reset Password (Generates One-Time Temp Password)"
                                                                >
                                                                    <i className="fas fa-key"></i>
                                                                </button>
                                                                <button
                                                                    onClick={() => setAdminToDelete(adm)}
                                                                    className="btn btn-outline-danger"
                                                                    disabled={isSelf}
                                                                    title={isSelf ? 'Cannot delete your own account' : 'Delete Admin'}
                                                                >
                                                                    <i className="far fa-trash-alt"></i>
                                                                </button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                );
                                            })
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </>
                )}
            </div>

            {/* ============================================================== */}
            {/* MODALS SECTION                                                 */}
            {/* ============================================================== */}

            {/* 1. Change Password Modal (Logged-In User) */}
            <Modal show={showChangePassModal} onHide={() => setShowChangePassModal(false)} centered>
                <form onSubmit={handleChangePasswordSubmit}>
                    <Modal.Header closeButton>
                        <Modal.Title className="h5 fw-bold" style={{ color: '#1c2539' }}>
                            <i className="fas fa-lock me-2 text-primary"></i> Change Admin Password
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="p-4">
                        {changePassStatus.message && (
                            <div className={`alert ${changePassStatus.type === 'success' ? 'alert-success' : 'alert-danger'} py-2 px-3 small rounded-3 mb-3`}>
                                {changePassStatus.message}
                            </div>
                        )}

                        <div className="mb-3">
                            <label className="form-label small fw-semibold text-dark">
                                Current Password {!currentUser?.forcePasswordChange && <span className="text-danger">*</span>}
                            </label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Enter current password"
                                value={currentPassword}
                                onChange={(e) => setCurrentPassword(e.target.value)}
                                required={!currentUser?.forcePasswordChange}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label small fw-semibold text-dark">
                                New Password (min 12 characters) <span className="text-danger">*</span>
                            </label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Enter strong new password"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                required
                                minLength={12}
                            />
                            <div className="form-text" style={{ fontSize: '11px' }}>Minimum 12 characters with letters, numbers, and symbols.</div>
                        </div>

                        <div className="mb-2">
                            <label className="form-label small fw-semibold text-dark">
                                Confirm New Password <span className="text-danger">*</span>
                            </label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Repeat new password"
                                value={confirmNewPassword}
                                onChange={(e) => setConfirmNewPassword(e.target.value)}
                                required
                                minLength={12}
                            />
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <button type="button" className="btn btn-outline-secondary" onClick={() => setShowChangePassModal(false)}>
                            Cancel
                        </button>
                        <button type="submit" disabled={isChangingPass} className="btn btn-primary px-4">
                            {isChangingPass ? 'Updating...' : 'Update Password'}
                        </button>
                    </Modal.Footer>
                </form>
            </Modal>

            {/* 2. One-Time Temporary Password Display Modal */}
            <Modal show={tempPasswordModal.show} onHide={() => setTempPasswordModal(prev => ({ ...prev, show: false }))} centered>
                <Modal.Header closeButton className="bg-light">
                    <Modal.Title className="h5 fw-bold text-dark">
                        <i className="fas fa-key text-warning me-2"></i> Temporary Password Generated
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="p-4">
                    <p className="text-muted small mb-3">
                        {tempPasswordModal.message}
                    </p>

                    <div className="p-3 bg-light rounded-3 border text-center my-3">
                        <div className="text-muted small mb-1">One-Time Temporary Password for <strong>{tempPasswordModal.username}</strong>:</div>
                        <div className="font-monospace h4 fw-bold text-dark mb-2 user-select-all" style={{ letterSpacing: '1px' }}>
                            {tempPasswordModal.password}
                        </div>
                        <button
                            type="button"
                            onClick={copyTempPasswordToClipboard}
                            className={`btn btn-sm ${copySuccess ? 'btn-success' : 'btn-outline-primary'} px-3`}
                        >
                            <i className={`fas ${copySuccess ? 'fa-check' : 'fa-copy'} me-1`}></i>
                            {copySuccess ? 'Copied to Clipboard!' : 'Copy Temporary Password'}
                        </button>
                    </div>

                    <div className="alert alert-warning py-2 px-3 small rounded-3 mb-0">
                        <i className="fas fa-exclamation-triangle me-1"></i>
                        This password will not be shown again. The user will be required to change it immediately on their first login.
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button type="button" className="btn btn-primary" onClick={() => setTempPasswordModal(prev => ({ ...prev, show: false }))}>
                        I Have Saved This Password
                    </button>
                </Modal.Footer>
            </Modal>

            {/* 3. Add / Edit Admin User Modal */}
            <Modal show={showAddAdminModal} onHide={() => setShowAddAdminModal(false)} centered>
                <form onSubmit={handleSaveAdminUser}>
                    <Modal.Header closeButton>
                        <Modal.Title className="h5 fw-bold text-dark">
                            {editingAdmin ? `Edit Admin: ${editingAdmin.username}` : 'Add New Admin Account'}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="p-4">
                        {adminFormError && (
                            <div className="alert alert-danger py-2 px-3 small rounded-3 mb-3">
                                {adminFormError}
                            </div>
                        )}

                        {!editingAdmin && (
                            <div className="mb-3">
                                <label className="form-label small fw-semibold text-dark">Username <span className="text-danger">*</span></label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="e.g. johndoe"
                                    value={adminFormUsername}
                                    onChange={(e) => setAdminFormUsername(e.target.value)}
                                    required
                                />
                                <div className="form-text" style={{ fontSize: '11px' }}>Alphanumeric, lowercase, dots, underscores or hyphens.</div>
                            </div>
                        )}

                        <div className="mb-3">
                            <label className="form-label small fw-semibold text-dark">Display Name <span className="text-danger">*</span></label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="e.g. John Doe"
                                value={adminFormDisplayName}
                                onChange={(e) => setAdminFormDisplayName(e.target.value)}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label small fw-semibold text-dark">Email Address <span className="text-danger">*</span></label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="e.g. john@vrmaitechnology.com"
                                value={adminFormEmail}
                                onChange={(e) => setAdminFormEmail(e.target.value)}
                                required
                            />
                            <div className="form-text" style={{ fontSize: '11px' }}>Used for password recovery and notifications.</div>
                        </div>

                        <div className="mb-3">
                            <label className="form-label small fw-semibold text-dark">Role <span className="text-danger">*</span></label>
                            <select
                                className="form-select"
                                value={adminFormRole}
                                onChange={(e) => setAdminFormRole(e.target.value)}
                                required
                            >
                                <option value="admin">Admin (Manage Jobs, Applications & Gallery)</option>
                                <option value="superadmin">Superadmin (Full Control + Manage Admins)</option>
                            </select>
                        </div>

                        {editingAdmin && (
                            <div className="mb-2">
                                <div className="form-check form-switch">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="adminActiveCheck"
                                        checked={adminFormActive}
                                        onChange={(e) => setAdminFormActive(e.target.checked)}
                                    />
                                    <label className="form-check-label small fw-semibold text-dark" htmlFor="adminActiveCheck">
                                        Account Active (uncheck to disable access)
                                    </label>
                                </div>
                            </div>
                        )}

                        {!editingAdmin && (
                            <div className="alert alert-info py-2 px-3 small rounded-3 mt-3 mb-0">
                                <i className="fas fa-info-circle me-1"></i>
                                A secure temporary password will be automatically generated and displayed on the next screen.
                            </div>
                        )}
                    </Modal.Body>
                    <Modal.Footer>
                        <button type="button" className="btn btn-outline-secondary" onClick={() => setShowAddAdminModal(false)}>
                            Cancel
                        </button>
                        <button type="submit" disabled={isSavingAdmin} className="btn btn-primary px-4">
                            {isSavingAdmin ? 'Saving...' : (editingAdmin ? 'Save Changes' : 'Create Admin')}
                        </button>
                    </Modal.Footer>
                </form>
            </Modal>

            {/* 4. Delete Admin Confirmation Modal */}
            <Modal show={!!adminToDelete} onHide={() => setAdminToDelete(null)} centered>
                <Modal.Header closeButton>
                    <Modal.Title className="h5 text-danger fw-bold">Delete Admin Account</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p className="mb-0">
                        Are you sure you want to permanently delete admin account <strong>{adminToDelete?.username}</strong>?
                        This will revoke all access immediately and cannot be undone.
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <button type="button" className="btn btn-outline-secondary" onClick={() => setAdminToDelete(null)}>
                        Cancel
                    </button>
                    <button type="button" disabled={isDeletingAdmin} className="btn btn-danger px-4" onClick={handleDeleteAdmin}>
                        {isDeletingAdmin ? 'Deleting...' : 'Delete Admin'}
                    </button>
                </Modal.Footer>
            </Modal>

            {/* 5. Upload / Edit Gallery Photo Modal */}
            <Modal show={showUploadModal} onHide={() => setShowUploadModal(false)} size="lg" centered>
                <form onSubmit={handleSavePhoto}>
                    <Modal.Header closeButton>
                        <Modal.Title className="h5 fw-bold text-dark">
                            <i className="fas fa-camera text-primary me-2"></i>
                            {editingPhoto ? 'Edit Photo Details' : 'Upload Team Photo'}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="p-4">
                        {galleryFormError && (
                            <div className="alert alert-danger py-2 px-3 small rounded-3 mb-3">
                                {galleryFormError}
                            </div>
                        )}

                        {/* Privacy Reminder Note */}
                        <div className="alert alert-info py-2 px-3 small rounded-3 mb-3">
                            <i className="fas fa-info-circle me-1"></i>
                            <strong>Privacy Compliance:</strong> Only upload photos of employees who have agreed to their photo being published.
                        </div>

                        {!editingPhoto && (
                            <div className="mb-3">
                                <label className="form-label small fw-semibold text-dark">Select Photo (JPG, PNG, WebP; Max 8 MB) <span className="text-danger">*</span></label>
                                <input
                                    type="file"
                                    className="form-control"
                                    accept=".jpg,.jpeg,.png,.webp"
                                    onChange={handlePhotoFileChange}
                                    required={!editingPhoto}
                                />
                                <div className="form-text" style={{ fontSize: '11px' }}>
                                    Images are automatically converted to WebP, resized to max 1600px width with 600px thumbnail, and GPS/EXIF metadata is stripped.
                                </div>
                            </div>
                        )}

                        {photoPreview && (
                            <div className="mb-3 text-center p-2 bg-light rounded-3 border">
                                <img
                                    src={photoPreview}
                                    alt="Preview"
                                    style={{ maxHeight: '200px', maxWidth: '100%', objectFit: 'contain', borderRadius: '6px' }}
                                />
                            </div>
                        )}

                        <div className="row g-3">
                            <div className="col-md-6">
                                <label className="form-label small fw-semibold text-dark">Event Category <span className="text-danger">*</span></label>
                                <select
                                    className="form-select"
                                    value={photoCategory}
                                    onChange={(e) => setPhotoCategory(e.target.value)}
                                    required
                                >
                                    <option value="Fun Friday">Fun Friday</option>
                                    <option value="Festival">Festival</option>
                                    <option value="Team Event">Team Event</option>
                                    <option value="Office">Office</option>
                                </select>
                            </div>

                            <div className="col-md-6">
                                <label className="form-label small fw-semibold text-dark">Event Date <span className="text-danger">*</span></label>
                                <input
                                    type="date"
                                    className="form-control"
                                    value={photoEventDate}
                                    onChange={(e) => setPhotoEventDate(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="col-12">
                                <label className="form-label small fw-semibold text-dark">Alt Text (Accessibility & SEO) <span className="text-danger">*</span></label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="e.g. VRM AI team celebrating Diwali festival at Bengaluru office"
                                    value={photoAltText}
                                    onChange={(e) => setPhotoAltText(e.target.value)}
                                    required
                                />
                                <div className="form-text" style={{ fontSize: '11px' }}>Required descriptive text for screen readers and SEO.</div>
                            </div>

                            <div className="col-12">
                                <label className="form-label small fw-semibold text-dark">Caption</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="e.g. Festive smiles and team celebrations"
                                    value={photoCaption}
                                    onChange={(e) => setPhotoCaption(e.target.value)}
                                />
                            </div>

                            <div className="col-12">
                                <label className="form-label small fw-semibold text-dark">Publication Status</label>
                                <select
                                    className="form-select"
                                    value={photoStatus}
                                    onChange={(e) => setPhotoStatus(e.target.value)}
                                >
                                    <option value="published">Published (Visible on /careers page)</option>
                                    <option value="hidden">Hidden (Draft / Saved on server only)</option>
                                </select>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <button type="button" className="btn btn-outline-secondary" onClick={() => setShowUploadModal(false)}>
                            Cancel
                        </button>
                        <button type="submit" disabled={isSavingPhoto} className="btn btn-primary px-4">
                            {isSavingPhoto ? 'Processing & Saving...' : (editingPhoto ? 'Save Changes' : 'Upload & Publish')}
                        </button>
                    </Modal.Footer>
                </form>
            </Modal>

            {/* 6. Delete Photo Confirmation Modal */}
            <Modal show={!!photoToDelete} onHide={() => setPhotoToDelete(null)} centered>
                <Modal.Header closeButton>
                    <Modal.Title className="h5 text-danger fw-bold">Delete Photo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p className="mb-0">
                        Are you sure you want to delete this photo? This will permanently remove the image and thumbnail files from the server.
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <button type="button" className="btn btn-outline-secondary" onClick={() => setPhotoToDelete(null)}>
                        Cancel
                    </button>
                    <button type="button" disabled={isDeletingPhoto} className="btn btn-danger px-4" onClick={handleDeletePhoto}>
                        {isDeletingPhoto ? 'Deleting...' : 'Delete Photo'}
                    </button>
                </Modal.Footer>
            </Modal>

            {/* 7. Application Details Modal */}
            <Modal show={!!selectedApp} onHide={() => setSelectedApp(null)} size="lg" centered>
                <Modal.Header closeButton>
                    <Modal.Title className="h5 fw-bold text-dark">
                        Application: {selectedApp?.fullName}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="p-4">
                    {selectedApp && (
                        <div className="row g-3">
                            <div className="col-md-6">
                                <label className="form-label small text-muted mb-0">Position</label>
                                <div className="fw-bold text-dark">{selectedApp.position}</div>
                            </div>
                            <div className="col-md-6">
                                <label className="form-label small text-muted mb-0">Experience</label>
                                <div className="fw-bold text-dark">{selectedApp.experience}</div>
                            </div>
                            <div className="col-md-6">
                                <label className="form-label small text-muted mb-0">Email</label>
                                <div><a href={`mailto:${selectedApp.email}`}>{selectedApp.email}</a></div>
                            </div>
                            <div className="col-md-6">
                                <label className="form-label small text-muted mb-0">Phone</label>
                                <div><a href={`tel:${selectedApp.phone}`}>{selectedApp.phone}</a></div>
                            </div>
                            <div className="col-12">
                                <label className="form-label small text-muted mb-0">Cover Letter</label>
                                <div className="p-3 bg-light rounded-3 border" style={{ maxHeight: '150px', overflowY: 'auto', whiteSpace: 'pre-wrap' }}>
                                    {selectedApp.coverLetter || 'No cover letter submitted.'}
                                </div>
                            </div>
                            <div className="col-md-6">
                                <label className="form-label small text-muted mb-0">Attached Resume</label>
                                <div>
                                    {selectedApp.storedFileName ? (
                                        <button
                                            onClick={() => handleDownloadResume(selectedApp)}
                                            className="btn btn-sm btn-primary mt-1"
                                        >
                                            <i className="fas fa-download me-1"></i> Download {selectedApp.originalFileName || 'Resume'}
                                        </button>
                                    ) : (
                                        <span className="text-muted small">None attached</span>
                                    )}
                                </div>
                            </div>
                            <div className="col-md-6">
                                <label className="form-label small text-muted mb-0">Update Status</label>
                                <select
                                    className="form-select form-select-sm mt-1"
                                    value={selectedApp.status}
                                    onChange={(e) => handleUpdateAppStatus(selectedApp.id, e.target.value)}
                                >
                                    <option value="new">New</option>
                                    <option value="reviewed">Reviewed</option>
                                    <option value="shortlisted">Shortlisted</option>
                                    <option value="rejected">Rejected</option>
                                </select>
                            </div>
                        </div>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <button type="button" className="btn btn-outline-secondary" onClick={() => setSelectedApp(null)}>
                        Close
                    </button>
                </Modal.Footer>
            </Modal>

            {/* 8. Delete Application Confirmation Modal */}
            <Modal show={!!appToDelete} onHide={() => setAppToDelete(null)} centered>
                <Modal.Header closeButton>
                    <Modal.Title className="h5 text-danger fw-bold">Delete Application</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p className="mb-0">
                        Are you sure you want to delete the application from <strong>{appToDelete?.fullName}</strong> ({appToDelete?.position})?
                        This will also delete the uploaded resume file from the server.
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <button type="button" className="btn btn-outline-secondary" onClick={() => setAppToDelete(null)}>
                        Cancel
                    </button>
                    <button type="button" disabled={isDeletingApp} className="btn btn-danger px-4" onClick={handleDeleteApp}>
                        {isDeletingApp ? 'Deleting...' : 'Delete Application'}
                    </button>
                </Modal.Footer>
            </Modal>

            {/* 9. Add / Edit Job Modal */}
            <Modal show={showEditModal} onHide={() => setShowEditModal(false)} size="lg" centered>
                <form onSubmit={handleSaveJob}>
                    <Modal.Header closeButton>
                        <Modal.Title className="h5 fw-bold text-dark">
                            {editingJobId ? 'Edit Job Opening' : 'Post New Job Opening'}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="p-4">
                        {formError && (
                            <div className="alert alert-danger py-2 px-3 small rounded-3 mb-3">
                                {formError}
                            </div>
                        )}

                        <div className="row g-3">
                            <div className="col-md-8">
                                <label className="form-label small fw-semibold text-dark">Job Title <span className="text-danger">*</span></label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="e.g. Lead Generative AI Engineer"
                                    value={formTitle}
                                    onChange={(e) => handleTitleChange(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="col-md-4">
                                <label className="form-label small fw-semibold text-dark">Status</label>
                                <select
                                    className="form-select"
                                    value={formStatus}
                                    onChange={(e) => setFormStatus(e.target.value)}
                                >
                                    <option value="draft">Draft (Private)</option>
                                    <option value="published">Published (Live)</option>
                                    <option value="closed">Closed</option>
                                </select>
                            </div>

                            <div className="col-12">
                                <label className="form-label small fw-semibold text-dark">URL Slug <span className="text-danger">*</span></label>
                                <div className="input-group">
                                    <span className="input-group-text bg-light text-muted small">/careers/</span>
                                    <input
                                        type="text"
                                        className="form-control font-monospace"
                                        placeholder="lead-generative-ai-engineer"
                                        value={formSlug}
                                        onChange={(e) => setFormSlug(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="col-md-4">
                                <label className="form-label small fw-semibold text-dark">Department <span className="text-danger">*</span></label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="e.g. Engineering, Sales"
                                    value={formDepartment}
                                    onChange={(e) => setFormDepartment(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="col-md-4">
                                <label className="form-label small fw-semibold text-dark">Location <span className="text-danger">*</span></label>
                                <select
                                    className="form-select"
                                    value={formLocation}
                                    onChange={(e) => setFormLocation(e.target.value)}
                                    required
                                >
                                    <option value="Bengaluru">Bengaluru</option>
                                    <option value="Madurai">Madurai</option>
                                    <option value="Remote">Remote</option>
                                    <option value="Hybrid - Bengaluru">Hybrid - Bengaluru</option>
                                    <option value="Hybrid - Madurai">Hybrid - Madurai</option>
                                </select>
                            </div>

                            <div className="col-md-4">
                                <label className="form-label small fw-semibold text-dark">Employment Type</label>
                                <select
                                    className="form-select"
                                    value={formEmploymentType}
                                    onChange={(e) => setFormEmploymentType(e.target.value)}
                                >
                                    <option value="Full-time">Full-time</option>
                                    <option value="Internship">Internship</option>
                                    <option value="Contract">Contract</option>
                                    <option value="Part-time">Part-time</option>
                                </select>
                            </div>

                            <div className="col-12">
                                <label className="form-label small fw-semibold text-dark">Experience Level</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="e.g. 2-4 Years or Fresher"
                                    value={formExperience}
                                    onChange={(e) => setFormExperience(e.target.value)}
                                />
                            </div>

                            <div className="col-12">
                                <label className="form-label small fw-semibold text-dark">Short Description <span className="text-danger">*</span></label>
                                <textarea
                                    className="form-control"
                                    rows={2}
                                    placeholder="1-2 sentences summarizing the role and impact (used in search meta & listing cards)..."
                                    value={formShortDesc}
                                    onChange={(e) => setFormShortDesc(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="col-12">
                                <label className="form-label small fw-semibold text-dark">Key Responsibilities</label>
                                <textarea
                                    className="form-control font-monospace small"
                                    rows={4}
                                    placeholder="Design and build production AI agents&#10;Collaborate with product and data engineering teams&#10;Deploy and monitor ML pipelines"
                                    value={formResponsibilities}
                                    onChange={(e) => setFormResponsibilities(e.target.value)}
                                />
                                <div className="form-text" style={{ fontSize: '11px' }}>Enter each responsibility on a new line. Rendered as bullet points.</div>
                            </div>

                            <div className="col-12">
                                <label className="form-label small fw-semibold text-dark">Requirements & Qualifications</label>
                                <textarea
                                    className="form-control font-monospace small"
                                    rows={4}
                                    placeholder="Strong proficiency in Python and modern LLM frameworks&#10;Experience with Docker, Kubernetes, and cloud deployment&#10;Problem-solving mindset and teamwork"
                                    value={formRequirements}
                                    onChange={(e) => setFormRequirements(e.target.value)}
                                />
                                <div className="form-text" style={{ fontSize: '11px' }}>Enter each requirement on a new line. Rendered as bullet points.</div>
                            </div>

                            <div className="col-md-6">
                                <label className="form-label small fw-semibold text-dark">Application Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    value={formApplyEmail}
                                    readOnly
                                    disabled
                                    style={{ backgroundColor: '#f8f9fa' }}
                                />
                                <div className="form-text" style={{ fontSize: '11px' }}>Public NAP standardized to contactus@vrmaitechnology.com</div>
                            </div>

                            <div className="col-md-6">
                                <label className="form-label small fw-semibold text-dark">Optional External Apply Link</label>
                                <input
                                    type="url"
                                    className="form-control"
                                    placeholder="https://..."
                                    value={formApplyLink}
                                    onChange={(e) => setFormApplyLink(e.target.value)}
                                />
                                <div className="form-text" style={{ fontSize: '11px' }}>Leave blank to use the built-in modal application form.</div>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <button type="button" className="btn btn-outline-secondary" onClick={() => setShowEditModal(false)}>
                            Cancel
                        </button>
                        <button type="submit" disabled={isSaving} className="btn btn-primary px-4">
                            {isSaving ? 'Saving...' : (editingJobId ? 'Save Changes' : 'Create Job')}
                        </button>
                    </Modal.Footer>
                </form>
            </Modal>

            {/* 10. Delete Job Confirmation Modal */}
            <Modal show={!!jobToDelete} onHide={() => setJobToDelete(null)} centered>
                <Modal.Header closeButton>
                    <Modal.Title className="h5 text-danger fw-bold">Delete Job Opening</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p className="mb-0">
                        Are you sure you want to permanently delete <strong>{jobToDelete?.title}</strong>? This action cannot be undone.
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <button type="button" className="btn btn-outline-secondary" onClick={() => setJobToDelete(null)}>
                        Cancel
                    </button>
                    <button type="button" disabled={isDeleting} className="btn btn-danger px-4" onClick={handleDeleteJob}>
                        {isDeleting ? 'Deleting...' : 'Delete Job'}
                    </button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default AdminCareers;
