'use client';

import React, { useState, useEffect, useRef } from 'react';

export default function Roadmap() {
    const [hoveredStep, setHoveredStep] = useState(null);
    const sectionRef = useRef(null);
    const gridRef = useRef(null);
    const circleRefs = useRef([]);
    const [lines, setLines] = useState([]);

    // Measure circle positions and compute SVG curves
    useEffect(() => {
        const computeLines = () => {
            if (!gridRef.current || circleRefs.current.length < 10) return;
            const gridRect = gridRef.current.getBoundingClientRect();
            const newLines = [];
            for (let i = 0; i < 9; i++) {
                const el1 = circleRefs.current[i];
                const el2 = circleRefs.current[i + 1];
                if (!el1 || !el2) continue;
                const r1 = el1.getBoundingClientRect();
                const r2 = el2.getBoundingClientRect();
                const x1 = r1.left + r1.width / 2 - gridRect.left;
                const y1 = r1.top + r1.height / 2 - gridRect.top;
                const x2 = r2.left + r2.width / 2 - gridRect.left;
                const y2 = r2.top + r2.height / 2 - gridRect.top;
                newLines.push({ x1, y1, x2, y2 });
            }
            setLines(newLines);
        };
        computeLines();
        window.addEventListener('resize', computeLines);
        // recompute after fonts/images load
        const timer = setTimeout(computeLines, 500);
        return () => { window.removeEventListener('resize', computeLines); clearTimeout(timer); };
    }, []);

    // Close overlay on tap outside (mobile)
    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (hoveredStep !== null && sectionRef.current && !sectionRef.current.contains(e.target)) {
                setHoveredStep(null);
            }
        };
        document.addEventListener('click', handleOutsideClick);
        return () => document.removeEventListener('click', handleOutsideClick);
    }, [hoveredStep]);

    const steps = [
        { logo: 'Applied Science.png', slide: 'Applied Science.png' },
        { logo: 'Aptitude & REASONING.png', slide: 'Aptitude & REASONING.png' },
        { logo: 'Core Skills.png', slide: 'Core Skills.png' },
        { logo: 'Problem Solving.png', slide: 'Problem Solving.png' },
        { logo: 'Soft Skills.png', slide: 'Soft Skills.png' },
        { logo: 'Web DEVELOPMENT.png', slide: 'Web DEVELOPMENT.png' },
        { logo: 'Data Engineering.png', slide: 'Data Engineering.png' },
        { logo: 'Machine Learning.png', slide: 'Machine Learning.png' },
        { logo: 'Cloud and Network Security.png', slide: 'Cloud and Network Security.png' },
        { logo: 'Industry-Integrated.png', slide: 'Industry Alligned.png' },
    ];

    const getName = (filename) => filename.replace('.png', '');

    return (
        <section
            ref={sectionRef}
            style={{
                backgroundColor: '#f8f9fa',
                padding: '4rem 0',
                position: 'relative',
                zIndex: hoveredStep !== null ? 50 : 1
            }}
        >
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
                        Learning Roadmap
                    </h2>
                    
                </div>

                {/* ===== DESKTOP ROADMAP - Snake/Zigzag Layout ===== */}
                <div className="d-none d-lg-block">
                    <div ref={gridRef} style={{ position: 'relative', padding: '1rem 0' }}>

                        {/* SVG curves connecting circles - drawn from measured positions */}
                        {lines.length > 0 && (
                            <svg
                                style={{
                                    position: 'absolute', top: 0, left: 0,
                                    width: '100%', height: '100%',
                                    zIndex: 1, pointerEvents: 'none',
                                    overflow: 'visible'
                                }}
                            >
                                {lines.map((l, i) => {
                                    const midX = (l.x1 + l.x2) / 2;
                                    return (
                                        <path
                                            key={i}
                                            d={`M ${l.x1} ${l.y1} C ${midX} ${l.y1}, ${midX} ${l.y2}, ${l.x2} ${l.y2}`}
                                            fill="none"
                                            stroke="#002855"
                                            strokeWidth="3"
                                        />
                                    );
                                })}
                            </svg>
                        )}

                        {/* 10 columns grid with steps zigzagging */}
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(10, 1fr)',
                            gridTemplateRows: 'auto 1px auto',
                            gap: '0 0.5rem',
                            position: 'relative',
                            zIndex: 2,
                        }}>
                            {steps.map((step, i) => {
                                const isTop = i % 2 === 0; // 0,2,4,6,8 = top; 1,3,5,7,9 = bottom
                                const isHovered = hoveredStep === i;
                                const col = i + 1;
                                const popupDirection = isTop ? 'below' : 'above';
                                // For popup: left half (cols 1-5) open right, right half (cols 6-10) open left
                                const popupSide = col <= 5 ? 'right' : 'left';

                                return (
                                    <div
                                        key={i}
                                        className="text-center"
                                        style={{
                                            gridColumn: col,
                                            gridRow: isTop ? 1 : 3,
                                            position: 'relative',
                                            cursor: 'pointer',
                                            paddingBottom: isTop ? '0' : '0',
                                            paddingTop: !isTop ? '0' : '0',
                                        }}
                                        onMouseEnter={() => setHoveredStep(i)}
                                        onMouseLeave={() => setHoveredStep(null)}
                                    >
                                        {/* Logo Circle */}
                                        <div ref={(el) => { circleRefs.current[i] = el; }} style={{
                                            width: '85px', height: '85px', borderRadius: '50%',
                                            backgroundColor: '#fff',
                                            margin: '0 auto 0.4rem',
                                            boxShadow: isHovered
                                                ? '0 6px 25px rgba(242, 101, 32, 0.5)'
                                                : '0 4px 15px rgba(0, 40, 85, 0.3)',
                                            border: 'none',
                                            overflow: 'hidden',
                                            transition: 'all 0.3s ease',
                                            transform: isHovered ? 'scale(1.15)' : 'scale(1)',
                                        }}>
                                            <img
                                                src={encodeURI(`/cse-ai-assets/Roadmap/${step.logo}`)}
                                                alt={getName(step.logo)}
                                                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
                                            />
                                        </div>

                                        {/* Title */}
                                        <h5 style={{
                                            fontSize: '0.7rem', fontWeight: '800',
                                            color: '#002855', textTransform: 'uppercase',
                                            margin: 0, lineHeight: '1.2'
                                        }}>
                                            {getName(step.logo)}
                                        </h5>

                                        {/* Subject Slide Popup */}
                                        <div
                                            onMouseEnter={() => setHoveredStep(i)}
                                            onMouseLeave={() => setHoveredStep(null)}
                                            style={{
                                                position: 'absolute',
                                                ...(popupDirection === 'below'
                                                    ? { top: '50%', transform: popupSide === 'right'
                                                        ? `translateY(10px) translateX(40px) scale(${isHovered ? 1.28 : 0.95})`
                                                        : `translateY(10px) translateX(-440px) scale(${isHovered ? 1.28 : 0.95})` }
                                                    : { bottom: '50%', transform: popupSide === 'right'
                                                        ? `translateY(-10px) translateX(40px) scale(${isHovered ? 1.28 : 0.95})`
                                                        : `translateY(-10px) translateX(-440px) scale(${isHovered ? 1.28 : 0.95})` }),
                                                left: popupSide === 'right' ? '100%' : '0',
                                                opacity: isHovered ? 1 : 0,
                                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                                pointerEvents: isHovered ? 'auto' : 'none',
                                                zIndex: 200,
                                                width: '480px',
                                                backgroundColor: '#fff',
                                                borderRadius: '8px',
                                                boxShadow: '0 15px 50px rgba(0, 0, 0, 0.25)',
                                                border: '3px solid #F26520',
                                                padding: '10px',
                                            }}
                                        >
                                            {/* (Arrow removed) */}
                                            <img
                                                src={encodeURI(`/cse-ai-assets/Subject Slide/${step.slide}`)}
                                                alt={`${getName(step.logo)} Slide`}
                                                style={{
                                                    width: '100%', height: 'auto',
                                                    borderRadius: '2px', display: 'block',
                                                    margin: 0
                                                }}
                                            />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* ===== MOBILE ROADMAP - Vertical Timeline ===== */}
                <div className="d-lg-none">
                    <div style={{ position: 'relative', paddingLeft: '50px', minHeight: steps.length * 70 + 'px' }}>
                        {/* SVG vertical line connecting circles */}
                        <svg
                            style={{ position: 'absolute', left: '35px', top: 0, height: '100%', width: '24px', zIndex: 1 }}
                            height={steps.length * 70}
                            width={24}
                        >
                            {steps.map((step, idx) => (
                                idx < steps.length - 1 ? (
                                    <line
                                        key={idx}
                                        x1={12}
                                        y1={idx * 70 + 30}
                                        x2={12}
                                        y2={(idx + 1) * 70 + 30}
                                        stroke="#002855"
                                        strokeWidth={4}
                                    />
                                ) : null
                            ))}
                        </svg>

                        {steps.map((step, index) => (
                            <div key={index} style={{
                                position: 'relative',
                                marginBottom: index < steps.length - 1 ? '1.5rem' : '0',
                                paddingLeft: '1.5rem',
                                minHeight: '70px',
                                display: 'flex', alignItems: 'center',
                                cursor: 'pointer',
                                zIndex: 2,
                            }}
                            onClick={(e) => {
                                e.stopPropagation();
                                setHoveredStep(hoveredStep === index ? null : index);
                            }}
                            >
                                {/* Logo Circle on the line */}
                                <div style={{
                                    position: 'absolute', left: '-27px', top: '10px',
                                    width: '60px', height: '60px', borderRadius: '50%',
                                    backgroundColor: '#fff',
                                    border: 'none',
                                    boxShadow: hoveredStep === index
                                        ? '0 4px 15px rgba(242, 101, 32, 0.5)'
                                        : '0 3px 10px rgba(0, 40, 85, 0.3)',
                                    overflow: 'hidden',
                                    transition: 'all 0.3s ease',
                                    transform: hoveredStep === index ? 'scale(1.1)' : 'scale(1)',
                                }}>
                                    <img
                                        src={encodeURI(`/cse-ai-assets/Roadmap/${step.logo}`)}
                                        alt={getName(step.logo)}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
                                    />
                                </div>

                                {/* Title below circle */}
                                <h5 style={{
                                    fontSize: '0.95rem', fontWeight: '800',
                                    color: '#002855', textTransform: 'uppercase', margin: 0,
                                    marginLeft: '2.5rem', marginTop: '40px',
                                }}>
                                    {getName(step.logo)}
                                </h5>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Mobile Slide Overlay (shown on tap) */}
            {hoveredStep !== null && (
                <div
                    className="d-lg-none"
                    style={{
                        position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
                        backgroundColor: 'rgba(0, 40, 85, 0.75)',
                        zIndex: 9999,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        padding: '20px',
                    }}
                    onClick={() => setHoveredStep(null)}
                >
                    <div
                        style={{
                            backgroundColor: '#fff',
                            borderRadius: '16px',
                            padding: '12px',
                            maxWidth: '90vw',
                            width: '400px',
                            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)',
                            border: '3px solid #F26520',
                            position: 'relative',
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close button */}
                        <button
                            onClick={() => setHoveredStep(null)}
                            style={{
                                position: 'absolute', top: '-12px', right: '-12px',
                                width: '32px', height: '32px', borderRadius: '50%',
                                backgroundColor: '#F26520', border: 'none',
                                color: '#fff', fontSize: '1rem', fontWeight: 'bold',
                                cursor: 'pointer', display: 'flex',
                                alignItems: 'center', justifyContent: 'center',
                                boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
                            }}
                        >
                            ✕
                        </button>
                        <img
                            src={encodeURI(`/cse-ai-assets/Subject Slide/${steps[hoveredStep].slide}`)}
                            alt={`${getName(steps[hoveredStep].logo)} Slide`}
                            style={{
                                width: '100%', height: 'auto',
                                borderRadius: '10px', display: 'block'
                            }}
                        />
                        <p style={{
                            textAlign: 'center', marginTop: '10px',
                            fontWeight: '800', color: '#002855',
                            fontSize: '1rem', textTransform: 'uppercase',
                            marginBottom: 0
                        }}>
                            {getName(steps[hoveredStep].logo)}
                        </p>
                    </div>
                </div>
            )}
        </section>
    );
}
