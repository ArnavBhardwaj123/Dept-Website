'use client';

import React, { useRef, useState } from 'react';

export default function HomeNav() {
    const scrollRef = useRef(null);
    const [activeTab, setActiveTab] = useState('Overview');

    const navItems = [
        { name: 'Overview', link: '#overview' },
        { name: "Dean's Message", link: '#dean-message' },
        { name: 'Faculty', link: '#faculty' },
        { name: 'Publications & Research', link: '#publications' },
        { name: 'Infrastructure', link: '#infrastructure' },
        { name: 'Placement', link: '#placement' },
        { name: 'COE', link: '#coe' },
        { name: 'Testimonials', link: '#testimonials' },
        { name: 'Clubs', link: '#clubs' },
        { name: 'Syllabus', link: '#syllabus' },
    ];

    const handleScroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = direction === 'left' ? -200 : 200;
            scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <div className="sticky-top bg-white border-bottom shadow-sm" style={{ zIndex: 1000 }}>
            {/* Scrollbar hidden with global .scrollbar-hide utility */}
            <div className="container">
                <div className="d-flex align-items-center justify-content-between py-3">

                    {/* Left Arrow Button */}
                    <button
                        onClick={() => handleScroll('left')}
                        className="btn btn-light rounded-circle shadow-sm d-flex align-items-center justify-content-center flex-shrink-0 me-3"
                        style={{ width: '32px', height: '32px' }}
                    >
                        <span style={{ fontSize: '12px' }}>◀</span>
                    </button>

                    <div
                        ref={scrollRef}
                        className="overflow-auto scrollbar-hide w-100"
                    >
                        <nav className="d-flex gap-4 gap-md-5" style={{ minWidth: 'max-content' }}>
                            {navItems.map((item, index) => {
                                const isActive = activeTab === item.name;
                                return (
                                    <a
                                        key={index}
                                        href={item.link}
                                        onClick={() => setActiveTab(item.name)}
                                        className="text-decoration-none fw-bold text-nowrap"
                                        style={{
                                            color: isActive ? '#0056b3' : '#333', // Active blue, else dark grey
                                            fontSize: '1.1rem',
                                            paddingBottom: '2px',
                                            borderBottom: isActive ? '3px solid #0056b3' : '3px solid transparent',
                                            transition: 'color 0.3s ease, border-bottom 0.3s ease',
                                            cursor: 'pointer'
                                        }}
                                        onMouseEnter={(e) => {
                                            if (!isActive) e.target.style.color = '#0056b3';
                                        }}
                                        onMouseLeave={(e) => {
                                            if (!isActive) e.target.style.color = '#333';
                                        }}
                                    >
                                        {item.name}
                                    </a>
                                );
                            })}
                        </nav>
                    </div>

                    {/* Right Arrow Button */}
                    <button
                        onClick={() => handleScroll('right')}
                        className="btn btn-light rounded-circle shadow-sm d-flex align-items-center justify-content-center flex-shrink-0 ms-3"
                        style={{ width: '32px', height: '32px' }}
                    >
                        <span style={{ fontSize: '12px' }}>▶</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
