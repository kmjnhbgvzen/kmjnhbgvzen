"use client";

import { useState, useEffect, useRef } from 'react';
import LandingServices from '@/components/LandingServices';
import WhyChooseUs from '@/components/WhyChooseUs'; 

export default function TimelineServices() {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [activeIcons, setActiveIcons] = useState([]);
    const [visibleItems, setVisibleItems] = useState([]);

    const timelineSectionRef = useRef(null);
    const timelineItemsRef = useRef([]);



    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            const windowHeight = window.innerHeight;

            if (timelineSectionRef.current) {
                const sectionTop = timelineSectionRef.current.offsetTop;
                const sectionHeight = timelineSectionRef.current.offsetHeight;

                const sectionProgress = Math.max(0, Math.min(1,
                    (scrollTop + windowHeight * 0.5 - sectionTop) / sectionHeight
                ));

                setScrollProgress(sectionProgress);

                const newVisibleItems = [];
                const newActiveIcons = [];

                timelineItemsRef.current.forEach((item, index) => {
                    if (item) {
                        const itemTop = item.offsetTop + sectionTop;
                        const itemTrigger = itemTop - windowHeight * 0.7;

                        if (scrollTop > itemTrigger) {
                            newVisibleItems.push(index);

                            if (scrollTop > itemTop - windowHeight * 0.5) {
                                for (let i = 0; i <= index; i++) {
                                    if (!newActiveIcons.includes(i)) {
                                        newActiveIcons.push(i);
                                    }
                                }
                            }
                        }
                    }
                });

                setVisibleItems(newVisibleItems);
                setActiveIcons(newActiveIcons);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className='bg-linear-to-br from-slate-50 via-gray-50 to-white pt-14 md:pt-32'>
            {/* Hero Section - Responsive */}
            
             <WhyChooseUs />   
            

            {/* Services Component */}
            <LandingServices />
        </div>
    );
}