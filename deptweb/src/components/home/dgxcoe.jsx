'use client';

import React from 'react';
import Image from 'next/image';

export default function DgxCoe() {
  return (
    <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="container">
        <div className="row align-items-center">
          {/* Left Content */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="pe-lg-4">
              <p className="text-muted mb-3" style={{ color: 'black',fontSize: '0.95rem', letterSpacing: '0.5px' }}>
                Your Journey Into Advanced Computing Begins Here
              </p>
              
              <h1 className="fw-bold mb-4" style={{ color: 'black' ,fontSize: 'clamp(1.3rem, 3vw, 2rem)' }}>
                Driving  <span style={{ color: '#ff5722' }}>Next-Gen AI with DGX </span>
                <br />
                 Centre of Excellence <span style={{ color: '#ff5722' }}></span>
              </h1>
              
              <p className="text-muted mb-4" style={{ fontSize: 'clamp(0.95rem, 2vw, 1rem)', lineHeight: '1.8' }}>
                Powered by the NVIDIA DGX A100 Supercomputer, KIET enables enterprise-grade AI computing for advanced research in the field of AI. Students build and deploy complex AI models on industry-level GPU infrastructure. A hub for innovation, industry collaboration, and next-generation AI excellence.
              </p>
              
              <a 
                href="https://nextgen-supercomputing.in"
                target="_blank"
                rel="noopener noreferrer"
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

          {/* Right Image */}
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
                  src="/cse-ai-assets/images/DGZ-Supercomputing.png"
                  alt="KIET College Building"
                  fill
                  style={{ 
                    objectFit: 'cover'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}