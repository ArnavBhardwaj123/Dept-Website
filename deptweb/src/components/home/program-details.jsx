'use client';

import React, { useState } from 'react';

export default function ProgramDetails() {
    const [activeIndex, setActiveIndex] = useState(0);

    const programs = [
        {
            title: "Program Description",
            content: (
                <>
                    <h5 className="fw-bold mb-3">About the Program</h5>
                    <p className="mb-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                    <p className="mb-3">
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                    </p>
                    <p className="mb-0">
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
                    </p>
                </>
            )
        },
        {
            title: "Vision",
            content: (
                <p className="mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.
                </p>
            )
        },
        {
            title: "Mission",
            content: (
                <p className="mb-0">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
                </p>
            )
        },
        {
            title: "Program Outcomes",
            content: (
                <p className="mb-0">
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
                </p>
            )
        },
        {
            title: "Syllabus",
            content: (
                <p className="mb-0">
                    Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
                </p>
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
                                        maxHeight: isActive ? '1000px' : '0',
                                        transition: 'max-height 0.5s ease-in-out',
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
