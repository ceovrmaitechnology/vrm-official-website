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

                setStatus({ type: 'error', message: 'Failed to send message. Please try again later.' });
            }
        } catch (error) {

            setStatus({ type: 'error', message: 'Network error. Please ensure you are connected.' });
        }
        setLoading(false);
    };

    return (
        <div>
            {/* contact area start */}
            <div className="rts-contact-area contact-one">
                <div className="container">
                    {/* Centered Heading */}
                    <div className="row mb-4 mb-md-5">
                        <div className="col-12 text-center">
                            <p className="pre-title" style={{ color: '#3B4ECC', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px' }}>Make An Appointment</p>
                            <h2 className="title mb-3">Request for a quote</h2>
                            <p className="desc mx-auto" style={{ maxWidth: '600px', color: '#64748b', fontSize: '16px' }}>
                                Connect with our enterprise experts to discuss your AI objectives, explore custom solutions, and map out a strategic roadmap for your organization.
                            </p>
                        </div>
                    </div>

                    <div className="row align-items-center g-4 g-md-5">
                        {/* Left Image Column — hidden on small mobile, visible from md up */}
                        <div className="col-md-5 d-none d-md-block">
                            <div className="contact-image-one">
                                <img
                                    src="/assets/images/home/indian-collab.png"
                                    alt="VRM AI Consultation"
                                    style={{ objectFit: 'cover', width: '100%', height: '360px', borderRadius: '16px' }}
                                />
                            </div>
                        </div>

                        {/* Right Form Column — full width on mobile, 7 cols on desktop */}
                        <div className="col-12 col-md-7">
                            <div className="contact-form-area-one">
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
                                        style={{ minHeight: '140px' }}
                                    />
                                    <div className="text-end mt-3">
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