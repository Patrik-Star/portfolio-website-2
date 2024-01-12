import React from 'react'
import { FaPaperPlane } from 'react-icons/fa'
import { useFormStatus } from 'react-dom'

type SubmitBtnProps = {
    disabledByTimer: boolean
}

export default function SubmitBtn({ disabledByTimer }: SubmitBtnProps) {
    const { pending } = useFormStatus();

    const getButtonStatus = () => {
        if (pending) { // sending email
            return <div className='h-5 w-5 animate-spin rounded-full border-b-2 border-white'></div>
        } else if (disabledByTimer){ // disabled by timer 
            return <>
                <span className='text-gray-500'>Submit</span>{" "}
                <FaPaperPlane className='text-xs opacity-40'/>{" "}
            </>
        }else { // normal / default
            return <>
                Submit{" "}
                <FaPaperPlane className='text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1' />{" "}
            </>
        }
    }

    return (
        <button type='submit'
            className={`group flex items-center justify-center gap-2 h-[3rem] w-[8rem]
                 bg-gray-900 text-white rounded-full outline-none transition-all 
                 focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 disabled:scale-100 disabled:bg-opacity-65 dark:bg-white dark:bg-opacity-10`}
            disabled={pending || disabledByTimer}>
            {getButtonStatus()}

        </button>
    )
}
