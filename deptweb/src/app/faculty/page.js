'use client'; // Refreshed

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function FacultyPage() {
    // All 70 faculty members
    const facultyMembers = [
        { id: 1, name: "Dr. Rekha Kashyap", position: "Dean-CSE(AI/AI&ML)", degree: "Ph.D.", university: "JNU, New Delhi", image: "/cse-ai-assets/faculty/DR. REKHA KASHYAP.JPG" },
        { id: 2, name: "Dr. Sapna Juneja", position: "Professor", branch: "CSE(AI)", degree: "Ph.D.", university: "MDU, Rohtak, Haryana", image: "/cse-ai-assets/faculty/DR. SAPNA JUNEJA.JPG" },
        { id: 3, name: "Dr. Laxman Singh", position: "Professor", branch: "CSE(AI&ML)", degree: "Ph.D.", university: "Jamia Millia Islamia, New Delhi", image: "/cse-ai-assets/faculty/DR. LAXMAN SINGH.JPG" },
        { id: 4, name: "Dr. Pratibha Singh", position: "Associate Professor & Program Head", branch: "CSE(AI&ML)", degree: "Ph.D.", university: "IIT - Delhi", image: "/cse-ai-assets/faculty/DR. PRATIBHA SINGH.JPG" },
        { id: 5, name: "Dr. Shelly Gupta", position: "Associate Professor & Program Head", branch: "CSE(AI)", degree: "Ph.D.", university: "Amity University, Uttar Pradesh", image: "/cse-ai-assets/faculty/DR. SHELLY GUPTA.JPG" },
        { id: 6, name: "Dr. Mukesh Kumar Tripathi", position: "Associate Professor", branch: "CSE(AI)", degree: "Ph.D.", university: "Visvesvaraya Technological University, Belagavi", image: "/cse-ai-assets/faculty/DR. MUKESH KUMAR TRIPATHI.JPG" },
        { id: 7, name: "Dr. Puneet Garg", position: "Associate Professor", branch: "CSE(AI)", degree: "Ph.D.", university: "J.C. Bose University of Science and Technology, YMCA", image: "/cse-ai-assets/faculty/DR. PUNEET GARG.JPG" },
        { id: 8, name: "Dr. Rohit", position: "Associate Professor", branch: "CSE(AI)", degree: "Ph.D.", university: "University of Technology, Jaipur", image: "/cse-ai-assets/faculty/DR. ROHIT.JPG" },
        { id: 9, name: "Dr. Kiran", position: "Associate Professor", branch: "CSE(AI)", degree: "Ph.D.", university: "SRM University, Sonepat", image: "/cse-ai-assets/faculty/DR. KIRAN.JPG" },
        { id: 10, name: "Mr. Sahil Bhatia", position: "Assistant Professor & Program Head (First Year)", branch: "CSE(AI)", degree: "M.Tech.", university: "IIT - Jodhpur", image: "/cse-ai-assets/faculty/MR. SAHIL BHATIA.JPG" },
        { id: 11, name: "Mr. Mayank Lakhotia", position: "Assistant Professor & Program Head (First Year)", branch: "CSE(AI&ML)", degree: "M.Tech.", university: "NSUT, New Delhi", image: "/cse-ai-assets/images/Mayank-Lakhotia.png" },
        { id: 12, name: "Dr. Richa Singh", position: "Assistant Professor", branch: "CSE(AI&ML)", degree: "Ph.D.", university: "Amity University, Lucknow", image: "/cse-ai-assets/faculty/DR. RICHA SINGH.JPG" },
        { id: 13, name: "Dr. Kavya Gupta", position: "Assistant Professor", branch: "CSE(AI&ML)", degree: "Ph.D.", university: "IGDTUW, Delhi", image: "/cse-ai-assets/faculty/DR. KAVYA GUPTA.JPG" },
        { id: 14, name: "Dr. Davesh Kumar Sharma", position: "Assistant Professor", branch: "CSE(AI&ML)", degree: "Ph.D.", university: "SRM Institute of Science and Technology", image: "/cse-ai-assets/faculty/DR. DAVESH KUMAR SHARMA.JPG" },
        { id: 15, name: "Mr. Rajeev Kumar Singh", position: "Assistant Professor", branch: "CSE(AI&ML)", degree: "M.Tech.", university: "Dr. A.P.J. AKTU, Lucknow", image: "/cse-ai-assets/faculty/MR. RAJEEV KUMAR SINGH.JPG" },
        { id: 16, name: "Ms. Bhawna", position: "Assistant Professor", branch: "CSE(AI&ML)", degree: "M.Tech.", university: "Maharishi Markandeshwar University, Mullana, Ambala", image: "/cse-ai-assets/faculty/MS. BHAWNA.JPG" },
        { id: 17, name: "Ms. Payal Chhabra", position: "Assistant Professor", branch: "CSE(AI&ML)", degree: "M.Tech.", university: "Govind Ballabh Pant University, Pantnagar", image: "/cse-ai-assets/faculty/MS. PAYAL CHHABRA.JPG" },
        { id: 18, name: "Dr. Gaurav Srivastav", position: "Assistant Professor", branch: "CSE(AI)", degree: "Ph.D.", university: "Sharda University, Greater Noida", image: "/cse-ai-assets/faculty/DR. GAURAV SRIVASTAVA.JPG" },
        { id: 19, name: "Dr. Manvi Khatri", position: "Assistant Professor", branch: "CSE(AI)", degree: "Ph.D.", university: "SRM University, Sonepat", image: "/cse-ai-assets/faculty/DR. MANVI KHATRI.JPG" },
        { id: 20, name: "Ms. Nidhi Singh", position: "Assistant Professor", branch: "CSE(AI&ML)", degree: "M.Tech.", university: "UPTU, Lucknow", image: "/cse-ai-assets/faculty/MS. NIDHI SINGH.JPG" },
        { id: 21, name: "Ms. Akanksha", position: "Assistant Professor", branch: "CSE(AI&ML)", degree: "M.Tech.", university: "Gautam Buddha University, Greater Noida", image: "/cse-ai-assets/faculty/MS. AKANKSHA .JPG" },
        { id: 22, name: "Mr. Gagan Kumar Singh", position: "Assistant Professor", branch: "CSE(AI)", degree: "M.Tech.", university: "MNNIT, Allahabad", image: "/cse-ai-assets/faculty/MR. GAGAN KUMAR SINGH.JPG" },
        { id: 23, name: "Ms. Anjali Chauhan", position: "Assistant Professor", branch: "CSE(AI)", degree: "M.Tech.", university: "Jaypee Institute of Information Technology, Noida", image: "/cse-ai-assets/faculty/MS. ANJALI CHAUHAN.JPG" },
        { id: 24, name: "Ms. Umang Kant", position: "Assistant Professor", branch: "CSE(AI)", degree: "M.Tech.", university: "Gautam Buddha University, Gautam Budh Nagar", image: "/cse-ai-assets/faculty/MS. UMANG KANT.JPG" },
        { id: 25, name: "Ms. Ruchika Mavis Daniel", position: "Assistant Professor", branch: "CSE(AI)", degree: "M.Tech.", university: "Sam Higginbottom Institute of Agriculture, Technology & Sciences", image: "/cse-ai-assets/faculty/MS. RUCHIKA M DANIEL.JPG" },
        { id: 26, name: "Mr. Nagendra Nath Dubey", position: "Assistant Professor", branch: "CSE(AI&ML)", degree: "M.Tech.", university: "Rajasthan Technical University, Kota", image: "/cse-ai-assets/faculty/Mr. Nagendra Nath Dubey.JPG" },
        { id: 27, name: "Mr. Ajay Singh", position: "Assistant Professor", branch: "CSE(AI)", degree: "M.Tech.", university: "Netaji Subhas University of Technology, New Delhi", image: "/cse-ai-assets/faculty/MR. AJAY SINGH.JPG" },
        { id: 28, name: "Ms. Kumud Alok", position: "Assistant Professor", branch: "CSE(AI)", degree: "M.Tech.", university: "Galgotias University, Greater Noida", image: "/cse-ai-assets/faculty/MS. KUMUD ALOK.JPG" },
        { id: 29, name: "Mr. Mukesh Lomror", position: "Assistant Professor", branch: "CSE(AI)", degree: "M.S.", university: "JNU, Delhi", image: "/cse-ai-assets/faculty/MR. MUKESH LOMROR.JPG" },
        { id: 30, name: "Ms. Preeti Verma", position: "Assistant Professor", branch: "CSE(AI)", degree: "M.Tech.", university: "NIT, Surathkal, Karnataka", image: "/cse-ai-assets/faculty/MS. PREETI VERMA.JPG" },
        { id: 31, name: "Mr. Thammali Gangadhar", position: "Assistant Professor", branch: "CSE(AI&ML)", degree: "M.Tech.", university: "DTU, New Delhi", image: "/cse-ai-assets/faculty/MR. THAMMALI GANGADHAR.JPG" },
        { id: 32, name: "Mr. Bikki Kumar", position: "Assistant Professor", branch: "CSE(AI)", degree: "M.Tech.", university: "DTU, New Delhi", image: "/cse-ai-assets/faculty/MR. BIKKI KUMAR.JPG" },
        { id: 33, name: "Mr. Shivansh Prasad", position: "Assistant Professor", branch: "CSE(AI)", degree: "M.Tech.", university: "GGSIPU, Delhi", image: "/cse-ai-assets/faculty/MR. SHIVANSH PRASAD.JPG" },
        { id: 34, name: "Mr. Tanmoy Das", position: "Assistant Professor", branch: "CSE(AI&ML)", degree: "M.Tech.", university: "DTU, New Delhi", image: "/cse-ai-assets/faculty/MR. TANMOY DAS.JPG" },
        { id: 35, name: "Mr. Rachit Patel", position: "Assistant Professor", branch: "CSE(AI&ML)", degree: "M.Tech.", university: "DTU, New Delhi", image: "/cse-ai-assets/faculty/MR. RACHIT PATEL.JPG" },
        { id: 36, name: "Ms. Ayushi Mittal", position: "Assistant Professor", branch: "CSE(AI)", degree: "M.Tech.", university: "IGDTUW, New Delhi", image: "/cse-ai-assets/faculty/MS. AYUSHI MITTAL.JPG" },
        { id: 37, name: "Mr. Abhishek Shukla", position: "Assistant Professor", branch: "CSE(AI&ML)", degree: "M.Tech.", university: "DTU, New Delhi", image: "/cse-ai-assets/faculty/MR. ABHISHEK SHUKLA.JPG" },
        { id: 38, name: "Mr. Rishabh Sachan", position: "Assistant Professor", branch: "CSE(AI)", degree: "M.Tech.", university: "IIT - Jodhpur", image: "/cse-ai-assets/faculty/MR. RISHABH SACHAN.JPG" },
        { id: 39, name: "Ms. Surbhi Verma", position: "Assistant Professor", branch: "CSE(AI&ML)", degree: "M.Tech.", university: "Shobhit University, Meerut", image: "/cse-ai-assets/faculty/MS. SURBHI VERMA.JPG" },
        { id: 40, name: "Mr. Sundeep Raj", position: "Assistant Professor", branch: "CSE(AI&ML)", degree: "M.Tech.", university: "GGSIPU, New Delhi", image: "/cse-ai-assets/faculty/MR. SUNDEEP RAJ.JPG" },
        { id: 41, name: "Ms. Anjali Maurya", position: "Teaching Assistant", branch: "CSE(AI&ML)", degree: "M.Tech.", university: "IIITDM, Jabalpur", image: "/cse-ai-assets/faculty/MS. ANJALI MAURYA.JPG" },
        { id: 42, name: "Ms. Priya Singh", position: "Assistant Professor", branch: "CSE(AI&ML)", degree: "M.Tech.", university: "AKTU, Lucknow", image: "/cse-ai-assets/faculty/MS. PRIYA.JPG" },
        { id: 43, name: "Ms. Deepinder Kaur", position: "Assistant Professor", branch: "CSE(AI)", degree: "M.Tech.", university: "GGSIPU, New Delhi", image: "/cse-ai-assets/faculty/MRS. DEEPINDER.JPG" },
        { id: 44, name: "Ms. Neha Thakur", position: "Assistant Professor", branch: "CSE(AI&ML)", degree: "M.Tech.", university: "DTU, New Delhi", image: "/cse-ai-assets/faculty/MS. NEHA THAKUR.JPG" },
        { id: 45, name: "Mr. Pramod Kumar Sethy", position: "Assistant Professor", branch: "CSE(AI)", degree: "M.Tech.", university: "IIT(ISM), Dhanbad", image: "/cse-ai-assets/faculty/MR. PRAMOD KUMAR SETHY.JPG" },
        { id: 46, name: "Mr. Abhishek Kesharwani", position: "Assistant Professor", branch: "CSE(AI&ML)", degree: "M.Tech.", university: "AKTU, Lucknow", image: "/cse-ai-assets/faculty/MR. ABHISHEK KESARWANI.JPG" },
        { id: 47, name: "Mr. Vishal Yadav", position: "Assistant Professor", branch: "CSE(AI&ML)", degree: "M.Tech.", university: "NSUT, New Delhi", image: "/cse-ai-assets/faculty/MR. VISHAL.JPG" },
        { id: 48, name: "Ms. Laxmi", position: "Assistant Professor", branch: "CSE(AI&ML)", degree: "M.Tech.", university: "IGDTUW, New Delhi", image: "/cse-ai-assets/faculty/MS. LAXMI.JPG" },
        { id: 49, name: "Mr. Anuraag Raj Kamlesh Narayan", position: "Assistant Professor", branch: "CSE(AI&ML)", degree: "M.Tech.", university: "DTU, New Delhi", image: "/cse-ai-assets/faculty/MR. ANURAG RAJ .JPG" },
        { id: 50, name: "Ms. Anshika Rai", position: "Teaching Assistant", branch: "CSE(AI&ML)", degree: "M.Tech.", university: "NSUT, New Delhi", image: "/cse-ai-assets/faculty/MS. ANSHIKA RAI.JPG" },
        { id: 51, name: "Mr. Akash Singh", position: "Assistant Professor", branch: "CSE(AI&ML)", degree: "M.Tech.", university: "NSUT, New Delhi", image: "/cse-ai-assets/faculty/MR. AKASH SINGH.JPG" },
        { id: 52, name: "Mr. Piyush Agarwal", position: "Assistant Professor", branch: "CSE(AI)", degree: "M.Tech.", university: "DTU, New Delhi", image: "/cse-ai-assets/faculty/MR. PIYUSH AGARWAL.JPG" },
        { id: 53, name: "Mr. Atinder Pal Singh", position: "Assistant Professor", branch: "CSE(AI)", degree: "M.Tech.", university: "MNIT, Jaipur", image: "/cse-ai-assets/faculty/MR. ATINDER PAL.JPG" },
        { id: 54, name: "Ms. Mohini Verma", position: "Assistant Professor", branch: "CSE(AI)", degree: "M.Tech.", university: "IGDTUW, New Delhi", image: "/cse-ai-assets/faculty/MS. MOHINI.JPG" },
        { id: 55, name: "Ms. Himanshi Sharma", position: "Assistant Professor", branch: "CSE(AI&ML)", degree: "M.Tech.", university: "IGDTUW, Delhi", image: "/cse-ai-assets/faculty/MS. HIMANSHI SHARMA.JPG" },
        { id: 56, name: "Mr. Mohit Sharma", position: "Assistant Professor", branch: "CSE(AI)", degree: "M.Tech.", university: "DTU, New Delhi", image: "/cse-ai-assets/faculty/MR. MOHIT SHARMA.JPG" },
        { id: 57, name: "Mr. Rahul Vishwakarma", position: "Assistant Professor", branch: "CSE(AI&ML)", degree: "B.Tech.+ M.Tech. (Integrated)", university: "Devi Ahilya Vishwavidyalaya, Indore", image: "/cse-ai-assets/faculty/MR. RAHUL VISHWAKARMA.JPG" },
        { id: 58, name: "Mr. Dharmanshu Sharma", position: "Assistant Professor", branch: "CSE(AI)", degree: "M.Tech.", university: "MNIT, Jaipur", image: "/cse-ai-assets/faculty/MR. DHARMANSHU.JPG" },
        { id: 59, name: "Ms. Kajal Kansal", position: "Assistant Professor", branch: "CSE(AI&ML)", degree: "M.Tech.", university: "Dr. A.P.J. AKTU, Lucknow", image: "/cse-ai-assets/faculty/MS. KAJAL KANSAL.JPG" },
        { id: 60, name: "Mr. Amit Kumar", position: "Assistant Professor", branch: "CSE(AI)", degree: "M.Tech.", university: "Thapar University", image: "/cse-ai-assets/faculty/MR. AMIT KUMAR.JPG" },
        { id: 61, name: "Mr. Ambarish G V S", position: "Assistant Professor", branch: "CSE(AI)", degree: "M.Tech.", university: "NIT, Kurukshetra", image: "/cse-ai-assets/faculty/MR. AMBARSIH.JPG" },
        { id: 62, name: "Mr. Ayush Chaurasia", position: "Assistant Professor", branch: "CSE(AI)", degree: "M.Tech.", university: "Jawaharlal Nehru University", image: "/cse-ai-assets/faculty/MR.AYUSH CHAURASIA.JPG" },
        { id: 63, name: "Mr. Mahendra Kishor", position: "Assistant Professor", branch: "CSE(AI)", degree: "M.Tech.", university: "IIT, Ropar", image: "/cse-ai-assets/faculty/MR. MAHENDRA KISHORE.JPG" },
        { id: 64, name: "Mr. Tamal Barman", position: "Assistant Professor", branch: "CSE(AI)", degree: "M.Tech.", university: "DTU, New Delhi", image: "/cse-ai-assets/faculty/MR. TAMAL.JPG" },
        { id: 65, name: "Mr. Mrityunjay Kumar", position: "Assistant Professor", branch: "CSE(AI&ML)", degree: "M.Tech.", university: "AKTU, Lucknow", image: "/cse-ai-assets/faculty/MR. MRITYUNJAY.JPG" },
        { id: 66, name: "Mr. Aman Sharma", position: "Assistant Professor", branch: "CSE(AI)", degree: "M.Tech.", university: "NIT - Delhi", image: "/cse-ai-assets/faculty/MR. AMAN SHARMA.JPG" },
        { id: 67, name: "Mr. Anish Thakur", position: "Assistant Professor", branch: "CSE(AI)", degree: "M.E.", university: "Thapar University, Punjab", image: "/cse-ai-assets/faculty/MR. ANISH THAKUR.JPG" },
        { id: 68, name: "Mr. Bhagwati Saran", position: "Assistant Professor", branch: "CSE(AI)", degree: "M.Tech.", university: "Sharda University, Greater Noida", image: "/cse-ai-assets/faculty/MR. BHAGWATI SHARAN.JPG" },
        { id: 69, name: "Mr. Abhishek Kumar", position: "Assistant Professor", branch: "CSE(AI)", degree: "M.Tech.", university: "University of Hyderabad", image: "/cse-ai-assets/faculty/MR. ABHISHEK KUMAR.JPG" },
        { id: 70, name: "Mr. Udit Nath", position: "Assistant Professor", branch: "CSE(AI)", degree: "M.Tech.", university: "IIIT, Guwahati", image: "/cse-ai-assets/faculty/MR. UDIT NATH.JPG" }
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
            <main className="container-fluid px-5 py-5">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-5">
                    {facultyMembers.map((member) => (
                        <div key={member.id} className="col">
                            <div
                                className="card border-0 shadow-sm h-100"
                                style={{
                                    borderRadius: '12px',
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                    cursor: 'pointer',
                                    width: '260px',
                                    margin: '0 auto'
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
                                        height: '250px',
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
                                        style={{ objectFit: 'cover', objectPosition: 'top' }}
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
