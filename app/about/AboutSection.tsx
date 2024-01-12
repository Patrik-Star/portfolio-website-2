import React from 'react';

type AboutSectionProps = {
    subtitle: string,
    main: string,
    body: string,
    button?: string,
    href?: string,
    Chrono?: boolean
    children: any
}

function AboutSection(props: AboutSectionProps) {

    // subtitle: string
    // main: string
    // body: string
    // button?: string
    // href?: string
    // Chrono?: bool

    return (
        <div className="bg-c-black text-slate-800 dark:text-gray-100 pb-10">
            <div className="container mx-auto flex flex-col items-start md:flex-row">
                <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-4 lg:px-8 border-b md:border-0 border-yellow-400">
                    <p className="ml-2 text-amber-500 dark:text-yellow-300 uppercase tracking-loose">{props.subtitle}</p>
                    <p className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">{props.main}</p>
                    <p className="text-sm md:text-base mb-4">
                        {props.body}
                    </p>
                    { props.button ? <a href={props.href}
                        className="bg-transparent mr-auto hover:bg-yellow-300 text-yellow-300 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent">
                        {props.button}</a> : null
                    }
                    
                </div>
                <div className="ml-0 md:ml-12 lg:w-2/3 sticky block">
                    <div className="container mx-auto w-full h-full">
                        <div className={`relative wrap overflow-hidden p-0 h-full `}>
                            <div className="absolute h-full border-4 right-1/2 border-slate-600 dark:border-yellow-300 rounded-lg invisible md:visible"></div>
                            {/* <div className="absolute h-full border-4 left-1/5 border-yellow-300 rounded-lg"></div> */}

                            {props.children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSection;