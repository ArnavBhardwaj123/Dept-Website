'use client';

import React from 'react';

export default function KeyHighlights() {
  const highlights = [
    {
      id: 1,
      title: "Hands-On Learning with Real-World AI Exposure",
      description: "Students gain industry-level experience through AI-driven internships, research projects, and live problem-solving, graduating with a strong portfolio and practical skills in ML..."
    },
    {
      id: 2,
      title: "Hands-On Learning with Real-World AI Exposure",
      description: "Students gain industry-level experience through AI-driven internships, research projects, and live problem-solving, graduating with a strong portfolio and practical skills in ML..."
    },
    {
      id: 3,
      title: "Hands-On Learning with Real-World AI Exposure",
      description: "Students gain industry-level experience through AI-driven internships, research projects, and live problem-solving, graduating with a strong portfolio and practical skills in ML..."
    },
    {
      id: 4,
      title: "Hands-On Learning with Real-World AI Exposure",
      description: "Students gain industry-level experience through AI-driven internships, research projects, and live problem-solving, graduating with a strong portfolio and practical skills in ML..."
    },
    {
      id: 5,
      title: "Hands-On Learning with Real-World AI Exposure",
      description: "Students gain industry-level experience through AI-driven internships, research projects, and live problem-solving, graduating with a strong portfolio and practical skills in ML..."
    },
    {
      id: 6,
      title: "Hands-On Learning with Real-World AI Exposure",
      description: "Students gain industry-level experience through AI-driven internships, research projects, and live problem-solving, graduating with a strong portfolio and practical skills in ML..."
    },
    {
      id: 7,
      title: "Hands-On Learning with Real-World AI Exposure",
      description: "Students gain industry-level experience through AI-driven internships, research projects, and live problem-solving, graduating with a strong portfolio and practical skills in ML..."
    },
    {
      id: 8,
      title: "Hands-On Learning with Real-World AI Exposure",
      description: "Students gain industry-level experience through AI-driven internships, research projects, and live problem-solving, graduating with a strong portfolio and practical skills in ML..."
    }
  ];

  return (
    <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="container">
        <h2 className="fw-bold mb-5" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.1rem)', color: '#000' }}>
          Key Highlights
        </h2>
        
        <div className="row g-4">
          {highlights.map((highlight) => (
            <div key={highlight.id} className="col-lg-6">
              <div 
                className="d-flex align-items-start bg-white rounded-3 overflow-hidden"
                style={{ 
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.12)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {/* Image */}
                <div style={{ flex: '0 0 160px', height: '140px' }}>
                  <img
                    src="/cse-ai-assets/images/kiet-building.jpeg"
                    alt={highlight.title}
                    className="w-100 h-100"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                
                {/* Content */}
                <div className="p-3 flex-grow-1">
                  <h5 
                    className="fw-semibold mb-2" 
                    style={{ 
                      fontSize: '1rem', 
                      color: '#0d3b66',
                      lineHeight: '1.4'
                    }}
                  >
                    {highlight.title}
                  </h5>
                  <p 
                    className="mb-0" 
                    style={{ 
                      fontSize: '0.85rem', 
                      color: '#666',
                      lineHeight: '1.5'
                    }}
                  >
                    {highlight.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
