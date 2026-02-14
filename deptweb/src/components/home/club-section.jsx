'use client';

import React from 'react';
import Image from 'next/image';

const ClubCard = ({ title, description, link, imageSrc }) => (
    <div className="col-lg-6 mb-4">
        <div
            className="card h-100 border-0 shadow-sm"
            style={{
                borderRadius: '16px',
                overflow: 'hidden',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'default',
                minHeight: '260px'
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
            <div className="card-body p-4 d-flex flex-column flex-md-row h-100">
                {/* Logo/Image */}
                <div
                    className="flex-shrink-0 mb-3 mb-md-0 me-md-4 align-self-center"
                    style={{
                        width: '100px',
                        height: '100px',
                        borderRadius: '50%',
                        overflow: 'hidden',
                        position: 'relative',
                        border: '2px solid #f0f0f0',
                        backgroundColor: '#fff'
                    }}
                >
                    <Image
                        src={imageSrc}
                        alt={title}
                        fill
                        style={{ objectFit: 'cover' }}
                    />
                </div>

                {/* Content */}
                <div className="flex-grow-1 text-center text-md-start d-flex flex-column">
                    <h4 className="fw-bold mb-2" style={{ color: '#003049', fontSize: '1.25rem' }}>
                        {title}
                    </h4>
                    <p className="text-muted mb-3 flex-grow-1" style={{ lineHeight: '1.6', fontSize: '0.9rem' }}>
                        {description}
                    </p>
                    <div>
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn px-3 py-1 fw-semibold"
                            style={{
                                backgroundColor: '#ff5722',
                                color: 'white',
                                border: 'none',
                                borderRadius: '6px',
                                fontSize: '0.85rem',
                                transition: 'background-color 0.2s',
                                textDecoration: 'none'
                            }}
                            onMouseEnter={(e) => e.target.style.backgroundColor = '#e64a19'}
                            onMouseLeave={(e) => e.target.style.backgroundColor = '#ff5722'}
                        >
                            Website
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default function ClubSection() {
    const clubs = [
        {
            title: "NextGen Supercomputing Club",
            description: "NextGen Supercomputing Club is an innovation-driven community. Established on 6th November 2025, the club is powered by the NVIDIA DGX A100 Supercomputer and is dedicated to Building Production Brains.",
            link: "https://nextgen-supercomputing.in",
            image: "/cse-ai-assets/images/nextgen-logo.png"
        },
        {
            title: "DevUp Club",
            description: "DevUp Club is a leading technical community that nurtures students across diverse domains, including Competitive Programming (CP/DSA), Web Development, Android, UI/UX, and Data Science and Machine Learning.",
            link: "#", // Placeholder
            image: "/cse-ai-assets/images/devup-logo.png"
        }
    ];

    return (
        <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
            <div className="container">
                <div className="row mb-5">
                    <div className="col-12 text-center">
                        <h2 className="display-5 fw-bold" style={{ color: '#003049' }}>
                            Our Clubs
                        </h2>
                        <div style={{
                            width: '80px',
                            height: '4px',
                            backgroundColor: '#ff5722',
                            margin: '20px auto 0',
                            borderRadius: '2px'
                        }}></div>
                    </div>
                </div>

                <div className="row g-4 justify-content-center">
                    {clubs.map((club, index) => (
                        <ClubCard
                            key={index}
                            title={club.title}
                            description={club.description}
                            link={club.link}
                            imageSrc={club.image}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
