"use client";
import React, { useEffect, useState } from "react";
import AboutTimelineCard from "./AboutTimelineCard";
import AboutSection from "./AboutSection";
import { timelineData } from "@/lib/timelineData";
import ProfilePic from "@/public/ProfilePic.png";
import Image from "next/image";
import { ChronologicalSwitch } from "@/components/chronologicalSwitch";

export default function About() {
  const [chrono, setChrono] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="justify-center px-10">
      <div className="pt-10 lg:pt-0 mx-auto ">
        {/* hero card */}
        <section className="bg-gray-100 rounded-xl shadow-2xl lg:flex p-10 md:p-20">
          <Image
            src={ProfilePic}
            alt="profile image"
            width="448"
            height="320"
            quality="95"
            priority={true}
            className="rounded-xl mr-8 h-50 md:h-80"
          />
          <div className="text-lg flex flex-col justify-center">
            <h1 className="cursive text-6xl text-gray-700 mb-4">
              Hey There. I'm <span className="text-yellow-400">Patrik</span>
            </h1>
            <div className="prose lg:prose-xl text-gray-800">
              <p className="text-gray-800 mt-2">
                {" "}
                A Full-stack software developer
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* order switch */}
      <ChronologicalSwitch chrono={chrono} setChrono={setChrono} />

      {/* Timeline content */}
      <div className={`flex flex-col ${!chrono && "flex-col-reverse"}`}>
        {timelineData &&
          timelineData.map((sectionElement, i) => (
            <AboutSection
              subtitle={sectionElement.subtitle}
              main={sectionElement.main}
              body={sectionElement.body}
              key={i}
            >
              {/* Normal order */}
              {sectionElement.cards &&
                chrono &&
                sectionElement.cards.map((cardElement, k) => (
                  <AboutTimelineCard
                    date={cardElement.date}
                    title={cardElement.title}
                    body={cardElement.body}
                    key={k}
                    side={k % 2 === 0 ? "left" : "right"}
                  />
                ))}
              {/* Reverse cards within each section */}
              {sectionElement.cards &&
                !chrono &&
                sectionElement.cards
                  .map((cardElement, j) => (
                    <AboutTimelineCard
                      date={cardElement.date}
                      title={cardElement.title}
                      body={cardElement.body}
                      key={j}
                      side={j % 2 === 0 ? "left" : "right"}
                    />
                  ))
                  .reverse()}
            </AboutSection>
          ))}
      </div>
    </main>
  );
}
