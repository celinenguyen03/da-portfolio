import { useRef } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';


gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);

    useGSAP(() => {
        const projects = [project1Ref.current, project2Ref.current, project3Ref.current];
        projects.forEach((card, index) => {
            gsap.fromTo(
                card,
                {
                    y: 50, opacity: 0
                },
                {
                    y:0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.3 * (index + 1),
                    scrollTrigger: {
                        trigger: card,
                        start: 'top bottom-=100'
                    }
                }
            )
        })
        gsap.fromTo(
            sectionRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1.5}
        )
    }, []);

    return (
        <div id = "work" ref = {sectionRef} className = "app-showcase">
            <div className ="w-full">
                <div className = "showcaselayout">
                    {/* LEFT */}
                    <div className = "first-project-wrapper" ref = {project1Ref} onClick={() => window.open("https://github.com/celinenguyen03/nvidia", "_blank", "noopener,noreferrer")} style={{ cursor: 'pointer' }}>
                        <div className = "image-wrapper">
                            <img src = '/images/NVIDIA%20Project.png' alt = "NVIDIA GPU Sales Performance Analysis"/>
                        </div>
                        <div className = "text-content">
                            <h2>Nvidia GPU Sales Performance Analysis </h2>
                            <p className = "text-white-50 md:text-xl">
                                A comprehensive analysis of Nvidia GPU sales data, revealing trends and insights crucial for optimizing sales strategies and mitigating recent revenue declines.
                            </p>
                        </div>
                    </div>
                    {/* RIGHT */}
                    <div className = "project-list-wrapper overflow-hidden">
                        <a 
                            href="https://github.com/celinenguyen03/playstation" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            style={{ cursor: 'pointer', textDecoration: 'none' }}
                        >
                            <div className = "project" ref = {project2Ref}>
                                <div className = "image-wrapper bg-[#BCF3FF]">
                                    <img src = '/images/PlayStation%20Project.png' alt = "PlayStation Ecosystem Engagement Analysis"/>
                                </div>
                                <h2>PlayStation Ecosystem Engagement Analysis</h2>
                            </div>
                        </a>
                        <a 
                            href="https://github.com/celinenguyen03/youtube" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            style={{ cursor: 'pointer', textDecoration: 'none' }}
                        >
                            <div className = "project" ref = {project3Ref}>
                                <div className = "image-wrapper bg-[#FFBCBC]">
                                    <img src = '/images/YouTube%20Project.png' alt = "YouTube Video Data Cleaning for Sentiment Analysis"/>
                                </div>
                                <h2>YouTube Video Data Cleaning for Sentiment Analysis</h2>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ShowcaseSection
