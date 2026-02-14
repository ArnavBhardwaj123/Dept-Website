'use client';

import React, { useState } from 'react';

export default function ProgramDetails() {
    const [activeIndex, setActiveIndex] = useState(0);

    const programs = [
        {
            title: "Program Description",
            content: (
                <>
                    <h3 className="fw-bold mb-3">About the Program</h3>
                    <p className="mb-3" style={{ textAlign: 'justify' }}>
                        The CSE (AI/AI&ML) programs are strategically designed to shape future-ready professionals in Artificial Intelligence and emerging technologies. Blending strong core computing foundations with cutting-edge domains like Machine Learning, Deep Learning, Computer Vision, NLP, Robotics, and Generative AI, the curriculum emphasizes structured, hands-on, and industry-aligned learning.
                    </p>
                    <p className="mb-3" style={{ textAlign: 'justify' }}>
                        Beyond technical excellence, equal focus is given to communication, leadership, teamwork, and professional ethics—ensuring holistic personality development. Through internships, industry exposure, live projects, and continuous mentoring, students gain real-world experience and career confidence.
                    </p>
                    <p className="mb-0" style={{ textAlign: 'justify' }}>
                        With a supportive ecosystem that fosters innovation, adaptability, and problem-solving, we empower learners to build impactful careers and responsibly contribute to the evolving global technology landscape.
                    </p>
                </>
            )
        },
        {
            title: "Vision",
            content: (
                <p className="mb-0" style={{ textAlign: 'justify' }}>
                    To emerge as a globally competent leader by fostering industry-linked, innovative learning and impactful research in Computational Intelligence.
                </p>
            )
        },
        {
            title: "Mission",
            content: (
                <ul className="mb-0 ps-3">
                    <li className="mb-2">To develop students with strong foundation of computer science with focus on Artificial Intelligence and other emerging technologies through outcome-based teaching learning process.</li>
                    <li className="mb-2">To collaborate with industry for skill enhancement of teaching professionals and students emphasizing on project-based learning.</li>
                    <li className="mb-0">To prepare ethically strong students with powerful leadership skills.</li>
                </ul>
            )
        },
        {
            title: "Program Outcomes",
            content: (
                <ul className="mb-0 ps-3">
                    <li className="mb-2"><strong>PO1: Engineering Knowledge:</strong> Apply knowledge of mathematics, natural science, computing, engineering fundamentals and an engineering specialization as specified in WK1 to WK4 respectively to develop to the solution of complex engineering problems.</li>
                    <li className="mb-2"><strong>PO2: Problem Analysis:</strong> Identify, formulate, review research literature and analyze complex engineering problems reaching substantiated conclusions with consideration for sustainable development. (WK1 to WK4)</li>
                    <li className="mb-2"><strong>PO3: Design/Development of Solutions:</strong> Design creative solutions for complex engineering problems and design/develop systems/components/processes to meet identified needs with consideration for the public health and safety, whole-life cost, net zero carbon, culture, society and environment as required. (WK5)</li>
                    <li className="mb-2"><strong>PO4: Conduct Investigations of Complex Problems:</strong> Conduct investigations of complex engineering problems using research-based knowledge including design of experiments, modelling, analysis & interpretation of data to provide valid conclusions. (WK8)</li>
                    <li className="mb-2"><strong>PO5: Engineering Tool Usage:</strong> Create, select and apply appropriate techniques, resources and modern engineering & IT tools, including prediction and modelling recognizing their limitations to solve complex engineering problems. (WK2 and WK6)</li>
                    <li className="mb-2"><strong>PO6: The Engineer and The World:</strong> Analyze and evaluate societal and environmental aspects while solving complex engineering problems for its impact on sustainability with reference to economy, health, safety, legal framework, culture and environment. (WK1, WK5, and WK7)</li>
                    <li className="mb-2"><strong>PO7: Ethics:</strong> Apply ethical principles and commit to professional ethics, human values, diversity and inclusion; adhere to national & international laws. (WK9)</li>
                    <li className="mb-2"><strong>PO8: Individual and Collaborative Team work:</strong> Function effectively as an individual, and as a member or leader in diverse/multi-disciplinary teams.</li>
                    <li className="mb-2"><strong>PO9: Communication:</strong> Communicate effectively and inclusively within the engineering community and society at large, such as being able to comprehend and write effective reports and design documentation, make effective presentations considering cultural, language, and learning differences.</li>
                    <li className="mb-2"><strong>PO10: Project Management and Finance:</strong> Apply knowledge and understanding of engineering management principles and economic decision-making and apply these to one’s own work, as a member and leader in a team, and to manage projects and in multidisciplinary environments.</li>
                    <li className="mb-0"><strong>PO11: Life-Long Learning:</strong> Recognize the need for, and have the preparation and ability for (i) Independent and life-long learning (ii) Adaptability to new and emerging technologies and (iii) Critical thinking in the broadest context of technological change. (WK8)</li>
                </ul>
            )
        },
        {
            title: "Syllabus",
            content: (
                <div className="d-flex flex-column gap-2">
                    {[
                        { title: "I YEAR", link: "#" },
                        { title: "II YEAR", link: "#" }
                    ].map((item, idx) => (
                        <a
                            key={idx}
                            href={item.link}
                            className="d-flex align-items-center p-2 bg-white rounded text-decoration-none border shadow-sm"
                            style={{
                                transition: 'all 0.2s ease',
                                width: '100%',
                                maxWidth: '300px',
                                borderColor: '#e9ecef'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = '#F26520';
                                e.currentTarget.style.transform = 'translateY(-2px)';
                                const textSpan = e.currentTarget.querySelector('.syllabus-text');
                                if (textSpan) textSpan.style.color = '#F26520';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = '#e9ecef';
                                e.currentTarget.style.transform = 'translateY(0)';
                                const textSpan = e.currentTarget.querySelector('.syllabus-text');
                                if (textSpan) textSpan.style.color = '#00304C';
                            }}
                        >
                            <span className="me-3 d-flex align-items-center justify-content-center bg-light rounded-circle"
                                style={{
                                    width: '36px',
                                    height: '36px',
                                    flexShrink: 0
                                }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#F26520" className="bi bi-file-earmark-text" viewBox="0 0 16 16">
                                    <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
                                    <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
                                </svg>
                            </span>
                            <span className="syllabus-text fw-medium" style={{ color: '#00304C', transition: 'color 0.2s ease', fontSize: '0.95rem' }}>{item.title}</span>
                        </a>
                    ))}
                </div>
            )
        }
    ];

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? -1 : index);
    };

    return (
        <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
            <div className="container">
                <div className="d-flex flex-column gap-3">
                    {programs.map((item, index) => {
                        const isActive = activeIndex === index;
                        return (
                            <div key={index} className="accordion-item border-0">
                                {/* Header */}
                                <button
                                    onClick={() => toggleAccordion(index)}
                                    className="w-100 d-flex justify-content-between align-items-center p-3 border-0 text-start"
                                    style={{
                                        backgroundColor: '#00304C',
                                        color: '#ffffff',
                                        borderRadius: '5px',
                                        cursor: 'pointer',
                                        transition: 'background-color 0.3s ease'
                                    }}
                                >
                                    <span className="fw-semibold" style={{ fontSize: '1rem' }}>
                                        {item.title}
                                    </span>
                                    <span
                                        style={{
                                            transform: isActive ? 'rotate(180deg)' : 'rotate(0deg)',
                                            color: isActive ? '#F26520' : '#fff',
                                            transition: 'transform 0.3s ease, color 0.3s ease',
                                            fontSize: '0.8rem'
                                        }}
                                    >
                                        ▼
                                    </span>
                                </button>

                                {/* Body */}
                                <div
                                    className="overflow-hidden bg-white"
                                    style={{
                                        maxHeight: isActive ? 'none' : '0',
                                        transition: isActive ? 'opacity 0.5s' : 'max-height 0.5s ease-in-out',
                                        opacity: isActive ? 1 : 0,
                                        boxShadow: isActive ? '0 4px 6px rgba(0,0,0,0.05)' : 'none',
                                        border: isActive ? '1px solid #dee2e6' : 'none',
                                        borderRadius: '0 0 5px 5px'
                                    }}
                                >
                                    <div className="p-4" style={{ color: '#444', lineHeight: '1.6' }}>
                                        {item.content}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
