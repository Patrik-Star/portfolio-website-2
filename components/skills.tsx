"use client"
import React, { useEffect, useState } from 'react'
import SectionHeading from './section-heading'
import { skillsData } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';
import { shuffleArray } from '@/lib/utils';

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
    const [colorArray, setColorArray] = useState('');

    useEffect(() => {
        const newColorArray = shuffleArray(["#00ff00", '#ff0000', '#0000ff']);
        console.log(newColorArray);
        setColorArray(newColorArray);
    }, [])


    return (
        <section ref={ref} id="skills" className='mb-28 max-w-[60rem] scroll-mt-28 text-center sm:mb-40'>
            <SectionHeading> My Skills </SectionHeading>
            <ul className='flex flex-wrap justify-center gap-2 text-lg text-gray-800'>
                {skillsData.map((skill, index) => (
                    <motion.li
                        key={index}
                        className={`bg-white borderBlack rounded-xl text-sm px-4 py-2 sm:text-lg sm:px-5 sm:py-3 shadow-lg dark:bg-white/10 dark:text-white/80`}
                        variants={fadeInAnimationVariants}
                        initial="initial"
                        whileInView='animate'
                        viewport={{
                            once: true
                        }}
                        whileHover={{
                            scale: 1.2,
                            transition: { duration: 0.1 },
                            // backgroundColor: ["rgb(255 255 255 / 1.0)"].concat(colorArray),
                        }}
                        // transition={{ type: "spring", stiffness: 400, damping: 10, duration: 3 }}
                        whileTap={{
                            scale: 0.9,
                            backgroundColor: ["rgb(255 255 255 / 1.0)" ,"#00ff00", '#ff0000', '#0000ff']
                        }}
                        custom={index}>
                        {skill}
                    </motion.li>
                ))}
            </ul>
        </section>
    )
}
