'use client';

import React from 'react';

export default function DeanMessage() {
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
                            <div className="row g-4">
                                <div className="col-lg-12">
                                    <p className="mb-3" style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333' }}>
                                        The future belongs to those who can think intelligently, build responsibly, and innovate fearlessly. At the Department of CSE (AI) & CSE (AI & ML), KIET Deemed to be University, we are shaping that future by redefining how technology education is delivered.
                                    </p>
                                    
                                    <p className="mb-3" style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333' }}>
                                        Our AI-first ecosystem integrates strong computational foundations with supercomputing infrastructure, global certifications, industry co-creation, and experiential learning. Students are not passive learners — they are creators, researchers, problem-solvers, and innovators from the very first year.
                                    </p>
                                    
                                    <p className="mb-3" style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333' }}>
                                        We envision our department as a hub where artificial intelligence, data, cloud, and emerging technologies converge to create real-world impact. Through research, industry partnerships, and outcome-driven pedagogy, we prepare graduates who are globally competent and ethically grounded.
                                    </p>
                                    
                                    <p className="mb-4" style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#333' }}>
                                        Our mission is clear — to build intelligent systems and intelligent leaders for a rapidly transforming world.
                                    </p>
                                    
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
