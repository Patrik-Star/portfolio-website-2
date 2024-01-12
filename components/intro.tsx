"use client"
import { useActiveSectionContext } from '@/context/active-section-context'
import { useSectionInView } from '@/lib/hooks'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { BsArrowRight, BsLinkedin } from "react-icons/bs"
import { FaGithub } from 'react-icons/fa'
import { HiDownload } from "react-icons/hi"
import ProfilePic from "@/public/ProfilePic.png"

export default function Intro() {

    function calculateYearsDiff(birthday: any) {
        var ageDifMs = Date.now() - birthday;
        var ageDate = new Date(ageDifMs); // miliseconds from epoch
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    const [YearsDiff, setYearsDiff] = useState(1)

    useEffect(() => {
        let startingDate = new Date(2019, 11, 24);
        setYearsDiff(calculateYearsDiff(startingDate));
    }, [])

    const { ref } = useSectionInView('Home', 0.5);

    const {setActiveSection, setTimeOfLastClick } = useActiveSectionContext()

    return (
        <section ref={ref} id='home' className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]'>
            <div className="flex items-center justify-center">
                <div className="relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "tween",
                            duration: 0.2
                        }}
                    >
                        {/* <Image src="https://plus.unsplash.com/premium_photo-1700248829538-0bc7c1244334?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" */}
                        <Image src={ProfilePic}
                            alt="profile image"
                            width="192"
                            height="192"
                            quality="95"
                            priority={true}
                            className='h-24 w-24 rounded-full border-[0.35rem] object-cover border-white shadow-xl' />
                    </motion.div>
                    <motion.span className='absolute bottom-0 right-0 text-4xl'
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 125,
                            delay: 0.1,
                            duration: 0.7
                        }}
                    >👋</motion.span>
                </div>
            </div>

            <motion.h1 className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <span className="font-bold">Hello, I'm Patrik.</span> I'm a{" "}
                <span className="font-bold">Full-Stack developer</span> with{" "}
                <span className="font-bold">{YearsDiff} years</span> of experience. I enjoy
                building <span className="italic">sites & apps</span>. My focus is{" "}
                <span className="underline">Full-Stack developement with the AWS Cloud</span>.
            </motion.h1>

            <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-2  px-4 text-lg font-medium"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.1
                }}
            >
                <Link href="#contact" className='group flex items-center gap-2 bg-gray-900 text-white px-7 py-3 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition cursor-pointer'
                    onClick={() => {
                        setActiveSection("Contact");
                        setTimeOfLastClick(Date.now());
                    }}>
                    Contact Me Here
                    <BsArrowRight className='opacity-70 group-hover:translate-x-2 transition-all' />
                </Link>

                <a className="group flex items-center gap-2 bg-white px-7 py-3 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
                    href="/Patrik Bolander CV.pdf"
                    download>
                    Download CV
                    <HiDownload className='opacity-60 group-hover:translate-y-1 transition-all' />
                </a>

                <a
                    href='https://www.linkedin.com/in/patrik-bolander-2737aa1a4/'
                    target='_blank'
                    className='flex items-center gap-2 bg-white p-4 text-gray-700 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60'>
                    <BsLinkedin />
                </a>

                <a
                    href='https://github.com'
                    target='_blank'
                    className='flex items-center gap-2 bg-white p-4 text-gray-700 text-[1.45rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60'>
                    <FaGithub />
                </a>
            </motion.div>
        </section>
    )
}
