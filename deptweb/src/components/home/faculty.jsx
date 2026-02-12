'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';

export default function Faculty() {
    const scrollRef = useRef(null);
    const [activeDot, setActiveDot] = useState(0);

    // Generate 20 mock faculty members
    const facultyMembers = Array.from({ length: 20 }, (_, i) => ({
        id: i + 1,
        name: "Prof. (Dr.) Rekha Kashyap",
        designation: "Dean, CSE (AI/AI&ML)",
        university: "Jawaharlal Nehru University",
        image: "/cse-ai-assets/images/kiet-building.jpeg"
    }));

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = 300;
            if (direction === 'left') {
                current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    };

    const handleScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            const scrollProgress = scrollLeft / (scrollWidth - clientWidth);
            const totalDots = 5;
            // Map scroll progress (0 to 1) to dot index (0 to 4)
            const newActiveDot = Math.min(
                Math.floor(scrollProgress * totalDots),
                totalDots - 1
            );
            // Simplify state update to avoid flickering/excessive renders if needed
            // For now, updating on every scroll handling is fine for this scale
            setActiveDot(newActiveDot);
        }
    };

    useEffect(() => {
        const ref = scrollRef.current;
        if (ref) {
            ref.addEventListener('scroll', handleScroll);
            return () => ref.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
            <div className="container">
                {/* Header */}
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h2 className="fw-bold m-0" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.1rem)', color: '#00304C' }}>
                        Faculty
                    </h2>
                    <button
                        className="btn btn-link text-decoration-none fw-semibold p-0 border-0"
                        style={{ color: '#F26520' }}
                    >
                        View All
                        <span className="ms-1">→</span>
                    </button>
                </div>

                {/* Scrollable Container */}
                <div
                    ref={scrollRef}
                    className="d-flex gap-4 overflow-auto pb-4 px-1 scrollbar-hide"
                    style={{
                        scrollSnapType: 'x mandatory'
                    }}
                >


                    {facultyMembers.map((member) => (
                        <div
                            key={member.id}
                            className="card border-0 shadow-sm flex-shrink-0"
                            style={{
                                width: '280px',
                                borderRadius: '12px',
                                scrollSnapAlign: 'start',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                cursor: 'pointer'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-5px)';
                                e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 .125rem .25rem rgba(0,0,0,.075)';
                            }}
                        >
                            <div
                                className="overflow-hidden"
                                style={{
                                    height: '220px',
                                    borderTopLeftRadius: '12px',
                                    borderTopRightRadius: '12px',
                                    position: 'relative'
                                }}
                            >
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                            <div className="card-body text-center p-4">
                                <h5
                                    className="card-title fw-bold mb-1"
                                    style={{
                                        fontSize: '1rem',
                                        color: '#00304C' // User defined blue
                                    }}
                                >
                                    {member.name}
                                </h5>
                                <p
                                    className="card-text mb-1"
                                    style={{
                                        fontSize: '0.85rem',
                                        color: '#666',
                                        fontWeight: '500'
                                    }}
                                >
                                    {member.designation}
                                </p>
                                <p
                                    className="card-text small text-muted"
                                    style={{ fontSize: '0.75rem' }}
                                >
                                    {member.university}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer: Controls */}
                <div className="d-flex justify-content-between align-items-center mt-3">
                    {/* Navigation Arrows (Left) */}
                    <div className="d-flex gap-2">
                        <button
                            onClick={() => scroll('left')}
                            className="btn btn-outline-secondary rounded-circle d-flex align-items-center justify-content-center p-0"
                            style={{ width: '32px', height: '32px', border: '1px solid #F26520', color: '#F26520' }}
                        >
                            <span style={{ fontSize: '1.2rem', lineHeight: 0, paddingBottom: '4px' }}>‹</span>
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            className="btn btn-outline-secondary rounded-circle d-flex align-items-center justify-content-center p-0"
                            style={{ width: '32px', height: '32px', border: '1px solid #F26520', color: '#F26520' }}
                        >
                            <span style={{ fontSize: '1.2rem', lineHeight: 0, paddingBottom: '4px' }}>›</span>
                        </button>
                    </div>

                    {/* Pagination Dots (Right) */}
                    <div className="d-flex gap-2">
                        {[...Array(5)].map((_, index) => (
                            <div
                                key={index}
                                style={{
                                    width: '10px',
                                    height: '10px',
                                    borderRadius: '50%',
                                    backgroundColor: activeDot === index ? '#F26520' : 'transparent',
                                    border: activeDot === index ? '1px solid #F26520' : '1px solid #ced4da',
                                    cursor: 'pointer',
                                    transition: 'background-color 0.2s ease, border-color 0.2s ease'
                                }}
                                onClick={() => {
                                    // Optional: Click dot to scroll to section
                                    if (scrollRef.current) {
                                        const { scrollWidth, clientWidth } = scrollRef.current;
                                        const maxScroll = scrollWidth - clientWidth;
                                        const targetScroll = (maxScroll / 4) * index;
                                        scrollRef.current.scrollTo({ left: targetScroll, behavior: 'smooth' });
                                    }
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
