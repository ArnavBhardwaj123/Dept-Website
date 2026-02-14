'use client';

import React from 'react';

export default function PlacementRecord() {
    const cards = [
        { value: '60 LPA', label: 'Highest Package', color: '#F26520', textcolor: 'white' },
        { value: '17 LPA', label: 'Top 10% Placement', color: '#002855', textcolor: 'white' },
        { value: '6.5 LPA', label: 'Average Package', color: '#F26520', textcolor: 'white' },
        { value: '150+', label: 'Total Companies', color: '#002855', textcolor: 'white' },
    ];

    return (
        <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
            <div className="container">
                <h2 className="fw-bold mb-4"
                    style={{
                        fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
                        color: '#002855',
                        borderBottom: '3px solid #F26520',
                        paddingBottom: '10px',
                        display: 'inline-block'
                    }}>
                    Placement Overview
                </h2>
                <div className="row g-3">
                    {cards.map((card, index) => (
                        <div key={index} className="col-md-6 col-lg-3">
                            <div
                                className="card h-100 border-0 d-flex flex-column justify-content-center align-items-center text-center p-3"
                                style={{
                                    backgroundColor: card.color,
                                    color: card.textcolor,
                                    borderRadius: '12px',
                                    minHeight: '140px'
                                }}
                            >
                                <h3 className="fw-bold mb-2" style={{ fontSize: '2rem' }}>{card.value}</h3>
                                <p className="mb-0" style={{ fontSize: '1.2rem', opacity: 0.9 }}>{card.label}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}