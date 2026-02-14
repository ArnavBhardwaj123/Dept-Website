'use client';

import React from 'react';

export default function FloatingAdmissionButton() {
    return (
        <>
            <a
                href="https://admission.kiet.edu/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                    position: 'fixed',
                    right: '0',
                    top: '50%',
                    transform: 'translateY(-50%) rotate(180deg)',
                    writingMode: 'vertical-rl',
                    textOrientation: 'sideways',
                    backgroundColor: '#F26520',
                    color: '#fff',
                    padding: '16px 10px',
                    fontWeight: 'bold',
                    fontSize: '1rem',
                    zIndex: 1050,
                    textDecoration: 'none',
                    borderTopRightRadius: '8px',
                    borderBottomRightRadius: '8px',
                    boxShadow: '-2px 0 8px rgba(0,0,0,0.2)',
                    whiteSpace: 'nowrap',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer'
                }}
                className="floating-admission-btn"
            >
                Register For Admission 2026-27
            </a>
            <style>{`
                @media (max-width: 767px) {
                    .floating-admission-btn {
                        padding: 8px 5px !important;
                        font-size: 0.75rem !important;
                        border-top-right-radius: 6px !important;
                        border-bottom-right-radius: 6px !important;
                    }
                }
            `}</style>
        </>
    );
}
