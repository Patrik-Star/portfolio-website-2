"use client"
import { motion } from 'framer-motion'
import React from 'react'
import SectionHeading from './section-heading'
import { useSectionInView } from '@/lib/hooks'
import Link from 'next/link'

export default function About() {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>

      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Computer Science</span>, I decided to pursue my
        passion for becoming a Full-Stack developer.

        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Node.js, TypeScript, and DynamoDB
        </span>
        . I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a Full-Stack software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and spending time with family and friends.
      </p>
      <div className="flex justify-end pt-5 ">
        <Link className='bg-gray-800 text-white py-2 px-4 rounded-full font-medium 
          hover:scale-105 hover:bg-gray-700' href="/about">More about me</Link>
      </div>
    </motion.section>
  )
}
