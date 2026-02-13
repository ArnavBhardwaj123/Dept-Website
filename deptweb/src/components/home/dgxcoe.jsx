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
              
              <h2 className="fw-bold mb-4" style={{ color: 'black' ,fontSize: 'clamp(1.3rem, 3vw, 2rem)' }}>
                Discover <span style={{ color: '#ff5722' }}>Supercomputing Excellence</span>
                <br />
                at <span style={{ color: '#ff5722' }}>KIET&apos;s COE</span>
              </h2>
              
              <p className="text-muted mb-4" style={{ fontSize: 'clamp(0.95rem, 2vw, 1rem)', lineHeight: '1.8' }}>
                Step into the Center of Excellence (COE) for Supercomputing at KIET — a premier 
                hub driving breakthroughs in Artificial Intelligence (AI), Machine Learning (ML), 
                Deep Learning (DL), and High-Performance Computing (HPC). Experience cutting-edge 
                infrastructure, collaborative research culture, and the computational power 
                that accelerates innovation.
              </p>
              
              
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
                  src="/cse-ai-assets/images/DGX-Supercomputing.png"
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
