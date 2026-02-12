'use client';

import React from 'react';

export default function PlacementRecord() {
    const cards = [
        { color: '#F26520', textcolor: 'white' }, // Orange
        { color: '#002855', textcolor: 'white' }, // Dark Blue
        { color: '#F26520', textcolor: 'white' }, // Orange
        { color: '#002855', textcolor: 'white' }, // Dark Blue
    ];

    return (
        <section className="py-5" style={{ backgroundColor: '#fff' }}>
            <div className="container">
                <div className="row g-3">
                    {cards.map((card, index) => (
                        <div key={index} className="col-md-6 col-lg-3">
                            <div
                                className="card h-100 border-0 d-flex flex-column justify-content-center align-items-center text-center p-4"
                                style={{
                                    backgroundColor: card.color,
                                    color: card.textcolor,
                                    borderRadius: '12px',
                                    minHeight: '160px'
                                }}
                            >
                                <h3 className="fw-bold mb-2">₹10-22 LPA</h3>
                                <p className="mb-0 small opacity-75">Average for Top Performers</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
