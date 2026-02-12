'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function PlacementOverview() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    '/cse-ai-assets/images/kiet-building.jpeg',
    // Add more images here if needed
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="container">
        <div className="row align-items-center">
          {/* Left Content */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="pe-lg-4">
              <h1 className="fw-bold mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)' }}>
                <span style={{ color: '#ff5722' }}>PLACEMENT</span>{' '}
                <span style={{ color: '#000' }}>OVERVIEW</span>
              </h1>

              <p className="fw-semibold mb-4" style={{ fontSize: '1rem', color: '#000' }}>
                NUMBER OF COMPANIES VISITED
              </p>

              {/* Statistics */}
              <div className="row mb-4">
                <div className="col-md-4 mb-3 mb-md-0">
                  <h2 className="fw-bold mb-2" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#0d3b66' }}>
                    450+
                  </h2>
                  <p className="mb-0" style={{ fontSize: '0.9rem', color: '#333' }}>
                    B.Tech (CSE-AI)
                  </p>
                </div>

                <div className="col-md-4 mb-3 mb-md-0">
                  <h2 className="fw-bold mb-2" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#0d3b66' }}>
                    120+
                  </h2>
                  <p className="mb-0" style={{ fontSize: '0.9rem', color: '#333' }}>
                    B.Tech (CSE-AI/AI&ML)
                  </p>
                </div>

                <div className="col-md-4">
                  <h2 className="fw-bold mb-2" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#0d3b66' }}>
                    50+
                  </h2>
                  <p className="mb-0" style={{ fontSize: '0.9rem', color: '#333' }}>
                    Internship Partners
                  </p>
                </div>
              </div>

              <a
                href="#placements"
                className="btn px-4 py-2 fw-semibold"
                style={{
                  backgroundColor: '#ff5722',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 12px rgba(255, 87, 34, 0.3)',
                  textDecoration: 'none',
                  display: 'inline-block',
                  fontSize: '1rem'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#e64a19';
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 6px 16px rgba(255, 87, 34, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#ff5722';
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 4px 12px rgba(255, 87, 34, 0.3)';
                }}
              >
                Know More
              </a>
            </div>
          </div>

          {/* Right Image Slider */}
          <div className="col-lg-6">
            <div className="position-relative">
              <div
                className="rounded-4 overflow-hidden"
                style={{
                  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
                  border: '8px solid white',
                  height: '350px',
                  width: '100%',
                  position: 'relative'
                }}
              >
                <Image
                  src={images[currentSlide]}
                  alt="KIET Campus"
                  fill
                  style={{
                    objectFit: 'cover'
                  }}
                />

                {/* Navigation Arrow - Right */}
                {images.length > 1 && (
                  <button
                    onClick={nextSlide}
                    className="btn"
                    style={{
                      position: 'absolute',
                      right: '10px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      backgroundColor: 'white',
                      border: 'none',
                      borderRadius: '50%',
                      width: '40px',
                      height: '40px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                      zIndex: 10
                    }}
                    aria-label="Next slide"
                  >
                    ▶
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
