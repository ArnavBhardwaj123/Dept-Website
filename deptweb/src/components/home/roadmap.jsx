'use client';

import React from 'react';

export default function Roadmap() {
    const steps = [
        {
            id: 'Q1',
            title: 'Market Validation',
            description: 'Identify a business idea and validate it through market research and customer feedback.',
            icon: '💡'
        },
        {
            id: 'Q2',
            title: 'Business Planning',
            description: 'Create a business plan that includes the vision, target market, and marketing strategies.',
            icon: '🌍'
        },
        {
            id: 'Q3',
            title: 'Business Fundraising',
            description: 'Assess funding needs and explore options like investors, loans, or venture capital for business growth.',
            icon: '🚀'
        },
        {
            id: 'Q4',
            title: 'Product Development',
            description: 'Build a Minimum Viable Product (MVP) and test it in the market for feedback and improvements.',
            icon: '🛒'
        },
        {
            id: 'Q5',
            title: 'Product Launch',
            description: 'Launch the product with a strategic marketing campaign to boost visibility and attract customers.',
            icon: '⭐'
        },
        {
            id: 'Q6',
            title: 'Growth and Scalability',
            description: 'Monitor business performance and develop long-term growth strategies for sustained success.',
            icon: '📈'
        },
        {
            id: 'Q7',
            title: 'Growth and Scalability',
            description: 'Monitor business performance and develop long-term growth strategies for sustained success.',
            icon: '📈'
        },
        {
            id: 'Q8',
            title: 'Growth and Scalability',
            description: 'Monitor business performance and develop long-term growth strategies for sustained success.',
            icon: '📈'
        },
        {
            id: 'Q9',
            title: 'Growth and Scalability',
            description: 'Monitor business performance and develop long-term growth strategies for sustained success.',
            icon: '📈'
        },
        {
            id: 'Q10',
            title: 'Growth and Scalability',
            description: 'Monitor business performance and develop long-term growth strategies for sustained success.',
            icon: '📈'
        }
    ];

    return (
        <section style={{ backgroundColor: '#f8f9fa', padding: '4rem 0', overflow: 'hidden' }}>
            <div className="container">
                {/* Section Header */}
                <div className="mb-5">
                    <h2 className="fw-bold mb-3"
                        style={{
                            fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
                            color: '#002855',
                            borderBottom: '3px solid #F26520',
                            paddingBottom: '10px',
                            display: 'inline-block'
                        }}>
                        Roadmap
                    </h2>
                    <p style={{ fontSize: '1.1rem', color: '#6b7280', maxWidth: '700px' }}>
                        Our strategic pathway from idea to impact
                    </p>
                </div>

                {/* Desktop Roadmap - S-Curve Layout */}
                <div className="d-none d-lg-block">
                    <div style={{ position: 'relative', padding: '1rem 0' }}>
                        {/* SVG Curved Line */}
                        <svg
                            viewBox="0 0 1200 500"
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                zIndex: 1,
                                pointerEvents: 'none'
                            }}
                            preserveAspectRatio="none"
                        >
                            <path
                                d="M 60 80 
                                   L 280 80 
                                   L 500 80 
                                   L 720 80 
                                   L 940 80 
                                   C 1100 80, 1150 250, 940 300
                                   L 720 300 
                                   L 500 300 
                                   L 280 300 
                                   L 60 300"
                                fill="none"
                                stroke="#002855"
                                strokeWidth="4"
                            />
                        </svg>

                        {/* Top Row - Q1 to Q5 (left to right) */}
                        <div className="d-flex justify-content-between" style={{ position: 'relative', zIndex: 2, marginBottom: '3.5rem' }}>
                            {steps.slice(0, 5).map((step) => (
                                <div key={step.id} className="text-center" style={{ width: '18%' }}>
                                    {/* Icon Circle */}
                                    <div style={{
                                        width: '70px',
                                        height: '70px',
                                        borderRadius: '50%',
                                        backgroundColor: '#002855',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        margin: '0 auto 0.6rem',
                                        fontSize: '1.8rem',
                                        boxShadow: '0 4px 15px rgba(0, 40, 85, 0.3)',
                                        border: '4px solid #F26520'
                                    }}>
                                        <span>{step.icon}</span>
                                    </div>

                                    {/* Quarter Badge */}
                                    <div style={{
                                        backgroundColor: '#002855',
                                        color: 'white',
                                        fontWeight: '700',
                                        fontSize: '0.7rem',
                                        padding: '0.15rem 0.5rem',
                                        borderRadius: '12px',
                                        display: 'inline-block',
                                        marginBottom: '0.4rem'
                                    }}>
                                        {step.id}
                                    </div>

                                    {/* Title */}
                                    <h5 style={{
                                        fontSize: '0.85rem',
                                        fontWeight: '800',
                                        color: '#002855',
                                        textTransform: 'uppercase',
                                        marginBottom: '0.35rem',
                                        lineHeight: '1.3'
                                    }}>
                                        {step.title}
                                    </h5>

                                    {/* Orange Divider */}
                                    <div style={{
                                        width: '25px',
                                        height: '3px',
                                        backgroundColor: '#F26520',
                                        margin: '0 auto 0.35rem'
                                    }} />

                                    {/* Description */}
                                    <p style={{
                                        fontSize: '0.72rem',
                                        color: '#6b7280',
                                        lineHeight: '1.4',
                                        margin: 0
                                    }}>
                                        {step.description}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Bottom Row - Q6 to Q10 (right to left) */}
                        <div className="d-flex justify-content-between flex-row-reverse" style={{ position: 'relative', zIndex: 2 }}>
                            {steps.slice(5, 10).map((step) => (
                                <div key={step.id} className="text-center" style={{ width: '18%' }}>
                                    {/* Icon Circle */}
                                    <div style={{
                                        width: '70px',
                                        height: '70px',
                                        borderRadius: '50%',
                                        backgroundColor: '#002855',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        margin: '0 auto 0.6rem',
                                        fontSize: '1.8rem',
                                        boxShadow: '0 4px 15px rgba(0, 40, 85, 0.3)',
                                        border: '4px solid #F26520'
                                    }}>
                                        <span>{step.icon}</span>
                                    </div>

                                    {/* Quarter Badge */}
                                    <div style={{
                                        backgroundColor: '#002855',
                                        color: 'white',
                                        fontWeight: '700',
                                        fontSize: '0.7rem',
                                        padding: '0.15rem 0.5rem',
                                        borderRadius: '12px',
                                        display: 'inline-block',
                                        marginBottom: '0.4rem'
                                    }}>
                                        {step.id}
                                    </div>

                                    {/* Title */}
                                    <h5 style={{
                                        fontSize: '0.85rem',
                                        fontWeight: '800',
                                        color: '#002855',
                                        textTransform: 'uppercase',
                                        marginBottom: '0.35rem',
                                        lineHeight: '1.3'
                                    }}>
                                        {step.title}
                                    </h5>

                                    {/* Orange Divider */}
                                    <div style={{
                                        width: '25px',
                                        height: '3px',
                                        backgroundColor: '#F26520',
                                        margin: '0 auto 0.35rem'
                                    }} />

                                    {/* Description */}
                                    <p style={{
                                        fontSize: '0.72rem',
                                        color: '#6b7280',
                                        lineHeight: '1.4',
                                        margin: 0
                                    }}>
                                        {step.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Mobile Roadmap - Vertical Timeline */}
                <div className="d-lg-none">
                    <div style={{ position: 'relative', paddingLeft: '50px' }}>
                        {/* Vertical Dotted Line */}
                        <div style={{
                            position: 'absolute',
                            left: '30px',
                            top: '0',
                            bottom: '0',
                            width: '4px',
                            borderLeft: '4px solid #002855'
                        }} />

                        {steps.map((step, index) => (
                            <div key={step.id} style={{
                                position: 'relative',
                                marginBottom: index < steps.length - 1 ? '2rem' : '0',
                                paddingLeft: '1.5rem'
                            }}>
                                {/* Icon Circle on the line */}
                                <div style={{
                                    position: 'absolute',
                                    left: '-32px',
                                    top: '0',
                                    width: '50px',
                                    height: '50px',
                                    borderRadius: '50%',
                                    backgroundColor: '#002855',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '1.3rem',
                                    border: '3px solid #F26520',
                                    boxShadow: '0 3px 10px rgba(0, 40, 85, 0.3)'
                                }}>
                                    <span>{step.icon}</span>
                                </div>

                                {/* Content Card */}
                                <div style={{
                                    backgroundColor: 'white',
                                    borderRadius: '12px',
                                    padding: '1rem 1.25rem',
                                    boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
                                }}>
                                    <div className="d-flex align-items-center gap-2 mb-1">
                                        <span style={{
                                            backgroundColor: '#002855',
                                            color: 'white',
                                            fontWeight: '700',
                                            fontSize: '0.7rem',
                                            padding: '0.15rem 0.5rem',
                                            borderRadius: '10px'
                                        }}>
                                            {step.id}
                                        </span>
                                        <h5 style={{
                                            fontSize: '0.95rem',
                                            fontWeight: '800',
                                            color: '#002855',
                                            textTransform: 'uppercase',
                                            margin: 0
                                        }}>
                                            {step.title}
                                        </h5>
                                    </div>
                                    <p style={{
                                        fontSize: '0.82rem',
                                        color: '#6b7280',
                                        lineHeight: '1.5',
                                        margin: 0
                                    }}>
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
