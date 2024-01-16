"use client"
import React, { useEffect, useState } from 'react'
import SectionHeading from './section-heading'
import { skillsData } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/theme-context';

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.03 * index
        },
    })
}

export default function Skills() {

    const { ref } = useSectionInView('Skills');
    const [baseColor, setBaseColor] = useState('');

    const {theme } = useTheme()

    useEffect(() => {
        if(theme === "light"){
            setBaseColor("rgb(255, 255, 255 / 1.0)")
        }else{
            setBaseColor("rgb(255, 255, 255 / 0.1)")
        }

    }, [theme])


    return (
        <section ref={ref} id="skills" className='mb-28 max-w-[60rem] scroll-mt-28 text-center sm:mb-40'>
            <SectionHeading> My Skills </SectionHeading>
            <ul className='flex flex-wrap justify-center gap-2 text-lg text-gray-800'>
                {skillsData.map((skill, index) => (
                    <motion.li
                        key={index}
                        className={`bg-white text-gray-900 borderBlack rounded-xl text-sm px-4 py-2 sm:text-lg sm:px-5 sm:py-3 shadow-lg dark:bg-white/10 dark:text-white/80`}
                        variants={fadeInAnimationVariants}
                        initial="initial"
                        whileInView='animate'
                        viewport={{
                            once: true
                        }}
                        whileHover={{
                            scale: 1.2,
                            transition: { duration: 0.1 },
                        }}
                        whileTap={{
                            scale: 0.9,
                            backgroundColor: [baseColor, "#00ff00", '#ff0000', '#0000ff']
                        }}
                        custom={index}>
                        {skill}
                    </motion.li>
                ))}
            </ul>
        </section>
    )
}
