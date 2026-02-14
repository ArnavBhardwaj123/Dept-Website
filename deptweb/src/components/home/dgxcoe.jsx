'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function DgxCoe() {
  const [showPdfModal, setShowPdfModal] = useState(false);

  useEffect(() => {
    if (showPdfModal) {
      const previous = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = previous;
      };
    }
  }, [showPdfModal]);

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
              
              <button
                type="button"
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
                onClick={() => setShowPdfModal(true)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#e64a19';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 16px rgba(255, 87, 34, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#ff5722';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(255, 87, 34, 0.3)';
                }}
              >
                View More
              </button>
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
        
        {/* PDF Modal */}
        {showPdfModal && (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0,0,0,0.65)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1050,
              padding: '1.5rem'
            }}
          >
            <div
              style={{
                backgroundColor: 'white',
                borderRadius: '16px',
                maxWidth: '1200px',
                width: '100%',
                maxHeight: '92vh',
                height: '92vh',
                boxShadow: '0 20px 60px rgba(0,0,0,0.35)',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                padding: '1.5rem 1.5rem 1.25rem 1.5rem'
              }}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setShowPdfModal(false)}
                style={{
                  position: 'absolute',
                  top: '0.75rem',
                  right: '0.75rem',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  border: 'none',
                  backgroundColor: '#f3f4f6',
                  color: '#4b5563',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.25rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#ff5722';
                  e.currentTarget.style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#f3f4f6';
                  e.currentTarget.style.color = '#4b5563';
                }}
              >
                ✕
              </button>

              {/* PDF Container - only this area scrolls internally via PDF viewer */}
              <div
                style={{
                  flex: 1,
                  marginTop: '2.75rem',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  backgroundColor: '#111827'
                }}
              >
                <iframe
                  src="/cse-ai-assets/Centre%20Of%20Supercomputing%20WEBSITE.pdf"
                  title="Centre Of Supercomputing"
                  style={{
                    width: '100%',
                    height: '100%',
                    border: 'none'
                  }}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}