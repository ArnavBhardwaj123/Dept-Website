'use client';

import React from 'react';

export default function KeyHighlights() {
  const highlights = [
    {
      id: 1,
      image: "/cse-ai-assets/images/key3.jpeg",
      title: "Introduction of Advanced AI-Centric Core Courses",
      description: "Our curriculum is systematically structured to progress from foundational sciences and programming to advanced domains such as AI, ML, DL, Gen AI, Cloud Computing, Computer Vision, Data Engineering, Cyber Security, and Full-Stack Development delivered by a highly qualified academic team of faculty members, graduating from premier institutions such as IITs, NITs, and other reputed universities, ensuring strong academic depth and industry-aligned expertise."
    },
    {
      id: 2,
      image: "/cse-ai-assets/images/Experimental-Learning.jpg",
      title: "Strong Focus on Experiential & AI-Driven Learning",
      description: "Our department adopts a future-focused learning approach through AI-driven assessments, Project-Based Learning (PBL), social internships, and industry-oriented capstone projects. Students work with real-world problems while gaining hands-on experience with leading tools such as CodeTantra, AWS Academy, HackerRank, Kaggle, WeXL, Infosys Springboard ensuring practical exposure and strong industry readiness."
    },
    {
      id: 3,
      image: "/cse-ai-assets/images/key1.jpeg",
      title: "Industry-Aligned Specializations with Global Certifications",
      description: "Our Department blends strong academic foundations with industry-ready skills through professional electives aligned with globally recognized certifications, offering specialization tracks in AI & ML, Cloud Operations & Security, and Data Engineering & Cloud Analytics, enriched with industry expert sessions and practitioner-led workshops that ensures that students graduate certification-ready, technically proficient, professionally confident, and highly employable in today's rapidly evolving tech-driven world."
    },
    {
      id: 4,
      image: "/cse-ai-assets/images/key4.jpeg",
      title: "Structured Placement Preparation Ecosystem",
      description: "The department provides a focused placement preparation combining DSA training, coding contests on iamneo, CodeTantra, HackerRank, CodeChef and assessments from AMCAT. Students also receive certification guidance, resume and LinkedIn optimization support, technical bootcamps, and personalized mentoring-ensuring streamlined, industry-aligned placement readiness."
    }
  ];

  return (
    <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="container">
        <h2 className="fw-bold mb-5"
          style={{
            fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
            color: '#002855',
            borderBottom: '3px solid #F26520',
            paddingBottom: '10px',
            display: 'inline-block'
          }}>
          Department's Highlights
        </h2>

        <div className="row g-4">
          {highlights.map((highlight) => (
            <div key={highlight.id} className="col-lg-6">
              <div
                className="d-flex bg-white rounded-3 overflow-hidden h-100"
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
                <div style={{ flex: '0 0 160px', position: 'relative' }}>
                  <img
                    src={highlight.image}
                    alt={highlight.title}
                    className="w-100 h-100"
                    style={{ objectFit: 'cover', position: 'absolute', top: 0, left: 0 }}
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
                      lineHeight: '1.5',
                      textAlign: 'justify'
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