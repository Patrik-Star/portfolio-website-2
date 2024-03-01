"use client"
import React from 'react'
import SectionHeading from './section-heading'
import { projectsData } from '@/lib/ProjectsData'
import ProjectCard from './projectCard'
import { useSectionInView } from '@/lib/hooks'
import Link from 'next/link'

export default function Projects() {
    const projectIdArray = [6, 5, 1];
    const { ref } = useSectionInView('Projects', 0.5);

    return (
        <section ref={ref} id='projects' className='scroll-mt-28 mb-28'>
            <SectionHeading>My Projects</SectionHeading>
            <div className="">
                {projectsData.filter(x => projectIdArray.includes(x.projectId)).reverse().map((project, index) => (
                    <React.Fragment key={index}>
                        <ProjectCard {...project} />
                    </React.Fragment>
                ))}
            </div>
            <div className="flex justify-between pt-5 ">
                <p className='text-gray-400'>Total Projects: {projectsData.length}</p>
                <Link className='bg-gray-800 text-white py-2 px-4 rounded-full font-medium 
                hover:scale-105 hover:bg-gray-700' href="/projects">More Projects</Link>
            </div>
        </section>
    )
}

