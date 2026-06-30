import React, { useId } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { candidateTestimonials, employerTestimonials } from './workflowTestimonialData';

function initialsFor(name) {
    return name
        .split(' ')
        .map((part) => part[0])
        .join('')
        .slice(0, 2)
        .toUpperCase();
}

function TestimonialCard({ item }) {
    return (
        <article className="vrm-testimonial-card">
            <div className="vrm-testimonial-card__meta">
                <span className="vrm-testimonial-card__stars" aria-label="5 out of 5 stars">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                </span>
            </div>
            <p className="vrm-testimonial-card__quote">"{item.quote}"</p>
            <div className="vrm-testimonial-card__footer">
                <div className="vrm-testimonial-card__avatar">{initialsFor(item.name)}</div>
                <div>
                    <h5 className="vrm-testimonial-card__name">{item.name}</h5>
                    <p className="vrm-testimonial-card__detail">{item.company || item.role}</p>
                </div>
            </div>
        </article>
    );
}

function TestimonialCarousel({ items, paginationClass }) {
    return (
        <>
            <Swiper
                modules={[A11y, Autoplay, Pagination]}
                className="vrm-testimonial-swiper"
                speed={800}
                loop={items.length > 3}
                grabCursor={true}
                watchOverflow={true}
                observer={true}
                observeParents={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                }}
                pagination={{
                    clickable: true,
                    el: `.${paginationClass}`
                }}
                breakpoints={{
                    0: { slidesPerView: 1, spaceBetween: 18 },
                    768: { slidesPerView: 2, spaceBetween: 22 },
                    1200: { slidesPerView: 3, spaceBetween: 24 }
                }}
            >
                {items.map((item) => (
                    <SwiperSlide key={`${item.name}-${item.company || item.role}`} className="vrm-testimonial-swiper__slide">
                        <TestimonialCard item={item} />
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className={`vrm-testimonial-pagination ${paginationClass}`} />
        </>
    );
}

function WorkflowTestimonials({
    title = "Trusted by hiring teams and candidates",
    description = "Real feedback from companies using Workflow.AI and candidates moving through modern, AI-guided hiring journeys."
}) {
    const sectionId = useId().replace(/:/g, '');
    const employerPaginationClass = `vrm-testimonial-pagination--employers-${sectionId}`;
    const candidatePaginationClass = `vrm-testimonial-pagination--candidates-${sectionId}`;

    return (
        <section className="vrm-testimonials-section rts-section-gap">
            <div className="container">
                <div className="vrm-testimonials-header text-center">
                    <p className="pre-title">Testimonials</p>
                    <h2 className="title">{title}</h2>
                    <p className="vrm-testimonials-header__desc">{description}</p>
                </div>

                <div className="vrm-testimonials-highlight-grid">
                    <div className="vrm-testimonials-highlight wow fadeInUp" data-wow-delay=".1s">
                        <span className="vrm-testimonials-highlight__value">60%</span>
                        <p>Less time spent on first-round technical screening</p>
                    </div>
                    <div className="vrm-testimonials-highlight wow fadeInUp" data-wow-delay=".2s">
                        <span className="vrm-testimonials-highlight__value">3x</span>
                        <p>Faster shortlisting with transcripts and AI scoring</p>
                    </div>
                    <div className="vrm-testimonials-highlight wow fadeInUp" data-wow-delay=".3s">
                        <span className="vrm-testimonials-highlight__value">100%</span>
                        <p>Structured visibility across calls, video, and technical evaluation</p>
                    </div>
                </div>

                <div className="vrm-testimonial-group">
                    <div className="vrm-testimonial-group__header">
                        <div>
                            <p className="vrm-testimonial-group__eyebrow">Hiring Teams</p>
                            <h3 className="vrm-testimonial-group__title">What employers are saying</h3>
                        </div>
                    </div>
                    <TestimonialCarousel
                        items={employerTestimonials}
                        paginationClass={employerPaginationClass}
                    />
                </div>

                <div className="vrm-testimonial-group vrm-testimonial-group--candidate">
                    <div className="vrm-testimonial-group__header">
                        <div>
                            <p className="vrm-testimonial-group__eyebrow">Candidate Experience</p>
                            <h3 className="vrm-testimonial-group__title">What candidates are saying</h3>
                        </div>
                    </div>
                    <TestimonialCarousel
                        items={candidateTestimonials}
                        paginationClass={candidatePaginationClass}
                    />
                </div>
            </div>
        </section>
    );
}

export default WorkflowTestimonials;
