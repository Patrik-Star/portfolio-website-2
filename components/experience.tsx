"use client"
import React from 'react'
import SectionHeading from './section-heading'

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
// @ts-expect-error - package CSS side-effect import has no type declarations
import 'react-vertical-timeline-component/style.min.css';
import { experiencesData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
// import { useTheme } from '@/context/theme-context';


export default function Experience() {
    const { ref } = useSectionInView("Experience");

    // const { theme } = useTheme()

    return (
        <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-20 ">
            <SectionHeading >My Experience</SectionHeading>

            <VerticalTimeline lineColor=''>
                {experiencesData.map((item, index) => (
                    <React.Fragment key={index} >
                        <VerticalTimelineElement visible contentStyle={{
                            background: "#fsf4f6",
                            boxShadow: "none",
                            border: "1px solid rgba(0,0,0,0.05)",
                            textAlign: "left",
                            padding: "1.3rem 2rem"
                            
                        }}
                        contentArrowStyle={{
                            borderRight: "0.4rem solid #9ca3af"
                        }}
                        date={item.date}
                        icon={item.icon}
                        iconStyle={{
                            background: "white",
                            fontSize: "1.5rem",
                        }}
                        > 
                            <h3 className='font-semibold capitalize'>{item.title}</h3>
                            <p className='font-normal !mt-0'>{item.location}</p>
                            <p className='!mt-1 !font-normal text-gray-700 dark:text-white/75'>{item.description}</p>
                        </VerticalTimelineElement>
                    </React.Fragment>
                ))}

            </VerticalTimeline>
        </section>
    )
}
// rgb(17, 24, 39)
// rgba(255,255,255, 0.15)