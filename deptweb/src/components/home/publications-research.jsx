'use client';

import React, { useState, useRef } from 'react';

export default function PublicationsResearch() {
    const [activeYear, setActiveYear] = useState('2023-24');
    const [activeDot, setActiveDot] = useState(0);
    const scrollRef = useRef(null);

    // --- Data ---
    // Generating 20 dummy publications
    const publications = Array.from({ length: 20 }, (_, i) => ({
        id: i + 1,
        title: [
            "Deep Learning-Based Weather Forecasting",
            "Network Modeling for Fast Emergency Response",
            "Mapping Urban Heat Zones Using Satellite",
            "Optimized Routing for Autonomous Drones",
            "AI-Driven Traffic Management Systems",
            "Blockchain for Secure Health Data Exchange",
            "Quantum Computing Algorithms for Logistics",
            "Smart Grid Energy Distribution Optimization",
            "Robotic Process Automation in Manufacturing",
            "Augmented Reality for medical Training",
            "Cybersecurity Protocols for IoT Devices",
            "Edge Computing in Smart Agriculture",
            "Natural Language Processing for Legal Tech",
            "Computer Vision for Autonomous Vehicles",
            "Sustainable Urban Planning using Big Data",
            "Predictive Maintenance in Industrial IoT",
            "5G Network Slicing for Critical Apps",
            "Wearable Health Monitoring Devices",
            "Cloud-Native Microservices Architecture",
            "Ethical AI Frameworks for Public Sector"
        ][i] || `Research Topics ${i + 1}`,
        authors: [
            "D. Singh, C. Patel, V. Rao",
            "A. Kumar, B. Singh, S. Sharma",
            "M. Gupta, K. Reddy, P. Nair",
            "R. Verma, T. Das, L. Iyer",
            "S. Bose, J. Chatterjee"
        ][i % 5],
        journal: [
            "Tech Robotics Journal",
            "AI & GeoScience Rev.",
            "Geo Spatial Insights",
            "Intl Journal of Info. Sci.",
            "Smart City Tech"
        ][i % 5] + ` ${2020 + (i % 6)}`,
        link: "#"
    }));

    const statsData = {
        '2023-24': {
            publications: 48,
            patents: 58,
            projects: 28,
            grants: 42,
            collaboration: 55
        },
        '2024-25': {
            publications: 65,
            patents: 45,
            projects: 35,
            grants: 50,
            collaboration: 60
        },
        '2025-26': {
            publications: 72,
            patents: 62,
            projects: 40,
            grants: 55,
            collaboration: 70
        }
    };

    const currentStats = statsData[activeYear];
    const maxVal = 80; // For graph scaling

    // --- Scroll Logic ---
    const handleScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            const scrollProgress = scrollLeft / (scrollWidth - clientWidth);
            const totalDots = 5;
            const newActiveDot = Math.min(Math.floor(scrollProgress * totalDots), totalDots - 1);
            setActiveDot(newActiveDot);
        }
    };

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { clientWidth } = scrollRef.current;
            const scrollAmount = clientWidth / 2; // Scroll half the container width
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
            <div className="container">
                {/* Header */}
                <h2 className="fw-bold mb-4" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.1rem)', color: '#00304C' }}>
                    Publications & Research
                </h2>

                {/* 1. Publications Carousel */}
                <div className="mb-5 position-relative">
                    <div
                        ref={scrollRef}
                        onScroll={handleScroll}
                        className="d-flex gap-4 overflow-auto pb-4 px-1 scrollbar-hide"
                        style={{
                            scrollSnapType: 'x mandatory'
                        }}
                    >

                        {publications.map((pub) => (
                            <div
                                key={pub.id}
                                className="card border-0 shadow-sm flex-shrink-0 p-4 d-flex flex-column justify-content-between"
                                style={{
                                    width: '280px',
                                    borderRadius: '12px',
                                    minHeight: '220px',
                                    scrollSnapAlign: 'start',
                                    backgroundColor: '#fff'
                                }}
                            >
                                <div>
                                    <h5 className="fw-bold mb-2" style={{ color: '#F26520', fontSize: '1rem' }}>
                                        {pub.title}
                                    </h5>
                                    <p className="text-muted small mb-3">{pub.authors}</p>
                                </div>
                                <a
                                    href={pub.link}
                                    className="btn btn-sm w-100 text-white"
                                    style={{
                                        backgroundColor: '#00304C',
                                        borderRadius: '6px',
                                        fontSize: '0.8rem'
                                    }}
                                >
                                    {pub.journal}
                                </a>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Controls */}
                    <div className="d-flex flex-column align-items-center mt-2">
                        <div className="d-flex align-items-center gap-3">
                            {/* Left Arrow */}
                            <button
                                onClick={() => scroll('left')}
                                className="btn rounded-circle d-flex justify-content-center align-items-center p-0"
                                style={{
                                    width: '32px',
                                    height: '32px',
                                    border: '1px solid #dee2e6',
                                    backgroundColor: '#fff',
                                    color: '#00304C'
                                }}
                            >
                                <span style={{ fontSize: '1.2rem', lineHeight: 0 }}>‹</span>
                            </button>

                            {/* Pagination Dots */}
                            <div className="d-flex justify-content-center gap-2">
                                {[...Array(5)].map((_, index) => (
                                    <div
                                        key={index}
                                        style={{
                                            width: '8px',
                                            height: '8px',
                                            borderRadius: '50%',
                                            backgroundColor: activeDot === index ? '#F26520' : '#dee2e6',
                                            transition: 'background-color 0.3s ease'
                                        }}
                                    />
                                ))}
                            </div>

                            {/* Right Arrow */}
                            <button
                                onClick={() => scroll('right')}
                                className="btn rounded-circle d-flex justify-content-center align-items-center p-0"
                                style={{
                                    width: '32px',
                                    height: '32px',
                                    border: '1px solid #dee2e6',
                                    backgroundColor: '#fff',
                                    color: '#00304C'
                                }}
                            >
                                <span style={{ fontSize: '1.2rem', lineHeight: 0 }}>›</span>
                            </button>
                        </div>
                    </div>
                </div>


                {/* 2. Research Stats */}
                <div>
                    {/* Year Tabs */}
                    <div className="d-flex justify-content-between align-items-center mb-5 position-relative">
                        {/* Connecting Line */}
                        <div
                            className="position-absolute w-100"
                            style={{
                                height: '2px',
                                backgroundColor: '#d3d3d3',
                                zIndex: 0,
                                top: '50%',
                                transform: 'translateY(-50%)'
                            }}
                        />
                        {['2023-24', '2024-25', '2025-26'].map((year) => (
                            <button
                                key={year}
                                onClick={() => setActiveYear(year)}
                                className="btn position-relative fw-bold py-3"
                                style={{
                                    backgroundColor: activeYear === year ? '#00304C' : '#fff',
                                    color: activeYear === year ? '#fff' : '#00304C',
                                    border: activeYear === year ? 'none' : '1px solid #dee2e6',
                                    zIndex: 1,
                                    borderRadius: '8px',
                                    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                                    transition: 'all 0.3s ease',
                                    minWidth: '220px',
                                    letterSpacing: '1.5px'
                                }}
                            >
                                {year}
                            </button>
                        ))}
                    </div>

                    <div className="row g-4">
                        {/* Left: Bar Graph (Placeholder using CSS) */}
                        <div className="col-lg-7">
                            <div className="card border-0 shadow-sm p-4 h-100 rounded-4">
                                <h6 className="text-muted mb-4">Data for the year {activeYear}</h6>
                                <div className="d-flex justify-content-around align-items-end h-100" style={{ minHeight: '300px' }}>
                                    {Object.entries(currentStats).map(([key, value]) => (
                                        <div key={key} className="d-flex flex-column align-items-center" style={{ width: '15%' }}>
                                            <div
                                                style={{
                                                    width: '100%',
                                                    height: `${(value / maxVal) * 200}px`,
                                                    backgroundColor: '#F9CAB3', // Uniform light orange/peach
                                                    borderRadius: '8px 8px 0 0',
                                                    transition: 'height 0.5s ease'
                                                }}
                                            />
                                            <span className="text-muted small mt-2 text-center" style={{ fontSize: '0.7rem' }}>
                                                {key === 'collaboration' ? 'Intl/Ind Collab' : key.charAt(0).toUpperCase() + key.slice(1)}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right: Stat Cards */}
                        <div className="col-lg-5">
                            <div className="d-flex flex-column gap-3 h-100">
                                <div className="row g-3">
                                    {/* Publicatons */}
                                    <div className="col-6">
                                        <div className="card border-0 shadow-sm p-3 h-100 rounded-4">
                                            <h3 className="fw-bold mb-1" style={{ color: '#F26520', fontSize: '2.5rem' }}>{currentStats.publications}</h3>
                                            <p className="small text-muted m-0">No. of Publications</p>
                                        </div>
                                    </div>
                                    {/* Patents */}
                                    <div className="col-6">
                                        <div className="card border-0 shadow-sm p-3 h-100 rounded-4">
                                            <h3 className="fw-bold mb-1" style={{ color: '#F26520', fontSize: '2.5rem' }}>{currentStats.patents}</h3>
                                            <p className="small text-muted m-0">No. of Patents</p>
                                        </div>
                                    </div>
                                    {/* Govt Projects */}
                                    <div className="col-6">
                                        <div className="card border-0 shadow-sm p-3 h-100 rounded-4">
                                            <h3 className="fw-bold mb-1" style={{ color: '#F26520', fontSize: '2.5rem' }}>{currentStats.projects}</h3>
                                            <p className="small text-muted m-0">No. of Govt. Projects</p>
                                        </div>
                                    </div>
                                    {/* Grants */}
                                    <div className="col-6">
                                        <div className="card border-0 shadow-sm p-3 h-100 rounded-4">
                                            <h3 className="fw-bold mb-1" style={{ color: '#F26520', fontSize: '2.5rem' }}>{currentStats.grants}</h3>
                                            <p className="small text-muted m-0">No. of Grants</p>
                                        </div>
                                    </div>
                                    {/* Collaboration */}
                                    <div className="col-12">
                                        <div className="card border-0 shadow-sm p-3 rounded-4">
                                            <h3 className="fw-bold mb-1" style={{ color: '#F26520', fontSize: '2.5rem' }}>{currentStats.collaboration}</h3>
                                            <p className="small text-muted m-0">No. of International/Industry Collaboration</p>
                                        </div>
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
