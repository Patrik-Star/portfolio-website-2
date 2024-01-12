"use client"
import React, { useEffect, useState } from 'react';
import HomeTestimonialCard from './HomeTestimonialCard';
import { TestimonialArray } from '@/lib/testimonialData'
import { StaticImageData } from 'next/image';
import SectionHeading from './section-heading';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';
import { TestimonialItemType } from '@/lib/types';
import { shuffleArray } from '@/lib/utils';


function HomeTestimonial() {

    const [newTestimonialArray, setNewTestimonialArray] = useState<TestimonialItemType[]>()

    useEffect(() => {
    
        const newTestimonialArray = shuffleArray(TestimonialArray as unknown as TestimonialItemType[]);
        setNewTestimonialArray(newTestimonialArray);
    }, [])
    
    const { ref } = useSectionInView('Testimonials', 0.5);

    return (
        <motion.section ref={ref} id='testimonials' className="w-full pt-10 scroll-mt-28 sm:justify-center"
        initial={{
            opacity: 0
        }}
        whileInView={{
            opacity: 1
        }}
        transition={{ duration: 1 }}
        viewport={{
            once: true
        }}>
            <SectionHeading>My Testimonials</SectionHeading>
            <div className="w-full overflow-x-auto">
                <div className="inline-flex flex-nowrap space-x-10 py-20 pr-10">
                    {newTestimonialArray && newTestimonialArray.map((el, index) => (
                        <HomeTestimonialCard key={index} index={index} Name={el.Name} title={el.title} body={el.body} image={el.image} link={el.link} jobPosition={el.jobPosition} />
                    ))}
                </div>
            </div>
        </motion.section>
    )
}

export default HomeTestimonial;