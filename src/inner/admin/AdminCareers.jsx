import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import './AdminCareers.css';

const TOKEN_KEY = 'vrm_admin_token';
const USER_KEY = 'vrm_admin_user_data';

// Basic HTML sanitization for rich text description
function sanitizeHtml(html) {
    if (!html) return '';
    return html
        .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
        .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
        .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '')
        .replace(/on\w+="[^"]*"/gi, '')
        .replace(/on\w+='[^']*'/gi, '')
        .replace(/javascript:[^"']*/gi, '');
}

// Format ISO timestamp to relative time ("2m ago", "1h ago", etc.)
function formatRelativeTime(isoString) {
    if (!isoString) return '';
    try {
        const date = new Date(isoString);
        const now = new Date();
        const diffSec = Math.floor((now - date) / 1000);
        if (diffSec < 60) return 'Just now';
        const diffMin = Math.floor(diffSec / 60);
        if (diffMin < 60) return `${diffMin}m ago`;
        const diffHour = Math.floor(diffMin / 60);
        if (diffHour < 24) return `${diffHour}h ago`;
        const diffDay = Math.floor(diffHour / 24);
        if (diffDay < 7) return `${diffDay}d ago`;
        return date.toLocaleDateString();
    } catch (_) {
        return '';
    }
}

function AdminCareers() {
    const location = useLocation();
    const searchInputRef = useRef(null);

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

    // Mobile Sidebar Drawer
    const [sidebarOpen, setSidebarOpen] = useState(false);

    // Active Navigation Tab: 'dashboard' | 'jobs' | 'applications' | 'gallery' | 'admins'
    const [activeTab, setActiveTab] = useState('dashboard');

    // Global Search & Shortcut State
    const [globalSearch, setGlobalSearch] = useState('');

    // User Profile Dropdown State
    const [showUserDropdown, setShowUserDropdown] = useState(false);

    // Dashboard Recent Activity State
    const [recentActivity, setRecentActivity] = useState([]);
    const [isLoadingActivity, setIsLoadingActivity] = useState(false);

    // Dashboard Live Website Status State
    const [liveStatus, setLiveStatus] = useState({
        isLive: true,
        latency: null,
        lastChecked: null,
        checking: false
    });

    // Dashboard Post a Job State
    const [dashJobTitle, setDashJobTitle] = useState('');
    const [dashJobDept, setDashJobDept] = useState('Engineering');
    const [dashJobLocation, setDashJobLocation] = useState('Bengaluru');
    const [dashJobType, setDashJobType] = useState('Full-time');
    const [dashJobDesc, setDashJobDesc] = useState('');
    const [dashRequirements, setDashRequirements] = useState([]);
    const [dashReqInput, setDashReqInput] = useState('');
    const [isSavingDashJob, setIsSavingDashJob] = useState(false);
    const [dashJobMsg, setDashJobMsg] = useState({ type: '', text: '' });
    const dashEditorRef = useRef(null);

    // Dashboard Life at VRM Upload State
    const [dashUploadFiles, setDashUploadFiles] = useState([]);
    const [dashCategory, setDashCategory] = useState('Team Event');
    const [dashEventDate, setDashEventDate] = useState(() => new Date().toISOString().split('T')[0]);
    const [dashAltText, setDashAltText] = useState('');
    const [dashCaption, setDashCaption] = useState('');
    const [isDraggingFiles, setIsDraggingFiles] = useState(false);
    const [isUploadingDashPhotos, setIsUploadingDashPhotos] = useState(false);
    const [dashUploadProgress, setDashUploadProgress] = useState({ current: 0, total: 0, message: '' });
    const [dashUploadMsg, setDashUploadMsg] = useState({ type: '', text: '' });
    const dashFileInputRef = useRef(null);

    // Login Form State
    const [loginUser, setLoginUser] = useState('');
    const [loginPass, setLoginPass] = useState('');
    const [rememberMe, setRememberMe] = useState(true);
    const [loginError, setLoginError] = useState('');
    const [isLoggingIn, setIsLoggingIn] = useState(false);
    const [showLoginPassword, setShowLoginPassword] = useState(false);

    // Forgot Password State
    const [showForgotPassword, setShowForgotPassword] = useState(false);
    const [forgotIdentifier, setForgotIdentifier] = useState('');
    const [forgotStatus, setForgotStatus] = useState({ type: '', message: '' });
    const [isSendingForgot, setIsSendingForgot] = useState(false);

    // Reset Password Form State
    const [resetToken, setResetToken] = useState(resetTokenParam);
    const [resetNewPass, setResetNewPass] = useState('');
    const [resetConfirmPass, setResetConfirmPass] = useState('');
    const [resetStatus, setResetStatus] = useState({ type: '', message: '' });
    const [isResetting, setIsResetting] = useState(false);
    const [showResetNewPassword, setShowResetNewPassword] = useState(false);
    const [showResetConfirmPassword, setShowResetConfirmPassword] = useState(false);

    // Change Password Modal State
    const [showChangePassModal, setShowChangePassModal] = useState(false);
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [changePassStatus, setChangePassStatus] = useState({ type: '', message: '' });
    const [isChangingPass, setIsChangingPass] = useState(false);

    // Jobs State
    const [jobs, setJobs] = useState([]);
    const [isLoadingJobs, setIsLoadingJobs] = useState(false);
    const [jobFilterStatus, setJobFilterStatus] = useState('all');
    const [showEditJobModal, setShowEditJobModal] = useState(false);
    const [editingJobId, setEditingJobId] = useState(null);
    const [isSavingJob, setIsSavingJob] = useState(false);
    const [jobFormError, setJobFormError] = useState('');
    const [jobToDelete, setJobToDelete] = useState(null);
    const [isDeletingJob, setIsDeletingJob] = useState(false);

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
    const [formJobStatus, setFormJobStatus] = useState('draft');
    const [formApplyEmail] = useState('contactus@vrmaitechnology.com');
    const [formApplyLink, setFormApplyLink] = useState('');

    // Applications State
    const [applications, setApplications] = useState([]);
    const [isLoadingApps, setIsLoadingApps] = useState(false);
    const [appFilterStatus, setAppFilterStatus] = useState('all');
    const [selectedApp, setSelectedApp] = useState(null);
    const [appToDelete, setAppToDelete] = useState(null);
    const [isDeletingApp, setIsDeletingApp] = useState(false);
    const [downloadingAppId, setDownloadingAppId] = useState(null);
    const [resumeToast, setResumeToast] = useState(null);

    // Gallery State (Life at VRM)
    const [gallery, setGallery] = useState([]);
    const [isLoadingGallery, setIsLoadingGallery] = useState(false);
    const [gallerySubTab, setGallerySubTab] = useState('all'); // 'all' | 'approvals' | 'published' | 'hidden'
    const [galleryCategoryFilter, setGalleryCategoryFilter] = useState('all');
    const [galleryDateFilter, setGalleryDateFilter] = useState('all');
    const [galleryViewMode, setGalleryViewMode] = useState('list'); // 'list' | 'grid'
    const [selectedPhotoIds, setSelectedPhotoIds] = useState(new Set());

    // Gallery Modals
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
    const [photoStatus, setPhotoStatus] = useState('hidden'); // Default Hidden/Pending on upload as per spec

    // Admin Users State (Superadmin only)
    const [adminUsers, setAdminUsers] = useState([]);
    const [isLoadingAdmins, setIsLoadingAdmins] = useState(false);
    const [showAddAdminModal, setShowAddAdminModal] = useState(false);
    const [editingAdmin, setEditingAdmin] = useState(null);
    const [adminToDelete, setAdminToDelete] = useState(null);
    const [isSavingAdmin, setIsSavingAdmin] = useState(false);
    const [isDeletingAdmin, setIsDeletingAdmin] = useState(false);
    const [adminFormError, setAdminFormError] = useState('');

    // Generated Temp Password Modal
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
        setShowUserDropdown(false);
    }, []);

    const saveSession = useCallback((newToken, userObj, remember = true) => {
        const storage = remember ? localStorage : sessionStorage;
        storage.setItem(TOKEN_KEY, newToken);
        storage.setItem(USER_KEY, JSON.stringify(userObj));
        setToken(newToken);
        setCurrentUser(userObj);
        setIsAuthenticated(true);
    }, []);

    // Ctrl+K Global Search Keyboard Shortcut Listener
    useEffect(() => {
        const handleKeyDown = (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
                e.preventDefault();
                searchInputRef.current?.focus();
            } else if (e.key === 'Escape') {
                setShowUserDropdown(false);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    // Hide floating scroll-to-top button on admin pages
    useEffect(() => {
        const btt = document.querySelector('.progress-wrap');
        if (btt) {
            btt.style.display = 'none';
        }
        return () => {
            if (btt) {
                btt.style.display = '';
            }
        };
    }, []);

    // Verify Auth on mount
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
            .catch(() => logout())
            .finally(() => setAuthChecking(false));
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
                if (res.status === 401) { logout(); throw new Error('Expired'); }
                throw new Error('Failed');
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
                if (res.status === 401) { logout(); throw new Error('Expired'); }
                throw new Error('Failed');
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
                if (res.status === 401) { logout(); throw new Error('Expired'); }
                throw new Error('Failed');
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
                if (res.status === 401) { logout(); throw new Error('Expired'); }
                throw new Error('Failed');
            })
            .then(data => {
                if (data && data.success && Array.isArray(data.users)) {
                    setAdminUsers(data.users);
                }
            })
            .catch(err => console.error(err))
            .finally(() => setIsLoadingAdmins(false));
    }, [token, currentUser, logout]);

    // Fetch Recent Activity Log
    const fetchActivity = useCallback(() => {
        if (!token) return;
        setIsLoadingActivity(true);
        fetch('/api/admin/careers/activity', {
            headers: { 'Authorization': `Bearer ${token}` }
        })
            .then(res => {
                if (res.status === 401) { logout(); throw new Error('Expired'); }
                if (res.ok) return res.json();
                throw new Error('Failed');
            })
            .then(data => {
                if (data && data.success && Array.isArray(data.activity)) {
                    setRecentActivity(data.activity);
                }
            })
            .catch(err => console.error(err))
            .finally(() => setIsLoadingActivity(false));
    }, [token, logout]);

    // Live Website Status Health Check
    const checkLiveStatus = useCallback(async () => {
        setLiveStatus(prev => ({ ...prev, checking: true }));
        const t0 = performance.now();
        try {
            const res = await fetch('/api/careers/jobs', { cache: 'no-store' });
            const latency = Math.round(performance.now() - t0);
            if (res.ok) {
                setLiveStatus({
                    isLive: true,
                    latency,
                    lastChecked: new Date(),
                    checking: false
                });
            } else {
                setLiveStatus({
                    isLive: false,
                    latency,
                    lastChecked: new Date(),
                    checking: false
                });
            }
        } catch (e) {
            setLiveStatus({
                isLive: false,
                latency: null,
                lastChecked: new Date(),
                checking: false
            });
        }
    }, []);

    // Dashboard Post a Job handlers
    const handleAddDashRequirement = () => {
        const trimmed = dashReqInput.trim();
        if (trimmed && !dashRequirements.includes(trimmed)) {
            setDashRequirements(prev => [...prev, trimmed]);
            setDashReqInput('');
        }
    };

    const handleRemoveDashRequirement = (idx) => {
        setDashRequirements(prev => prev.filter((_, i) => i !== idx));
    };

    const handleFormatDesc = (command, value = null) => {
        document.execCommand(command, false, value);
        if (dashEditorRef.current) {
            setDashJobDesc(dashEditorRef.current.innerHTML);
        }
    };

    const handleSaveDashJob = async (status = 'published') => {
        if (!dashJobTitle.trim()) {
            setDashJobMsg({ type: 'danger', text: 'Job title is required.' });
            return;
        }
        const descContent = dashEditorRef.current ? dashEditorRef.current.innerHTML : dashJobDesc;
        if (!descContent || !descContent.trim() || descContent === '<br>') {
            setDashJobMsg({ type: 'danger', text: 'Job description is required.' });
            return;
        }

        setIsSavingDashJob(true);
        setDashJobMsg({ type: '', text: '' });

        try {
            const payload = {
                title: dashJobTitle.trim(),
                department: dashJobDept,
                location: dashJobLocation,
                employmentType: dashJobType,
                shortDescription: sanitizeHtml(descContent),
                requirements: dashRequirements,
                status
            };

            const res = await fetch('/api/admin/careers/jobs', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(payload)
            });
            const data = await res.json();
            if (!res.ok || !data.success) {
                throw new Error(data.message || 'Failed to save job opening');
            }

            setDashJobMsg({
                type: 'success',
                text: status === 'published' ? `Job "${payload.title}" published live!` : `Job "${payload.title}" saved as draft.`
            });
            setDashJobTitle('');
            setDashJobDesc('');
            if (dashEditorRef.current) dashEditorRef.current.innerHTML = '';
            setDashRequirements([]);
            setDashReqInput('');
            fetchJobs();
            fetchActivity();
        } catch (err) {
            setDashJobMsg({ type: 'danger', text: err.message });
        } finally {
            setIsSavingDashJob(false);
        }
    };

    // Dashboard Life at VRM Upload handlers
    const handleAddFiles = (filesList) => {
        const validExtensions = ['image/jpeg', 'image/png', 'image/webp'];
        const newFiles = [];
        for (let i = 0; i < filesList.length; i++) {
            const file = filesList[i];
            if (!validExtensions.includes(file.type)) {
                alert(`File "${file.name}" is not a supported format (JPG, PNG, WEBP).`);
                continue;
            }
            if (file.size > 10 * 1024 * 1024) {
                alert(`File "${file.name}" exceeds the 10MB limit.`);
                continue;
            }
            newFiles.push({
                id: `upload_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`,
                file,
                name: file.name,
                previewUrl: URL.createObjectURL(file)
            });
        }
        setDashUploadFiles(prev => [...prev, ...newFiles]);
    };

    const handleRemoveDashFile = (id) => {
        setDashUploadFiles(prev => {
            const match = prev.find(f => f.id === id);
            if (match && match.previewUrl) URL.revokeObjectURL(match.previewUrl);
            return prev.filter(f => f.id !== id);
        });
    };

    const handleUploadDashPhotos = async () => {
        if (dashUploadFiles.length === 0) {
            setDashUploadMsg({ type: 'danger', text: 'Please select or drag at least one photo to upload.' });
            return;
        }
        if (!dashAltText.trim()) {
            setDashUploadMsg({ type: 'danger', text: 'Alt text is required for accessibility and SEO.' });
            return;
        }

        setIsUploadingDashPhotos(true);
        setDashUploadMsg({ type: '', text: '' });
        let successCount = 0;
        let failCount = 0;

        for (let i = 0; i < dashUploadFiles.length; i++) {
            const item = dashUploadFiles[i];
            setDashUploadProgress({
                current: i + 1,
                total: dashUploadFiles.length,
                message: `Uploading ${i + 1} of ${dashUploadFiles.length}: ${item.name}...`
            });

            const formData = new FormData();
            formData.append('photo', item.file);
            formData.append('category', dashCategory);
            formData.append('eventDate', dashEventDate);
            formData.append('altText', dashUploadFiles.length > 1 ? `${dashAltText} (${i + 1})` : dashAltText);
            if (dashCaption.trim()) {
                formData.append('caption', dashCaption.trim());
            }
            formData.append('status', 'published');

            try {
                const res = await fetch('/api/admin/gallery', {
                    method: 'POST',
                    headers: { 'Authorization': `Bearer ${token}` },
                    body: formData
                });
                const data = await res.json();
                if (res.ok && data.success) {
                    successCount++;
                } else {
                    failCount++;
                }
            } catch (err) {
                failCount++;
            }
        }

        setIsUploadingDashPhotos(false);
        setDashUploadProgress({ current: 0, total: 0, message: '' });

        if (successCount > 0) {
            setDashUploadMsg({
                type: failCount > 0 ? 'warning' : 'success',
                text: failCount > 0
                    ? `Uploaded ${successCount} photo(s). ${failCount} failed.`
                    : `Successfully uploaded and published ${successCount} photo(s) to Life at VRM!`
            });
            dashUploadFiles.forEach(f => f.previewUrl && URL.revokeObjectURL(f.previewUrl));
            setDashUploadFiles([]);
            setDashCaption('');
            setDashAltText('');
            fetchGallery();
            fetchActivity();
        } else {
            setDashUploadMsg({ type: 'danger', text: 'Failed to upload selected photos. Please check file format and try again.' });
        }
    };

    useEffect(() => {
        if (isAuthenticated) {
            fetchJobs();
            fetchApplications();
            fetchGallery();
            fetchActivity();
            checkLiveStatus();
            if (currentUser?.role === 'superadmin') {
                fetchAdminUsers();
            }
        }
    }, [isAuthenticated, currentUser?.role, fetchJobs, fetchApplications, fetchGallery, fetchActivity, checkLiveStatus, fetchAdminUsers]);

    // --------------------------------------------------------------------------
    // AUTH HANDLERS
    // --------------------------------------------------------------------------
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
        setPhotoStatus('hidden'); // Default Hidden/Pending as specified
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
                if (!photoFile) {
                    setGalleryFormError('Please select a photo file to upload.');
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

    const handleTogglePhotoPublish = async (photo) => {
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
            console.error(err);
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

    // Bulk Actions for Gallery
    const toggleSelectPhoto = (id) => {
        setSelectedPhotoIds(prev => {
            const next = new Set(prev);
            if (next.has(id)) next.delete(id);
            else next.add(id);
            return next;
        });
    };

    const toggleSelectAllPhotos = (currentPhotos) => {
        if (selectedPhotoIds.size === currentPhotos.length && currentPhotos.length > 0) {
            setSelectedPhotoIds(new Set());
        } else {
            setSelectedPhotoIds(new Set(currentPhotos.map(p => p.id)));
        }
    };

    const handleBulkPublish = async () => {
        if (selectedPhotoIds.size === 0) return;
        for (const id of selectedPhotoIds) {
            await fetch(`/api/admin/gallery/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
                body: JSON.stringify({ status: 'published' })
            }).catch(() => {});
        }
        setSelectedPhotoIds(new Set());
        fetchGallery();
    };

    const handleBulkHide = async () => {
        if (selectedPhotoIds.size === 0) return;
        for (const id of selectedPhotoIds) {
            await fetch(`/api/admin/gallery/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
                body: JSON.stringify({ status: 'hidden' })
            }).catch(() => {});
        }
        setSelectedPhotoIds(new Set());
        fetchGallery();
    };

    const handleBulkDelete = async () => {
        if (selectedPhotoIds.size === 0) return;
        if (!window.confirm(`Permanently delete ${selectedPhotoIds.size} selected photos?`)) return;
        for (const id of selectedPhotoIds) {
            await fetch(`/api/admin/gallery/${id}`, {
                method: 'DELETE',
                headers: { 'Authorization': `Bearer ${token}` }
            }).catch(() => {});
        }
        setSelectedPhotoIds(new Set());
        fetchGallery();
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

    const handleOpenAddJobModal = () => {
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
        setFormJobStatus('draft');
        setFormApplyLink('');
        setJobFormError('');
        setShowEditJobModal(true);
    };

    const handleOpenEditJobModal = (job) => {
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
        setFormJobStatus(job.status || 'draft');
        setFormApplyLink(job.applyLink || '');
        setJobFormError('');
        setShowEditJobModal(true);
    };

    const handleSaveJob = async (e) => {
        e.preventDefault();
        setJobFormError('');
        setIsSavingJob(true);

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
            status: formJobStatus,
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
                setShowEditJobModal(false);
                fetchJobs();
            } else {
                setJobFormError(data.message || 'Failed to save job posting.');
            }
        } catch (err) {
            setJobFormError('Connection error. Failed to save job.');
        } finally {
            setIsSavingJob(false);
        }
    };

    const handleQuickJobStatusChange = async (jobId, newStatus) => {
        try {
            const res = await fetch(`/api/admin/careers/jobs/${jobId}/status`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ status: newStatus })
            });
            if (res.ok) fetchJobs();
        } catch (err) {
            console.error(err);
        }
    };

    const handleDeleteJob = async () => {
        if (!jobToDelete) return;
        setIsDeletingJob(true);

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
            setIsDeletingJob(false);
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
            console.error(err);
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
            console.error(err);
        } finally {
            setIsDeletingApp(false);
        }
    };

    const handleDownloadResume = async (app) => {
        if (!app || !app.storedFileName) {
            setResumeToast({ type: 'danger', message: 'No resume attached to this application.' });
            setTimeout(() => setResumeToast(null), 5000);
            return;
        }

        try {
            setDownloadingAppId(app.id);
            setResumeToast(null);

            const res = await fetch(`/api/admin/careers/applications/${app.id}/resume`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (!res.ok) {
                let errorMsg = 'Failed to download resume.';
                try {
                    const errorData = await res.json();
                    if (errorData && errorData.message) {
                        errorMsg = errorData.message;
                    }
                } catch (e) {
                    errorMsg = `Download failed (${res.status} ${res.statusText})`;
                }
                throw new Error(errorMsg);
            }

            // Extract filename from Content-Disposition header if available, or fallback to candidate name + original extension
            let filename = app.originalFileName || `resume_${(app.fullName || 'candidate').replace(/\s+/g, '_')}`;
            const disposition = res.headers.get('Content-Disposition') || res.headers.get('content-disposition');
            if (disposition && disposition.includes('filename=')) {
                const match = disposition.match(/filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/);
                if (match && match[1]) {
                    filename = match[1].replace(/['"]/g, '').trim();
                }
            }

            const blob = await res.blob();
            const blobUrl = window.URL.createObjectURL(blob);
            const downloadLink = document.createElement('a');
            downloadLink.style.display = 'none';
            downloadLink.href = blobUrl;
            downloadLink.download = filename;
            document.body.appendChild(downloadLink);
            downloadLink.click();

            setTimeout(() => {
                window.URL.revokeObjectURL(blobUrl);
                if (downloadLink.parentNode) {
                    downloadLink.parentNode.removeChild(downloadLink);
                }
            }, 1000);

            setResumeToast({ type: 'success', message: `Downloaded: ${filename}` });
            setTimeout(() => setResumeToast(null), 4000);
        } catch (err) {
            console.error('Resume download error:', err);
            setResumeToast({ type: 'danger', message: err.message || 'Error downloading resume file.' });
            setTimeout(() => setResumeToast(null), 6000);
        } finally {
            setDownloadingAppId(null);
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
                    message: `Password reset for "${adminUsername}". Please copy and share this temporary password with them.`
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

    // --------------------------------------------------------------------------
    // STATS COMPUTATION
    // --------------------------------------------------------------------------
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
        hidden: gallery.filter(g => g.status === 'hidden').length,
        approvals: gallery.filter(g => g.status === 'hidden').length // Pending / approvals
    };

    // --------------------------------------------------------------------------
    // FILTER LOGIC
    // --------------------------------------------------------------------------
    const searchLower = globalSearch.toLowerCase().trim();

    // Filtered Gallery
    const filteredGallery = gallery.filter(photo => {
        // Sub-tab filter
        if (gallerySubTab === 'approvals' && photo.status !== 'hidden') return false;
        if (gallerySubTab === 'published' && photo.status !== 'published') return false;
        if (gallerySubTab === 'hidden' && photo.status !== 'hidden') return false;

        // Category filter
        if (galleryCategoryFilter !== 'all' && photo.category !== galleryCategoryFilter) return false;

        // Date filter
        if (galleryDateFilter !== 'all') {
            const photoDate = new Date(photo.eventDate || photo.createdAt || 0);
            const now = new Date();
            if (galleryDateFilter === '7d' && (now - photoDate) > 7 * 86400000) return false;
            if (galleryDateFilter === '30d' && (now - photoDate) > 30 * 86400000) return false;
            if (galleryDateFilter === 'year' && photoDate.getFullYear() !== now.getFullYear()) return false;
        }

        // Global / Caption search
        if (searchLower) {
            const matchCaption = (photo.caption || '').toLowerCase().includes(searchLower);
            const matchAlt = (photo.altText || '').toLowerCase().includes(searchLower);
            const matchCat = (photo.category || '').toLowerCase().includes(searchLower);
            if (!matchCaption && !matchAlt && !matchCat) return false;
        }

        return true;
    });

    // Filtered Jobs
    const filteredJobs = jobs.filter(job => {
        if (jobFilterStatus !== 'all' && job.status !== jobFilterStatus) return false;
        if (searchLower) {
            const matchTitle = (job.title || '').toLowerCase().includes(searchLower);
            const matchDept = (job.department || '').toLowerCase().includes(searchLower);
            const matchLoc = (job.location || '').toLowerCase().includes(searchLower);
            if (!matchTitle && !matchDept && !matchLoc) return false;
        }
        return true;
    });

    // Filtered Applications
    const filteredApplications = applications.filter(app => {
        if (appFilterStatus !== 'all' && app.status !== appFilterStatus) return false;
        if (searchLower) {
            const matchName = (app.fullName || '').toLowerCase().includes(searchLower);
            const matchRole = (app.position || '').toLowerCase().includes(searchLower);
            const matchEmail = (app.email || '').toLowerCase().includes(searchLower);
            const matchPhone = (app.phone || '').toLowerCase().includes(searchLower);
            if (!matchName && !matchRole && !matchEmail && !matchPhone) return false;
        }
        return true;
    });

    // Filtered Admins
    const filteredAdmins = adminUsers.filter(adm => {
        if (searchLower) {
            const matchUser = (adm.username || '').toLowerCase().includes(searchLower);
            const matchName = (adm.displayName || '').toLowerCase().includes(searchLower);
            const matchEmail = (adm.email || '').toLowerCase().includes(searchLower);
            if (!matchUser && !matchName && !matchEmail) return false;
        }
        return true;
    });

    const isSuperAdmin = currentUser?.role === 'superadmin';
    const userInitials = (() => {
        const name = (currentUser?.displayName || currentUser?.username || 'Admin').trim();
        const parts = name.split(/\s+/);
        if (parts.length >= 2 && parts[0] && parts[1]) {
            return (parts[0][0] + parts[1][0]).toUpperCase();
        }
        return name.slice(0, 2).toUpperCase();
    })();

    if (authChecking) {
        return (
            <div className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh', background: '#090d16' }}>
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    // --------------------------------------------------------------------------
    // VIEW: RESET PASSWORD (From email link)
    // --------------------------------------------------------------------------
    if (isResetPasswordPath || (resetTokenParam && !isAuthenticated)) {
        return (
            <div className="vrm-admin-auth-page">
                <Helmet>
                    <title>Reset Password | VRM AI Technology</title>
                    <meta name="robots" content="noindex, nofollow" />
                </Helmet>

                <div className="vrm-admin-auth-card">
                    <img src="/assets/images/logo/logo-header.webp" alt="VRM AI Technology" className="vrm-admin-auth-logo" />
                    <h1 className="vrm-admin-auth-title">Reset Admin Password</h1>
                    <p className="vrm-admin-auth-subtitle">Choose a secure new password (min 12 characters)</p>

                    {resetStatus.message && (
                        <div className={`alert ${resetStatus.type === 'success' ? 'alert-success' : 'alert-danger'} py-2 px-3 small rounded-3 mb-4`}>
                            <i className={`fas ${resetStatus.type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'} me-2`}></i>
                            {resetStatus.message}
                        </div>
                    )}

                    {resetStatus.type === 'success' ? (
                        <div className="text-center">
                            <Link to="/admin/careers" className="vrm-admin-auth-submit-btn">
                                Proceed to Sign In
                            </Link>
                        </div>
                    ) : (
                        <form onSubmit={handleResetSubmit}>
                            {!resetTokenParam && (
                                <div className="mb-3">
                                    <label className="vrm-admin-auth-label">Reset Token</label>
                                    <input
                                        type="text"
                                        className="vrm-admin-auth-input"
                                        placeholder="Paste token from email"
                                        value={resetToken}
                                        onChange={(e) => setResetToken(e.target.value)}
                                        required
                                    />
                                </div>
                            )}

                            <div className="mb-3">
                                <label className="vrm-admin-auth-label">New Password (min 12 chars)</label>
                                <div className="vrm-password-input-wrap">
                                    <input
                                        type={showResetNewPassword ? "text" : "password"}
                                        className="vrm-admin-auth-input"
                                        placeholder="Enter strong new password"
                                        value={resetNewPass}
                                        onChange={(e) => setResetNewPass(e.target.value)}
                                        required
                                        minLength={12}
                                    />
                                    <button
                                        type="button"
                                        className="vrm-password-eye-btn"
                                        onClick={() => setShowResetNewPassword(prev => !prev)}
                                        aria-label={showResetNewPassword ? "Hide password" : "Show password"}
                                        title={showResetNewPassword ? "Hide password" : "Show password"}
                                    >
                                        <i className={`fas ${showResetNewPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                                    </button>
                                </div>
                            </div>

                            <div className="mb-4">
                                <label className="vrm-admin-auth-label">Confirm New Password</label>
                                <div className="vrm-password-input-wrap">
                                    <input
                                        type={showResetConfirmPassword ? "text" : "password"}
                                        className="vrm-admin-auth-input"
                                        placeholder="Repeat new password"
                                        value={resetConfirmPass}
                                        onChange={(e) => setResetConfirmPass(e.target.value)}
                                        required
                                        minLength={12}
                                    />
                                    <button
                                        type="button"
                                        className="vrm-password-eye-btn"
                                        onClick={() => setShowResetConfirmPassword(prev => !prev)}
                                        aria-label={showResetConfirmPassword ? "Hide password" : "Show password"}
                                        title={showResetConfirmPassword ? "Hide password" : "Show password"}
                                    >
                                        <i className={`fas ${showResetConfirmPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                                    </button>
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={isResetting}
                                className="vrm-admin-auth-submit-btn"
                            >
                                {isResetting ? 'Saving Password...' : 'Save New Password'}
                            </button>
                        </form>
                    )}

                    <div className="vrm-admin-auth-footer">
                        <Link to="/admin/careers" className="vrm-admin-auth-back-link">
                            <i className="far fa-arrow-left"></i> Back to sign in
                        </Link>
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
            <div className="vrm-admin-auth-page">
                <Helmet>
                    <title>{showForgotPassword ? 'Forgot Password | VRM AI Technology' : 'Careers Admin Login | VRM AI Technology'}</title>
                    <meta name="robots" content="noindex, nofollow" />
                </Helmet>

                <div className="vrm-admin-auth-card">
                    <img src="/assets/images/logo/logo-header.webp" alt="VRM AI Technology" className="vrm-admin-auth-logo" />
                    <h1 className="vrm-admin-auth-title">{showForgotPassword ? 'Reset Password' : 'Careers Admin'}</h1>
                    <p className="vrm-admin-auth-subtitle">
                        {showForgotPassword ? 'Reset your admin password' : 'Sign in to manage openings, candidates & gallery'}
                    </p>

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
                            <div className="mb-4">
                                <label className="vrm-admin-auth-label">Username or Registered Email</label>
                                <input
                                    type="text"
                                    className="vrm-admin-auth-input"
                                    placeholder="e.g. admin or contactus@vrmaitechnology.com"
                                    value={forgotIdentifier}
                                    onChange={(e) => setForgotIdentifier(e.target.value)}
                                    required
                                    autoFocus
                                />
                                <div className="text-muted small mt-2" style={{ fontSize: '12px', color: '#94a3b8' }}>
                                    A secure password reset link (valid for 30 minutes) will be emailed to you.
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={isSendingForgot}
                                className="vrm-admin-auth-submit-btn mb-3"
                            >
                                {isSendingForgot ? 'Sending Reset Link...' : 'Send Reset Link'}
                            </button>

                            <div className="text-center mt-3">
                                <button
                                    type="button"
                                    className="vrm-admin-auth-back-link"
                                    onClick={() => {
                                        setShowForgotPassword(false);
                                        setForgotStatus({ type: '', message: '' });
                                    }}
                                >
                                    <i className="far fa-arrow-left"></i> Back to sign in
                                </button>
                            </div>
                        </form>
                    ) : (
                        <form onSubmit={handleLoginSubmit}>
                            <div className="mb-3">
                                <label className="vrm-admin-auth-label">Username or Email</label>
                                <input
                                    type="text"
                                    className="vrm-admin-auth-input"
                                    placeholder="Enter admin username or email"
                                    value={loginUser}
                                    onChange={(e) => setLoginUser(e.target.value)}
                                    required
                                    autoFocus
                                />
                            </div>

                            <div className="mb-2">
                                <div className="vrm-admin-auth-password-row">
                                    <label className="vrm-admin-auth-label mb-0">Password</label>
                                    <button
                                        type="button"
                                        className="vrm-admin-auth-forgot-link"
                                        onClick={() => {
                                            setShowForgotPassword(true);
                                            setLoginError('');
                                        }}
                                    >
                                        Forgot password?
                                    </button>
                                </div>
                                <div className="vrm-password-input-wrap">
                                    <input
                                        type={showLoginPassword ? "text" : "password"}
                                        className="vrm-admin-auth-input"
                                        placeholder="Enter password"
                                        value={loginPass}
                                        onChange={(e) => setLoginPass(e.target.value)}
                                        required
                                    />
                                    <button
                                        type="button"
                                        className="vrm-password-eye-btn"
                                        onClick={() => setShowLoginPassword(prev => !prev)}
                                        aria-label={showLoginPassword ? "Hide password" : "Show password"}
                                        title={showLoginPassword ? "Hide password" : "Show password"}
                                    >
                                        <i className={`fas ${showLoginPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                                    </button>
                                </div>
                            </div>

                            <div className="vrm-admin-auth-checkbox-wrap">
                                <input
                                    type="checkbox"
                                    id="rememberMe"
                                    checked={rememberMe}
                                    onChange={(e) => setRememberMe(e.target.checked)}
                                />
                                <label className="vrm-admin-auth-checkbox-label" htmlFor="rememberMe">
                                    Keep me logged in
                                </label>
                            </div>

                            <button
                                type="submit"
                                disabled={isLoggingIn}
                                className="vrm-admin-auth-submit-btn"
                            >
                                {isLoggingIn ? 'Signing In...' : 'Sign In'}
                            </button>
                        </form>
                    )}

                    <div className="vrm-admin-auth-footer">
                        <Link to="/careers" className="vrm-admin-auth-back-link">
                            <i className="far fa-arrow-left"></i> Back to public site
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    // --------------------------------------------------------------------------
    // VIEW: AUTHENTICATED REDESIGNED DASHBOARD
    // --------------------------------------------------------------------------
    return (
        <div className="vrm-admin-root admin-careers">
            <Helmet>
                <title>Careers Admin | VRM AI Technology</title>
                <meta name="robots" content="noindex, nofollow" />
            </Helmet>

            {/* Mobile Drawer Overlay */}
            {sidebarOpen && (
                <div className="vrm-admin-sidebar-overlay" onClick={() => setSidebarOpen(false)} />
            )}

            {/* ============================================================== */}
            {/* 1. LEFT FIXED SIDEBAR (~270px)                                */}
            {/* ============================================================== */}
            <aside className={`vrm-admin-sidebar ${sidebarOpen ? 'open' : ''}`}>
                <div>
                    {/* Brand Logo */}
                    <Link to="/" className="vrm-admin-sidebar-brand">
                        <img src="/assets/images/logo/logo-header.webp" alt="VRM AI™" style={{ height: '34px', objectFit: 'contain' }} />
                    </Link>

                    {/* Nav Items */}
                    <div className="vrm-admin-sidebar-nav">
                        {/* Admin Dashboard */}
                        <button
                            type="button"
                            className={`vrm-admin-nav-item ${activeTab === 'dashboard' ? 'active' : ''}`}
                            onClick={() => { setActiveTab('dashboard'); setSidebarOpen(false); }}
                        >
                            <span className="vrm-admin-nav-label">
                                <i className="fas fa-th-large vrm-admin-nav-icon"></i>
                                <span>Admin Dashboard</span>
                            </span>
                        </button>

                        {/* Job Openings */}
                        <button
                            type="button"
                            className={`vrm-admin-nav-item ${activeTab === 'jobs' ? 'active' : ''}`}
                            onClick={() => { setActiveTab('jobs'); setSidebarOpen(false); }}
                        >
                            <span className="vrm-admin-nav-label">
                                <i className="fas fa-briefcase vrm-admin-nav-icon"></i>
                                <span>Job Openings</span>
                            </span>
                            <span className="vrm-admin-nav-badge">{jobStats.total}</span>
                        </button>

                        {/* Life at VRM */}
                        <button
                            type="button"
                            className={`vrm-admin-nav-item ${activeTab === 'gallery' ? 'active' : ''}`}
                            onClick={() => { setActiveTab('gallery'); setSidebarOpen(false); }}
                        >
                            <span className="vrm-admin-nav-label">
                                <i className="fas fa-images vrm-admin-nav-icon"></i>
                                <span>Life at VRM</span>
                            </span>
                            <span className="vrm-admin-nav-badge">{galleryStats.total}</span>
                        </button>

                        {/* Applications */}
                        <button
                            type="button"
                            className={`vrm-admin-nav-item ${activeTab === 'applications' ? 'active' : ''}`}
                            onClick={() => { setActiveTab('applications'); setSidebarOpen(false); }}
                        >
                            <span className="vrm-admin-nav-label">
                                <i className="fas fa-file-alt vrm-admin-nav-icon"></i>
                                <span>Applications</span>
                            </span>
                            <span className="vrm-admin-nav-badge">
                                {appStats.new > 0 ? `${appStats.new} new` : appStats.total}
                            </span>
                        </button>

                        {/* Manage Admins (Superadmin only) */}
                        {isSuperAdmin && (
                            <button
                                type="button"
                                className={`vrm-admin-nav-item ${activeTab === 'admins' ? 'active' : ''}`}
                                onClick={() => { setActiveTab('admins'); setSidebarOpen(false); }}
                            >
                                <span className="vrm-admin-nav-label">
                                    <i className="fas fa-user-shield vrm-admin-nav-icon"></i>
                                    <span>Manage Admins</span>
                                </span>
                                <span className="vrm-admin-nav-badge">{adminUsers.length}</span>
                            </button>
                        )}
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="vrm-admin-quick-actions">
                    <div className="vrm-admin-quick-title">Quick Actions</div>
                    <Link to="/careers" target="_blank" className="vrm-admin-btn-live-quick">
                        <i className="fas fa-external-link-alt"></i>
                        <span>View Live Site</span>
                    </Link>
                </div>
            </aside>

            {/* ============================================================== */}
            {/* 2. MAIN VIEWPORT                                               */}
            {/* ============================================================== */}
            <main className="vrm-admin-main">
                {/* Top Bar */}
                <header className="vrm-admin-topbar">
                    <div className="d-flex align-items-center gap-3">
                        <button
                            type="button"
                            className="vrm-admin-hamburger"
                            onClick={() => setSidebarOpen(prev => !prev)}
                            title="Toggle Menu"
                        >
                            <i className="fas fa-bars"></i>
                        </button>

                        <div className="vrm-admin-page-title-box">
                            <div className="vrm-admin-title-icon-tile">
                                <i className="fas fa-user-shield"></i>
                            </div>
                            <div>
                                <h1 className="h6 fw-bold mb-0 text-white" style={{ fontSize: '15px' }}>Careers Admin Panel</h1>
                                <small className="text-muted d-block" style={{ fontSize: '11px', marginTop: '-2px' }}>VRM AI Technology</small>
                            </div>
                        </div>
                    </div>

                    {/* Global Search Input */}
                    <div className="vrm-admin-topbar-center">
                        <div className="vrm-admin-search-box" onClick={() => searchInputRef.current?.focus()}>
                            <i className="fas fa-search vrm-admin-search-icon"></i>
                            <input
                                ref={searchInputRef}
                                type="text"
                                className="vrm-admin-search-input"
                                placeholder="Search photos, events, or admins..."
                                value={globalSearch}
                                onChange={(e) => setGlobalSearch(e.target.value)}
                            />
                            <span className="vrm-admin-search-shortcut">Ctrl + K</span>
                        </div>
                    </div>

                    {/* Right User Actions */}
                    <div className="vrm-admin-topbar-actions">
                        {/* View Live Careers Button */}
                        <a
                            href="/careers"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="vrm-admin-btn-live-header d-none d-md-inline-flex"
                            title="Open live public careers page in a new tab"
                        >
                            <i className="fas fa-external-link-alt"></i>
                            <span>View Live Careers</span>
                        </a>

                        {/* Notification Bell */}
                        <button
                            type="button"
                            className="vrm-admin-bell-btn"
                            title={appStats.new > 0 ? `${appStats.new} new application(s)` : 'No new notifications'}
                            onClick={() => {
                                setActiveTab('applications');
                                setAppFilterStatus('new');
                            }}
                        >
                            <i className="far fa-bell"></i>
                            {appStats.new > 0 && <span className="vrm-admin-bell-dot"></span>}
                        </button>

                        {/* User Menu Trigger */}
                        <div className="position-relative">
                            <div
                                className="vrm-admin-user-pill"
                                onClick={() => setShowUserDropdown(prev => !prev)}
                            >
                                <div className="vrm-admin-avatar-circle">
                                    {userInitials}
                                </div>
                                <div className="d-none d-sm-flex flex-column text-start" style={{ lineHeight: 1.2 }}>
                                    <span className="small fw-semibold text-white">
                                        {currentUser?.displayName || currentUser?.username || 'Admin'}
                                    </span>
                                    <span className="text-muted" style={{ fontSize: '10.5px' }}>
                                        {currentUser?.role === 'superadmin' ? 'Superadmin' : 'Admin'}
                                    </span>
                                </div>
                                <i className="fas fa-chevron-down text-muted ms-1" style={{ fontSize: '10px' }}></i>
                            </div>

                            {/* Dropdown Menu */}
                            {showUserDropdown && (
                                <div className="vrm-admin-user-menu">
                                    <div className="px-3 py-2 border-bottom border-secondary mb-1">
                                        <div className="fw-bold text-white small">{currentUser?.displayName || currentUser?.username}</div>
                                        <div className="text-muted" style={{ fontSize: '11px' }}>{currentUser?.email}</div>
                                        <span className={`badge ${isSuperAdmin ? 'bg-danger' : 'bg-primary'} mt-1 text-uppercase`} style={{ fontSize: '9px' }}>
                                            {currentUser?.role || 'admin'}
                                        </span>
                                    </div>
                                    <button
                                        type="button"
                                        className="vrm-admin-menu-item"
                                        onClick={() => {
                                            setShowUserDropdown(false);
                                            setChangePassStatus({ type: '', message: '' });
                                            setShowChangePassModal(true);
                                        }}
                                    >
                                        <i className="fas fa-key text-muted"></i>
                                        <span>Change Password</span>
                                    </button>
                                    <button
                                        type="button"
                                        className="vrm-admin-menu-item danger"
                                        onClick={logout}
                                    >
                                        <i className="fas fa-sign-out-alt"></i>
                                        <span>Logout</span>
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </header>

                {/* Temporary Password Warning Banner */}
                {currentUser?.forcePasswordChange && (
                    <div className="alert alert-warning mb-0 border-0 rounded-0 py-2 px-4 d-flex justify-content-between align-items-center">
                        <div className="small">
                            <i className="fas fa-shield-alt text-warning me-2"></i>
                            <strong>Temporary Password:</strong> Please set a new password (min 12 chars) to secure your account.
                        </div>
                        <button
                            className="btn btn-warning btn-sm fw-bold px-3 py-1"
                            onClick={() => {
                                setChangePassStatus({ type: '', message: '' });
                                setShowChangePassModal(true);
                            }}
                        >
                            Change Password
                        </button>
                    </div>
                )}

                {/* Content Container */}
                <div className="vrm-admin-content">

                    {/* ============================================================== */}
                    {/* TAB: LIFE AT VRM (PHOTO GALLERY) - EXACT MOCKUP MATCH          */}
                    {/* ============================================================== */}
                    {activeTab === 'gallery' && (
                        <>
                            {/* 3. Hero Banner with Abstract Illustration */}
                            <div className="vrm-admin-hero-banner">
                                <div className="vrm-admin-hero-content">
                                    <h1 className="vrm-admin-hero-title">
                                        Life at <span className="text-cyan-gradient">VRM</span>
                                    </h1>
                                    <p className="vrm-admin-hero-desc">
                                        Manage, review, and publish employee moments on the VRM website.
                                    </p>
                                </div>

                                {/* Abstract Geometric / Camera Illustration (Strictly zero photos of people) */}
                                <div className="vrm-admin-hero-graphic" aria-hidden="true">
                                    <div className="vrm-abstract-frame frame-1"></div>
                                    <div className="vrm-abstract-frame frame-2"></div>
                                    <div className="vrm-abstract-frame frame-3"></div>
                                    <div className="vrm-abstract-camera-badge">
                                        <i className="fas fa-camera"></i>
                                    </div>
                                </div>
                            </div>

                            {/* 4. Stat Cards with Sparkline Waves */}
                            <div className="vrm-admin-stats-grid">
                                {/* Total Photos */}
                                <div className="vrm-admin-stat-card">
                                    <div className="vrm-stat-left">
                                        <div className="vrm-stat-icon-tile blue">
                                            <i className="far fa-images"></i>
                                        </div>
                                        <div>
                                            <div className="vrm-stat-label">Total Photos</div>
                                            <div className="vrm-stat-value">{galleryStats.total}</div>
                                        </div>
                                    </div>
                                    <svg className="vrm-stat-sparkline" viewBox="0 0 100 40" fill="none">
                                        <path d="M0 34 Q 25 38, 45 22 T 80 12 T 100 24" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" />
                                    </svg>
                                </div>

                                {/* Published (Live) */}
                                <div className="vrm-admin-stat-card">
                                    <div className="vrm-stat-left">
                                        <div className="vrm-stat-icon-tile green">
                                            <i className="far fa-check-circle"></i>
                                        </div>
                                        <div>
                                            <div className="vrm-stat-label">Published (Live)</div>
                                            <div className="vrm-stat-value green">{galleryStats.published}</div>
                                        </div>
                                    </div>
                                    <svg className="vrm-stat-sparkline" viewBox="0 0 100 40" fill="none">
                                        <path d="M0 32 Q 30 36, 50 18 T 85 8 T 100 20" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" />
                                    </svg>
                                </div>

                                {/* Hidden */}
                                <div className="vrm-admin-stat-card">
                                    <div className="vrm-stat-left">
                                        <div className="vrm-stat-icon-tile slate">
                                            <i className="far fa-eye-slash"></i>
                                        </div>
                                        <div>
                                            <div className="vrm-stat-label">Hidden</div>
                                            <div className="vrm-stat-value">{galleryStats.hidden}</div>
                                        </div>
                                    </div>
                                    <svg className="vrm-stat-sparkline" viewBox="0 0 100 40" fill="none">
                                        <path d="M0 26 Q 35 24, 60 32 T 100 22" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" />
                                    </svg>
                                </div>
                            </div>

                            {/* 5. Employee Privacy Notice Bar */}
                            <div className="vrm-admin-privacy-bar">
                                <i className="fas fa-shield-alt"></i>
                                <div>
                                    <strong>Employee Privacy Notice:</strong> Only upload photos of employees who have explicitly agreed to their photo being published on the public website.
                                </div>
                            </div>

                            {/* 6. Gallery Section Controls Card */}
                            <div className="vrm-admin-controls-card">
                                {/* Top Tab Pills & Upload Button */}
                                <div className="vrm-gallery-tabs-row">
                                    <div className="vrm-gallery-pill-nav">
                                        <button
                                            type="button"
                                            className={`vrm-gallery-pill-btn ${gallerySubTab === 'approvals' ? 'active' : ''}`}
                                            onClick={() => setGallerySubTab('approvals')}
                                        >
                                            <i className="far fa-images"></i>
                                            <span>Photo Approvals ({galleryStats.approvals})</span>
                                        </button>
                                        <button
                                            type="button"
                                            className={`vrm-gallery-pill-btn ${gallerySubTab === 'published' ? 'active' : ''}`}
                                            onClick={() => setGallerySubTab('published')}
                                        >
                                            <i className="far fa-check-circle"></i>
                                            <span>Published ({galleryStats.published})</span>
                                        </button>
                                        <button
                                            type="button"
                                            className={`vrm-gallery-pill-btn ${gallerySubTab === 'hidden' ? 'active' : ''}`}
                                            onClick={() => setGallerySubTab('hidden')}
                                        >
                                            <i className="far fa-eye-slash"></i>
                                            <span>Hidden ({galleryStats.hidden})</span>
                                        </button>
                                        <button
                                            type="button"
                                            className={`vrm-gallery-pill-btn ${gallerySubTab === 'all' ? 'active' : ''}`}
                                            onClick={() => setGallerySubTab('all')}
                                        >
                                            <i className="fas fa-layer-group"></i>
                                            <span>All ({galleryStats.total})</span>
                                        </button>
                                    </div>

                                    <button
                                        type="button"
                                        className="vrm-btn-primary-upload"
                                        onClick={handleOpenUploadModal}
                                    >
                                        <i className="fas fa-cloud-upload-alt"></i>
                                        <span>Upload Photo</span>
                                    </button>
                                </div>

                                {/* Filter Toolbar Row */}
                                <div className="vrm-filter-toolbar-row">
                                    <div className="vrm-filter-left-group">
                                        {/* In-tab search */}
                                        <div className="vrm-filter-search-box">
                                            <i className="fas fa-search vrm-filter-search-icon"></i>
                                            <input
                                                type="text"
                                                className="vrm-filter-search-input"
                                                placeholder="Search by caption or event..."
                                                value={globalSearch}
                                                onChange={(e) => setGlobalSearch(e.target.value)}
                                            />
                                        </div>

                                        {/* Category Dropdown */}
                                        <select
                                            className="vrm-filter-select"
                                            value={galleryCategoryFilter}
                                            onChange={(e) => setGalleryCategoryFilter(e.target.value)}
                                        >
                                            <option value="all">All Categories</option>
                                            <option value="Fun Friday">Fun Friday</option>
                                            <option value="Festival">Festival</option>
                                            <option value="Team Event">Team Event</option>
                                            <option value="Office">Office</option>
                                        </select>

                                        {/* Dates Dropdown */}
                                        <select
                                            className="vrm-filter-select"
                                            value={galleryDateFilter}
                                            onChange={(e) => setGalleryDateFilter(e.target.value)}
                                        >
                                            <option value="all">All Dates</option>
                                            <option value="7d">Last 7 Days</option>
                                            <option value="30d">Last 30 Days</option>
                                            <option value="year">This Year</option>
                                        </select>
                                    </div>

                                    {/* View Toggle */}
                                    <div className="vrm-view-toggle-group">
                                        <button
                                            type="button"
                                            className={`vrm-view-toggle-btn ${galleryViewMode === 'grid' ? 'active' : ''}`}
                                            onClick={() => setGalleryViewMode('grid')}
                                            title="Grid View"
                                        >
                                            <i className="fas fa-th-large"></i>
                                        </button>
                                        <button
                                            type="button"
                                            className={`vrm-view-toggle-btn ${galleryViewMode === 'list' ? 'active' : ''}`}
                                            onClick={() => setGalleryViewMode('list')}
                                            title="List View"
                                        >
                                            <i className="fas fa-list"></i>
                                        </button>
                                    </div>
                                </div>

                                {/* Bulk Action Bar (when photos are selected) */}
                                {selectedPhotoIds.size > 0 && (
                                    <div className="mt-3 p-2 bg-dark rounded-3 border border-secondary d-flex align-items-center justify-content-between flex-wrap gap-2">
                                        <div className="small text-white ps-2">
                                            <i className="fas fa-check-square text-primary me-2"></i>
                                            <strong>{selectedPhotoIds.size}</strong> photo(s) selected
                                        </div>
                                        <div className="d-flex gap-2">
                                            <button className="btn btn-sm btn-success" onClick={handleBulkPublish}>
                                                <i className="fas fa-check me-1"></i> Publish Selected
                                            </button>
                                            <button className="btn btn-sm btn-secondary" onClick={handleBulkHide}>
                                                <i className="fas fa-eye-slash me-1"></i> Hide Selected
                                            </button>
                                            <button className="btn btn-sm btn-danger" onClick={handleBulkDelete}>
                                                <i className="fas fa-trash-alt me-1"></i> Delete Selected
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Table or Grid View */}
                            <div className="vrm-admin-table-card">
                                {isLoadingGallery ? (
                                    <div className="text-center py-5">
                                        <div className="spinner-border text-primary spinner-border-sm me-2" role="status"></div>
                                        <span className="text-muted">Loading photos...</span>
                                    </div>
                                ) : filteredGallery.length === 0 ? (
                                    /* Empty State as in Mockup */
                                    <div className="vrm-empty-state-box">
                                        <div className="vrm-empty-icon-wrap">
                                            <i className="far fa-images"></i>
                                        </div>
                                        <div className="vrm-empty-title">No photos uploaded yet</div>
                                        <div className="vrm-empty-desc">
                                            Upload photos to share employee moments on the VRM website.
                                        </div>
                                        <button
                                            type="button"
                                            className="vrm-btn-primary-upload d-inline-flex mx-auto"
                                            onClick={handleOpenUploadModal}
                                        >
                                            <i className="fas fa-cloud-upload-alt"></i>
                                            <span>Upload Photo</span>
                                        </button>
                                    </div>
                                ) : galleryViewMode === 'list' ? (
                                    /* List Table View */
                                    <div className="table-responsive">
                                        <table className="vrm-dark-table">
                                            <thead>
                                                <tr>
                                                    <th style={{ width: '40px' }}>
                                                        <input
                                                            type="checkbox"
                                                            className="vrm-checkbox-custom"
                                                            checked={selectedPhotoIds.size === filteredGallery.length && filteredGallery.length > 0}
                                                            onChange={() => toggleSelectAllPhotos(filteredGallery)}
                                                        />
                                                    </th>
                                                    <th style={{ width: '50px' }}>#</th>
                                                    <th style={{ width: '100px' }}>Thumbnail</th>
                                                    <th>Caption & Alt Text</th>
                                                    <th>Category</th>
                                                    <th>Event Date</th>
                                                    <th>Status</th>
                                                    <th className="text-end pe-3" style={{ minWidth: '150px' }}>Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {filteredGallery.map((item, idx) => {
                                                    const isChecked = selectedPhotoIds.has(item.id);
                                                    return (
                                                        <tr key={item.id} style={{ background: isChecked ? 'rgba(59, 130, 246, 0.08)' : undefined }}>
                                                            <td>
                                                                <input
                                                                    type="checkbox"
                                                                    className="vrm-checkbox-custom"
                                                                    checked={isChecked}
                                                                    onChange={() => toggleSelectPhoto(item.id)}
                                                                />
                                                            </td>
                                                            <td className="text-muted fw-bold small">
                                                                <div className="d-flex align-items-center gap-1">
                                                                    <span>{idx + 1}</span>
                                                                    <div className="btn-group-vertical btn-group-sm">
                                                                        <button
                                                                            type="button"
                                                                            className="btn btn-link p-0 text-muted"
                                                                            disabled={idx === 0}
                                                                            onClick={() => handleReorderPhoto(idx, -1)}
                                                                            style={{ lineHeight: 1, fontSize: '10px' }}
                                                                        >
                                                                            <i className="fas fa-caret-up"></i>
                                                                        </button>
                                                                        <button
                                                                            type="button"
                                                                            className="btn btn-link p-0 text-muted"
                                                                            disabled={idx === filteredGallery.length - 1}
                                                                            onClick={() => handleReorderPhoto(idx, 1)}
                                                                            style={{ lineHeight: 1, fontSize: '10px' }}
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
                                                                    className="vrm-table-thumb"
                                                                />
                                                            </td>
                                                            <td>
                                                                <div className="fw-semibold text-white">{item.caption || 'No caption'}</div>
                                                                <small className="text-muted d-block mt-1">
                                                                    <i className="fas fa-universal-access text-info me-1"></i> {item.altText}
                                                                </small>
                                                            </td>
                                                            <td>
                                                                <span className="vrm-badge-cat">{item.category}</span>
                                                            </td>
                                                            <td className="small text-muted">
                                                                {item.eventDate || '—'}
                                                            </td>
                                                            <td>
                                                                <span className={`vrm-status-badge ${item.status === 'published' ? 'published' : 'hidden'}`}>
                                                                    <i className={`fas ${item.status === 'published' ? 'fa-check-circle' : 'fa-eye-slash'}`}></i>
                                                                    {item.status === 'published' ? 'Published' : 'Hidden'}
                                                                </span>
                                                            </td>
                                                            <td className="text-end pe-3" style={{ minWidth: '150px' }}>
                                                                <div className="vrm-action-btns justify-content-end">
                                                                    <button
                                                                        type="button"
                                                                        className={`vrm-action-icon-btn ${item.status === 'published' ? 'hide' : 'publish'}`}
                                                                        onClick={() => handleTogglePhotoPublish(item)}
                                                                        title={item.status === 'published' ? 'Hide Photo' : 'Approve & Publish'}
                                                                        aria-label={item.status === 'published' ? 'Hide Photo' : 'Approve & Publish'}
                                                                    >
                                                                        <i className={`fas ${item.status === 'published' ? 'fa-eye-slash' : 'fa-check'}`}></i>
                                                                    </button>
                                                                    <button
                                                                        type="button"
                                                                        className="vrm-action-icon-btn edit"
                                                                        onClick={() => handleOpenEditPhotoModal(item)}
                                                                        title="Edit Details"
                                                                        aria-label="Edit Details"
                                                                    >
                                                                        <i className="far fa-edit"></i>
                                                                    </button>
                                                                    <button
                                                                        type="button"
                                                                        className="vrm-action-icon-btn delete"
                                                                        onClick={() => setPhotoToDelete(item)}
                                                                        title="Delete Photo"
                                                                        aria-label="Delete Photo"
                                                                    >
                                                                        <i className="far fa-trash-alt"></i>
                                                                    </button>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    );
                                                })}
                                            </tbody>
                                        </table>
                                    </div>
                                ) : (
                                    /* Grid View */
                                    <div className="vrm-photo-grid">
                                        {filteredGallery.map((item, idx) => (
                                            <div className="vrm-grid-photo-card" key={item.id}>
                                                <div className="vrm-grid-thumb-box">
                                                    <img
                                                        src={item.thumbPath || item.imagePath}
                                                        alt={item.altText || item.caption}
                                                        className="vrm-grid-thumb-img"
                                                    />
                                                    <span className="badge bg-dark bg-opacity-75 text-white position-absolute top-0 start-0 m-2 px-2 py-1 rounded-pill small">
                                                        {item.category}
                                                    </span>
                                                </div>
                                                <div className="p-3 d-flex flex-column justify-content-between flex-1">
                                                    <div>
                                                        <div className="fw-semibold text-white mb-1" style={{ fontSize: '14px' }}>
                                                            {item.caption || 'No caption'}
                                                        </div>
                                                        <small className="text-muted d-block" style={{ fontSize: '11px' }}>
                                                            {item.altText}
                                                        </small>
                                                    </div>
                                                    <div className="d-flex align-items-center justify-content-between mt-3 pt-2 border-top border-secondary">
                                                        <span className="small text-muted">{item.eventDate}</span>
                                                        <div className="vrm-action-btns">
                                                            <button
                                                                type="button"
                                                                className={`vrm-action-icon-btn ${item.status === 'published' ? 'hide' : 'publish'}`}
                                                                onClick={() => handleTogglePhotoPublish(item)}
                                                                title={item.status === 'published' ? 'Hide Photo' : 'Approve & Publish'}
                                                                aria-label={item.status === 'published' ? 'Hide Photo' : 'Approve & Publish'}
                                                            >
                                                                <i className={`fas ${item.status === 'published' ? 'fa-eye-slash' : 'fa-check'}`}></i>
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="vrm-action-icon-btn edit"
                                                                onClick={() => handleOpenEditPhotoModal(item)}
                                                                title="Edit Details"
                                                                aria-label="Edit Details"
                                                            >
                                                                <i className="far fa-edit"></i>
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="vrm-action-icon-btn delete"
                                                                onClick={() => setPhotoToDelete(item)}
                                                                title="Delete Photo"
                                                                aria-label="Delete Photo"
                                                            >
                                                                <i className="far fa-trash-alt"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </>
                    )}

                    {/* ============================================================== */}
                    {/* TAB: ADMIN DASHBOARD                                           */}
                    {/* ============================================================== */}
                    {activeTab === 'dashboard' && (
                        <>
                            {/* Welcome & Health Status Bar */}
                            <div className="vrm-dashboard-welcome-bar">
                                <div>
                                    <h2 className="h4 fw-bold text-white mb-1">
                                        Welcome back, {currentUser?.displayName || currentUser?.username || 'Admin'} 👋
                                    </h2>
                                    <p className="text-muted small mb-0">
                                        Real-time overview of recruitment openings, candidate applications, and team culture.
                                    </p>
                                </div>
                                <div className="d-flex align-items-center gap-2">
                                    {liveStatus.isLive ? (
                                        <div className="vrm-live-badge-pill operational">
                                            <span className="vrm-pulse-dot"></span>
                                            <span>Careers Site Live {liveStatus.latency !== null ? `(${liveStatus.latency}ms)` : ''}</span>
                                        </div>
                                    ) : (
                                        <div className="vrm-live-badge-pill failed">
                                            <i className="fas fa-exclamation-triangle"></i>
                                            <span>Status Check Failed</span>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* 1. Four Stat Cards (Real Data Only) */}
                            <div className="vrm-admin-stats-grid mb-4">
                                {/* 1. Active Jobs */}
                                <div className="vrm-admin-stat-card" onClick={() => setActiveTab('jobs')} style={{ cursor: 'pointer' }} title="View Job Openings">
                                    <div className="vrm-stat-left">
                                        <div className="vrm-stat-icon-tile blue">
                                            <i className="fas fa-briefcase"></i>
                                        </div>
                                        <div>
                                            <div className="vrm-stat-label">Active Jobs</div>
                                            <div className="vrm-stat-value">{jobStats.published} <small className="text-muted fs-6">/ {jobStats.total}</small></div>
                                        </div>
                                    </div>
                                    <svg className="vrm-stat-sparkline" viewBox="0 0 100 40" fill="none">
                                        <path d="M0 34 Q 25 38, 45 22 T 80 12 T 100 24" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" />
                                    </svg>
                                </div>

                                {/* 2. Total Applications */}
                                <div className="vrm-admin-stat-card" onClick={() => setActiveTab('applications')} style={{ cursor: 'pointer' }} title="View Applications">
                                    <div className="vrm-stat-left">
                                        <div className="vrm-stat-icon-tile purple">
                                            <i className="fas fa-file-alt"></i>
                                        </div>
                                        <div>
                                            <div className="vrm-stat-label">Total Applications</div>
                                            <div className="vrm-stat-value">
                                                {appStats.total}
                                                {appStats.new > 0 && <span className="badge bg-danger rounded-pill fs-6 ms-2">{appStats.new} new</span>}
                                            </div>
                                        </div>
                                    </div>
                                    <svg className="vrm-stat-sparkline" viewBox="0 0 100 40" fill="none">
                                        <path d="M0 28 Q 30 36, 50 18 T 85 8 T 100 20" stroke="#8b5cf6" strokeWidth="2.5" strokeLinecap="round" />
                                    </svg>
                                </div>

                                {/* 3. Life at VRM Photos */}
                                <div className="vrm-admin-stat-card" onClick={() => setActiveTab('gallery')} style={{ cursor: 'pointer' }} title="View Life at VRM Gallery">
                                    <div className="vrm-stat-left">
                                        <div className="vrm-stat-icon-tile green">
                                            <i className="far fa-images"></i>
                                        </div>
                                        <div>
                                            <div className="vrm-stat-label">Life at VRM Photos</div>
                                            <div className="vrm-stat-value green">{galleryStats.published} <small className="text-muted fs-6">Live</small></div>
                                        </div>
                                    </div>
                                    <svg className="vrm-stat-sparkline" viewBox="0 0 100 40" fill="none">
                                        <path d="M0 32 Q 30 36, 50 18 T 85 8 T 100 20" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" />
                                    </svg>
                                </div>

                                {/* 4. New Applications */}
                                <div className="vrm-admin-stat-card" onClick={() => { setActiveTab('applications'); setAppFilterStatus('new'); }} style={{ cursor: 'pointer' }} title="Filter New Applications">
                                    <div className="vrm-stat-left">
                                        <div className="vrm-stat-icon-tile cyan">
                                            <i className="fas fa-user-clock"></i>
                                        </div>
                                        <div>
                                            <div className="vrm-stat-label">New Applications</div>
                                            <div className="vrm-stat-value" style={{ color: '#06b6d4' }}>
                                                {appStats.new} <small className="text-muted fs-6">Pending</small>
                                            </div>
                                        </div>
                                    </div>
                                    <svg className="vrm-stat-sparkline" viewBox="0 0 100 40" fill="none">
                                        <path d="M0 26 Q 35 24, 60 32 T 100 22" stroke="#06b6d4" strokeWidth="2.5" strokeLinecap="round" />
                                    </svg>
                                </div>
                            </div>

                            {/* Main Dashboard 2-Column Grid */}
                            <div className="vrm-dashboard-grid">
                                {/* Left Column: Post a Job & Life at VRM Upload */}
                                <div>
                                    {/* CARD 1: Post a Job Opening */}
                                    <div className="vrm-dash-card">
                                        <div className="vrm-dash-card-header">
                                            <div className="vrm-dash-card-title-group">
                                                <div className="vrm-dash-card-icon blue">
                                                    <i className="fas fa-briefcase"></i>
                                                </div>
                                                <div>
                                                    <h3 className="vrm-dash-card-title">Post a Job Opening</h3>
                                                    <p className="vrm-dash-card-sub">Publish directly to live /careers page or save as draft</p>
                                                </div>
                                            </div>
                                        </div>

                                        {dashJobMsg.text && (
                                            <div className={`alert alert-${dashJobMsg.type} py-2 px-3 small rounded-3 mb-3 d-flex align-items-center justify-content-between`}>
                                                <span>{dashJobMsg.text}</span>
                                                <button type="button" className="btn-close btn-close-white small p-0" onClick={() => setDashJobMsg({ type: '', text: '' })}></button>
                                            </div>
                                        )}

                                        <form onSubmit={(e) => { e.preventDefault(); handleSaveDashJob('published'); }}>
                                            {/* Job Title */}
                                            <div className="mb-3">
                                                <label className="vrm-admin-auth-label">Job Title *</label>
                                                <input
                                                    type="text"
                                                    className="vrm-admin-auth-input"
                                                    placeholder="e.g. Senior Machine Learning Engineer"
                                                    value={dashJobTitle}
                                                    onChange={(e) => setDashJobTitle(e.target.value)}
                                                    required
                                                />
                                            </div>

                                            {/* Department, Location, Job Type */}
                                            <div className="row g-2 mb-3">
                                                <div className="col-md-4">
                                                    <label className="vrm-admin-auth-label">Department</label>
                                                    <select
                                                        className="vrm-admin-auth-input"
                                                        value={dashJobDept}
                                                        onChange={(e) => setDashJobDept(e.target.value)}
                                                    >
                                                        <option value="Engineering">Engineering</option>
                                                        <option value="AI & Machine Learning">AI & Machine Learning</option>
                                                        <option value="Product & Design">Product & Design</option>
                                                        <option value="Marketing & Sales">Marketing & Sales</option>
                                                        <option value="Operations">Operations</option>
                                                        <option value="Human Resources">Human Resources</option>
                                                        <option value="Customer Success">Customer Success</option>
                                                    </select>
                                                </div>
                                                <div className="col-md-4">
                                                    <label className="vrm-admin-auth-label">Location</label>
                                                    <select
                                                        className="vrm-admin-auth-input"
                                                        value={dashJobLocation}
                                                        onChange={(e) => setDashJobLocation(e.target.value)}
                                                    >
                                                        <option value="Bengaluru">Bengaluru</option>
                                                        <option value="Madurai">Madurai</option>
                                                        <option value="Remote">Remote</option>
                                                        <option value="Hybrid">Hybrid</option>
                                                    </select>
                                                </div>
                                                <div className="col-md-4">
                                                    <label className="vrm-admin-auth-label">Job Type</label>
                                                    <select
                                                        className="vrm-admin-auth-input"
                                                        value={dashJobType}
                                                        onChange={(e) => setDashJobType(e.target.value)}
                                                    >
                                                        <option value="Full-time">Full-time</option>
                                                        <option value="Part-time">Part-time</option>
                                                        <option value="Contract">Contract</option>
                                                        <option value="Internship">Internship</option>
                                                    </select>
                                                </div>
                                            </div>

                                            {/* Job Description (Rich Text) */}
                                            <div className="mb-3">
                                                <label className="vrm-admin-auth-label">Job Description *</label>
                                                <div className="vrm-rich-toolbar">
                                                    <button type="button" className="vrm-rich-btn" onClick={() => handleFormatDesc('bold')} title="Bold">
                                                        <b>B</b>
                                                    </button>
                                                    <button type="button" className="vrm-rich-btn" onClick={() => handleFormatDesc('italic')} title="Italic">
                                                        <i>I</i>
                                                    </button>
                                                    <button type="button" className="vrm-rich-btn" onClick={() => handleFormatDesc('underline')} title="Underline">
                                                        <u>U</u>
                                                    </button>
                                                    <span className="text-secondary opacity-25 mx-1">|</span>
                                                    <button type="button" className="vrm-rich-btn" onClick={() => handleFormatDesc('insertUnorderedList')} title="Bullet List">
                                                        <i className="fas fa-list-ul"></i>
                                                    </button>
                                                    <button type="button" className="vrm-rich-btn" onClick={() => handleFormatDesc('insertOrderedList')} title="Numbered List">
                                                        <i className="fas fa-list-ol"></i>
                                                    </button>
                                                    <button
                                                        type="button"
                                                        className="vrm-rich-btn"
                                                        onClick={() => {
                                                            const url = prompt('Enter link URL:');
                                                            if (url) handleFormatDesc('createLink', url);
                                                        }}
                                                        title="Insert Link"
                                                    >
                                                        <i className="fas fa-link"></i>
                                                    </button>
                                                </div>
                                                <div
                                                    ref={dashEditorRef}
                                                    contentEditable
                                                    className="vrm-rich-editor"
                                                    data-placeholder="Enter role responsibilities, team impact, and required qualifications..."
                                                    onInput={() => {
                                                        if (dashEditorRef.current) {
                                                            setDashJobDesc(dashEditorRef.current.innerHTML);
                                                        }
                                                    }}
                                                />
                                            </div>

                                            {/* Requirements Chips */}
                                            <div className="mb-3">
                                                <label className="vrm-admin-auth-label">Requirements & Qualifications</label>
                                                <div className="d-flex gap-2">
                                                    <input
                                                        type="text"
                                                        className="vrm-admin-auth-input"
                                                        placeholder="e.g. 3+ years experience with Python & LLMs"
                                                        value={dashReqInput}
                                                        onChange={(e) => setDashReqInput(e.target.value)}
                                                        onKeyDown={(e) => {
                                                            if (e.key === 'Enter') {
                                                                e.preventDefault();
                                                                handleAddDashRequirement();
                                                            }
                                                        }}
                                                    />
                                                    <button
                                                        type="button"
                                                        className="vrm-btn-draft"
                                                        onClick={handleAddDashRequirement}
                                                    >
                                                        <i className="fas fa-plus me-1"></i> Add
                                                    </button>
                                                </div>
                                                {dashRequirements.length > 0 && (
                                                    <div className="vrm-chips-wrap">
                                                        {dashRequirements.map((req, idx) => (
                                                            <span key={idx} className="vrm-chip-item">
                                                                <span>{req}</span>
                                                                <i
                                                                    className="fas fa-times vrm-chip-close"
                                                                    onClick={() => handleRemoveDashRequirement(idx)}
                                                                    title="Remove requirement"
                                                                ></i>
                                                            </span>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>

                                            {/* Action Buttons */}
                                            <div className="d-flex justify-content-between align-items-center mt-4 pt-2 border-top border-secondary border-opacity-25">
                                                <button
                                                    type="button"
                                                    className="vrm-btn-draft"
                                                    onClick={() => handleSaveDashJob('draft')}
                                                    disabled={isSavingDashJob}
                                                >
                                                    <i className="fas fa-save me-2"></i>
                                                    {isSavingDashJob ? 'Saving...' : 'Save as Draft'}
                                                </button>
                                                <button
                                                    type="submit"
                                                    className="vrm-btn-publish"
                                                    disabled={isSavingDashJob}
                                                >
                                                    <i className="fas fa-paper-plane me-2"></i>
                                                    {isSavingDashJob ? 'Publishing...' : 'Publish Job'}
                                                </button>
                                            </div>
                                        </form>
                                    </div>

                                    {/* CARD 2: Life at VRM - Upload Photos */}
                                    <div className="vrm-dash-card">
                                        <div className="vrm-dash-card-header">
                                            <div className="vrm-dash-card-title-group">
                                                <div className="vrm-dash-card-icon green">
                                                    <i className="fas fa-camera"></i>
                                                </div>
                                                <div>
                                                    <h3 className="vrm-dash-card-title">Life at VRM - Upload Photos</h3>
                                                    <p className="vrm-dash-card-sub">Publish employee moments, hackathons, and celebrations</p>
                                                </div>
                                            </div>
                                        </div>

                                        {dashUploadMsg.text && (
                                            <div className={`alert alert-${dashUploadMsg.type} py-2 px-3 small rounded-3 mb-3 d-flex align-items-center justify-content-between`}>
                                                <span>{dashUploadMsg.text}</span>
                                                <button type="button" className="btn-close btn-close-white small p-0" onClick={() => setDashUploadMsg({ type: '', text: '' })}></button>
                                            </div>
                                        )}

                                        {/* Drag and Drop Zone */}
                                        <div
                                            className={`vrm-dropzone-box ${isDraggingFiles ? 'dragging' : ''}`}
                                            onDragOver={(e) => { e.preventDefault(); setIsDraggingFiles(true); }}
                                            onDragLeave={() => setIsDraggingFiles(false)}
                                            onDrop={(e) => {
                                                e.preventDefault();
                                                setIsDraggingFiles(false);
                                                if (e.dataTransfer.files) handleAddFiles(e.dataTransfer.files);
                                            }}
                                            onClick={() => dashFileInputRef.current?.click()}
                                        >
                                            <i className="fas fa-cloud-upload-alt text-primary mb-2" style={{ fontSize: '36px' }}></i>
                                            <div className="fw-semibold text-white mb-1">Drag and drop employee photos here, or click to browse</div>
                                            <div className="text-muted small">JPG, PNG, WEBP • Max 10MB each • Multiple files supported</div>
                                            <input
                                                ref={dashFileInputRef}
                                                type="file"
                                                multiple
                                                accept="image/jpeg,image/png,image/webp"
                                                onChange={(e) => handleAddFiles(e.target.files)}
                                                style={{ display: 'none' }}
                                            />
                                        </div>

                                        {/* Thumbnail Previews */}
                                        {dashUploadFiles.length > 0 && (
                                            <div className="vrm-upload-previews-grid">
                                                {dashUploadFiles.map((f) => (
                                                    <div key={f.id} className="vrm-upload-thumb-card" title={f.name}>
                                                        <img src={f.previewUrl} alt={f.name} />
                                                        <button
                                                            type="button"
                                                            className="vrm-upload-thumb-delete"
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                handleRemoveDashFile(f.id);
                                                            }}
                                                            title="Remove photo"
                                                        >
                                                            <i className="fas fa-times"></i>
                                                        </button>
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        {/* Compact metadata row */}
                                        <div className="row g-2 mt-2 mb-3">
                                            <div className="col-md-4">
                                                <label className="vrm-admin-auth-label">Category</label>
                                                <select
                                                    className="vrm-admin-auth-input"
                                                    value={dashCategory}
                                                    onChange={(e) => setDashCategory(e.target.value)}
                                                >
                                                    <option value="Team Event">Team Event</option>
                                                    <option value="Fun Friday">Fun Friday</option>
                                                    <option value="Hackathon">Hackathon</option>
                                                    <option value="Festival">Festival</option>
                                                    <option value="Office Life">Office Life</option>
                                                    <option value="Learning">Learning</option>
                                                </select>
                                            </div>
                                            <div className="col-md-4">
                                                <label className="vrm-admin-auth-label">Event Date</label>
                                                <input
                                                    type="date"
                                                    className="vrm-admin-auth-input"
                                                    value={dashEventDate}
                                                    onChange={(e) => setDashEventDate(e.target.value)}
                                                />
                                            </div>
                                            <div className="col-md-4">
                                                <label className="vrm-admin-auth-label">Alt Text *</label>
                                                <input
                                                    type="text"
                                                    className="vrm-admin-auth-input"
                                                    placeholder="Required for SEO & accessibility"
                                                    value={dashAltText}
                                                    onChange={(e) => setDashAltText(e.target.value)}
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="mb-3">
                                            <label className="vrm-admin-auth-label">Optional Caption</label>
                                            <input
                                                type="text"
                                                className="vrm-admin-auth-input"
                                                placeholder="e.g. AI Hackathon Winners with CEO"
                                                value={dashCaption}
                                                onChange={(e) => setDashCaption(e.target.value)}
                                            />
                                        </div>

                                        <button
                                            type="button"
                                            className="vrm-btn-publish w-100 mt-2"
                                            onClick={handleUploadDashPhotos}
                                            disabled={isUploadingDashPhotos || dashUploadFiles.length === 0}
                                        >
                                            <i className="fas fa-cloud-upload-alt me-2"></i>
                                            {isUploadingDashPhotos
                                                ? (dashUploadProgress.message || 'Processing photos with sharp...')
                                                : `Upload & Publish (${dashUploadFiles.length} photo${dashUploadFiles.length === 1 ? '' : 's'})`}
                                        </button>
                                    </div>
                                </div>

                                {/* Right Column: Live Website Status & Recent Activity */}
                                <div>
                                    {/* CARD 3: Live Website Status */}
                                    <div className="vrm-dash-card">
                                        <div className="vrm-dash-card-header">
                                            <div className="vrm-dash-card-title-group">
                                                <div className="vrm-dash-card-icon cyan">
                                                    <i className="fas fa-globe"></i>
                                                </div>
                                                <div>
                                                    <h3 className="vrm-dash-card-title">Live Website Status</h3>
                                                    <p className="vrm-dash-card-sub">Public careers endpoint health</p>
                                                </div>
                                            </div>
                                        </div>

                                        {liveStatus.isLive ? (
                                            <div className="vrm-live-badge-pill operational mb-3">
                                                <span className="vrm-pulse-dot"></span>
                                                <span>Careers Website Operational</span>
                                            </div>
                                        ) : (
                                            <div className="vrm-live-badge-pill failed mb-3">
                                                <i className="fas fa-exclamation-triangle"></i>
                                                <span>Status Check Failed</span>
                                            </div>
                                        )}

                                        <div className="vrm-status-metric-row">
                                            <span className="vrm-status-metric-label">Target URL</span>
                                            <span className="vrm-status-metric-val">vrmaitechnology.com/careers</span>
                                        </div>
                                        <div className="vrm-status-metric-row">
                                            <span className="vrm-status-metric-label">API Health</span>
                                            <span className="vrm-status-metric-val" style={{ color: liveStatus.isLive ? '#34d399' : '#f87171' }}>
                                                {liveStatus.isLive ? '200 OK' : 'Unavailable'}
                                            </span>
                                        </div>
                                        <div className="vrm-status-metric-row">
                                            <span className="vrm-status-metric-label">Response Time</span>
                                            <span className="vrm-status-metric-val">
                                                {liveStatus.latency !== null ? `${liveStatus.latency} ms` : 'Checking...'}
                                            </span>
                                        </div>
                                        <div className="vrm-status-metric-row">
                                            <span className="vrm-status-metric-label">Last Checked</span>
                                            <span className="vrm-status-metric-val">
                                                {liveStatus.lastChecked ? formatRelativeTime(liveStatus.lastChecked) : 'Just now'}
                                            </span>
                                        </div>

                                        <div className="d-flex flex-column gap-2 mt-4">
                                            <button
                                                type="button"
                                                className="vrm-btn-draft w-100 text-center"
                                                onClick={checkLiveStatus}
                                                disabled={liveStatus.checking}
                                            >
                                                <i className={`fas fa-sync-alt me-2 ${liveStatus.checking ? 'fa-spin' : ''}`}></i>
                                                {liveStatus.checking ? 'Checking...' : 'Check Status Again'}
                                            </button>
                                            <a
                                                href="/careers"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="vrm-btn-publish w-100 text-center text-decoration-none d-flex align-items-center justify-content-center"
                                            >
                                                <i className="fas fa-external-link-alt me-2"></i>
                                                <span>Visit Careers Website</span>
                                            </a>
                                        </div>
                                    </div>

                                    {/* CARD 4: Recent Activity */}
                                    <div className="vrm-dash-card">
                                        <div className="vrm-dash-card-header">
                                            <div className="vrm-dash-card-title-group">
                                                <div className="vrm-dash-card-icon purple">
                                                    <i className="fas fa-history"></i>
                                                </div>
                                                <div>
                                                    <h3 className="vrm-dash-card-title">Recent Activity</h3>
                                                    <p className="vrm-dash-card-sub">Latest recruitment & culture events</p>
                                                </div>
                                            </div>
                                        </div>

                                        {isLoadingActivity ? (
                                            <div className="text-center py-4 text-muted small">
                                                <div className="spinner-border spinner-border-sm text-primary me-2"></div>
                                                Loading activity...
                                            </div>
                                        ) : recentActivity.length === 0 ? (
                                            <div className="text-center py-4 text-muted small">
                                                No recent activity recorded yet.
                                            </div>
                                        ) : (
                                            <div>
                                                {recentActivity.slice(0, 5).map((item) => (
                                                    <div key={item.id} className="vrm-activity-item-row">
                                                        <div className={`vrm-activity-badge-tile ${item.type || 'info'}`}>
                                                            <i className={
                                                                item.type === 'job'
                                                                    ? 'fas fa-briefcase'
                                                                    : item.type === 'photo'
                                                                    ? 'fas fa-camera'
                                                                    : item.type === 'application'
                                                                    ? 'fas fa-file-alt'
                                                                    : 'fas fa-info-circle'
                                                            }></i>
                                                        </div>
                                                        <div className="flex-grow-1">
                                                            <div className="vrm-activity-text">{item.text}</div>
                                                            <div className="vrm-activity-meta">
                                                                <span className="text-light fw-medium">{item.admin || 'System'}</span> • {formatRelativeTime(item.timestamp)}
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </>
                    )}

                    {/* ============================================================== */}
                    {/* TAB: JOB OPENINGS                                              */}
                    {/* ============================================================== */}
                    {activeTab === 'jobs' && (
                        <>
                            <div className="d-flex flex-wrap justify-content-between align-items-center mb-4 gap-3">
                                <div>
                                    <h2 className="h4 fw-bold text-white mb-1">Job Openings Management</h2>
                                    <p className="text-muted small mb-0">Publish, modify, and track career opportunities live on the website.</p>
                                </div>
                                <button
                                    type="button"
                                    className="vrm-btn-primary-upload"
                                    onClick={handleOpenAddJobModal}
                                >
                                    <i className="fas fa-plus"></i>
                                    <span>Post New Job</span>
                                </button>
                            </div>

                            {/* Metric Cards */}
                            <div className="vrm-admin-stats-grid mb-4">
                                <div className="vrm-admin-stat-card">
                                    <div className="vrm-stat-left">
                                        <div className="vrm-stat-icon-tile blue"><i className="fas fa-briefcase"></i></div>
                                        <div>
                                            <div className="vrm-stat-label">Total Openings</div>
                                            <div className="vrm-stat-value">{jobStats.total}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="vrm-admin-stat-card">
                                    <div className="vrm-stat-left">
                                        <div className="vrm-stat-icon-tile green"><i className="far fa-check-circle"></i></div>
                                        <div>
                                            <div className="vrm-stat-label">Published (Live)</div>
                                            <div className="vrm-stat-value green">{jobStats.published}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="vrm-admin-stat-card">
                                    <div className="vrm-stat-left">
                                        <div className="vrm-stat-icon-tile purple"><i className="far fa-edit"></i></div>
                                        <div>
                                            <div className="vrm-stat-label">Drafts</div>
                                            <div className="vrm-stat-value">{jobStats.draft}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="vrm-admin-stat-card">
                                    <div className="vrm-stat-left">
                                        <div className="vrm-stat-icon-tile slate"><i className="fas fa-archive"></i></div>
                                        <div>
                                            <div className="vrm-stat-label">Closed</div>
                                            <div className="vrm-stat-value">{jobStats.closed}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Control Card */}
                            <div className="vrm-admin-controls-card mb-4">
                                <div className="d-flex flex-wrap justify-content-between align-items-center gap-3">
                                    <div className="vrm-gallery-pill-nav">
                                        <button
                                            className={`vrm-gallery-pill-btn ${jobFilterStatus === 'all' ? 'active' : ''}`}
                                            onClick={() => setJobFilterStatus('all')}
                                        >
                                            All ({jobs.length})
                                        </button>
                                        <button
                                            className={`vrm-gallery-pill-btn ${jobFilterStatus === 'published' ? 'active' : ''}`}
                                            onClick={() => setJobFilterStatus('published')}
                                        >
                                            Published ({jobStats.published})
                                        </button>
                                        <button
                                            className={`vrm-gallery-pill-btn ${jobFilterStatus === 'draft' ? 'active' : ''}`}
                                            onClick={() => setJobFilterStatus('draft')}
                                        >
                                            Drafts ({jobStats.draft})
                                        </button>
                                        <button
                                            className={`vrm-gallery-pill-btn ${jobFilterStatus === 'closed' ? 'active' : ''}`}
                                            onClick={() => setJobFilterStatus('closed')}
                                        >
                                            Closed ({jobStats.closed})
                                        </button>
                                    </div>

                                    <div className="vrm-filter-search-box">
                                        <i className="fas fa-search vrm-filter-search-icon"></i>
                                        <input
                                            type="text"
                                            className="vrm-filter-search-input"
                                            placeholder="Search openings..."
                                            value={globalSearch}
                                            onChange={(e) => setGlobalSearch(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Jobs Table */}
                            <div className="vrm-admin-table-card">
                                {isLoadingJobs ? (
                                    <div className="text-center py-5">
                                        <div className="spinner-border text-primary spinner-border-sm me-2" role="status"></div>
                                        <span className="text-muted">Loading job openings...</span>
                                    </div>
                                ) : filteredJobs.length === 0 ? (
                                    <div className="vrm-empty-state-box">
                                        <div className="vrm-empty-icon-wrap"><i className="fas fa-briefcase"></i></div>
                                        <div className="vrm-empty-title">No job openings found</div>
                                        <div className="vrm-empty-desc">Create your first role to start attracting talent.</div>
                                        <button className="vrm-btn-primary-upload d-inline-flex mx-auto" onClick={handleOpenAddJobModal}>
                                            <i className="fas fa-plus"></i> Post New Job
                                        </button>
                                    </div>
                                ) : (
                                    <div className="table-responsive">
                                        <table className="vrm-dark-table">
                                            <thead>
                                                <tr>
                                                    <th>Role Title</th>
                                                    <th>Department</th>
                                                    <th>Location</th>
                                                    <th>Type</th>
                                                    <th>Status</th>
                                                    <th>Posted Date</th>
                                                    <th className="text-end pe-3" style={{ minWidth: '150px' }}>Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {filteredJobs.map(job => (
                                                    <tr key={job.id}>
                                                        <td>
                                                            <div className="fw-bold text-white">{job.title}</div>
                                                            <small className="text-muted font-monospace">/careers/{job.slug}</small>
                                                        </td>
                                                        <td><span className="vrm-badge-cat">{job.department}</span></td>
                                                        <td><i className="far fa-map-marker-alt text-muted me-1"></i> {job.location}</td>
                                                        <td>{job.employmentType}</td>
                                                        <td>
                                                            <select
                                                                className="vrm-filter-select py-1 px-2"
                                                                value={job.status}
                                                                onChange={(e) => handleQuickJobStatusChange(job.id, e.target.value)}
                                                                style={{ fontSize: '12px' }}
                                                            >
                                                                <option value="published">Published</option>
                                                                <option value="draft">Draft</option>
                                                                <option value="closed">Closed</option>
                                                            </select>
                                                        </td>
                                                        <td className="small text-muted">
                                                            {job.postedAt ? new Date(job.postedAt).toLocaleDateString() : '—'}
                                                        </td>
                                                        <td className="text-end pe-3" style={{ minWidth: '150px' }}>
                                                            <div className="vrm-action-btns justify-content-end">
                                                                <Link
                                                                    to={`/careers/${job.slug}`}
                                                                    target="_blank"
                                                                    className="vrm-action-icon-btn preview"
                                                                    title="Preview Live Job Posting"
                                                                    aria-label="Preview Live Job Posting"
                                                                >
                                                                    <i className="far fa-external-link"></i>
                                                                </Link>
                                                                <button
                                                                    type="button"
                                                                    className="vrm-action-icon-btn edit"
                                                                    onClick={() => handleOpenEditJobModal(job)}
                                                                    title="Edit Job Opening"
                                                                    aria-label="Edit Job Opening"
                                                                >
                                                                    <i className="far fa-edit"></i>
                                                                </button>
                                                                <button
                                                                    type="button"
                                                                    className="vrm-action-icon-btn delete"
                                                                    onClick={() => setJobToDelete(job)}
                                                                    title="Delete Job Opening"
                                                                    aria-label="Delete Job Opening"
                                                                >
                                                                    <i className="far fa-trash-alt"></i>
                                                                </button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                )}
                            </div>
                        </>
                    )}

                    {/* ============================================================== */}
                    {/* TAB: APPLICATIONS                                              */}
                    {/* ============================================================== */}
                    {activeTab === 'applications' && (
                        <>
                            <div className="d-flex justify-content-between align-items-center mb-4">
                                <div>
                                    <h2 className="h4 fw-bold text-white mb-1">Candidate Applications</h2>
                                    <p className="text-muted small mb-0">Review applicants, download resumes, and manage recruitment pipeline.</p>
                                </div>
                            </div>

                            {/* Metric Cards */}
                            <div className="vrm-admin-stats-grid mb-4">
                                <div className="vrm-admin-stat-card">
                                    <div className="vrm-stat-left">
                                        <div className="vrm-stat-icon-tile blue"><i className="fas fa-users"></i></div>
                                        <div>
                                            <div className="vrm-stat-label">Total Received</div>
                                            <div className="vrm-stat-value">{appStats.total}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="vrm-admin-stat-card">
                                    <div className="vrm-stat-left">
                                        <div className="vrm-stat-icon-tile purple"><i className="fas fa-bell"></i></div>
                                        <div>
                                            <div className="vrm-stat-label">New Applications</div>
                                            <div className="vrm-stat-value text-danger">{appStats.new}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="vrm-admin-stat-card">
                                    <div className="vrm-stat-left">
                                        <div className="vrm-stat-icon-tile green"><i className="fas fa-star"></i></div>
                                        <div>
                                            <div className="vrm-stat-label">Shortlisted</div>
                                            <div className="vrm-stat-value green">{appStats.shortlisted}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="vrm-admin-stat-card">
                                    <div className="vrm-stat-left">
                                        <div className="vrm-stat-icon-tile slate"><i className="fas fa-user-check"></i></div>
                                        <div>
                                            <div className="vrm-stat-label">Reviewed</div>
                                            <div className="vrm-stat-value">{appStats.reviewed}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Controls Card */}
                            <div className="vrm-admin-controls-card mb-4">
                                <div className="d-flex flex-wrap justify-content-between align-items-center gap-3">
                                    <div className="vrm-gallery-pill-nav">
                                        <button className={`vrm-gallery-pill-btn ${appFilterStatus === 'all' ? 'active' : ''}`} onClick={() => setAppFilterStatus('all')}>
                                            All ({applications.length})
                                        </button>
                                        <button className={`vrm-gallery-pill-btn ${appFilterStatus === 'new' ? 'active' : ''}`} onClick={() => setAppFilterStatus('new')}>
                                            New ({appStats.new})
                                        </button>
                                        <button className={`vrm-gallery-pill-btn ${appFilterStatus === 'reviewed' ? 'active' : ''}`} onClick={() => setAppFilterStatus('reviewed')}>
                                            Reviewed ({appStats.reviewed})
                                        </button>
                                        <button className={`vrm-gallery-pill-btn ${appFilterStatus === 'shortlisted' ? 'active' : ''}`} onClick={() => setAppFilterStatus('shortlisted')}>
                                            Shortlisted ({appStats.shortlisted})
                                        </button>
                                        <button className={`vrm-gallery-pill-btn ${appFilterStatus === 'rejected' ? 'active' : ''}`} onClick={() => setAppFilterStatus('rejected')}>
                                            Rejected ({appStats.rejected})
                                        </button>
                                    </div>

                                    <div className="vrm-filter-search-box">
                                        <i className="fas fa-search vrm-filter-search-icon"></i>
                                        <input
                                            type="text"
                                            className="vrm-filter-search-input"
                                            placeholder="Search candidates..."
                                            value={globalSearch}
                                            onChange={(e) => setGlobalSearch(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Resume Download / Action Inline Toast */}
                            {resumeToast && (
                                <div className={`alert ${resumeToast.type === 'danger' ? 'alert-danger' : 'alert-success'} d-flex align-items-center justify-content-between py-2 px-3 mb-4 rounded-3 shadow-sm`} role="alert">
                                    <div className="d-flex align-items-center">
                                        <i className={`fas ${resumeToast.type === 'danger' ? 'fa-exclamation-circle' : 'fa-check-circle'} me-2`}></i>
                                        <span style={{ fontSize: '13.5px' }}>{resumeToast.message}</span>
                                    </div>
                                    <button type="button" className="btn-close btn-close-white ms-3" onClick={() => setResumeToast(null)} aria-label="Close"></button>
                                </div>
                            )}

                            {/* Applications Table */}
                            <div className="vrm-admin-table-card">
                                {isLoadingApps ? (
                                    <div className="text-center py-5">
                                        <div className="spinner-border text-primary spinner-border-sm me-2" role="status"></div>
                                        <span className="text-muted">Loading applications...</span>
                                    </div>
                                ) : filteredApplications.length === 0 ? (
                                    <div className="vrm-empty-state-box">
                                        <div className="vrm-empty-icon-wrap"><i className="fas fa-file-alt"></i></div>
                                        <div className="vrm-empty-title">No candidate applications found</div>
                                        <div className="vrm-empty-desc">New applications submitted via /careers will appear here.</div>
                                    </div>
                                ) : (
                                    <div className="table-responsive">
                                        <table className="vrm-dark-table">
                                            <thead>
                                                <tr>
                                                    <th>Applicant Name</th>
                                                    <th>Position</th>
                                                    <th>Contact</th>
                                                    <th>Experience</th>
                                                    <th>Resume</th>
                                                    <th>Status</th>
                                                    <th>Applied Date</th>
                                                    <th className="text-end pe-3" style={{ minWidth: '150px' }}>Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {filteredApplications.map(app => (
                                                    <tr key={app.id}>
                                                        <td>
                                                            <div className="fw-bold text-white">{app.fullName}</div>
                                                            <small className="text-muted">{app.email}</small>
                                                        </td>
                                                        <td><span className="vrm-badge-cat">{app.position}</span></td>
                                                        <td className="small text-muted">{app.phone}</td>
                                                        <td className="small">{app.experience}</td>
                                                        <td>
                                                            {app.storedFileName ? (
                                                                <button
                                                                    type="button"
                                                                    className="vrm-btn-download-resume"
                                                                    onClick={() => handleDownloadResume(app)}
                                                                    disabled={downloadingAppId === app.id}
                                                                    title={`Download ${app.originalFileName || 'Resume'}`}
                                                                    aria-label={`Download resume for ${app.fullName}`}
                                                                >
                                                                    {downloadingAppId === app.id ? (
                                                                        <>
                                                                            <span className="spinner-border spinner-border-sm" role="status" style={{ width: '13px', height: '13px' }}></span>
                                                                            <span>Downloading...</span>
                                                                        </>
                                                                    ) : (
                                                                        <>
                                                                            <i className="fas fa-file-download"></i>
                                                                            <span>Download</span>
                                                                        </>
                                                                    )}
                                                                </button>
                                                            ) : (
                                                                <span className="text-muted small">None</span>
                                                            )}
                                                        </td>
                                                        <td>
                                                            <select
                                                                className="vrm-filter-select py-1 px-2"
                                                                value={app.status}
                                                                onChange={(e) => handleUpdateAppStatus(app.id, e.target.value)}
                                                                style={{ fontSize: '12px' }}
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
                                                        <td className="text-end pe-3" style={{ minWidth: '150px' }}>
                                                            <div className="vrm-action-btns justify-content-end">
                                                                <button
                                                                    type="button"
                                                                    className="vrm-action-icon-btn view"
                                                                    onClick={() => setSelectedApp(app)}
                                                                    title="View Candidate Application"
                                                                    aria-label="View Candidate Application"
                                                                >
                                                                    <i className="far fa-eye"></i>
                                                                </button>
                                                                <button
                                                                    type="button"
                                                                    className="vrm-action-icon-btn delete"
                                                                    onClick={() => setAppToDelete(app)}
                                                                    title="Delete Application"
                                                                    aria-label="Delete Application"
                                                                >
                                                                    <i className="far fa-trash-alt"></i>
                                                                </button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                )}
                            </div>
                        </>
                    )}

                    {/* ============================================================== */}
                    {/* TAB: MANAGE ADMINS (Superadmin only)                           */}
                    {/* ============================================================== */}
                    {activeTab === 'admins' && isSuperAdmin && (
                        <>
                            <div className="d-flex flex-wrap justify-content-between align-items-center mb-4 gap-3">
                                <div>
                                    <h2 className="h4 fw-bold text-white mb-1">Admin Account Management</h2>
                                    <p className="text-muted small mb-0">Control team access, issue temporary credentials, and enforce role permissions.</p>
                                </div>
                                <button
                                    type="button"
                                    className="vrm-btn-primary-upload"
                                    onClick={handleOpenAddAdminModal}
                                >
                                    <i className="fas fa-user-plus"></i>
                                    <span>Add New Admin</span>
                                </button>
                            </div>

                            {/* Toolbar with Search */}
                            <div className="vrm-filter-toolbar-row mb-4">
                                <div className="vrm-filter-search-box">
                                    <i className="fas fa-search vrm-filter-search-icon"></i>
                                    <input
                                        type="text"
                                        className="vrm-filter-search-input"
                                        placeholder="Search admins by name, email or role..."
                                        value={globalSearch}
                                        onChange={(e) => setGlobalSearch(e.target.value)}
                                    />
                                </div>
                            </div>

                            {/* Admins Table */}
                            <div className="vrm-admin-table-card">
                                {isLoadingAdmins ? (
                                    <div className="text-center py-5">
                                        <div className="spinner-border text-primary spinner-border-sm me-2" role="status"></div>
                                        <span className="text-muted">Loading administrators...</span>
                                    </div>
                                ) : (
                                    <div className="table-responsive">
                                        <table className="vrm-dark-table">
                                            <thead>
                                                <tr>
                                                    <th>Admin User</th>
                                                    <th>Email</th>
                                                    <th>Role</th>
                                                    <th>Status</th>
                                                    <th>Last Updated</th>
                                                    <th className="text-end pe-3" style={{ minWidth: '150px' }}>Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {filteredAdmins.map(adm => {
                                                    const isSelf = String(adm.id) === String(currentUser?.id);
                                                    return (
                                                        <tr key={adm.id}>
                                                            <td>
                                                                <div className="fw-bold text-white">
                                                                    {adm.displayName || adm.username}
                                                                    {isSelf && <span className="badge bg-secondary ms-2 small">You</span>}
                                                                </div>
                                                                <small className="text-muted font-monospace">{adm.username}</small>
                                                            </td>
                                                            <td>{adm.email}</td>
                                                            <td>
                                                                <span className={`badge ${adm.role === 'superadmin' ? 'bg-danger' : 'bg-primary'} text-uppercase`}>
                                                                    {adm.role}
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <span className={`vrm-status-badge ${adm.active ? 'published' : 'hidden'}`}>
                                                                    {adm.active ? 'Active' : 'Disabled'}
                                                                </span>
                                                                {adm.forcePasswordChange && (
                                                                    <span className="badge bg-warning text-dark ms-1 small">Temp Password</span>
                                                                )}
                                                            </td>
                                                            <td className="small text-muted">
                                                                {adm.updatedAt ? new Date(adm.updatedAt).toLocaleDateString() : '—'}
                                                            </td>
                                                            <td className="text-end pe-3" style={{ minWidth: '150px' }}>
                                                                <div className="vrm-action-btns justify-content-end">
                                                                    <button
                                                                        type="button"
                                                                        className="vrm-action-icon-btn edit"
                                                                        onClick={() => handleOpenEditAdminModal(adm)}
                                                                        title="Edit Admin Account"
                                                                        aria-label="Edit Admin Account"
                                                                    >
                                                                        <i className="far fa-edit"></i>
                                                                    </button>
                                                                    <button
                                                                        type="button"
                                                                        className="vrm-action-icon-btn key"
                                                                        onClick={() => handleResetAdminPassword(adm.id, adm.username)}
                                                                        title="Reset Password"
                                                                        aria-label="Reset Password"
                                                                    >
                                                                        <i className="fas fa-key"></i>
                                                                    </button>
                                                                    <button
                                                                        type="button"
                                                                        className="vrm-action-icon-btn delete"
                                                                        disabled={isSelf}
                                                                        onClick={() => !isSelf && setAdminToDelete(adm)}
                                                                        title={isSelf ? 'You cannot delete your own account' : 'Delete Admin Account'}
                                                                        aria-label={isSelf ? 'You cannot delete your own account' : 'Delete Admin Account'}
                                                                    >
                                                                        <i className="far fa-trash-alt"></i>
                                                                    </button>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    );
                                                })}
                                            </tbody>
                                        </table>
                                    </div>
                                )}
                            </div>
                        </>
                    )}
                </div>
            </main>

            {/* ============================================================== */}
            {/* 3. MODALS (STYLED FOR DARK THEME)                              */}
            {/* ============================================================== */}

            {/* Change Password Modal */}
            <Modal show={showChangePassModal} onHide={() => setShowChangePassModal(false)} centered className="vrm-dark-modal">
                <form onSubmit={handleChangePasswordSubmit}>
                    <Modal.Header closeButton>
                        <Modal.Title><i className="fas fa-lock me-2 text-primary"></i> Change Admin Password</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {changePassStatus.message && (
                            <div className={`alert ${changePassStatus.type === 'success' ? 'alert-success' : 'alert-danger'} py-2 px-3 small rounded-3 mb-3`}>
                                {changePassStatus.message}
                            </div>
                        )}
                        <div className="mb-3">
                            <label className="form-label">Current Password {!currentUser?.forcePasswordChange && <span className="text-danger">*</span>}</label>
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
                            <label className="form-label">New Password (min 12 characters) <span className="text-danger">*</span></label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Enter strong new password"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                required
                                minLength={12}
                            />
                        </div>
                        <div className="mb-2">
                            <label className="form-label">Confirm New Password <span className="text-danger">*</span></label>
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
                        <button type="button" className="btn btn-outline-secondary" onClick={() => setShowChangePassModal(false)}>Cancel</button>
                        <button type="submit" disabled={isChangingPass} className="btn btn-primary px-4">
                            {isChangingPass ? 'Updating...' : 'Update Password'}
                        </button>
                    </Modal.Footer>
                </form>
            </Modal>

            {/* Temporary Password Modal */}
            <Modal show={tempPasswordModal.show} onHide={() => setTempPasswordModal(prev => ({ ...prev, show: false }))} centered className="vrm-dark-modal">
                <Modal.Header closeButton>
                    <Modal.Title><i className="fas fa-key text-warning me-2"></i> Temporary Password Generated</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p className="text-muted small mb-3">{tempPasswordModal.message}</p>
                    <div className="p-3 bg-black bg-opacity-50 rounded-3 border border-secondary text-center my-3">
                        <div className="text-muted small mb-1">Temporary Password for <strong>{tempPasswordModal.username}</strong>:</div>
                        <div className="h4 fw-bold text-white mb-2 user-select-all font-monospace">{tempPasswordModal.password}</div>
                        <button type="button" onClick={copyTempPasswordToClipboard} className={`btn btn-sm ${copySuccess ? 'btn-success' : 'btn-outline-primary'}`}>
                            <i className={`fas ${copySuccess ? 'fa-check' : 'fa-copy'} me-1`}></i>
                            {copySuccess ? 'Copied to Clipboard!' : 'Copy Temporary Password'}
                        </button>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button type="button" className="btn btn-primary" onClick={() => setTempPasswordModal(prev => ({ ...prev, show: false }))}>
                        I Have Saved This Password
                    </button>
                </Modal.Footer>
            </Modal>

            {/* Upload / Edit Gallery Photo Modal */}
            <Modal show={showUploadModal} onHide={() => setShowUploadModal(false)} size="lg" centered className="vrm-dark-modal">
                <form onSubmit={handleSavePhoto}>
                    <Modal.Header closeButton>
                        <Modal.Title><i className="fas fa-camera text-primary me-2"></i> {editingPhoto ? 'Edit Photo Details' : 'Upload Team Photo'}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {galleryFormError && (
                            <div className="alert alert-danger py-2 px-3 small rounded-3 mb-3">{galleryFormError}</div>
                        )}
                        <div className="alert alert-info py-2 px-3 small rounded-3 mb-3">
                            <i className="fas fa-info-circle me-1"></i> <strong>Employee Privacy:</strong> Only upload photos of employees who agreed to be published.
                        </div>

                        {/* Top: Image Preview & File Selection */}
                        <div className="mb-3 text-center p-3 bg-black bg-opacity-40 rounded-3 border border-secondary">
                            {photoPreview ? (
                                <div>
                                    <img src={photoPreview} alt="Preview" style={{ maxHeight: '200px', maxWidth: '100%', objectFit: 'contain', borderRadius: '6px' }} />
                                    {!editingPhoto && (
                                        <div className="mt-2">
                                            <label className="btn btn-sm btn-outline-light" style={{ cursor: 'pointer' }}>
                                                <i className="fas fa-sync-alt me-1"></i> Change Photo
                                                <input
                                                    type="file"
                                                    className="d-none"
                                                    accept=".jpg,.jpeg,.png,.webp"
                                                    onChange={handlePhotoFileChange}
                                                />
                                            </label>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <div>
                                    <div className="text-muted small mb-2">Select Photo (JPG, PNG, WebP; Max 8 MB) <span className="text-danger">*</span></div>
                                    <input
                                        type="file"
                                        className="form-control"
                                        accept=".jpg,.jpeg,.png,.webp"
                                        onChange={handlePhotoFileChange}
                                        required={!editingPhoto}
                                    />
                                </div>
                            )}
                        </div>

                        {/* 2-column grid on desktop, 1-column on mobile */}
                        <div className="row g-3">
                            <div className="col-12 col-md-6">
                                <label className="form-label">Caption (Visible below photo)</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="e.g. Festive smiles and team celebration"
                                    value={photoCaption}
                                    onChange={(e) => setPhotoCaption(e.target.value)}
                                />
                            </div>
                            <div className="col-12 col-md-6">
                                <label className="form-label">Event Category <span className="text-danger">*</span></label>
                                <select className="form-select" value={photoCategory} onChange={(e) => setPhotoCategory(e.target.value)} required>
                                    <option value="Fun Friday">Fun Friday</option>
                                    <option value="Festival">Festival</option>
                                    <option value="Team Event">Team Event</option>
                                    <option value="Office">Office</option>
                                </select>
                            </div>
                            <div className="col-12 col-md-6">
                                <label className="form-label">Event Date <span className="text-danger">*</span></label>
                                <input type="date" className="form-control" value={photoEventDate} onChange={(e) => setPhotoEventDate(e.target.value)} required />
                            </div>
                            <div className="col-12 col-md-6">
                                <label className="form-label">Alt Text (Required for SEO) <span className="text-danger">*</span></label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="e.g. VRM AI team celebrating Diwali festival"
                                    value={photoAltText}
                                    onChange={(e) => setPhotoAltText(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="col-12">
                                <label className="form-label">Status</label>
                                <select className="form-select" value={photoStatus} onChange={(e) => setPhotoStatus(e.target.value)}>
                                    <option value="hidden">Hidden / Pending Approval (Private)</option>
                                    <option value="published">Published (Live on Website)</option>
                                </select>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer className="d-flex justify-content-end align-items-center gap-3">
                        <button type="button" className="btn btn-outline-secondary" onClick={() => setShowUploadModal(false)}>Cancel</button>
                        <button type="submit" disabled={isSavingPhoto} className="btn btn-primary px-4">
                            {isSavingPhoto ? 'Saving Photo...' : (editingPhoto ? 'Save Changes' : 'Upload Photo')}
                        </button>
                    </Modal.Footer>
                </form>
            </Modal>

            {/* Delete Photo Modal */}
            <Modal show={!!photoToDelete} onHide={() => setPhotoToDelete(null)} centered className="vrm-dark-modal">
                <Modal.Header closeButton>
                    <Modal.Title className="text-danger"><i className="far fa-trash-alt me-2"></i> Delete Photo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to delete this photo? This will permanently remove the original and thumbnail files from the server.
                </Modal.Body>
                <Modal.Footer>
                    <button className="btn btn-outline-secondary" onClick={() => setPhotoToDelete(null)}>Cancel</button>
                    <button className="btn btn-danger" disabled={isDeletingPhoto} onClick={handleDeletePhoto}>
                        {isDeletingPhoto ? 'Deleting...' : 'Delete Photo'}
                    </button>
                </Modal.Footer>
            </Modal>

            {/* Add / Edit Job Modal */}
            <Modal show={showEditJobModal} onHide={() => setShowEditJobModal(false)} size="lg" centered className="vrm-dark-modal">
                <form onSubmit={handleSaveJob}>
                    <Modal.Header closeButton>
                        <Modal.Title>{editingJobId ? 'Edit Job Opening' : 'Post New Job Opening'}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {jobFormError && <div className="alert alert-danger py-2 px-3 small rounded-3 mb-3">{jobFormError}</div>}
                        <div className="row g-3">
                            <div className="col-md-8">
                                <label className="form-label">Job Title <span className="text-danger">*</span></label>
                                <input type="text" className="form-control" value={formTitle} onChange={(e) => handleTitleChange(e.target.value)} required />
                            </div>
                            <div className="col-md-4">
                                <label className="form-label">Status</label>
                                <select className="form-select" value={formJobStatus} onChange={(e) => setFormJobStatus(e.target.value)}>
                                    <option value="draft">Draft</option>
                                    <option value="published">Published</option>
                                    <option value="closed">Closed</option>
                                </select>
                            </div>
                            <div className="col-12">
                                <label className="form-label">URL Slug <span className="text-danger">*</span></label>
                                <div className="input-group">
                                    <span className="input-group-text bg-dark border-secondary text-muted small">/careers/</span>
                                    <input type="text" className="form-control" value={formSlug} onChange={(e) => setFormSlug(e.target.value)} required />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <label className="form-label">Department <span className="text-danger">*</span></label>
                                <input type="text" className="form-control" value={formDepartment} onChange={(e) => setFormDepartment(e.target.value)} required />
                            </div>
                            <div className="col-md-4">
                                <label className="form-label">Location <span className="text-danger">*</span></label>
                                <select className="form-select" value={formLocation} onChange={(e) => setFormLocation(e.target.value)} required>
                                    <option value="Bengaluru">Bengaluru</option>
                                    <option value="Madurai">Madurai</option>
                                    <option value="Remote">Remote</option>
                                </select>
                            </div>
                            <div className="col-md-4">
                                <label className="form-label">Employment Type</label>
                                <select className="form-select" value={formEmploymentType} onChange={(e) => setFormEmploymentType(e.target.value)}>
                                    <option value="Full-time">Full-time</option>
                                    <option value="Internship">Internship</option>
                                    <option value="Contract">Contract</option>
                                </select>
                            </div>
                            <div className="col-12">
                                <label className="form-label">Experience</label>
                                <input type="text" className="form-control" value={formExperience} onChange={(e) => setFormExperience(e.target.value)} />
                            </div>
                            <div className="col-12">
                                <label className="form-label">Short Description <span className="text-danger">*</span></label>
                                <textarea className="form-control" rows={2} value={formShortDesc} onChange={(e) => setFormShortDesc(e.target.value)} required />
                            </div>
                            <div className="col-12">
                                <label className="form-label">Key Responsibilities (one per line)</label>
                                <textarea className="form-control font-monospace small" rows={3} value={formResponsibilities} onChange={(e) => setFormResponsibilities(e.target.value)} />
                            </div>
                            <div className="col-12">
                                <label className="form-label">Requirements (one per line)</label>
                                <textarea className="form-control font-monospace small" rows={3} value={formRequirements} onChange={(e) => setFormRequirements(e.target.value)} />
                            </div>
                            <div className="col-md-6">
                                <label className="form-label">Apply Email</label>
                                <input type="email" className="form-control" value={formApplyEmail} readOnly disabled style={{ opacity: 0.7 }} />
                            </div>
                            <div className="col-md-6">
                                <label className="form-label">External Apply Link (Optional)</label>
                                <input type="url" className="form-control" placeholder="https://..." value={formApplyLink} onChange={(e) => setFormApplyLink(e.target.value)} />
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <button type="button" className="btn btn-outline-secondary" onClick={() => setShowEditJobModal(false)}>Cancel</button>
                        <button type="submit" disabled={isSavingJob} className="btn btn-primary px-4">
                            {isSavingJob ? 'Saving...' : (editingJobId ? 'Save Changes' : 'Create Job')}
                        </button>
                    </Modal.Footer>
                </form>
            </Modal>

            {/* Delete Job Modal */}
            <Modal show={!!jobToDelete} onHide={() => setJobToDelete(null)} centered className="vrm-dark-modal">
                <Modal.Header closeButton>
                    <Modal.Title className="text-danger"><i className="far fa-trash-alt me-2"></i> Delete Job Opening</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to delete <strong>{jobToDelete?.title}</strong>? This action cannot be undone.
                </Modal.Body>
                <Modal.Footer>
                    <button className="btn btn-outline-secondary" onClick={() => setJobToDelete(null)}>Cancel</button>
                    <button className="btn btn-danger" disabled={isDeletingJob} onClick={handleDeleteJob}>
                        {isDeletingJob ? 'Deleting...' : 'Delete Job'}
                    </button>
                </Modal.Footer>
            </Modal>

            {/* Application Detail Modal */}
            <Modal show={!!selectedApp} onHide={() => setSelectedApp(null)} size="lg" centered className="vrm-dark-modal">
                <Modal.Header closeButton>
                    <Modal.Title><i className="fas fa-file-alt me-2 text-primary"></i> Application: {selectedApp?.fullName}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedApp && (
                        <div className="row g-3">
                            <div className="col-12 col-md-6">
                                <label className="form-label text-muted small mb-1">Position Applied</label>
                                <div className="p-2 px-3 rounded-3 bg-black bg-opacity-30 border border-secondary border-opacity-50">
                                    <span className="vrm-badge-cat">{selectedApp.position}</span>
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <label className="form-label text-muted small mb-1">Candidate Experience</label>
                                <div className="p-2 px-3 rounded-3 bg-black bg-opacity-30 border border-secondary border-opacity-50 fw-semibold text-white">
                                    {selectedApp.experience || 'Not specified'}
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <label className="form-label text-muted small mb-1">Email Address</label>
                                <div className="p-2 px-3 rounded-3 bg-black bg-opacity-30 border border-secondary border-opacity-50">
                                    <a href={`mailto:${selectedApp.email}`} className="text-info text-decoration-none fw-semibold">
                                        <i className="far fa-envelope me-2"></i>{selectedApp.email}
                                    </a>
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <label className="form-label text-muted small mb-1">Contact Phone</label>
                                <div className="p-2 px-3 rounded-3 bg-black bg-opacity-30 border border-secondary border-opacity-50 text-white fw-semibold">
                                    <i className="fas fa-phone-alt me-2 text-muted"></i>{selectedApp.phone || 'Not provided'}
                                </div>
                            </div>

                            {/* Cover Letter Box */}
                            <div className="col-12">
                                <label className="form-label text-muted small mb-1">Cover Letter</label>
                                <div className="vrm-cover-letter-box">
                                    {selectedApp.coverLetter || 'No cover letter submitted.'}
                                </div>
                            </div>

                            {/* Attached Resume: Dedicated Full-Width Row */}
                            <div className="col-12">
                                <label className="form-label text-muted small mb-1">Attached Resume</label>
                                {selectedApp.storedFileName ? (
                                    <div className="vrm-resume-download-card">
                                        <div className="vrm-resume-file-icon">
                                            <i className={
                                                (selectedApp.originalFileName || selectedApp.storedFileName || '').toLowerCase().endsWith('.pdf')
                                                    ? 'fas fa-file-pdf text-danger'
                                                    : 'fas fa-file-word text-primary'
                                            }></i>
                                        </div>
                                        <div className="vrm-resume-info">
                                            <div className="vrm-resume-title-row">
                                                <span className="fw-semibold text-white">Download Resume</span>
                                                <span className="badge bg-secondary bg-opacity-50 text-light ms-2" style={{ fontSize: '10.5px' }}>
                                                    {((selectedApp.originalFileName || selectedApp.storedFileName || '').split('.').pop() || 'FILE').toUpperCase()}
                                                </span>
                                            </div>
                                            <div
                                                className="vrm-resume-filename"
                                                title={selectedApp.originalFileName || selectedApp.storedFileName}
                                            >
                                                {selectedApp.originalFileName || selectedApp.storedFileName}
                                            </div>
                                        </div>
                                        <button
                                            type="button"
                                            className="vrm-btn-download-action"
                                            onClick={() => handleDownloadResume(selectedApp)}
                                            disabled={downloadingAppId === selectedApp.id}
                                            title={`Download ${selectedApp.originalFileName || 'Resume'}`}
                                            aria-label={`Download resume for ${selectedApp.fullName}`}
                                        >
                                            {downloadingAppId === selectedApp.id ? (
                                                <>
                                                    <span className="spinner-border spinner-border-sm" role="status" style={{ width: '13px', height: '13px' }}></span>
                                                    <span>Downloading...</span>
                                                </>
                                            ) : (
                                                <>
                                                    <i className="fas fa-file-download"></i>
                                                    <span>Download</span>
                                                </>
                                            )}
                                        </button>
                                    </div>
                                ) : (
                                    <div className="p-3 bg-black bg-opacity-40 rounded-3 border border-secondary text-muted small">
                                        <i className="fas fa-info-circle me-1"></i> No resume file attached to this application.
                                    </div>
                                )}
                            </div>

                            {/* Application Status: Dedicated Full-Width Row */}
                            <div className="col-12">
                                <label className="form-label text-muted small mb-1">Application Pipeline Status</label>
                                <div className="d-flex align-items-center gap-3 flex-wrap">
                                    <select
                                        className="form-select"
                                        value={selectedApp.status}
                                        onChange={(e) => handleUpdateAppStatus(selectedApp.id, e.target.value)}
                                        style={{ maxWidth: '280px' }}
                                    >
                                        <option value="new">New (Awaiting Review)</option>
                                        <option value="reviewed">Reviewed</option>
                                        <option value="shortlisted">Shortlisted</option>
                                        <option value="rejected">Rejected</option>
                                    </select>
                                    <span className="small text-muted">Status updates automatically in the pipeline.</span>
                                </div>
                            </div>
                        </div>
                    )}
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-between align-items-center flex-wrap gap-3">
                    <div className="text-muted small d-flex align-items-center">
                        <i className="far fa-calendar-alt text-primary me-2"></i>
                        <span>Applied on: {selectedApp?.appliedAt ? new Date(selectedApp.appliedAt).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' }) : '—'}</span>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                        {selectedApp?.email && (
                            <a
                                href={`mailto:${selectedApp.email}?subject=${encodeURIComponent(`VRM AI Technology - Application for ${selectedApp.position || 'Open Role'}`)}`}
                                className="vrm-btn-reply-email"
                                title={`Send email to ${selectedApp.email}`}
                                aria-label={`Reply by email to ${selectedApp.fullName}`}
                            >
                                <i className="far fa-envelope"></i>
                                <span>Reply by email</span>
                            </a>
                        )}
                        <button
                            type="button"
                            className="btn btn-outline-secondary vrm-modal-close-btn"
                            onClick={() => setSelectedApp(null)}
                        >
                            Close
                        </button>
                    </div>
                </Modal.Footer>
            </Modal>

            {/* Delete Application Modal */}
            <Modal show={!!appToDelete} onHide={() => setAppToDelete(null)} centered className="vrm-dark-modal">
                <Modal.Header closeButton>
                    <Modal.Title className="text-danger"><i className="far fa-trash-alt me-2"></i> Delete Application</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p className="text-white fw-semibold mb-2">Delete this application permanently? This cannot be undone.</p>
                    <p className="text-muted small mb-0">Candidate: <strong>{appToDelete?.fullName}</strong> ({appToDelete?.position || 'Applicant'}). The attached resume file will also be removed permanently from disk.</p>
                </Modal.Body>
                <Modal.Footer>
                    <button className="btn btn-outline-secondary" onClick={() => setAppToDelete(null)}>Cancel</button>
                    <button className="btn btn-danger px-3" disabled={isDeletingApp} onClick={handleDeleteApp}>
                        {isDeletingApp ? 'Deleting...' : 'Delete Permanently'}
                    </button>
                </Modal.Footer>
            </Modal>

            {/* Add / Edit Admin Modal */}
            <Modal show={showAddAdminModal} onHide={() => setShowAddAdminModal(false)} centered className="vrm-dark-modal">
                <form onSubmit={handleSaveAdminUser}>
                    <Modal.Header closeButton>
                        <Modal.Title>{editingAdmin ? `Edit Admin: ${editingAdmin.username}` : 'Add New Admin Account'}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {adminFormError && <div className="alert alert-danger py-2 px-3 small rounded-3 mb-3">{adminFormError}</div>}
                        {!editingAdmin && (
                            <div className="mb-3">
                                <label className="form-label">Username <span className="text-danger">*</span></label>
                                <input type="text" className="form-control" value={adminFormUsername} onChange={(e) => setAdminFormUsername(e.target.value)} required />
                            </div>
                        )}
                        <div className="mb-3">
                            <label className="form-label">Display Name <span className="text-danger">*</span></label>
                            <input type="text" className="form-control" value={adminFormDisplayName} onChange={(e) => setAdminFormDisplayName(e.target.value)} required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email Address <span className="text-danger">*</span></label>
                            <input type="email" className="form-control" value={adminFormEmail} onChange={(e) => setAdminFormEmail(e.target.value)} required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Role <span className="text-danger">*</span></label>
                            <select className="form-select" value={adminFormRole} onChange={(e) => setAdminFormRole(e.target.value)}>
                                <option value="admin">Admin (Manage Jobs, Applications & Gallery)</option>
                                <option value="superadmin">Superadmin (Full Control + Manage Admins)</option>
                            </select>
                        </div>
                        {editingAdmin && (
                            <div className="mb-2">
                                <div className="form-check form-switch">
                                    <input className="form-check-input" type="checkbox" id="activeSwitch" checked={adminFormActive} onChange={(e) => setAdminFormActive(e.target.checked)} />
                                    <label className="form-check-label text-white small" htmlFor="activeSwitch">Account Active</label>
                                </div>
                            </div>
                        )}
                    </Modal.Body>
                    <Modal.Footer>
                        <button type="button" className="btn btn-outline-secondary" onClick={() => setShowAddAdminModal(false)}>Cancel</button>
                        <button type="submit" disabled={isSavingAdmin} className="btn btn-primary px-4">
                            {isSavingAdmin ? 'Saving...' : (editingAdmin ? 'Save Changes' : 'Create Admin')}
                        </button>
                    </Modal.Footer>
                </form>
            </Modal>

            {/* Delete Admin Modal */}
            <Modal show={!!adminToDelete} onHide={() => setAdminToDelete(null)} centered className="vrm-dark-modal">
                <Modal.Header closeButton>
                    <Modal.Title className="text-danger"><i className="far fa-trash-alt me-2"></i> Delete Admin</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to delete admin account <strong>{adminToDelete?.username}</strong>?
                </Modal.Body>
                <Modal.Footer>
                    <button className="btn btn-outline-secondary" onClick={() => setAdminToDelete(null)}>Cancel</button>
                    <button className="btn btn-danger" disabled={isDeletingAdmin} onClick={handleDeleteAdmin}>
                        {isDeletingAdmin ? 'Deleting...' : 'Delete Admin'}
                    </button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default AdminCareers;
