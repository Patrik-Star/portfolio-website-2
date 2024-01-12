import React from 'react';

type aboutTimelineCardProps = {
    date: string
    title: string
    body: string
    side: string
}

function aboutTimelineCard(props: aboutTimelineCardProps) {
    
    return (
        <div className={`mb-8 flex justify-between text-slate-800 dark:text-gray-50 ${props.side === "right" ? "" : "flex-row-reverse"} items-center w-full `}>
            <div className="order-1 md:w-5/12 "></div>
            <div className={`w-full order-1 md:w-5/12 px-1 py-4 ${props.side === "right" ? "md:text-left" : "lg:pl-10 md:text-right"}`}>
                <p className="mb-3 text-base text-amber-500 dark:text-yellow-300">{props.date}</p>
                <h4 className="mb-3 font-bold text-lg md:text-2xl">{props.title}</h4>
                <p className="text-sm md:text-base leading-snug  text-opacity-100">
                    {props.body}
                </p>
            </div>
        </div>
    )
}

export default aboutTimelineCard
