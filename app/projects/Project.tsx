import React, { useEffect, useState } from "react";
import { projectsData } from "@/lib/ProjectsData";
import { ChronologicalSwitch } from "@/components/chronologicalSwitch";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useChat from "../hooks/useChat";

export default function Project() {
  // For Datacom custom border - ${project.place.includes("Datacom") ? "rounded-3xl border-8 border-c-datacom-blue border-double ": ""}

  const [chrono, setChrono] = useState(false);

  const sortedProjects = chrono ? projectsData : [...projectsData].reverse();

  const {
    isLoading,
    stage,
    setInput,
    handleSubmit,
    handleInputChange,
    messages,
    input,
    inputRef,
    reset,
  } = useChat();

  const handleSearch = (event: any) => {
    console.log('value:', event.target.value);
    setInput(event.target.value);
  };

  return (
    <main className="min-h-screen pb-10 px-5">
      <section className="container mx-auto text-gray-700 dark:text-gray-100">
        <h1 className="text-5xl flex justify-center font-semibold ">
          My Projects
        </h1>
        {/*cursive*/}

        <h2 className="text-lg flex justify-center mb-12 mt-3 ">
          Welcome to my projects page
        </h2>

        <div className="flex relative gap-3">
          <div className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground">
            <SearchIcon className="h-4 w-4" />
          </div>
          <Input
            id="search"
            type="search"
            placeholder="Search..."
            className="w-full rounded-lg bg-background pl-8"
            value={input}
            onChange={handleInputChange}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSubmit(e);
              }
            }}
            ref={inputRef}
          />
          <Button onClick={handleSubmit}>Search</Button>
        </div>

        <ChronologicalSwitch chrono={chrono} setChrono={setChrono} />

        <section className="grid md:grid-cols-2 gap-8 sm:grid-cols-1 ">
          {sortedProjects &&
            sortedProjects.map((project, index) => (
              <article
                key={index}
                className={`flex flex-col h-auto justify-between p-5 sm:p-7 rounded-2xl shadow-xl text-gray-900 bg-white 
                        dark:bg-white/10
                        dark:text-white/90`}
              >
                <div className="">
                  <h3 className="text-3xl fond-bold mb-2">{project.title}</h3>
                  <div className="text-xs">
                    <span>
                      <strong className="font-bold "> Finished on </strong>:{" "}
                      {project.date}
                      {" | "}
                    </span>
                    <span>
                      <strong className="font-bold">Place</strong>:{" "}
                      {project.place}
                      {" | "}
                    </span>
                    <span>
                      <strong className="font-bold">Type</strong>:{" "}
                      {project.projectType}
                    </span>
                    <p className="mt-6 text-base sm:text-lg leading-relaxed">
                      {project.description}
                    </p>

                    {/* {project.link !== "Internal Project" ?
                                    <a href={project.link} rel="noopener noreferrer" target="_blank" className="text-red-500 font-bold text-xl hover:underline hover:text-red-400">
                                        View the project{" "}
                                        <span aria-label="right pointer">
                                            👉
                                        </span>
                                    </a> : <h1 className='text-gray-500 font-bold text-xl hover:underline hover:text-red-400'> Internal Project</h1>} */}
                  </div>
                </div>
                <div className="justify-left mt-6 flex flex-wrap">
                  {project.tags &&
                    project.tags.map((tag: any, index: number) => (
                      <div
                        key={index}
                        className="py-2 px-4 shadow-md rounded-full bg-gray-200 text-gray-700 font-mono text-xs mr-2 mt-2"
                      >
                        {tag}
                      </div>
                    ))}
                </div>
              </article>
            ))}
        </section>
      </section>
    </main>
  );
}

function SearchIcon(
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
