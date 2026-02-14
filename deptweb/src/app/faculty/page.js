'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function FacultyPage() {
    // All 70 faculty members
    const facultyMembers = [
        { id: 1, name: "Dr. Rekha Kashyap", position: "Dean-CSE(AI/AI&ML)", degree: "Ph.D.", university: "JNU, New Delhi", image: "/cse-ai-assets/images/Dean's photo.JPG" },
        { id: 2, name: "Dr. Pratibha Singh", position: "Associate Professor & Program Head", branch: "CSE(AI&ML)", degree: "Ph.D.", university: "IIT - Delhi", image: "/cse-ai-assets/images/Dean's photo.JPG" },
        { id: 3, name: "Dr. Laxman Singh", position: "Professor", branch: "CSE(AI&ML)", degree: "Ph.D.", university: "Jamia Millia Islamia, New Delhi", image: "/cse-ai-assets/images/Dean's photo.JPG" },
        { id: 4, name: "Dr. Richa Singh", position: "Assistant Professor", branch: "CSE(AI&ML)", degree: "Ph.D.", university: "Amity University, Lucknow", image: "/cse-ai-assets/images/Dean's photo.JPG" },
        { id: 5, name: "Dr. Kavya Gupta", position: "Assistant Professor", branch: "CSE(AI&ML)", degree: "Ph.D.", university: "IGDTUW, Delhi", image: "/cse-ai-assets/images/Dean's photo.JPG" },
        { id: 6, name: "Dr. Davesh Kumar Sharma", position: "Assistant Professor", branch: "CSE(AI&ML)", degree: "Ph.D.", university: "SRM Institute of Science and Technology", image: "/cse-ai-assets/images/Dean's photo.JPG" },
        { id: 7, name: "Mr. Rajeev Kumar Singh", position: "Assistant Professor", branch: "CSE(AI&ML)", degree: "M.Tech.", university: "Dr. A.P.J. AKTU, Lucknow", image: "/cse-ai-assets/images/Dean's photo.JPG" },
        { id: 8, name: "Ms. Bhawna", position: "Assistant Professor", branch: "CSE(AI&ML)", degree: "M.Tech.", university: "Maharishi Markandeshwar University, Mullana, Ambala", image: "/cse-ai-assets/images/Dean's photo.JPG" },
        { id: 9, name: "Ms. Payal Chhabra", position: "Assistant Professor", branch: "CSE(AI&ML)", degree: "M.Tech.", university: "Govind Ballabh Pant University, Pantnagar", image: "/cse-ai-assets/images/Dean's photo.JPG" },
        { id: 10, name: "Ms. Akanksha", position: "Assistant Professor", branch: "CSE(AI&ML)", degree: "M.Tech.", university: "Gautam Buddha University, Greater Noida", image: "/cse-ai-assets/images/Dean's photo.JPG" },
        { id: 11, name: "Mr. Nagendra Nath Dubey", position: "Assistant Professor", branch: "CSE(AI&ML)", degree: "M.Tech.", university: "Rajasthan Technical University, Kota", image: "/cse-ai-assets/images/Nagendra-Nath-Dubey.png" },
        { id: 12, name: "Mr. Thammali Gangadhar", position: "Assistant Professor", branch: "CSE(AI&ML)", degree: "M.Tech.", university: "DTU, New Delhi", image: "/cse-ai-assets/images/Dean's photo.JPG" },
        { id: 13, name: "Ms. Nidhi Singh", position: "Assistant Professor", branch: "CSE(AI&ML)", degree: "M.Tech.", university: "UPTU, Lucknow", image: "/cse-ai-assets/images/Dean's photo.JPG" },
        { id: 14, name: "Mr. Tanmoy Das", position: "Assistant Professor", branch: "CSE(AI&ML)", degree: "M.Tech.", university: "DTU, New Delhi", image: "/cse-ai-assets/images/Dean's photo.JPG" },
        { id: 15, name: "Mr. Rachit Patel", position: "Assistant Professor", branch: "CSE(AI&ML)", degree: "M.Tech.", university: "DTU, New Delhi", image: "/cse-ai-assets/images/Rachit-patel.png" },
        { id: 16, name: "Mr. Mayank Lakhotia", position: "Assistant Professor & Program Head (First Year)", branch: "CSE(AI&ML)", degree: "M.Tech.", university: "NSUT, New Delhi", image: "/cse-ai-assets/images/Mayank-Lakhotia.png" },
        { id: 17, name: "Mr. Abhishek Shukla", position: "Assistant Professor", branch: "CSE(AI&ML)", degree: "M.Tech.", university: "DTU, New Delhi", image: "/cse-ai-assets/images/Dean's photo.JPG" },
        { id: 18, name: "Ms. Surbhi Verma", position: "Assistant Professor", branch: "CSE(AI&ML)", degree: "M.Tech.", university: "Shobhit University, Meerut", image: "/cse-ai-assets/images/Dean's photo.JPG" },
        { id: 19, name: "Mr. Sundeep Raj", position: "Assistant Professor", branch: "CSE(AI&ML)", degree: "M.Tech.", university: "GGSIPU, New Delhi", image: "/cse-ai-assets/images/Dean's photo.JPG" },
        { id: 20, name: "Ms. Anjali Maurya", position: "Assistant Professor", branch: "CSE(AI&ML)", degree: "M.Tech.", university: "IIITDM, Jabalpur", image: "/cse-ai-assets/images/Dean's photo.JPG" },
        { id: 21, name: "Ms. Priya", position: "Assistant Professor", branch: "CSE(AI&ML)", degree: "M.Tech.", university: "AKTU, Lucknow", image: "/cse-ai-assets/images/Dean's photo.JPG" },
        { id: 22, name: "Ms. Neha Thakur", position: "Assistant Professor", branch: "CSE(AI&ML)", degree: "M.Tech.", university: "DTU, New Delhi", image: "/cse-ai-assets/images/Dean's photo.JPG" },
        { id: 23, name: "Mr. Abhishek Kesharwani", position: "Assistant Professor", branch: "CSE(AI&ML)", degree: "M.Tech.", university: "AKTU, Lucknow", image: "/cse-ai-assets/images/Dean's photo.JPG" },
        { id: 24, name: "Mr. Anuraag Raj Kamlesh Narayan", position: "Assistant Professor", branch: "CSE(AI&ML)", degree: "M.Tech.", university: "DTU, New Delhi", image: "/cse-ai-assets/images/Dean's photo.JPG" },
        { id: 25, name: "Mr. Vishal Yadav", position: "Assistant Professor", branch: "CSE(AI&ML)", degree: "M.Tech.", university: "NSUT, New Delhi", image: "/cse-ai-assets/images/Dean's photo.JPG" },
        { id: 26, name: "Mr. Akash Singh", position: "Assistant Professor", branch: "CSE(AI&ML)", degree: "M.Tech.", university: "NSUT, New Delhi", image: "/cse-ai-assets/images/Dean's photo.JPG" },
        { id: 27, name: "Ms. Anshika Rai", position: "Assistant Professor", branch: "CSE(AI&ML)", degree: "M.Tech.", university: "NSUT, New Delhi", image: "/cse-ai-assets/images/Dean's photo.JPG" },
        { id: 28, name: "Ms. Laxmi", position: "Assistant Professor", branch: "CSE(AI&ML)", degree: "M.Tech.", university: "IGDTUW, New Delhi", image: "/cse-ai-assets/images/Dean's photo.JPG" },
        { id: 29, name: "Ms. Himanshi Sharma", position: "Assistant Professor", branch: "CSE(AI&ML)", degree: "M.Tech.", university: "IGDTUW, Delhi", image: "/cse-ai-assets/images/Dean's photo.JPG" },
        { id: 30, name: "Mr. Rahul Vishwakarma", position: "Assistant Professor", branch: "CSE(AI&ML)", degree: "B.Tech.+ M.Tech. (Integrated)", university: "Devi Ahilya Vishwavidyalaya, Indore", image: "/cse-ai-assets/images/Dean's photo.JPG" },
        { id: 31, name: "Ms. Kajal Kansal", position: "Assistant Professor", branch: "CSE(AI&ML)", degree: "M.Tech.", university: "Dr. A.P.J. AKTU, Lucknow", image: "/cse-ai-assets/images/Dean's photo.JPG" },
        { id: 32, name: "Mr. Amit Kumar", position: "Assistant Professor", branch: "CSE(AI&ML)", degree: "M.Tech.", university: "Thapar University", image: "/cse-ai-assets/images/Dean's photo.JPG" },
        { id: 33, name: "Mr. Mrityunjay Kumar", position: "Assistant Professor", branch: "CSE(AI&ML)", degree: "M.Tech.", university: "AKTU, Lucknow", image: "/cse-ai-assets/images/Dean's photo.JPG" },
        { id: 34, name: "Dr. Shelly Gupta", position: "Associate Professor & Program Head", branch: "CSE(AI)", degree: "Ph.D.", university: "Amity University, Uttar Pradesh", image: "/cse-ai-assets/images/Dean's photo.JPG" },
        { id: 35, name: "Dr. Sapna Juneja", position: "Professor", branch: "CSE(AI)", degree: "Ph.D.", university: "MDU, Rohtak, Haryana", image: "/cse-ai-assets/images/Dean's photo.JPG" },
        { id: 36, name: "Dr. Puneet Garg", position: "Associate Professor", branch: "CSE(AI)", degree: "Ph.D.", university: "J.C. Bose University of Science and Technology, YMCA", image: "/cse-ai-assets/images/Dean's photo.JPG" },
        { id: 37, name: "Dr. Kiran", position: "Associate Professor", branch: "CSE(AI)", degree: "Ph.D.", university: "SRM University, Sonepat", image: "/cse-ai-assets/images/Dean's photo.JPG" },
        { id: 38, name: "Dr. Mukesh Kumar Tripathi", position: "Associate Professor", branch: "CSE(AI)", degree: "Ph.D.", university: "Visvesvaraya Technological University, Belagavi", image: "/cse-ai-assets/images/Dean's photo.JPG" },
        { id: 39, name: "Dr. Rohit", position: "Associate Professor", branch: "CSE(AI)", degree: "Ph.D.", university: "University of Technology, Jaipur", image: "/cse-ai-assets/images/Dean's photo.JPG" },
        { id: 40, name: "Dr. Gaurav Srivastav", position: "Assistant Professor", branch: "CSE(AI)", degree: "Ph.D.", university: "Sharda University, Greater Noida", image: "/cse-ai-assets/images/Dean's photo.JPG" },
        { id: 41, name: "Dr. Manvi Khatri", position: "Assistant Professor", branch: "CSE(AI)", degree: "Ph.D.", university: "SRM University, Sonepat", image: "/cse-ai-assets/images/Dean's photo.JPG" },
        { id: 42, name: "Mr. Sahil Bhatia", position: "Assistant Professor & Program Head (First Year)", branch: "CSE(AI)", degree: "M.Tech.", university: "IIT - Jodhpur", image: "/cse-ai-assets/images/Dean's photo.JPG" },
        { id: 43, name: "Mr. Gagan Kumar Singh", position: "Assistant Professor", branch: "CSE(AI)", degree: "M.Tech.", university: "MNNIT, Allahabad", image: "/cse-ai-assets/images/Dean's photo.JPG" },
        { id: 44, name: "Ms. Anjali Chauhan", position: "Assistant Professor", branch: "CSE(AI)", degree: "M.Tech.", university: "Jaypee Institute of Information Technology, Noida", image: "/cse-ai-assets/images/Dean's photo.JPG" },
        { id: 45, name: "Ms. Umang Kant", position: "Assistant Professor", branch: "CSE(AI)", degree: "M.Tech.", university: "Gautam Buddha University, Gautam Budh Nagar", image: "/cse-ai-assets/images/Dean's photo.JPG" },
        { id: 46, name: "Ms. Ruchika Mavis Daniel", position: "Assistant Professor", branch: "CSE(AI)", degree: "M.Tech.", university: "Sam Higginbottom Institute of Agriculture, Technology & Sciences", image: "/cse-ai-assets/images/Dean's photo.JPG" },
        { id: 47, name: "Mr. Ajay Singh", position: "Assistant Professor", branch: "CSE(AI)", degree: "M.Tech.", university: "Netaji Subhas University of Technology, New Delhi", image: "/cse-ai-assets/images/Dean's photo.JPG" },
        { id: 48, name: "Ms. Kumud Alok", position: "Assistant Professor", branch: "CSE(AI)", degree: "M.Tech.", university: "Galgotias University, Greater Noida", image: "/cse-ai-assets/images/Dean's photo.JPG" },
        { id: 49, name: "Mr. Mukesh Lomror", position: "Teaching Assistant", branch: "CSE(AI)", degree: "M.S.", university: "JNU, Delhi", image: "/cse-ai-assets/images/Dean's photo.JPG" },
        { id: 50, name: "Ms. Preeti Verma", position: "Assistant Professor", branch: "CSE(AI)", degree: "M.Tech.", university: "NIT, Surathkal, Karnataka", image: "/cse-ai-assets/images/Dean's photo.JPG" },
        { id: 51, name: "Mr. Shivansh Prasad", position: "Assistant Professor", branch: "CSE(AI)", degree: "M.Tech.", university: "GGSIPU, Delhi", image: "/cse-ai-assets/images/Dean's photo.JPG" },
        { id: 52, name: "Mr. Bikki Kumar", position: "Assistant Professor", branch: "CSE(AI)", degree: "M.Tech.", university: "DTU, New Delhi", image: "/cse-ai-assets/images/Dean's photo.JPG" },
        { id: 53, name: "Ms. Ayushi Mittal", position: "Assistant Professor", branch: "CSE(AI)", degree: "M.Tech.", university: "IGDTUW, New Delhi", image: "/cse-ai-assets/images/Dean's photo.JPG" },
        { id: 54, name: "Mr. Rishabh Sachan", position: "Assistant Professor", branch: "CSE(AI)", degree: "M.Tech.", university: "IIT - Jodhpur", image: "/cse-ai-assets/images/Dean's photo.JPG" },
        { id: 55, name: "Ms. Deepinder Kaur", position: "Assistant Professor", branch: "CSE(AI)", degree: "M.Tech.", university: "GGSIPU, New Delhi", image: "/cse-ai-assets/images/Dean's photo.JPG" },
        { id: 56, name: "Mr. Pramod Kumar Sethy", position: "Assistant Professor", branch: "CSE(AI)", degree: "M.Tech.", university: "IIT(ISM), Dhanbad", image: "/cse-ai-assets/images/Dean's photo.JPG" },
        { id: 57, name: "Mr. Piyush Agarwal", position: "Assistant Professor", branch: "CSE(AI)", degree: "M.Tech.", university: "DTU, New Delhi", image: "/cse-ai-assets/images/image.jpg.jpeg" },
        { id: 58, name: "Ms. Mohini Verma", position: "Assistant Professor", branch: "CSE(AI)", degree: "M.Tech.", university: "IGDTUW, New Delhi", image: "/cse-ai-assets/images/Dean's photo.JPG" },
        { id: 59, name: "Mr. Atinder Pal Singh", position: "Assistant Professor", branch: "CSE(AI)", degree: "M.Tech.", university: "MNIT, Jaipur", image: "/cse-ai-assets/images/Dean's photo.JPG" },
        { id: 60, name: "Mr. Mohit Sharma", position: "Assistant Professor", branch: "CSE(AI)", degree: "M.Tech.", university: "DTU, New Delhi", image: "/cse-ai-assets/images/Dean's photo.JPG" },
        { id: 61, name: "Mr. Dharmanshu Sharma", position: "Assistant Professor", branch: "CSE(AI)", degree: "M.Tech.", university: "MNIT, Jaipur", image: "/cse-ai-assets/images/Dean's photo.JPG" },
        { id: 62, name: "Mr. Ambarish G V S", position: "Assistant Professor", branch: "CSE(AI)", degree: "M.Tech.", university: "NIT, Kurukshetra", image: "/cse-ai-assets/images/Dean's photo.JPG" },
        { id: 63, name: "Mr. Ayush Chaurasia", position: "Assistant Professor", branch: "CSE(AI)", degree: "M.Tech.", university: "Jawaharlal Nehru University", image: "/cse-ai-assets/images/Dean's photo.JPG" },
        { id: 64, name: "Mr. Mahendra Kishor", position: "Assistant Professor", branch: "CSE(AI)", degree: "M.Tech.", university: "IIT, Ropar", image: "/cse-ai-assets/images/Dean's photo.JPG" },
        { id: 65, name: "Mr. Tamal Barman", position: "Assistant Professor", branch: "CSE(AI)", degree: "M.Tech.", university: "DTU, New Delhi", image: "/cse-ai-assets/images/Dean's photo.JPG" },
        { id: 66, name: "Mr. Aman Sharma", position: "Assistant Professor", branch: "CSE(AI)", degree: "M.Tech.", university: "NIT - Delhi", image: "/cse-ai-assets/images/Dean's photo.JPG" },
        { id: 67, name: "Mr. Anish Thakur", position: "Assistant Professor", branch: "CSE(AI)", degree: "M.E.", university: "Thapar University, Punjab", image: "/cse-ai-assets/images/Dean's photo.JPG" },
        { id: 68, name: "Mr. Bhagwati Saran", position: "Assistant Professor", branch: "CSE(AI)", degree: "M.Tech.", university: "Sharda University, Greater Noida", image: "/cse-ai-assets/images/Dean's photo.JPG" },
        { id: 69, name: "Mr. Abhishek Kumar", position: "Assistant Professor", branch: "CSE(AI)", degree: "M.Tech.", university: "University of Hyderabad", image: "/cse-ai-assets/images/Dean's photo.JPG" },
        { id: 70, name: "Mr. Udit Nath", position: "Assistant Professor", branch: "CSE(AI)", degree: "M.Tech.", university: "IIIT, Guwahati", image: "/cse-ai-assets/images/Dean's photo.JPG" }
    ];

    return (
        <div style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
            {/* Header */}
            <header style={{ 
                backgroundColor: 'white',
                borderBottom: '1px solid #e5e7eb',
                padding: '2.5rem 0 3rem 0'
            }}>
                <div className="container">
                    <Link 
                        href="/" 
                        className="text-decoration-none d-inline-flex align-items-center mb-4"
                        style={{ 
                            fontSize: '0.95rem',
                            color: '#6b7280',
                            fontWeight: '500',
                            transition: 'color 0.2s'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.color = '#111827'}
                        onMouseLeave={(e) => e.currentTarget.style.color = '#6b7280'}
                    >
                        <span style={{ fontSize: '1.3rem', marginRight: '0.6rem' }}>←</span>
                        Back to Home
                    </Link>
                    <h1 className="fw-bold mb-3" style={{ 
                        fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                        color: '#111827',
                        letterSpacing: '-0.02em'
                    }}>
                        Our Faculty
                    </h1>
                    <p className="mb-0" style={{ 
                        fontSize: '1.15rem',
                        color: '#6b7280',
                        maxWidth: '700px',
                        lineHeight: '1.6'
                    }}>
                        Meet the distinguished faculty members of CSE (AI) & CSE (AI & ML)
                    </p>
                </div>
            </header>

            {/* Faculty Grid */}
            <main className="container py-5">
                <div className="row g-4">
                    {facultyMembers.map((member) => (
                        <div key={member.id} className="col-md-6 col-lg-4 col-xl-3">
                            <div
                                className="card border-0 shadow-sm h-100"
                                style={{
                                    borderRadius: '12px',
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                    cursor: 'pointer'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-5px)';
                                    e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.15)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 .125rem .25rem rgba(0,0,0,.075)';
                                }}
                            >
                                <div
                                    className="overflow-hidden"
                                    style={{
                                        height: '200px',
                                        borderTopLeftRadius: '12px',
                                        borderTopRightRadius: '12px',
                                        position: 'relative',
                                        backgroundColor: '#e9ecef'
                                    }}
                                >
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        style={{ objectFit: 'cover' }}
                                    />
                                </div>
                                <div className="card-body text-center p-3">
                                    <h2
                                        className="card-title fw-bold mb-2"
                                        style={{
                                            fontSize: '1rem',
                                            color: '#00304C',
                                            lineHeight: '1.3'
                                        }}
                                    >
                                        {member.name}
                                    </h2>
                                    <p
                                        className="card-text mb-3"
                                        style={{
                                            fontSize: '0.85rem',
                                            color: '#666',
                                            fontWeight: '500',
                                            lineHeight: '1.4'
                                        }}
                                    >
                                        {member.position}, {member.branch}
                                    </p>
                                    <p
                                        className="card-text small text-muted mb-0"
                                        style={{ fontSize: '0.75rem', lineHeight: '1.3' }}
                                    >
                                        {member.degree} {member.university}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
