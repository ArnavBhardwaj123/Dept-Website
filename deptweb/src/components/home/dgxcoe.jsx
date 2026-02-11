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
                Discover <span style={{ color: '#ff5722' }}>Supercomputing Excellence</span>
                <br />
                at <span style={{ color: '#ff5722' }}>KIET's COE</span>
              </h1>
              
              <p className="text-muted mb-4" style={{ fontSize: 'clamp(0.95rem, 2vw, 1rem)', lineHeight: '1.8' }}>
                Step into the Center of Excellence (COE) for Supercomputing at KIET — a premier 
                hub driving breakthroughs in Artificial Intelligence (AI), Machine Learning (ML), 
                Deep Learning (DL), and High-Performance Computing (HPC). Experience cutting-edge 
                infrastructure, collaborative research culture, and the computational power 
                that accelerates innovation.
              </p>
              
              <a 
                href="https://nextgen-supercomputing.in"
                target="_blank"
                rel="noopener noreferrer"
                className="btn px-3 py-2 fw-semibold"
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
                Visit Website
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
                  width: '100%'
                }}
              >
                <img
                  src="/cse-ai-assets/images/kiet-building.jpeg"
                  alt="KIET College Building"
                  className="w-100 h-100"
                  style={{ 
                    objectFit: 'cover',
                    display: 'block'
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
