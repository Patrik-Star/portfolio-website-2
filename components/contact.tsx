"use client"
import React, { useEffect, useRef, useState } from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'
import { sendEmail } from '@/actions/sendEmail'

import SubmitBtn from './submit-btn'
import toast from 'react-hot-toast'

export default function Contact() {

    const { ref } = useSectionInView('Contact');

    const formRef = useRef<HTMLFormElement>(null);
    const [formValue, setFormValue] = useState("");

    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    const cooldownPeriod = 120000; // Adjust the cooldown period in milliseconds 
    const textAreaWordLimit = 500; // word limit for message text area for contact form
    const textAreaMinimumLength = 5;


    useEffect(() => {
        // on load: get storedTime and store it as useState
        const storedTime = localStorage.getItem('lastSubmissionTime');
        const storedButtonStatus = localStorage.getItem('isButtonDisabled');
        if (storedButtonStatus) {
            setIsButtonDisabled(true)
        }

        if (storedTime) {
            // check if difference between now and storedTime 
            const currentTime = Date.now();
            const timeDifference = currentTime - ((storedTime as unknown as number) || 0);
            console.log("Cooldown period remaining:", { timeDifference });

            // setIntervel to re-enable the button 
            setTimeout(() => {
                setIsButtonDisabled(false);
                localStorage.removeItem('lastSubmissionTime');
                localStorage.removeItem('isButtonDisabled');
            }, timeDifference); // Re-enable button after difference in time
        }
    }, []);

    return (
        <motion.section
            id="contact"
            ref={ref}
            className='mb-20 sm:mb-28 w-[min(100%,38rem)] text-center'
            initial={{
                opacity: 0
            }}
            whileInView={{
                opacity: 1
            }}
            transition={{ duration: 1 }}
            viewport={{
                once: true
            }}
        >
            <SectionHeading> Contact Me </SectionHeading>
            <p className='text-gray-700 -mt-5 dark:text-white/80 '>Please contact me directly at {" "}
                <a className='underline' href='mailto:patrik@patrikbolander.com'>patrik@patrikbolander.com</a>{" "}
                or through this form</p>

            <form ref={formRef} className='mt-10 flex flex-col dark:text-black' action={async (formData) => {
                const { data, error } = await sendEmail(formData);
                if (error) {
                    toast.error(error)
                    return
                }

                toast.success("Email sent successfully!");
                formRef.current?.reset();

                // disabling button and saving state to localStorage
                setIsButtonDisabled(true);
                const currentTime = Date.now();

                localStorage.setItem('lastSubmissionTime', currentTime.toString());
                localStorage.setItem('isButtonDisabled', 'true');

                // without user refresh: re-enable button after cooldown period
                setTimeout(() => {
                    setIsButtonDisabled(false);
                    localStorage.removeItem('isButtonDisabled');
                }, cooldownPeriod); // Re-enable button after cooldown period

            }}>
                <input type="email"
                    name='senderEmail'
                    required
                    maxLength={500}
                    className='px-4 h-14 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none'
                    placeholder='Your email' />

                <textarea
                    name='message'
                    required
                    maxLength={textAreaWordLimit}
                    minLength={textAreaMinimumLength}
                    className='h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none'
                    placeholder='Your message'
                    onChange={(event) => { setFormValue(event.target.value) }}>
                </textarea>
                <div className="flex items-start justify-between">
                    <SubmitBtn disabledByTimer={isButtonDisabled} />
                    <p className='text-gray-400 text-sm '>{isButtonDisabled ? 0 : formValue.length}/{textAreaWordLimit}</p>
                </div>
            </form>
        </motion.section>

    )
}
