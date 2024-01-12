"use client"
import React, { useState } from 'react';
import personImage from '@/public/person.png';
import { useEffect } from 'react';
import { TestimonialItemType } from '@/lib/types';
import Image, { StaticImageData } from 'next/image';

function HomeTestimonialCard({ image, Name, title, body, link, jobPosition, index }: TestimonialItemType) {

    const [finalImage, setFinalImage] = useState<string | StaticImageData>(image);

    useEffect(() => {
        if (typeof image === 'string' || image instanceof String) {
            fetch(image as string)
                .then(response => {
                    if (!response.ok) setFinalImage(personImage); 
                })
                .catch(error => {
                    console.error("error while retrieving testimonial card image:", error)
                    setFinalImage(personImage);
                });
        }
    }, [finalImage])

    return (
        <div className={`relative max-w-md py-4 px-8 bg-white text-gray-700 shadow-lg rounded-lg my-2 h-auto w-96 
        ${index === 0 ? "ml-10" : ""}
        dark:bg-white/10
        dark:text-white/80
        hover:scale-105
        `}>
            <div className="flex justify-center md:justify-end -mt-16 ">
                <Image className="w-20 h-20 object-cover rounded-full border-2 border-blue-500 dark:border-blue-300 bg-white" alt={Name} src={finalImage} width={100} height={100}/>
            </div>
            <div className='pb-10'>
                <h2 className="text-2xl font-semibold">{title}</h2>
                <p className="mt-2">{body}</p>
            </div>
            <div className="absolute bottom-2 right-8">
                <div className="block text-right">
                    <a href={link} target="_blank" rel="noreferrer" className="text-xl font-medium text-blue-500 dark:text-blue-300">{Name}</a>
                    <h6 className="text-sm  ">{jobPosition}</h6>
                </div>
            </div>
        </div>
    )
}

export default HomeTestimonialCard;