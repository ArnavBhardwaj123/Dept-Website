'use client';

import React from 'react';

export default function FloatingAdmissionButton() {
    return (
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
                textOrientation: 'sideways', // Modern browsers support this
                // For fallback/older browsers, the rotate(180deg) is key with vertical-rl
                backgroundColor: '#F26520', // Orange color
                color: '#fff',
                padding: '16px 10px', // More padding on ends (vertical in this mode)
                fontWeight: 'bold',
                fontSize: '1rem',
                zIndex: 1050,
                textDecoration: 'none',
                borderTopRightRadius: '8px', // Corner logic flips with rotation
                borderBottomRightRadius: '8px',
                boxShadow: '-2px 0 8px rgba(0,0,0,0.2)', // Shadow on "left" side (visually)
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
    );
}
