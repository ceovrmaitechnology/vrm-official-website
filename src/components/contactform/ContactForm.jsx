import React, { useState } from 'react';

function ContactForm() {
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState({ type: '', message: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: '', message: '' });

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        if (!data.name || !data.email || !data.message) {
            setStatus({ type: 'error', message: 'Please fill all required fields.' });
            setLoading(false);
            return;
        }

        try {
            const contactEndpoint = process.env.REACT_APP_CONTACT_ENDPOINT || 'https://formsubmit.co/ajax/contactus@vrmaitechnology.com';
            const response = await fetch(contactEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                },
                body: JSON.stringify({
                    ...data,
                    _subject: data.subject || 'New website enquiry'
                })
            });

            if (response.ok) {
                setStatus({ type: 'success', message: 'Message sent successfully! We will contact you shortly.' });
                e.target.reset();
            } else {
                const errorBody = await response.text();
                console.error('Contact form submit failed:', response.status, errorBody);
                setStatus({ type: 'error', message: 'Failed to send message. Please try again later.' });
            }
        } catch (error) {
            console.error('Contact form error:', error);
            setStatus({ type: 'error', message: 'Network error. Please ensure you are connected.' });
        }
        setLoading(false);
    };

    return (
        <div>
            {/* contact area start */}
            <div className="rts-contact-area contact-one">
                <div className="container">
                    {/* Centered Heading Layout */}
                    <div className="row mb-5">
                        <div className="col-12 text-center">
                            <p className="pre-title" style={{ color: '#3B4ECC', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px' }}>Make An Appointment</p>
                            <h2 className="title mb-3">Request for a quote</h2>
                            <p className="desc mx-auto" style={{ maxWidth: '600px', color: '#64748b' }}>
                                Connect with our enterprise experts to discuss your AI objectives, explore custom solutions, and map out a strategic roadmap for your organization.
                            </p>
                        </div>
                    </div>

                    <div className="row align-items-stretch g-5">
                        {/* Left Image Column */}
                        <div className="col-lg-5 col-md-12 d-none d-lg-flex h-100">
                            <div className="contact-image-one w-100 h-100 position-relative">
                                <img
                                    src="assets/images/home/home-3.png"
                                    alt="VRM AI Consultation"
                                    style={{ objectFit: 'cover', width: '100%', height: '100%', borderRadius: '16px', minHeight: '500px' }}
                                />
                            </div>
                        </div>

                        {/* Right Form Column */}
                        <div className="col-lg-7 col-md-12">
                            <div className="contact-form-area-one h-100 d-flex flex-column justify-content-center">
                                {status.message && (
                                    <div className={`alert ${status.type === 'success' ? 'alert-success' : 'alert-danger'} mb-4`} role="alert">
                                        {status.message}
                                    </div>
                                )}

                                <form id="contact-form" onSubmit={handleSubmit}>
                                    <div className="name-email">
                                        <input
                                            type="text"
                                            placeholder="Your Name"
                                            name="name"
                                            required
                                        />
                                        <input
                                            type="email"
                                            placeholder="Email Address"
                                            name="email"
                                            required
                                        />
                                    </div>
                                    <input type="text" placeholder="Business Topic" name="subject" required />
                                    <textarea
                                        placeholder="Type Your Message"
                                        name="message"
                                        required
                                        style={{ minHeight: '150px' }}
                                    />
                                    <div className="text-end mt-4">
                                        <button type="submit" className="rts-btn btn-primary" disabled={loading}>
                                            {loading ? 'Sending...' : 'Submit Message'}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* contact area end */}
        </div>
    );
}

export default ContactForm;