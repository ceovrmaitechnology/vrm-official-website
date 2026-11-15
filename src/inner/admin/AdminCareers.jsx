import React, { useState, useEffect, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';

const TOKEN_KEY = 'vrm_admin_token';
const USER_KEY = 'vrm_admin_user';

function AdminCareers() {
    const [token, setToken] = useState(() => sessionStorage.getItem(TOKEN_KEY) || localStorage.getItem(TOKEN_KEY) || '');
    const [currentUser, setCurrentUser] = useState(() => sessionStorage.getItem(USER_KEY) || localStorage.getItem(USER_KEY) || '');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [authChecking, setAuthChecking] = useState(true);

    // Login Form State
    const [loginUser, setLoginUser] = useState('');
    const [loginPass, setLoginPass] = useState('');
    const [rememberMe, setRememberMe] = useState(true);
    const [loginError, setLoginError] = useState('');
    const [isLoggingIn, setIsLoggingIn] = useState(false);

    // Jobs State
    const [jobs, setJobs] = useState([]);
    const [isLoadingJobs, setIsLoadingJobs] = useState(false);
    const [filterStatus, setFilterStatus] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');

    // Modal State
    const [showEditModal, setShowEditModal] = useState(false);
    const [editingJobId, setEditingJobId] = useState(null);
    const [isSaving, setIsSaving] = useState(false);
    const [formError, setFormError] = useState('');

    // Form Fields
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

    // Delete Modal State
    const [jobToDelete, setJobToDelete] = useState(null);
    const [isDeleting, setIsDeleting] = useState(false);

    const logout = useCallback(() => {
        sessionStorage.removeItem(TOKEN_KEY);
        sessionStorage.removeItem(USER_KEY);
        localStorage.removeItem(TOKEN_KEY);
        localStorage.removeItem(USER_KEY);
        setToken('');
        setCurrentUser('');
        setIsAuthenticated(false);
        setJobs([]);
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
                if (data && data.success) {
                    setIsAuthenticated(true);
                    if (data.user && data.user.username) {
                        setCurrentUser(data.user.username);
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
            .catch(err => {
                console.error(err);
            })
            .finally(() => {
                setIsLoadingJobs(false);
            });
    }, [token, logout]);

    useEffect(() => {
        if (isAuthenticated) {
            fetchJobs();
        }
    }, [isAuthenticated, fetchJobs]);

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
                const storage = rememberMe ? localStorage : sessionStorage;
                storage.setItem(TOKEN_KEY, data.token);
                storage.setItem(USER_KEY, data.user?.username || loginUser);
                setToken(data.token);
                setCurrentUser(data.user?.username || loginUser);
                setIsAuthenticated(true);
                setLoginUser('');
                setLoginPass('');
            } else {
                setLoginError(data.message || 'Invalid username or password.');
            }
        } catch (err) {
            setLoginError('Connection error. Please try again.');
        } finally {
            setIsLoggingIn(false);
        }
    };

    // Auto-generate slug helper
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

    // Open Add Modal
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

    // Open Edit Modal
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

    // Save Job Form Submit
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
            setFormError('Network error saving job.');
        } finally {
            setIsSaving(false);
        }
    };

    // Quick Status Toggle
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
            console.error('Failed to update status', err);
        }
    };

    // Confirm Delete
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
            console.error('Failed to delete job', err);
        } finally {
            setIsDeleting(false);
        }
    };

    // Filtered Jobs
    const filteredJobs = jobs.filter(j => {
        const matchesStatus = filterStatus === 'all' || j.status === filterStatus;
        const matchesSearch = !searchQuery ||
            j.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            j.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
            j.location.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesStatus && matchesSearch;
    });

    const stats = {
        total: jobs.length,
        published: jobs.filter(j => j.status === 'published').length,
        draft: jobs.filter(j => j.status === 'draft').length,
        closed: jobs.filter(j => j.status === 'closed').length
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

    // Unauthenticated: Show Clean Login Screen
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
                            <p className="text-muted small">Sign in to manage openings and job listings</p>
                        </div>

                        {loginError && (
                            <div className="alert alert-danger py-2 px-3 small rounded-3 mb-4">
                                <i className="fas fa-exclamation-circle me-2"></i>
                                {loginError}
                            </div>
                        )}

                        <form onSubmit={handleLoginSubmit}>
                            <div className="mb-3">
                                <label className="form-label small fw-semibold text-dark">Username or Email</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter admin username"
                                    value={loginUser}
                                    onChange={(e) => setLoginUser(e.target.value)}
                                    required
                                    style={{ borderRadius: '8px', padding: '10px 14px' }}
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label small fw-semibold text-dark">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Enter password"
                                    value={loginPass}
                                    onChange={(e) => setLoginPass(e.target.value)}
                                    required
                                    style={{ borderRadius: '8px', padding: '10px 14px' }}
                                />
                            </div>

                            <div className="d-flex justify-content-between align-items-center mb-4">
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

    // Authenticated: Admin Dashboard
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

                    <div className="d-flex align-items-center gap-3">
                        <Link to="/careers" target="_blank" className="btn btn-outline-light btn-sm px-3">
                            <i className="far fa-external-link me-1"></i> View Live Careers
                        </Link>
                        <span className="text-white-50 small d-none d-md-inline">
                            Logged in as <strong className="text-white">{currentUser}</strong>
                        </span>
                        <button onClick={logout} className="btn btn-outline-danger btn-sm">
                            <i className="far fa-sign-out me-1"></i> Logout
                        </button>
                    </div>
                </div>
            </nav>

            <div className="container-fluid px-4 py-4">
                {/* Header & Stats */}
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-3 mb-4">
                    <div>
                        <h2 className="h3 fw-bold mb-1" style={{ color: '#1c2539' }}>Job Openings Management</h2>
                        <p className="text-muted small mb-0">Create, edit, publish and close career positions without code changes.</p>
                    </div>
                    <button onClick={handleOpenAddModal} className="btn btn-primary px-4 py-2 fw-semibold d-flex align-items-center gap-2">
                        <i className="fas fa-plus"></i> Post New Job
                    </button>
                </div>

                {/* Stats Cards */}
                <div className="row g-3 mb-4">
                    <div className="col-6 col-md-3">
                        <div className="bg-white p-3 rounded-3 shadow-sm border border-light">
                            <div className="text-muted small fw-semibold">Total Roles</div>
                            <div className="h3 fw-bold text-dark mb-0 mt-1">{stats.total}</div>
                        </div>
                    </div>
                    <div className="col-6 col-md-3">
                        <div className="bg-white p-3 rounded-3 shadow-sm border border-light">
                            <div className="text-muted small fw-semibold">Published (Live)</div>
                            <div className="h3 fw-bold text-success mb-0 mt-1">{stats.published}</div>
                        </div>
                    </div>
                    <div className="col-6 col-md-3">
                        <div className="bg-white p-3 rounded-3 shadow-sm border border-light">
                            <div className="text-muted small fw-semibold">Drafts</div>
                            <div className="h3 fw-bold text-warning mb-0 mt-1">{stats.draft}</div>
                        </div>
                    </div>
                    <div className="col-6 col-md-3">
                        <div className="bg-white p-3 rounded-3 shadow-sm border border-light">
                            <div className="text-muted small fw-semibold">Closed</div>
                            <div className="h3 fw-bold text-secondary mb-0 mt-1">{stats.closed}</div>
                        </div>
                    </div>
                </div>

                {/* Filters & Search */}
                <div className="bg-white p-3 rounded-3 shadow-sm border border-light mb-4 d-flex flex-column flex-md-row justify-content-between align-items-stretch align-items-md-center gap-3">
                    <div className="btn-group" role="group">
                        <button
                            type="button"
                            className={`btn btn-sm ${filterStatus === 'all' ? 'btn-primary' : 'btn-outline-secondary'}`}
                            onClick={() => setFilterStatus('all')}
                        >
                            All ({stats.total})
                        </button>
                        <button
                            type="button"
                            className={`btn btn-sm ${filterStatus === 'published' ? 'btn-primary' : 'btn-outline-secondary'}`}
                            onClick={() => setFilterStatus('published')}
                        >
                            Published ({stats.published})
                        </button>
                        <button
                            type="button"
                            className={`btn btn-sm ${filterStatus === 'draft' ? 'btn-primary' : 'btn-outline-secondary'}`}
                            onClick={() => setFilterStatus('draft')}
                        >
                            Drafts ({stats.draft})
                        </button>
                        <button
                            type="button"
                            className={`btn btn-sm ${filterStatus === 'closed' ? 'btn-primary' : 'btn-outline-secondary'}`}
                            onClick={() => setFilterStatus('closed')}
                        >
                            Closed ({stats.closed})
                        </button>
                    </div>

                    <div style={{ maxWidth: '320px', width: '100%' }}>
                        <input
                            type="text"
                            className="form-control form-control-sm"
                            placeholder="Search by title, dept or city..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>

                {/* Jobs Table */}
                <div className="bg-white rounded-3 shadow-sm border border-light overflow-hidden">
                    {isLoadingJobs ? (
                        <div className="text-center py-5">
                            <div className="spinner-border text-primary" role="status"></div>
                            <p className="text-muted mt-2 small">Loading job postings...</p>
                        </div>
                    ) : filteredJobs.length === 0 ? (
                        <div className="text-center py-5 px-3">
                            <i className="far fa-folder-open text-muted mb-3" style={{ fontSize: '42px' }}></i>
                            <h5 className="fw-semibold text-dark">No Jobs Found</h5>
                            <p className="text-muted small mb-3">
                                {jobs.length === 0
                                    ? 'No job openings exist yet. Click "Post New Job" to create your first posting.'
                                    : 'No jobs match your selected filter or search term.'}
                            </p>
                            {jobs.length === 0 && (
                                <button onClick={handleOpenAddModal} className="btn btn-primary btn-sm">
                                    <i className="fas fa-plus me-1"></i> Post New Job
                                </button>
                            )}
                        </div>
                    ) : (
                        <div className="table-responsive">
                            <table className="table table-hover align-middle mb-0">
                                <thead className="table-light">
                                    <tr>
                                        <th style={{ width: '32%' }}>Title &amp; Slug</th>
                                        <th>Department</th>
                                        <th>Location</th>
                                        <th>Type &amp; Exp</th>
                                        <th>Status</th>
                                        <th className="text-end">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredJobs.map(job => (
                                        <tr key={job.id}>
                                            <td>
                                                <div className="fw-bold text-dark">{job.title}</div>
                                                <div className="small text-muted font-monospace">/careers/{job.slug}</div>
                                            </td>
                                            <td>
                                                <span className="badge bg-light text-dark border">{job.department}</span>
                                            </td>
                                            <td>
                                                <span className="small text-muted"><i className="far fa-map-marker-alt me-1"></i>{job.location}</span>
                                            </td>
                                            <td>
                                                <div className="small fw-semibold">{job.employmentType}</div>
                                                <div className="small text-muted">{job.experience}</div>
                                            </td>
                                            <td>
                                                {job.status === 'published' && <span className="badge bg-success-subtle text-success border border-success-subtle px-2 py-1">Published</span>}
                                                {job.status === 'draft' && <span className="badge bg-warning-subtle text-warning-emphasis border border-warning-subtle px-2 py-1">Draft</span>}
                                                {job.status === 'closed' && <span className="badge bg-secondary-subtle text-secondary border border-secondary-subtle px-2 py-1">Closed</span>}
                                            </td>
                                            <td className="text-end">
                                                <div className="d-flex justify-content-end align-items-center gap-1">
                                                    {/* Quick Status Toggles */}
                                                    {job.status !== 'published' && (
                                                        <button
                                                            className="btn btn-sm btn-outline-success"
                                                            title="Publish"
                                                            onClick={() => handleQuickStatusChange(job.id, 'published')}
                                                        >
                                                            Publish
                                                        </button>
                                                    )}
                                                    {job.status === 'published' && (
                                                        <button
                                                            className="btn btn-sm btn-outline-secondary"
                                                            title="Unpublish (Save as Draft)"
                                                            onClick={() => handleQuickStatusChange(job.id, 'draft')}
                                                        >
                                                            Unpublish
                                                        </button>
                                                    )}
                                                    {job.status !== 'closed' && (
                                                        <button
                                                            className="btn btn-sm btn-outline-warning"
                                                            title="Close Position"
                                                            onClick={() => handleQuickStatusChange(job.id, 'closed')}
                                                        >
                                                            Close
                                                        </button>
                                                    )}

                                                    {/* View Live */}
                                                    {job.status === 'published' && (
                                                        <Link
                                                            to={`/careers/${job.slug}`}
                                                            target="_blank"
                                                            className="btn btn-sm btn-light border text-muted"
                                                            title="View Live Job Page"
                                                        >
                                                            <i className="far fa-external-link"></i>
                                                        </Link>
                                                    )}

                                                    {/* Edit */}
                                                    <button
                                                        className="btn btn-sm btn-light border text-primary"
                                                        title="Edit Job"
                                                        onClick={() => handleOpenEditModal(job)}
                                                    >
                                                        <i className="fas fa-pencil-alt"></i>
                                                    </button>

                                                    {/* Delete */}
                                                    <button
                                                        className="btn btn-sm btn-light border text-danger"
                                                        title="Delete Job"
                                                        onClick={() => setJobToDelete(job)}
                                                    >
                                                        <i className="fas fa-trash-alt"></i>
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
            </div>

            {/* Add / Edit Job Modal */}
            <Modal show={showEditModal} onHide={() => setShowEditModal(false)} size="lg" centered backdrop="static">
                <form onSubmit={handleSaveJob}>
                    <Modal.Header closeButton>
                        <Modal.Title className="h5 fw-bold" style={{ color: '#1c2539' }}>
                            {editingJobId ? 'Edit Job Posting' : 'Post New Job Opening'}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{ maxHeight: 'calc(80vh - 120px)', overflowY: 'auto' }}>
                        {formError && (
                            <div className="alert alert-danger py-2 small mb-3">
                                {formError}
                            </div>
                        )}

                        <div className="row g-3">
                            <div className="col-md-8">
                                <label className="form-label small fw-semibold text-dark">Job Title <span className="text-danger">*</span></label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="e.g. Senior AI Engineer"
                                    value={formTitle}
                                    onChange={(e) => handleTitleChange(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="col-md-4">
                                <label className="form-label small fw-semibold text-dark">Department <span className="text-danger">*</span></label>
                                <select
                                    className="form-select"
                                    value={formDepartment}
                                    onChange={(e) => setFormDepartment(e.target.value)}
                                    required
                                >
                                    <option value="Engineering">Engineering</option>
                                    <option value="AI Research">AI Research</option>
                                    <option value="Product">Product</option>
                                    <option value="Design">Design</option>
                                    <option value="Sales & Marketing">Sales & Marketing</option>
                                    <option value="Operations">Operations</option>
                                </select>
                            </div>

                            <div className="col-md-6">
                                <label className="form-label small fw-semibold text-dark">URL Slug</label>
                                <div className="input-group input-group-sm">
                                    <span className="input-group-text">/careers/</span>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={formSlug}
                                        onChange={(e) => setFormSlug(e.target.value)}
                                        placeholder="senior-ai-engineer"
                                    />
                                </div>
                                <div className="form-text" style={{ fontSize: '11px' }}>Auto-generated from title. Unique URL identifier.</div>
                            </div>

                            <div className="col-md-3">
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
                                </select>
                            </div>

                            <div className="col-md-3">
                                <label className="form-label small fw-semibold text-dark">Employment Type <span className="text-danger">*</span></label>
                                <select
                                    className="form-select"
                                    value={formEmploymentType}
                                    onChange={(e) => setFormEmploymentType(e.target.value)}
                                    required
                                >
                                    <option value="Full-time">Full-time</option>
                                    <option value="Internship">Internship</option>
                                    <option value="Contract">Contract</option>
                                </select>
                            </div>

                            <div className="col-md-6">
                                <label className="form-label small fw-semibold text-dark">Experience Level <span className="text-danger">*</span></label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="e.g. 2-4 Years / Fresher / 5+ Years"
                                    value={formExperience}
                                    onChange={(e) => setFormExperience(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label small fw-semibold text-dark">Initial Status <span className="text-danger">*</span></label>
                                <select
                                    className="form-select"
                                    value={formStatus}
                                    onChange={(e) => setFormStatus(e.target.value)}
                                    required
                                >
                                    <option value="draft">Draft (Hidden from public site)</option>
                                    <option value="published">Published (Live on site &amp; sitemap)</option>
                                    <option value="closed">Closed (Position closed notice)</option>
                                </select>
                            </div>

                            <div className="col-12">
                                <div className="d-flex justify-content-between align-items-center">
                                    <label className="form-label small fw-semibold text-dark">Short Description / Overview <span className="text-danger">*</span></label>
                                    <span className="small text-muted" style={{ fontSize: '11px' }}>
                                        {formShortDesc.length} / 155 chars (for SEO meta description)
                                    </span>
                                </div>
                                <textarea
                                    className="form-control"
                                    rows={3}
                                    placeholder="Brief role summary (recommended &lt;= 155 chars for optimal SEO snippets)..."
                                    value={formShortDesc}
                                    onChange={(e) => setFormShortDesc(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="col-12">
                                <label className="form-label small fw-semibold text-dark">Key Responsibilities (One per line)</label>
                                <textarea
                                    className="form-control font-monospace small"
                                    rows={4}
                                    placeholder="Architect and deploy multi-agent LLM systems&#10;Optimize model inference latency&#10;Collaborate with product and operations teams"
                                    value={formResponsibilities}
                                    onChange={(e) => setFormResponsibilities(e.target.value)}
                                />
                                <div className="form-text" style={{ fontSize: '11px' }}>Enter each responsibility on a new line. Rendered as bullet points.</div>
                            </div>

                            <div className="col-12">
                                <label className="form-label small fw-semibold text-dark">Candidate Requirements (One per line)</label>
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

            {/* Delete Confirmation Modal */}
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
