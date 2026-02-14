'use client'; // Refreshed

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Faculty() {
    const scrollRef = useRef(null);
    const [activeDot, setActiveDot] = useState(0);

    // Top 20 faculty members
    const facultyMembers = [
        { id: 1, name: "Dr. Rekha Kashyap", position: "Professor & Dean-CSE(AI/AI&ML)", branch: "", degree: "Ph.D.", university: "JNU, New Delhi", image: "/cse-ai-assets/faculty/DR. REKHA KASHYAP.JPG" },
        { id: 2, name: "Dr. Sapna Juneja", position: "Professor", branch: "CSE(AI)", degree: "Ph.D.", university: "MDU, Rohtak, Haryana", image: "/cse-ai-assets/faculty/DR. SAPNA JUNEJA.JPG" },
        { id: 3, name: "Dr. Laxman Singh", position: "Professor", branch: "CSE(AI&ML)", degree: "Ph.D.", university: "Jamia Millia Islamia, New Delhi", image: "/cse-ai-assets/faculty/DR. LAXMAN SINGH.JPG" },
        { id: 4, name: "Dr. Pratibha Singh", position: "Associate Professor & Program Head", branch: "CSE(AI&ML)", degree: "Ph.D.", university: "IIT - Delhi", image: "/cse-ai-assets/faculty/DR. PRATIBHA SINGH.JPG" },
        { id: 5, name: "Dr. Shelly Gupta", position: "Associate Professor & Program Head", branch: "CSE(AI)", degree: "Ph.D.", university: "Amity University, Uttar Pradesh", image: "/cse-ai-assets/faculty/DR. SHELLY GUPTA.JPG" },
        { id: 6, name: "Dr. Mukesh Kumar Tripathi", position: "Associate Professor", branch: "CSE(AI)", degree: "Ph.D.", university: "Visvesvaraya Technological University, Belagavi", image: "/cse-ai-assets/faculty/DR. MUKESH KUMAR TRIPATHI.JPG" },
        { id: 7, name: "Dr. Puneet Garg", position: "Associate Professor", branch: "CSE(AI)", degree: "Ph.D.", university: "J.C. Bose University of Science and Technology, YMCA", image: "/cse-ai-assets/faculty/DR. PUNEET GARG.JPG" },
        { id: 8, name: "Dr. Rohit", position: "Associate Professor", branch: "CSE(AI)", degree: "Ph.D.", university: "University of Technology, Jaipur", image: "/cse-ai-assets/faculty/DR. ROHIT.JPG" },
        { id: 9, name: "Dr. Kiran", position: "Associate Professor", branch: "CSE(AI)", degree: "Ph.D.", university: "SRM University, Sonepat", image: "/cse-ai-assets/faculty/DR. KIRAN.JPG" },
        { id: 10, name: "Mr. Sahil Bhatia", position: "Assistant Professor & Program Head (First Year)", branch: "CSE(AI)", degree: "M.Tech.", university: "IIT - Jodhpur", image: "/cse-ai-assets/faculty/MR. SAHIL BHATIA.JPG" },
        { id: 11, name: "Mr. Mayank Lakhotia", position: "Assistant Professor & Program Head (First Year)", branch: "CSE(AI&ML)", degree: "M.Tech.", university: "NSUT, New Delhi", image: "/cse-ai-assets/images/Mayank-Lakhotia.png" },
        { id: 12, name: "Mr. Piyush Agarwal", position: "Assistant Professor", branch: "CSE(AI)", degree: "M.Tech.", university: "DTU, New Delhi", image: "/cse-ai-assets/faculty/MR. PIYUSH AGARWAL.jpeg" },
        { id: 13, name: "Dr. Richa Singh", position: "Assistant Professor", branch: "CSE(AI&ML)", degree: "Ph.D.", university: "Amity University, Lucknow", image: "/cse-ai-assets/faculty/DR. RICHA SINGH.JPG" },
        { id: 14, name: "Dr. Kavya Gupta", position: "Assistant Professor", branch: "CSE(AI&ML)", degree: "Ph.D.", university: "IGDTUW, Delhi", image: "/cse-ai-assets/faculty/DR. KAVYA GUPTA.JPG" },
        { id: 15, name: "Dr. Davesh Kumar Sharma", position: "Assistant Professor", branch: "CSE(AI&ML)", degree: "Ph.D.", university: "SRM Institute of Science and Technology", image: "/cse-ai-assets/faculty/DR. DAVESH KUMAR SHARMA.JPG" },
        { id: 16, name: "Mr. Rajeev Kumar Singh", position: "Assistant Professor", branch: "CSE(AI&ML)", degree: "M.Tech.", university: "Dr. A.P.J. AKTU, Lucknow", image: "/cse-ai-assets/faculty/MR. RAJEEV KUMAR SINGH.JPG" },
        { id: 17, name: "Ms. Bhawna", position: "Assistant Professor", branch: "CSE(AI&ML)", degree: "M.Tech.", university: "Maharishi Markandeshwar University, Mullana, Ambala", image: "/cse-ai-assets/faculty/MS. BHAWNA.JPG" },
        { id: 18, name: "Ms. Payal Chhabra", position: "Assistant Professor", branch: "CSE(AI&ML)", degree: "M.Tech.", university: "Govind Ballabh Pant University, Pantnagar", image: "/cse-ai-assets/faculty/MS. PAYAL CHHABRA.JPG" },
        { id: 19, name: "Dr. Gaurav Srivastav", position: "Assistant Professor", branch: "CSE(AI)", degree: "Ph.D.", university: "Sharda University, Greater Noida", image: "/cse-ai-assets/faculty/DR. GAURAV.jpeg" },
        { id: 20, name: "Dr. Manvi Khatri", position: "Assistant Professor", branch: "CSE(AI)", degree: "Ph.D.", university: "SRM University, Sonepat", image: "/cse-ai-assets/faculty/DR. MANVI KHATRI.JPG" },
    ];

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
                    <h2 className="fw-bold m-0"
                        style={{
                            fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
                            color: '#002855',
                            borderBottom: '3px solid #F26520',
                            paddingBottom: '10px',
                            display: 'inline-block'
                        }}>
                        Faculty
                    </h2>
                    <Link
                        href="/faculty"
                        className="btn btn-link text-decoration-none fw-semibold p-0 border-0"
                        style={{ color: '#F26520' }}
                    >
                        View All
                        <span className="ms-1">→</span>
                    </Link>
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
                                width: '230px',
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
                                    height: '250px',
                                    borderTopLeftRadius: '12px',
                                    borderTopRightRadius: '12px',
                                    position: 'relative'
                                }}
                            >
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    style={{ objectFit: 'cover', objectPosition: 'top' }}
                                />
                            </div>
                            <div className="card-body text-center p-3">
                                <h3
                                    className="card-title fw-bold mb-2"
                                    style={{
                                        fontSize: '1.05rem',
                                        color: '#00304C',
                                        lineHeight: '1.3'
                                    }}
                                >
                                    {member.name}
                                </h3>
                                <p
                                    className="card-text mb-3"
                                    style={{
                                        fontSize: '0.85rem',
                                        color: '#666',
                                        fontWeight: '500',
                                        lineHeight: '1.4'
                                    }}
                                >
                                    {member.position}, {member.branch}
                                </p>
                                <p
                                    className="card-text small text-muted mb-0"
                                    style={{ fontSize: '0.75rem', lineHeight: '1.3' }}
                                >
                                    {member.degree} {member.university}
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
