"use client"
import React, { useEffect, useState } from 'react'
import Projects from './Project'

export default function ProjectsWrapper() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
    
  return (
    <Projects />
  )
}
