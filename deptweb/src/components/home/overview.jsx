'use client';

import React from 'react';

export default function Overview() {
  return (
    <section className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
      <div className="container">
        <div
          className="p-4 p-lg-5"
          style={{
            boxShadow: '0 0 20px rgba(0,0,0,0.05)', // Soft shadow
            borderRadius: '16px',
            backgroundColor: '#fff'
          }}
        >
          <div className="row align-items-center g-5">
            {/* Left Content */}
            <div className="col-lg-5">
              <h2 className="fw-bold mb-4" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', color: '#000' }}>
                CSE (AI / AI&ML) Department's <span style={{ color: '#F26520' }}>Key <br /> Highlights</span> in <span style={{ color: '#F26520' }}>Numbers</span>
              </h2>

              <p className="text-muted mb-4" style={{ lineHeight: '1.6' }}>
                These achievements reflect our commitment to excellence in scale, skill, and success. With a robust intake, strong placement outcomes, global certifications, and significant student-led funding, the department stands as a dynamic ecosystem where academic strength, industry readiness, and entrepreneurial ambition translate into measurable, impactful results.
              </p>

              <a
                href="https://admission.kiet.edu/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn px-4 py-2 text-white fw-semibold"
                style={{
                  backgroundColor: '#F26520',
                  borderRadius: '6px',
                  border: 'none',
                  fontSize: '0.95rem',
                  textDecoration: 'none',
                  display: 'inline-block'
                }}
              >
                Apply Now
              </a>
            </div>

            {/* Right Stats Grid */}
            <div className="col-lg-7">
              <div className="row g-4 text-center text-lg-start">
                {/* Stat 1 */}
                <div className="col-sm-6">
                  <h3 className="fw-bold mb-1" style={{ fontSize: '2.5rem', color: '#F26520' }}>₹7 Cr</h3>
                  <p className="small fw-bold mb-0 text-dark">Funding Raised by Alumni</p>
                  <p className="small text-muted">Through Startup : 2025 batch</p>
                </div>

                {/* Stat 2 */}
                <div className="col-sm-6">
                  <h3 className="fw-bold mb-1" style={{ fontSize: '2.5rem', color: '#F26520' }}>95%</h3>
                  <p className="small fw-bold mb-0 text-dark">Placement Record in</p>
                  <p className="small text-muted">Leading Tech & AI Companies</p>
                </div>

                {/* Stat 3 */}
                <div className="col-sm-6">
                  <h3 className="fw-bold mb-1" style={{ fontSize: '2.5rem', color: '#F26520' }}>240 + 300</h3>
                  <p className="small fw-bold mb-0 text-dark">Annual Student Intake</p>
                  <p className="small text-muted"> CSE (AI) + CSE (AI&ML)</p>
                </div>

                {/* Stat 4 */}
                <div className="col-sm-6">
                  <h3 className="fw-bold mb-1" style={{ fontSize: '2.5rem', color: '#F26520' }}>650+</h3>
                  <p className="small fw-bold mb-0 text-dark">Globally Certified Students</p>
                  <p className="small text-muted">(AI • ML • Cloud)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
