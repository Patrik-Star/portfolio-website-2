import React, { useState } from "react";
import { projectsData } from "@/lib/ProjectsData";
import { ChronologicalSwitch } from "@/components/chronologicalSwitch";
import { ExpandableCard } from "@/components/expandableCard";
import { Input } from "@/components/ui/input";
import { Highlight } from "@/components/Highlight";
import { CircleX, Icon } from "lucide-react";

export default function Project() {
  // For Datacom custom border - ${project.place.includes("Datacom") ? "rounded-3xl border-8 border-c-datacom-blue border-double ": ""}

  const [chrono, setChrono] = useState(false);
  const [search, setSearch] = useState("");
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [filterEnabled, setFilterEnabled] = useState(false);

  // Filter and sort projects
  const sortedProjects = chrono ? projectsData : [...projectsData].reverse();
  const filteredProjects = sortedProjects.filter((project) => {
    const searchTerm = search.toLowerCase();
    if (!searchTerm || searchTerm.length <= 2) return true; // If search is empty or too short, show all projects
    return (
      project.title.toLowerCase().includes(searchTerm) ||
      project.place.toLowerCase().includes(searchTerm) ||
      project.projectType.toLowerCase().includes(searchTerm) ||
      project.date.toLowerCase().includes(searchTerm) ||
      project.description.toLowerCase().includes(searchTerm) ||
      (project.longDescription && project.longDescription.toLowerCase().includes(searchTerm)) ||
      (project.tags && project.tags.some((tag: any) => tag.toLowerCase().includes(searchTerm)))
    );
  });
  const projectsToShow = filterEnabled ? filteredProjects : sortedProjects;

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

        {/* Search Bar & Filter Switch */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full pb-10 md:pb-5 pt-3 gap-4">
          <div className="flex-1 w-full relative">
            <Input
              type="text"
              placeholder="Search projects..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white rounded-full dark:bg-zinc-900 border-gray-300 dark:border-zinc-700 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 shadow-md pr-10"
            />
            {search && (
              <button
                type="button"
                aria-label="Clear search"
                onClick={() => setSearch("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 focus:outline-none"
                tabIndex={0}
              >
                <CircleX className="w-4 h-4"/>
              </button>
            )}
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="filter-switch" className="text-sm font-medium select-none cursor-pointer opacity-90">
              {filterEnabled ? "Filtered results" : "All Projects"}
            </label>
            <button
              id="filter-switch"
              type="button"
              aria-pressed={filterEnabled}
              onClick={() => setFilterEnabled((enabled) => !enabled)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${filterEnabled ? 'bg-indigo-600' : 'bg-gray-300'}`}
            >
              <span className="sr-only">Toggle filter</span>
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${filterEnabled ? 'translate-x-6' : 'translate-x-1'}`}
              />
            </button>
          </div>
          <ChronologicalSwitch chrono={chrono} setChrono={setChrono} />
        </div>


        <section className="grid md:grid-cols-2 gap-8 sm:grid-cols-1">
          {projectsToShow &&
            projectsToShow.map((project, index) => (
              <ExpandableCard
                key={project.projectId}
                isExpanded={expandedId === project.projectId}
                onExpand={() => setExpandedId(project.projectId)}
                onCollapse={() => setExpandedId(null)}
                title={project.title}
                expandedContent={project.longDescription}
                className="flex flex-col h-auto "
                tags={project.tags ? [...project.tags] : undefined}
              >
                {" "}
                <article
                  key={index}
                  className={`flex flex-col h-auto justify-between p-5 sm:p-7 rounded-2xl shadow-xl text-gray-900 bg-white 
                        dark:bg-white/10
                        dark:text-white/90`}
                >
                  <div className="">
                    <h3 className="text-3xl fond-bold mb-2">
                      <Highlight text={project.title} highlight={search} />
                    </h3>
                    <div className="text-xs">
                      <span>
                        <strong className="font-bold "> Finished on </strong>: {" "}
                        <Highlight text={project.date} highlight={search} />
                        {" | "}
                      </span>
                      <span>
                        <strong className="font-bold">Place</strong>: {" "}
                        <Highlight text={project.place} highlight={search} />
                        {" | "}
                      </span>
                      <span>
                        <strong className="font-bold">Type</strong>: {" "}
                        <Highlight text={project.projectType} highlight={search} />
                      </span>
                      <p className="mt-6 text-base sm:text-lg leading-relaxed">
                        <Highlight text={project.description} highlight={search} />
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
                          <Highlight text={tag} highlight={search} />
                        </div>
                      ))}
                  </div>
                </article>
              </ExpandableCard>
            ))}
        </section>
      </section>
    </main>
  );
}
