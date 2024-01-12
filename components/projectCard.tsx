"use client"
// import { projectsData } from "@/lib/data";
import { projectsData } from "@/lib/ProjectsData";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import Image from "next/image";

type ProjectsProps = (typeof projectsData)[number];

export default function ProjectCard({ title, place, projectType, date, description, tags, link, imageUrl }: ProjectsProps) {

    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"]
    })
    const scaleProgress  = useTransform(scrollYProgress, [0, 1], [0.8, 1])
    const opacityProgress  = useTransform(scrollYProgress, [0, 1], [0.6, 1])

    return (
        <motion.div ref={ref}
            style={{
                scale: scaleProgress,
                opacity: opacityProgress
            }}
            className="group mb-3 sm:mb-8 last:mb-0">
            <section
                className='bg-white max-w-[60rem] border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[25rem] sm:group-even:pl-8 hover:bg-gray-200 rounded-lg dark:text-white dark:bg-white/10 dark:hover:bg-white/20'>
                <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[70%] flex flex-col h-full sm:group-even:ml-64">
                    <h3 className='text-2xl font-semibold '>{title}</h3>
                    <p className='mt-2 leading-relaxed text-gray-700 dark:text-white/70'>{description}</p>
                    <ul className='flex flex-wrap mt-4 gap-2 sm:mt-auto'>
                        {tags.map((tag, index) => (
                            <li key={index} className='bg-black/[0.7] px-3 py-1 text-xs uppercase tracking-wider text-white rounded-full dark:text-white/70'>{tag}</li>
                        ))}
                    </ul>
                </div>
                <Image
                    src={imageUrl} alt="Project I worked on"
                    quality={95}
                    className='absolute top-10 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl 
                                group-even:-right-[initial] 
                                group-even:-left-40
                                group-hover:-translate-x-3
                                group-hover:-translate-y-3
                                group-hover:-rotate-2

                                group-even:group-hover:translate-x-3
                                group-even:group-hover:translate-y-3
                                group-even:group-hover:rotate-2

                                group-hover:scale-[1.04]
                                transition
                                
                                hidden
                                sm:block' />
            </section>
        </motion.div>
    )
}