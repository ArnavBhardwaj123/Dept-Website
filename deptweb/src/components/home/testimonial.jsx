'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function Testimonial() {
    const [selectedTestimonial, setSelectedTestimonial] = useState(null);
    const [activeDot, setActiveDot] = useState(0);
    const scrollRef = useRef(null);

    const testimonials = [
        {
            id: 1,
            company: "Soon Networks",
            package: "60 LPA",
            quote: "First Year: Started post-JEE with CS50x in the first semester, fueled by an interest for open source and internet privacy, connected to communities like Mozilla and Indian Linux Users Group. Co-founded FOSSCU as an unofficial open-source community. First Year Project: Began developing ShastraOS, a privacy-focused Linux distribution, with childhood friend Vivek. Second Year (Third Semester): Secured a dedicated workspace for FOSSCU on campus, turning it into a hub for learning and building projects. Second Year Event: Attended Solana Hacker House, showcased ShastraOS to core Solana Labs engineers, received critical feedback, and achieved over 1,000 downloads with zero budget by integrating Filecoin and Solana for user data ownership. Fourth Semester Growth: Attended Crosschain Clubhouse by Superteam, got into SuperteamDAO early, leading to opportunities with GARI Foundation and Wormhole Fellowship and Solana ecosystem. Fourth Semester Speaking: Spoke at multiple hacker houses, including Solana Hacker Houses in Bangalore and Mumbai. Mentored workshops at 4 colleges in NCR as a part of Solana campus connect in August 2023. Fourth Semester Mentoring: Mentored at major hackathons like ETHGlobal Sydney and CoinDCX Unfold, engaging with over 2,000 hackers. Fourth Semester Milestone: Submitted ShastraOS to Buildspace's Nights & Weekends, presented at their Dubai demo day—my first international trip. Post-ShastraOS Shift: Sunsetted ShastraOS, worked on Pepper DEX until February, then met Cesar in Dubai and developed SurfCash for Colosseum, Solana's startup competition. Career Transition: Discovered Soon Network at Solana Breakpoint in Singapore, aligned with my vision for user ownership and accessible development on Solana's VM. Current Role: Joined Soon Network, supporting builders, improving developer experience, and building dev tools and SDKs with over 5,000 downloads. Spoke at multiple conferences and met people like Bryan Johnson, Balaji Srinivasan while working remotely and traveling the world.",
            author: "Akshat Sharma",
            batch: "2021-25",
            image: "/cse-ai-assets/Testimonial photo/Akshat Sharma.png"
        },
        {
            id: 4,
            company: "Triton One Limited",
            package: "55 LPA",
            quote: "I'm happy to share that I'm currently working at Triton, a Solana RPC provider, and I genuinely feel that my department, CSE-AIML, played an important role in helping me reach this point. Over my four years in the department, the flexibility and understanding shown toward students who wanted to explore beyond the classroom made a real difference. The leisure and class flexibility I was given during crucial phases while pursuing internships, hackathons, and technical projects was one of the most valuable supports in my journey. It allowed me to focus on learning by doing, without constantly worrying about conflicts with academic schedules. That balance helped me grow both technically and professionally. My Dean, Dr. Rekha Kashyap, was incredibly supportive throughout. What meant the most to me was her personal encouragement she would reach out, motivate me through phone calls, and push me to aim higher. I always felt she believed in my potential, sometimes even more than I did, and that kind of encouragement stays with you. My class coordinator, Ms. Bhawna, was also very supportive and approachable, always ready to help whenever needed. Having faculty members who are understanding and student-focused makes a big difference. I'm truly thankful to my department for the constant support, trust that has directly contributed to where I am today.",
            author: "Prapti Sharma",
            batch: "2022-26",
            image: "/cse-ai-assets/Testimonial photo/Prapti Sharma.jpeg"
        },
        {
            id: 5,
            company: "Service Now",
            package: "42.7 LPA",
            quote: "Being a part of KIET Group of Institutions as a B.Tech student from the CSE (AI & ML) department has been a meaningful and enriching journey for me. Over the years, the learning environment and academic structure have helped me grow both technically and personally. The faculty members of the department have always been supportive and approachable. Their focus on practical understanding, real-world applications, and consistent guidance made complex concepts easier to grasp. The balance between academics, projects, and skill development played an important role in shaping my confidence. The department's encouragement during internships and placement preparation gave me clarity and direction. From technical knowledge to interview readiness, the mentorship and continuous motivation helped me step into the professional world with confidence. Beyond classrooms, the collaborative atmosphere among peers made learning more engaging and enjoyable. Discussions, group studies, and shared goals created an environment where growth felt natural. I'm truly grateful to KIET and the CSE (AI & ML) department for the opportunities, guidance, and support throughout this journey. It has been a foundation that I will always value as I move forward in my career.",
            author: "Vedanshi Kaushik",
            batch: "2022-26",
            image: "/cse-ai-assets/Testimonial photo/Vedanshi .jpeg"
        },
        {
            id: 9,
            company: "Razorpay",
            package: "35 LPA",
            quote: "Pursuing B.Tech in CSE (AI) at KIET Group of Institutions was an important phase in my academic and professional journey. The program was designed to blend strong computer science fundamentals with emerging areas of Artificial Intelligence, which helped me understand not only how systems work but also how intelligent solutions are built and optimized. The coursework encouraged analytical thinking and practical application. Subjects related to algorithms, data handling, and AI concepts strengthened my technical confidence and improved my problem-solving approach. The faculty members were supportive and maintained an environment where discussions and doubts were welcomed, which made learning more interactive and effective. One of the most valuable aspects of my experience was the cooperation extended by the department during my internship tenure. The academic team ensured that all formalities and approvals were managed efficiently, allowing me to focus on industry exposure and skill development. That flexibility helped me bridge the gap between classroom learning and real-world implementation. The institute also provided a disciplined and resourceful academic environment. Facilities like the library and lab infrastructure supported research, project execution, and exam preparation effectively. Overall, my time in the CSE (AI) department contributed significantly to my technical growth, professional discipline, and readiness to take on industry challenges.",
            author: "Archit Agarwal",
            batch: "2022-26",
            image: "/cse-ai-assets/Testimonial photo/Archit Agarwal.jpg"
        },
        {
            id: 6,
            company: "AMD",
            package: "32 LPA",
            quote: "My journey at KIET Group of Institutions as a B.Tech graduate from the CSE (AI&ML) department contributed to my technical foundation and early career direction. The curriculum covered core computer science and AI/ML concepts and gave me structured exposure to important subjects. The professors were approachable for academic doubts, which supported steady learning through the program. I especially value the support I received from the department during my internship period. The faculty and coordinators were helpful with guidance, approvals, and academic coordination related to internships. The process was handled smoothly, and the flexibility provided during that time made it easier for me to focus on my internship work and gain practical industry experience without unnecessary administrative difficulty. The campus facilities were also supportive for academic work. The library and other available resources were useful for study, reference, and exam preparation, especially during project phases and assessment periods. Overall, the CSE(AI&ML) department and KIET Group of Institutions provided a structured academic environment and consistent support, particularly during internships. This played a meaningful role in my development and preparation for professional work.",
            author: "Shobhit Sinha",
            batch: "2022-26",
            image: "/cse-ai-assets/Testimonial photo/Shobhit Sinha.jpg"
        },
        {
            id: 2,
            company: "GPU.NET",
            package: "24 LPA",
            quote: "My journey at KIET Group of Institutions as a B.Tech graduate from the CSE (AI&ML) department was truly transformative! The vibrant campus and cutting-edge curriculum sparked my passion for technology, while the exceptional faculty in my department made learning an exhilarating experience. Their innovative, hands-on teaching approach, rooted in real-world applications, equipped me with practical skills that set me apart in the tech world. The department's unwavering support during internships and placements gave me the freedom to explore diverse opportunities and the confidence to secure my dream role. The faculty's mentorship was key, striking a perfect balance between honing my technical expertise and ensuring I excelled academically in exams. The peer-to-peer learning culture, amplified by dynamic clubs like Innogeeks and DevUp, sharpened my coding and problem-solving skills through hackathons, workshops, and collaborative projects. These platforms fueled my creativity and built lifelong friendships. From industry collaborations to cutting-edge resources, my department opened doors I never knew existed. Thank you, KIET and the CSE (AI & ML) department, for the opportunities, experiences, and memories that will drive my career forward for years to come!",
            author: "Aryan Mishra",
            batch: "2021-25",
            image: "/cse-ai-assets/Testimonial photo/Aryan Mishra .png"
        },
        {
            id: 7,
            company: "Juspay",
            package: "21 LPA",
            quote: "My journey at KIET Group of Institutions as a B.Tech student from the Computer Science & Engineering (AI & ML) branch (2022–2026 batch) has been a truly enriching and growth-oriented experience. The academic environment at KIET constantly encouraged me to think beyond textbooks and build a strong foundation in computer science concepts along with emerging technologies. The faculty members of the CSE (AI & ML) department played a crucial role in shaping my technical and problem-solving abilities. Their continuous guidance, practical teaching methods, and focus on real-world applications helped me gain clarity and confidence in subjects like data structures, algorithms, machine learning, and system design. The mentorship and support provided during internships and placement preparation were invaluable. KIET also offered a vibrant peer-learning culture through technical clubs, coding communities, hackathons, and workshops, which helped me improve my analytical thinking, teamwork, and hands-on development skills. These experiences prepared me to face industry-level challenges with confidence. With the strong academic backing and encouragement from my department, I was able to secure a placement at Juspay, a milestone that I am extremely proud of. KIET has not only contributed to my technical growth but also helped shape my professional mindset. I am grateful to KIET Group of Institutions, the CSE (AI & ML) department, and all my mentors for their constant support, guidance, and belief in me. The knowledge, experiences, and values I gained here will continue to guide me throughout my career.",
            author: "Nayni Singhal",
            batch: "2022-26",
            image: "/cse-ai-assets/Testimonial photo/Nayni Singhal.jpg"
        },
        {
            id: 8,
            company: "Razorpay",
            package: "21 LPA",
            quote: "When I first stepped into KIET Group of Institutions, I had absolutely no background in DSA, or Web Development. The world of programming felt vast and intimidating, but that changed during my first year when I joined student technical clubs like CP-Byte, Technocrats, and KIET Koders Korner. The mentorship and guidance I received from my seniors in these clubs didn't just teach me syntax; they sparked a genuine passion for Data Structures and Algorithms. That spark turned into a dedicated grind which made me solve over 1000+ DSA questions on LeetCode, building a technical foundation I never thought I'd have. One of the best aspects of KIET is how it prioritizes career growth alongside academics. During my third year, my CSE (AI & ML) department provided me with the flexibility and support to pursue multiple internships, allowing me to gain invaluable industry exposure. My time interning at Velocis Systems Private Limited and the Ministry of New and Renewable Energy helped me refine my technical skills and understand how real-world systems operate. This journey of constant learning and rigorous problem-solving culminated during the on-campus placement season. Thanks to the robust placement ecosystem at KIET, I secured an offer from Razorpay as an SDE Intern. Transitioning from someone who knew nothing about code to landing a role at a fintech giant has been an incredible ride. I am deeply grateful to my mentors, my peers, and the KIET community for being the catalyst in my journey!",
            author: "Aditya Mohan Gupta",
            batch: "2022-26",
            image: "/cse-ai-assets/Testimonial photo/Aditya Mohan Gupta.jpg"
        },
        {
            id: 10,
            company: "Juspay",
            package: "21 LPA",
            quote: "I'm glad to share that I'm currently interning at Juspay, with a Pre-Placement Offer of 21 LPA based on my internship performance. This achievement is not just mine — it reflects the continuous support and encouragement I received from my college and the CSE(AI) department. Being part of CSE(AI) helped me discover my interests and build strong technical foundations. Our department always motivated us to work on real projects, participate in hackathons and apply for internships while managing academics. This support made learning practical and meaningful. One thing I truly appreciate was the monthly coding contests conducted by our department. These contests helped me stay consistent with coding, sharpen my problem-solving skills and gain confidence for technical interviews. I'm sincerely thankful to our Dean, Dr. Rekha Kashyap ma'am, for always inspiring students to aim higher and believe in themselves. Her motivation played an important role in my journey. I also thank our placement coordinator, Anjali Chauhan ma'am, for being supportive, approachable and always ready to guide us whenever needed. I'm grateful to all my teachers for their dedication, patience and constant guidance. Every faculty member contributed in shaping my skills and mindset. I truly appreciate the CSE(AI) department for creating such a positive learning environment. The guidance, opportunities, and encouragement I received here have helped me grow both professionally and personally and I will always carry this experience with pride.",
            author: "Kanak Agarwal",
            batch: "2022-26",
            image: "/cse-ai-assets/Testimonial photo/Kanak Agrawal.jpg"
        },
        {
            id: 11,
            company: "MeetMux",
            package: "20 LPA",
            quote: "Reflecting on my time at the KIET Group of Institutions, I am filled with immense gratitude for the AI & ML department, which served as the ultimate launchpad for my career. The faculty went beyond traditional teaching, acting as mentors who truly invested in my personal and professional growth, ensuring I was prepared for every challenge the industry threw my way. A massive part of my success is also owed to the Innogeeks technical club; it was within that community that I found my footing, learning the value of collaboration and leadership through every workshop and event. The department's constant encouragement to push boundaries and their unwavering support during placement season gave me the confidence to secure a future I am incredibly proud of. Thank you to my professors and the vibrant culture at KIET for turning my potential into reality!",
            author: "Parth Agarwal",
            batch: "2022-26",
            image: "/cse-ai-assets/Testimonial photo/PARTH AGARWAL.jpg"
        },
        {
            id: 3,
            company: "CISCO",
            package: "18 LPA",
            quote: "During my first year at KIET Group of Institutions, Ghaziabad, I explored several domains, including machine learning and web development. I also dived into data structures and algorithms (DSA), but it didn't spark much interest. I then shifted focus to cybersecurity and networking, eventually joining the CPC Cyber Peace Centre, which provided me with deep insights into these fields. This was where I truly began to admire Cisco. As I continued exploring, I ventured into iOS development in my third year. Around this time, I secured an internship with Accenture, but unfortunately, I couldn't complete it due to university exams—a major setback for me. Despite this, I applied to various companies off-campus. I cleared Swiggy's online assessment, but after two rescheduled interviews, I never heard back. Then, during Cisco's Ideathon process, I interviewed with Blinkit but got rejected in the second round. Unsure about my chances with Cisco, I joined Rapipay to keep progressing. Just 15 days later, however, I received the life-changing email from Cisco offering me the role of Technical Consultant Engineer. This journey was filled with setbacks and uncertainty, but ultimately, I reached my goal, making the challenges all worth it.",
            author: "Kanishk Joshi",
            batch: "2021-25",
            image: "/cse-ai-assets/Testimonial photo/Kanishk Joshi .jpeg"
        },
        {
            id: 12,
            company: "Future First",
            package: "17 LPA",
            quote: "Being placed in Futures First is a proud milestone for me, and I genuinely feel that this achievement is the result of the environment and support system created by my department, CSE-AI at KIET Deemed to be University. What made my journey special was not just academics, but the culture of trust and encouragement. Students were given the space to explore, experiment, and grow beyond textbooks. During important phases of my learning journey, the flexibility and understanding I received allowed me to focus on building real skills, learning through experience, and preparing for the professional world without unnecessary pressure. That freedom helped me mature both technically and personally. Our Dean ma'am, Dr. Rekha Kashyap, played a very meaningful role in shaping this journey. Her motivation, leadership, and genuine concern for students' growth created confidence and clarity in our minds. Her encouragement was not just formal guidance — it felt personal, real, and deeply motivating. I'm also very thankful to my placement coordinator, Ms. Anjali Chauhan ma'am, for being consistently supportive, approachable, and understanding throughout the journey. Having faculty members who truly care about students makes a lasting difference. I carry deep gratitude for my department for the belief, support, and opportunities that helped shape my path. This placement is not just a personal achievement — it reflects the values, culture, and support system of KIET Deemed to be University.",
            author: "Krishna Kumar Chaudhary",
            batch: "2022-26",
            image: "/cse-ai-assets/Testimonial photo/Krishna Kumar Chaudhary.jpg"
        },
    ];

    const totalDots = 4; // 12 testimonials / 3 visible at a time = 4 dots

    const scroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = 400;
            if (direction === 'left') {
                scrollRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    };

    const handleScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            const scrollProgress = scrollLeft / (scrollWidth - clientWidth);
            const newActiveDot = Math.min(
                Math.floor(scrollProgress * totalDots),
                totalDots - 1
            );
            setActiveDot(newActiveDot);
        }
    };

    const truncateText = (text, maxLength = 200) => {
        if (text.length <= maxLength) return text;
        return text.substr(0, maxLength) + '...';
    };

    const openModal = (testimonial) => {
        setSelectedTestimonial(testimonial);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedTestimonial(null);
        document.body.style.overflow = 'unset';
    };

    useEffect(() => {
        const ref = scrollRef.current;
        if (ref) {
            ref.addEventListener('scroll', handleScroll);
            return () => ref.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <section
            style={{
                backgroundColor: '#f8f9fa',
                padding: '0 0 5rem 0',
                position: 'relative'
            }}
        >
            <div className="container">
                {/* Section Header */}
                <div className="mb-4">
                    <h2 className="fw-bold mb-3"
                        style={{
                            fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
                            color: '#002855',
                            borderBottom: '3px solid #F26520',
                            paddingBottom: '10px',
                            display: 'inline-block'
                        }}>
                        Voices of Excellence
                    </h2>
                    {/* <p style={{
                        fontSize: '1.1rem',
                        color: '#6b7280',
                        maxWidth: '700px'
                    }}>
                        Stories of learning, leadership, and transformation
                    </p> */}
                </div>

                {/* Testimonials Horizontal Scroll */}
                <div
                    ref={scrollRef}
                    className="testimonials-scroll-container"
                    style={{
                        scrollSnapType: 'x mandatory'
                    }}
                >
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="testimonial-card-wrapper"
                            style={{
                                scrollSnapAlign: 'start'
                            }}
                        >
                            <div style={{
                                backgroundColor: 'white',
                                borderRadius: '16px',
                                padding: '1.5rem',
                                height: '100%',
                                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.07)',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                cursor: 'default',
                                display: 'flex',
                                flexDirection: 'column'
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-5px)';
                                    e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.12)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.07)';
                                }}>
                                {/* Company (left) and Batch (right) */}
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    marginBottom: '1rem',
                                    paddingBottom: '0.75rem',
                                    borderBottom: '2px solid #f3f4f6'
                                }}>
                                    <p style={{
                                        fontSize: '0.9rem',
                                        fontWeight: '700',
                                        color: '#F26520',
                                        margin: '0'
                                    }}>
                                        {testimonial.company}
                                    </p>
                                    <span style={{
                                        fontSize: '0.8rem',
                                        fontWeight: '600',
                                        color: '#6b7280',
                                        backgroundColor: '#f3f4f6',
                                        padding: '0.2rem 0.6rem',
                                        borderRadius: '12px'
                                    }}>
                                        {testimonial.batch}
                                    </span>
                                </div>

                                {/* Circular Image - Centered */}
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    marginBottom: '0.75rem'
                                }}>
                                    <div style={{
                                        width: '90px',
                                        height: '90px',
                                        borderRadius: '50%',
                                        overflow: 'hidden',
                                        position: 'relative',
                                        backgroundColor: '#e5e7eb',
                                        border: '3px solid #F26520'
                                    }}>
                                        <Image
                                            src={testimonial.image}
                                            alt={testimonial.author}
                                            fill
                                            style={{ objectFit: 'cover', objectPosition: 'top' }}
                                        />
                                    </div>
                                </div>

                                {/* Name - Centered */}
                                <h4 style={{
                                    fontSize: '1.5rem',
                                    fontWeight: '700',
                                    color: '#111827',
                                    margin: '0 0 0.25rem 0',
                                    textAlign: 'center'
                                }}>
                                    {testimonial.author}
                                </h4>

                                {/* LPA in Orange - Centered */}
                                {testimonial.package && (
                                    <p style={{
                                        fontSize: '1.5rem',
                                        fontWeight: '700',
                                        color: '#F26520',
                                        margin: '0 0 0.75rem 0',
                                        textAlign: 'center'
                                    }}>
                                        {testimonial.package}
                                    </p>
                                )}

                                {/* Quote */}
                                <div style={{ flex: '1', margin: '0 0 0.75rem 0' }}>
                                    <span style={{
                                        fontSize: '1.5rem',
                                        color: '#F26520',
                                        fontWeight: 'bold',
                                        lineHeight: '1'
                                    }}>❝ </span>
                                    <p style={{
                                        textAlign: 'justify',
                                        fontSize: '0.85rem',
                                        color: '#6b7280',
                                        fontStyle: 'italic',
                                        lineHeight: '1.6',
                                        margin: '0.25rem 0 0 0',
                                        display: 'inline'
                                    }}>
                                        {truncateText(testimonial.quote, 150)}
                                    </p>
                                </div>

                                {/* Read More */}
                                {testimonial.quote.length > 150 && (
                                    <button
                                        onClick={() => openModal(testimonial)}
                                        style={{
                                            backgroundColor: 'transparent',
                                            border: 'none',
                                            color: '#F26520',
                                            fontWeight: '600',
                                            fontSize: '0.85rem',
                                            cursor: 'pointer',
                                            padding: '0',
                                            marginTop: 'auto',
                                            textAlign: 'left',
                                            transition: 'color 0.2s'
                                        }}
                                        onMouseEnter={(e) => e.currentTarget.style.color = '#e64a19'}
                                        onMouseLeave={(e) => e.currentTarget.style.color = '#F26520'}
                                    >
                                        Read More →
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navigation Controls */}
                <div className="testimonial-nav-controls d-flex justify-content-between align-items-center mt-3">
                    {/* Navigation Arrows (Left) */}
                    <div className="d-flex gap-2">
                        <button
                            onClick={() => scroll('left')}
                            className="btn btn-outline-secondary rounded-circle d-flex align-items-center justify-content-center p-0"
                            style={{
                                width: '32px',
                                height: '32px',
                                border: '1px solid #F26520',
                                backgroundColor: 'transparent',
                                color: '#F26520',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = '#F26520';
                                e.currentTarget.style.color = '#fff';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = 'transparent';
                                e.currentTarget.style.color = '#F26520';
                            }}
                        >
                            <span style={{ fontSize: '1.2rem', lineHeight: 0, paddingBottom: '4px' }}>‹</span>
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            className="btn btn-outline-secondary rounded-circle d-flex align-items-center justify-content-center p-0"
                            style={{
                                width: '32px',
                                height: '32px',
                                border: '1px solid #F26520',
                                backgroundColor: 'transparent',
                                color: '#F26520',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = '#F26520';
                                e.currentTarget.style.color = '#fff';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = 'transparent';
                                e.currentTarget.style.color = '#F26520';
                            }}
                        >
                            <span style={{ fontSize: '1.2rem', lineHeight: 0, paddingBottom: '4px' }}>›</span>
                        </button>
                    </div>

                    {/* Pagination Dots (Right) */}
                    <div className="d-flex gap-2">
                        {[...Array(totalDots)].map((_, index) => (
                            <div
                                key={index}
                                style={{
                                    width: '10px',
                                    height: '10px',
                                    borderRadius: '50%',
                                    backgroundColor: activeDot === index ? '#ff5722' : 'transparent',
                                    border: activeDot === index ? '1px solid #ff5722' : '1px solid #ced4da',
                                    cursor: 'pointer',
                                    transition: 'background-color 0.2s ease, border-color 0.2s ease'
                                }}
                                onClick={() => {
                                    if (scrollRef.current) {
                                        const { scrollWidth, clientWidth } = scrollRef.current;
                                        const maxScroll = scrollWidth - clientWidth;
                                        const targetScroll = (maxScroll / (totalDots - 1)) * index;
                                        scrollRef.current.scrollTo({ left: targetScroll, behavior: 'smooth' });
                                    }
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Modal */}
            {selectedTestimonial && (
                <div
                    onClick={closeModal}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 1000,
                        padding: 'clamp(0.5rem, 2vw, 2rem)'
                    }}
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            backgroundColor: 'white',
                            borderRadius: '20px',
                            maxWidth: '900px',
                            width: '100%',
                            maxHeight: '85vh',
                            overflow: 'auto',
                            position: 'relative',
                            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
                            scrollbarWidth: 'thin',
                            scrollbarColor: '#ff5722 #f3f4f6'
                        }}
                        className="custom-scrollbar testimonial-modal"
                    >
                        {/* Close Button */}
                        <button
                            onClick={closeModal}
                            style={{
                                position: 'absolute',
                                top: '1.5rem',
                                right: '1.5rem',
                                backgroundColor: '#f3f4f6',
                                border: 'none',
                                borderRadius: '50%',
                                width: '40px',
                                height: '40px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                fontSize: '1.5rem',
                                color: '#6b7280',
                                transition: 'all 0.3s ease',
                                zIndex: 10
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = '#ff5722';
                                e.currentTarget.style.color = 'white';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = '#f3f4f6';
                                e.currentTarget.style.color = '#6b7280';
                            }}
                        >
                            ✕
                        </button>

                        {/* Modal Content */}
                        <div className="modal-content-wrapper" style={{
                            display: 'flex',
                            flexDirection: 'row',
                            gap: '2.5rem',
                            padding: '3rem'
                        }}>
                            {/* Left Side - Photo and Author Info */}
                            <div className="modal-left-side" style={{
                                minWidth: '250px',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: '1.5rem'
                            }}>
                                <div style={{
                                    width: '180px',
                                    height: '180px',
                                    borderRadius: '50%',
                                    overflow: 'hidden',
                                    position: 'relative',
                                    backgroundColor: '#e5e7eb',
                                    border: '4px solid #ff5722'
                                }}>
                                    <Image
                                        src={selectedTestimonial.image}
                                        alt={selectedTestimonial.author}
                                        fill
                                        style={{ objectFit: 'cover' }}
                                    />
                                </div>
                                <div style={{ textAlign: 'center' }}>
                                    <h3 style={{
                                        fontSize: '1.5rem',
                                        fontWeight: '700',
                                        color: '#111827',
                                        margin: '0',
                                        marginBottom: '0.5rem'
                                    }}>
                                        {selectedTestimonial.author}
                                    </h3>
                                    <p style={{
                                        fontSize: '1rem',
                                        color: '#6b7280',
                                        margin: '0',
                                        marginBottom: '0.5rem',
                                        fontWeight: '500'
                                    }}>
                                        {selectedTestimonial.batch}
                                    </p>
                                    <p style={{
                                        fontSize: '1.1rem',
                                        color: '#ff5722',
                                        margin: '0',
                                        fontWeight: '600'
                                    }}>
                                        {selectedTestimonial.company}
                                    </p>
                                </div>
                            </div>

                            {/* Right Side - Testimonial Text */}
                            <div className="modal-right-side" style={{ flex: 1 }}>
                                <div style={{
                                    fontSize: '4rem',
                                    color: '#ff5722',
                                    lineHeight: '1',
                                    marginBottom: '1rem',
                                    fontWeight: 'bold',
                                    opacity: 0.3
                                }}>
                                    ❝
                                </div>
                                <p style={{
                                    fontSize: '1.1rem',
                                    color: '#374151',
                                    fontStyle: 'italic',
                                    lineHeight: '1.8',
                                    margin: '0'
                                }}>
                                    {selectedTestimonial.quote}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Custom Scrollbar Styles */}
            <style>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 8px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: #f3f4f6;
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #ff5722;
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #e64a19;
                }

                /* Desktop: Horizontal Scroll */
                @media (min-width: 769px) {
                    .testimonials-scroll-container {
                        display: flex;
                        gap: 1.25rem;
                        overflow-x: auto;
                        overflow-y: hidden;
                        padding-bottom: 1rem;
                        padding-left: 0;
                        padding-right: 0;
                        scrollbar-width: none;
                        -ms-overflow-style: none;
                    }
                    .testimonials-scroll-container::-webkit-scrollbar {
                        display: none;
                    }
                    .testimonial-card-wrapper {
                        flex-shrink: 0;
                        width: calc((100% - 3.75rem) / 4);
                        min-width: 280px;
                    }
                }

                /* Mobile: Horizontal Scroll */
                @media (max-width: 768px) {
                    .testimonials-scroll-container {
                        display: flex;
                        flex-direction: row;
                        gap: 1rem;
                        overflow-x: auto;
                        overflow-y: hidden;
                        padding-bottom: 1rem;
                        padding-left: 0.25rem;
                        padding-right: 0.25rem;
                        scroll-snap-type: x mandatory;
                        scrollbar-width: none;
                        -ms-overflow-style: none;
                    }
                    .testimonials-scroll-container::-webkit-scrollbar {
                        display: none;
                    }
                    .testimonial-card-wrapper {
                        flex-shrink: 0;
                        width: 80vw;
                        scroll-snap-align: center;
                    }
                    
                    /* Mobile Modal Styles */
                    .testimonial-modal {
                        border-radius: 16px !important;
                        max-height: 90vh !important;
                    }
                    .modal-content-wrapper {
                        flex-direction: column !important;
                        gap: 1.5rem !important;
                        padding: 1.5rem !important;
                    }
                    .modal-left-side {
                        min-width: auto !important;
                        width: 100%;
                    }
                    .modal-left-side > div:first-child {
                        width: 120px !important;
                        height: 120px !important;
                    }
                    .modal-right-side {
                        width: 100%;
                    }
                    .modal-right-side > div:first-child {
                        font-size: 2.5rem !important;
                        margin-bottom: 0.5rem !important;
                    }
                    .modal-right-side p {
                        font-size: 0.95rem !important;
                        line-height: 1.6 !important;
                    }
                }
            `}</style>
        </section>
    );
}
