'use client';

import React, { useState, useRef } from 'react';

export default function PublicationsResearch() {
    const [activeYear, setActiveYear] = useState('2025-26');
    const [activeDot, setActiveDot] = useState(0);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const scrollRef = useRef(null);

    const publications = [
        {
            id: 1,
            title: "Security Driven Scheduling Model for Computational Grid Using NSGA-II",
            authors: "Dr. Rekha Kashyap",
            journal: "Jour. of Grid Comp.",
            link: "https://doi.org/10.1007/s10723-013-9251-x"
        },
        {
            id: 2,
            title: "Prominent solution for solar panel defect detection using AI-based computer vision technology with IoT sensors in the solar panel manufacturing industry",
            authors: "Dr. Richa Singh, Dr. Rekha Kashyap",
            journal: "IJIT 2024",
            link: "https://doi.org/10.1007/s41870-024-02212-2"
        },
        {
            id: 3,
            title: "Immutable and Privacy Protected E-Certificate Repository on Blockchain",
            authors: "Dr. Rekha Kashyap",
            journal: "IJEAT 2020",
            link: "https://doi.org/10.35940/ijeat.c5256.029320"
        },
        {
            id: 4,
            title: "Towards Intelligent Retail Security: ConvLSTM-Based Shoplifting Detection with Adam Optimization",
            authors: "Dr. Kiran, Dr. Laxman Singh, Dr. Rekha Kashyap",
            journal: "Zenodo 2025",
            link: "https://doi.org/10.5281/zenodo.17386861"
        },
        {
            id: 5,
            title: "Predicting the Veracity of News Articles Using Multimodal Embeddings and NLP-Based Features",
            authors: "Dr. Richa Singh, Dr. Rekha Kashyap, Dr. Gaurav Srivastav",
            journal: "IDICAIEI 2023",
            link: "https://doi.org/10.1109/IDICAIEI58380.2023.10406898"
        },
        {
            id: 6,
            title: "Proposed ResVGG-Net Model for Mango Leaf Disease Classification and Agricultural Sustainability",
            authors: "Dr. Sapna Juneja",
            journal: "App. Fru.Sci. 2025",
            link: "https://doi.org/10.1007/s10341-025-01667-2"
        },
        {
            id: 7,
            title: "Hybrid deep learning system for crop disease classification using modified SegNet segmentation",
            authors: "Dr. Mukesh Kumar Tripathi",
            journal: "Comp. & Elec. Eng. 2025",
            link: "https://doi.org/10.1016/j.compeleceng.2025.110576"
        },
        {
            id: 8,
            title: "A Hybrid DL with Battle Royal Optimisation Algorithm for Accurate Tree Counting Using Satellite Images",
            authors: "Dr. Shelly Gupta",
            journal: "IJCIS 2025",
            link: "https://doi.org/10.1007/s44196-025-00928-y"
        },
        {
            id: 9,
            title: "Hybrid optimization with constraints handling for combinatorial test case prioritization problems",
            authors: "Dr. Mukesh Kumar Tripathi",
            journal: "NCNS 2025",
            link: "https://doi.org/10.1080/0954898x.2025.2517130"
        },
        {
            id: 10,
            title: "Advanced hyperparameter optimization for lung cancer detection using DenseBeetle network",
            authors: "Dr. Laxman Singh",
            journal: "Chem. & Int. Lab. Sys. 2026",
            link: "https://doi.org/10.1016/j.chemolab.2025.105584"
        },
        {
            id: 11,
            title: "Enhanced tree enumeration through satellite imagery and hybrid ensemble cyclic averaging stacked chain deep learning model tuned with BRO algorithm",
            authors: "Dr. Shelly Gupta",
            journal: "Jour. of Opt. 2025",
            link: "https://doi.org/10.1007/s12596-025-02810-8"
        },
        {
            id: 12,
            title: "Design of an Efficient Integrated Feature Engineering based Deep Learning Model Using CNN for Customer’s Review Helpfulness Prediction.",
            authors: "Dr. Laxman Singh",
            journal: "Wir. Per. Comm. 2024",
            link: "https://doi.org/10.1007/s11277-023-10834-1"
        },
        {
            id: 13,
            title: "Improvement of process capability analysis through Six Sigma methodology: a case study in the capacitor manufacturing industry",
            authors: "Nidhi Singh",
            journal: "IJSSCA 2025",
            link: "https://doi.org/10.1504/IJSSCA.2025.145612"
        },
        {
            id: 14,
            title: "Multi-model machine learning framework for lung cancer risk prediction: A comparative analysis of nine classifiers with hybrid and ensemble approaches using behavioral and hematological parameters",
            authors: "Dr. Sapna Juneja",
            journal: "SLAS Tech. 2025",
            link: "https://doi.org/10.1016/j.slast.2025.100314"
        },
        {
            id: 15,
            title: "Enhancing security and privacy of chest X-ray images by implementing edge-based steganography and layered cryptography",
            authors: "Dr. Sapna Juneja",
            journal: "Alex. Eng. Jour. 2025",
            link: "https://doi.org/10.1016/j.aej.2025.08.051"
        },
        {
            id: 16,
            title: "Hybrid pre trained model based feature extraction for enhanced indoor scene classification in federated learning environments",
            authors: "Dr. Sapna Juneja",
            journal: "Sci. Rep. 2025",
            link: "https://doi.org/10.1038/s41598-025-16673-3"
        },
        {
            id: 17,
            title: "Diabetic Retinopathy Detection with Uncertainty scores: A Combined Approach Using Transfer Learning and Ensemble Calibration",
            authors: "Preeti Verma",
            journal: "ADCAIJ 2025",
            link: "https://doi.org/10.14201/adcaij.32209"
        },
        {
            id: 18,
            title: "Anomaly detection framework for highly scattered and dynamic data on large-scale networks using AWS",
            authors: "Dr. Richa Singh",
            journal: "IJIT 2024",
            link: "https://doi.org/10.1007/s41870-024-01765-6"
        },
        {
            id: 19,
            title: "A survey on abnormal behavior detection based intelligence information video surveillance system using optimized machine learning methods, Engineering Applications of Artificial Intelligence",
            authors: "Dr. Laxman Singh",
            journal: "EAAI 2026",
            link: "https://doi.org/10.1016/j.engappai.2025.113438"
        },
        {
            id: 20,
            title: "An Ontology Alignment based on Machine learning for Integration of Patient Health Data",
            authors: "Sundeep Raj",
            journal: "IJCDS 2024",
            link: "http://dx.doi.org/10.12785/ijcds/1571028689"
        }
    ];

    // Stats based on "AI + AIML" table in the source Data
    const statsData = {
        '2023-24': {
            publications: 47,
            patents: 10,
            projects: 0,
            grants: 0
        },
        '2024-25': {
            publications: 67,
            patents: 25,
            projects: 1,
            grants: 25
        },
        '2025-26': {
            publications: 123,
            patents: 31,
            projects: 2,
            grants: 50
        }
    };

    const currentStats = statsData[activeYear];
    // Dynamic Max Value for Graph Scaling (adding 10% buffer)
    const maxVal = Math.max(...Object.values(currentStats)) * 1.1 || 100;

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
            const scrollAmount = clientWidth / 2;
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="pb-5" style={{ backgroundColor: '#f8f9fa' }}>
            <div className="container">
                {/* 1. Recent Publications Heading */}
                <h3 className="fw-bold mb-4" style={{ fontSize: '1.5rem', color: '#00304C' }}>Recent Publications</h3>

                {/* Publications Carousel */}
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
                                    width: '300px',
                                    borderRadius: '12px',
                                    minHeight: '240px',
                                    scrollSnapAlign: 'start',
                                    backgroundColor: '#fff',
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
                                <div>
                                    <h4 className="fw-bold mb-3 line-clamp-2" style={{
                                        color: '#F26520',
                                        fontSize: '1.1rem',
                                        display: '-webkit-box',
                                        WebkitLineClamp: 3,
                                        WebkitBoxOrient: 'vertical',
                                        overflow: 'hidden',
                                        lineHeight: '1.4'
                                    }}>
                                        {pub.title}
                                    </h4>
                                    <p className="text-muted small mb-3" style={{ fontSize: '0.85rem' }}>{pub.authors}</p>
                                </div>
                                <a
                                    href={pub.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn btn-sm w-100 text-white fw-semibold"
                                    style={{
                                        backgroundColor: '#00304C',
                                        borderRadius: '6px',
                                        fontSize: '0.85rem',
                                        padding: '0.5rem'
                                    }}
                                >
                                    {pub.journal}
                                </a>
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
                                style={{
                                    width: '32px',
                                    height: '32px',
                                    border: '1px solid #F26520',
                                    backgroundColor: 'transparent',
                                    color: '#F26520',
                                    transition: 'all 0.3s ease'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = '#F26520';
                                    e.currentTarget.style.color = '#fff';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = 'transparent';
                                    e.currentTarget.style.color = '#F26520';
                                }}
                            >
                                <span style={{ fontSize: '1.2rem', lineHeight: 0, paddingBottom: '4px' }}>‹</span>
                            </button>
                            <button
                                onClick={() => scroll('right')}
                                className="btn btn-outline-secondary rounded-circle d-flex align-items-center justify-content-center p-0"
                                style={{
                                    width: '32px',
                                    height: '32px',
                                    border: '1px solid #F26520',
                                    backgroundColor: 'transparent',
                                    color: '#F26520',
                                    transition: 'all 0.3s ease'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = '#F26520';
                                    e.currentTarget.style.color = '#fff';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = 'transparent';
                                    e.currentTarget.style.color = '#F26520';
                                }}
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


                {/* 2. Research Heading */}
                <h2 className="fw-bold mb-4" style={{ fontSize: '1.5rem', color: '#00304C' }}>Research Statistics</h2>

                {/* Research Stats */}
                <div>
                    <div className="row g-4">
                        {/* Left: Bar Graph */}
                        <div className="col-lg-7">
                            <div className="card border-0 shadow-sm p-4 h-100 rounded-4">
                                <div className="d-flex justify-content-between align-items-center mb-4">
                                    <label htmlFor="year-select" className="text-muted mb-0 fw-semibold" style={{ fontSize: '1rem', color: '#495057' }}>Academic Year</label>
                                    {/* Year Dropdown */}
                                    <div className="position-relative">
                                        <button
                                            className="d-flex align-items-center gap-2 border-0 bg-transparent fw-bold p-0"
                                            style={{ color: '#00304C', fontSize: '1.2rem' }}
                                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                        >
                                            {activeYear}
                                            <span style={{
                                                transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                                                transition: 'transform 0.2s ease',
                                                fontSize: '0.8rem'
                                            }}>▼</span>
                                        </button>

                                        {isDropdownOpen && (
                                            <div
                                                className="position-absolute shadow-sm bg-white py-2"
                                                style={{
                                                    top: '100%',
                                                    right: 0,
                                                    zIndex: 1000,
                                                    borderRadius: '16px',
                                                    minWidth: '140px',
                                                    marginTop: '8px',
                                                    border: '1px solid rgba(0,0,0,0.05)'
                                                }}
                                            >
                                                {Object.keys(statsData).map(year => (
                                                    <div
                                                        key={year}
                                                        onClick={() => {
                                                            setActiveYear(year);
                                                            setIsDropdownOpen(false);
                                                        }}
                                                        className="px-4 py-2 text-center fw-semibold"
                                                        style={{
                                                            cursor: 'pointer',
                                                            color: activeYear === year ? '#00304C' : '#6c757d',
                                                            backgroundColor: activeYear === year ? '#f8f9fa' : 'transparent',
                                                            transition: 'background-color 0.2s',
                                                            fontSize: '0.95rem'
                                                        }}
                                                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f8f9fa'}
                                                        onMouseLeave={(e) => {
                                                            if (activeYear !== year) e.currentTarget.style.backgroundColor = 'transparent';
                                                        }}
                                                    >
                                                        {year}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="d-flex justify-content-around align-items-end h-100" style={{ minHeight: '300px' }}>
                                    {Object.entries(currentStats).map(([key, value]) => (
                                        <div key={key} className="d-flex flex-column align-items-center" style={{ width: '15%' }}>
                                            <span className="mb-2 fw-bold" style={{ fontSize: '0.9rem', color: '#00304C' }}>{value}</span>
                                            <div
                                                style={{
                                                    width: '100%',
                                                    height: `${Math.max((value / maxVal) * 200, 4)}px`, // Min height for visibility
                                                    backgroundColor: '#F9CAB3',
                                                    borderRadius: '8px 8px 0 0',
                                                    transition: 'height 0.5s ease'
                                                }}
                                            />
                                            <span className="text-muted fw-semibold mt-3 text-center" style={{ fontSize: '0.75rem', letterSpacing: '0.5px' }}>
                                                {key === 'projects' ? 'PROJECTS' : key.toUpperCase()}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right: Stat Cards */}
                        <div className="col-lg-5">
                            <div className="d-flex flex-column gap-3 h-100 justify-content-center">
                                <div className="row g-3">
                                    {/* Publications */}
                                    <div className="col-6">
                                        <div className="card border-0 shadow-sm p-3 h-100 rounded-4 text-center d-flex flex-column justify-content-center align-items-center"
                                            style={{ transition: 'transform 0.3s ease', cursor: 'default' }}
                                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                                        >
                                            <h3 className="fw-bold mb-1" style={{ color: '#F26520', fontSize: '2.5rem' }}>{currentStats.publications}</h3>
                                            <p className="small text-muted m-0 fw-semibold">Publications</p>
                                        </div>
                                    </div>
                                    {/* Patents */}
                                    <div className="col-6">
                                        <div className="card border-0 shadow-sm p-3 h-100 rounded-4 text-center d-flex flex-column justify-content-center align-items-center"
                                            style={{ transition: 'transform 0.3s ease', cursor: 'default' }}
                                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                                        >
                                            <h3 className="fw-bold mb-1" style={{ color: '#F26520', fontSize: '2.5rem' }}>{currentStats.patents}</h3>
                                            <p className="small text-muted m-0 fw-semibold">Patents</p>
                                        </div>
                                    </div>
                                    {/* Govt Projects */}
                                    <div className="col-6">
                                        <div className="card border-0 shadow-sm p-3 h-100 rounded-4 text-center d-flex flex-column justify-content-center align-items-center"
                                            style={{ transition: 'transform 0.3s ease', cursor: 'default' }}
                                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                                        >
                                            <h3 className="fw-bold mb-1" style={{ color: '#F26520', fontSize: '2.5rem' }}>{currentStats.projects}</h3>
                                            <p className="small text-muted m-0 fw-semibold">Govt. Projects</p>
                                        </div>
                                    </div>
                                    {/* Grants */}
                                    <div className="col-6">
                                        <div className="card border-0 shadow-sm p-3 h-100 rounded-4 text-center d-flex flex-column justify-content-center align-items-center"
                                            style={{ transition: 'transform 0.3s ease', cursor: 'default' }}
                                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                                        >
                                            <h3 className="fw-bold mb-1" style={{ color: '#F26520', fontSize: '2.5rem' }}>{currentStats.grants}</h3>
                                            <p className="small text-muted m-0 fw-semibold">Grants (Lakhs)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </section >
    );
}