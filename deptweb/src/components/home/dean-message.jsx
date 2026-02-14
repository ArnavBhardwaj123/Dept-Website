'use client';

import React, { useState } from 'react';

export default function DeanMessage() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
            <div className="container">
                <div 
                    className="p-4 p-lg-5"
                    style={{
                        boxShadow: '0 0 20px rgba(0,0,0,0.05)',
                        borderRadius: '16px',
                        backgroundColor: '#fff'
                    }}
                >
                    <div className="row g-2">
                        {/* Heading Section */}
                        <div className="col-12">
                            <h2 
                                className="fw-bold mb-2" 
                                style={{ 
                                    fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', 
                                    color: '#002855',
                                    borderBottom: '3px solid #F26520',
                                    paddingBottom: '10px',
                                    display: 'inline-block'
                                }}
                            >
                                Dean's Message
                            </h2>
                        </div>

                        {/* Message Content */}
                        <div className="col-12">
                            <div className="row g-4 align-items-start">
                                {/* Dean's Photo - Right (First on mobile) */}
                                <div className="col-lg-4 order-0 order-lg-1">
                                    <div className="text-center">
                                        <img 
                                            src="/cse-ai-assets/images/Dean's-photo.jpeg"
                                            alt="Dr. Rekha Kashyap - Dean"
                                            className="img-fluid rounded-3"
                                            style={{
                                                maxWidth: '100%',
                                                height: 'auto',
                                                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                                                objectFit: 'cover'
                                            }}
                                        />
                                    </div>
                                </div>

                                {/* Text Content - Left (Second on mobile) */}
                                <div className="col-lg-8 order-1 order-lg-0">
                                    {/* First paragraph always visible */}
                                    <p className="mb-3" style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', textAlign: 'justify' }}>
                                        The future belongs to those who can think intelligently, build responsibly, and innovate fearlessly. At the Department of CSE (AI / AI & ML), KIET Deemed to be University, we are shaping that future by redefining how technology education is delivered.
                                    </p>
                                    
                                    {/* Collapsible content on mobile only */}
                                    <div className={`${isExpanded ? '' : 'd-none'} d-lg-block`}>
                                        <p className="mb-3" style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', textAlign: 'justify' }}>
                                            Our AI-first ecosystem integrates strong computational foundations with supercomputing infrastructure, global certifications, industry co-creation, and experiential learning. Students are not passive learners — they are creators, researchers, problem-solvers, and innovators from the very first year.
                                        </p>
                                        
                                        <p className="mb-3" style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', textAlign: 'justify' }}>
                                            We envision our department as a hub where artificial intelligence, data, cloud, and emerging technologies converge to create real-world impact. Through research, industry partnerships, and outcome-driven pedagogy, we prepare graduates who are globally competent and ethically grounded.
                                        </p>
                                        
                                        <p className="mb-4" style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333', textAlign: 'justify' }}>
                                            Our mission is clear — to build intelligent systems and intelligent leaders for a rapidly transforming world.
                                        </p>
                                    </div>

                                    {/* Read More button - visible only on mobile */}
                                    <button
                                        className="btn btn-link d-lg-none p-0 text-decoration-none"
                                        onClick={() => setIsExpanded(!isExpanded)}
                                        style={{ color: '#F26520', fontWeight: '600' }}
                                    >
                                        {isExpanded ? 'Read Less' : 'Read More'}
                                    </button>
                                    
                                    {/* Name section - always visible */}
                                    <div className="mt-5">
                                        <p className="mb-1 fw-bold" style={{ fontSize: '1.2rem', color: '#002855' }}>
                                            Dr. Rekha Kashyap
                                        </p>
                                        <p className="mb-0 text-muted" style={{ fontSize: '1rem' }}>
                                            Dean, CSE (AI) & CSE (AI & ML)
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
