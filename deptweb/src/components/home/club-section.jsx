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
                minHeight: '320px' // Increased minimum height
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
            <div className="card-body p-5 d-flex flex-column flex-md-row align-items-center">
                {/* Logo/Image */}
                <div
                    className="flex-shrink-0 mb-4 mb-md-0 me-md-5"
                    style={{
                        width: '130px', // Slightly larger logo area
                        height: '130px',
                        borderRadius: '50%',
                        overflow: 'hidden',
                        position: 'relative',
                        border: '3px solid #f0f0f0',
                        backgroundColor: '#fff' // Ensure logo background is clean
                    }}
                >
                    <Image
                        src={imageSrc}
                        alt={title}
                        fill
                        style={{ objectFit: 'cover' }} // Contain to show full logo
                    />
                </div>

                {/* Content */}
                <div className="flex-grow-1 text-center text-md-start">
                    <h3 className="h3 fw-bold mb-3" style={{ color: '#003049' }}>
                        {title}
                    </h3>
                    <p className="text-muted mb-4" style={{ lineHeight: '1.8', fontSize: '1.05rem' }}>
                        {description}
                    </p>
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn px-4 py-2 fw-semibold" // Reduced button size
                        style={{
                            backgroundColor: '#ff5722',
                            color: 'white',
                            border: 'none',
                            borderRadius: '8px',
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
                <div className="row g-5">
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
