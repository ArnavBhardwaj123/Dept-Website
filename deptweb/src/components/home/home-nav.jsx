'use client';

import React, { useRef, useState, useEffect } from 'react';

export default function HomeNav() {
    const scrollRef = useRef(null);
    const [activeTab, setActiveTab] = useState('Overview');

    const navItems = [
        { name: 'Overview', link: '#overview' },
        { name: 'Highlights', link: '#infrastructure' },
        { name: 'Placement', link: '#placement' },
        { name: 'Roadmap', link: '#roadmap' },
        { name: 'COE', link: '#coe' },
        { name: 'Clubs', link: '#clubs' },
        { name: "Dean's Message", link: '#dean-message' },
        { name: 'Faculty', link: '#faculty' },
        { name: 'Testimonials', link: '#testimonials' },
        { name: 'Publications & Research', link: '#publications' },
        { name: 'Syllabus', link: '#syllabus' },
    ];

    // Scroll spy to update active tab based on scroll position
    useEffect(() => {
        const handleScrollSpy = () => {
            const navHeight = 150;

            for (let i = navItems.length - 1; i >= 0; i--) {
                const targetId = navItems[i].link.substring(1);
                const element = document.getElementById(targetId);

                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= navHeight && rect.bottom > navHeight) {
                        setActiveTab(navItems[i].name);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScrollSpy);
        handleScrollSpy(); // Initial check

        return () => window.removeEventListener('scroll', handleScrollSpy);
    }, []);

    // Auto-scroll navbar to keep active tab visible
    useEffect(() => {
        if (scrollRef.current) {
            const container = scrollRef.current;
            const activeLink = container.querySelector(`[data-nav-name="${activeTab}"]`);
            if (activeLink) {
                const containerRect = container.getBoundingClientRect();
                const linkRect = activeLink.getBoundingClientRect();
                // If the active link is out of view on the right or left, scroll to it
                if (linkRect.right > containerRect.right || linkRect.left < containerRect.left) {
                    activeLink.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
                }
            }
        }
    }, [activeTab]);

    const handleScroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = direction === 'left' ? -200 : 200;
            scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <div className="fixed-top bg-white border-bottom shadow-sm w-100" style={{ zIndex: 1000 }}>
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
                                        data-nav-name={item.name}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setActiveTab(item.name);
                                            const targetId = item.link.substring(1); // Remove the # symbol
                                            const targetElement = document.getElementById(targetId);
                                            if (targetElement) {
                                                const navHeight = 100; // Approximate height of sticky nav
                                                const targetPosition = targetElement.offsetTop - navHeight;
                                                window.scrollTo({
                                                    top: targetPosition,
                                                    behavior: 'smooth'
                                                });
                                            }
                                        }}
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
