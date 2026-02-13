'use client';

import React from 'react';

export default function KeyHighlights() {
  const highlights = [
    {
      id: 1,
      image: "/cse-ai-assets/images/key1.jpeg",
      title: "Progressive, Experiential Learning Model",
      description: "A technology-enabled, project-driven pedagogy that emphasizes continuous assessment and real-world problem solving. Students learn by building, experimenting, and innovating—not memorizing."
    },
    {
      id: 2,
      image: "/cse-ai-assets/images/key2.jpeg",
      title: " Industry-Ready, Future-Focused Graduates",
      description: "Structured exposure to industry tools, live projects, and applied learning ensures students graduate confident, competent, and workplace-ready."
    },
    {
      id: 3,
      image: "/cse-ai-assets/images/key3.jpeg",
      title: "Globally Validated Skill Excellence",
      description: "International certifications and global benchmarks strengthen our academic rigor, ensuring students meet worldwide standards of technical competence"
    },
    {
      id: 4,
      image: "/cse-ai-assets/images/key4.jpeg",
      title: "Outstanding Career & Placement Success",
      description: "A results-oriented ecosystem consistently translating academic excellence into high-impact career outcomes across premier organizations."
    },
    {
      id: 5,
      image: "/cse-ai-assets/images/key5.jpeg",
      title: "AI-First Academic Framework",
      description: "A strategically designed curriculum centered on Artificial Intelligence, Data, Cloud, and emerging technologies—preparing leaders for the intelligent digital era."
    },
    {
      id: 6,
      image: "/cse-ai-assets/images/key6.jpeg",
      title: "Innovation-Driven Entrepreneurial Ecosystem",
      description: "We foster creators, researchers, and founders—transforming ideas into funded ventures, impactful research, and scalable technological solutions."
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
                    src={highlight.image}
                    alt={highlight.title}
                    className="w-100 h-100"
                    style={{ objectFit: 'cover' }}
                  />
                </div>

                {/* Content */}
                <div className="p-3 flex-grow-1">
                  <h3 
                    className="fw-semibold mb-2"
                    style={{
                      fontSize: '1.2rem',
                      color: '#0d3b66',
                      lineHeight: '1.4'
                    }}
                  >
                    {highlight.title}
                  </h3>
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