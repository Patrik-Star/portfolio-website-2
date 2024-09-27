"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

export default function Slideshow() {
  const slidesRef = useRef<(HTMLDivElement | null)[]>([]);
  const router = useRouter();

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        } else {
          entry.target.classList.remove("active");
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    slidesRef.current.forEach((slide) => {
      if (slide) observer.observe(slide);
    });

    return () => {
      slidesRef.current.forEach((slide) => {
        if (slide) observer.unobserve(slide);
      });
    };
  }, []);

  const scrollToSlide = (index: number) => {
    slidesRef.current[index]?.scrollIntoView({ behavior: "smooth" });
  };

  const handleHome = () => {
    router.push("/");
  };

  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory w-full z-[999] text-black">
      <button
        className="absolute top-3 left-3 bg-gray-100 p-3 rounded-lg"
        onClick={handleHome}
      >
        Home
      </button>
      <nav className="fixed top-4 right-4 z-50">
        <ul className="flex flex-col gap-2">
          {[0, 1, 2, 3].map((index) => (
            <li key={index}>
              <button
                onClick={() => scrollToSlide(index)}
                className="w-4 h-4 rounded-full bg-white border-2 border-gray-400 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400"
                aria-label={`Go to slide ${index + 1}`}
              />
            </li>
          ))}
        </ul>
      </nav>
      <div
        ref={(el) => (slidesRef.current[0] = el)}
        className="h-screen flex items-center justify-center snap-start bg-blue-200"
      >
        <h2 className="text-4xl font-serif text-center">Happy 3 year Anniversary Babe</h2>
      </div>
      <div
        ref={(el) => (slidesRef.current[1] = el)}
        className="h-screen flex flex-col gap-5 items-center justify-center snap-start bg-green-200 text-center"
      >
        <h2 className="text-4xl font-serif text-center">I love you so much!</h2>
        <h2 className="text-lg text-gray-700 font-serif">more than you'll ever know!</h2>
      </div>
      <div
        ref={(el) => (slidesRef.current[2] = el)}
        className="h-screen flex flex-col gap-3 items-center justify-center snap-start bg-purple-200"
      >
        <h2 className="text-4xl font-serif text-center">Thanks for another amazing year and I'm so proud of you everything you've accomplished this year!</h2>
        <h2 className="text-lg text-gray-700 font-serif">Im so proud of you!</h2>
      </div>
      <div
        ref={(el) => (slidesRef.current[3] = el)}
        className="h-screen flex flex-col items-center justify-center snap-start bg-red-200"
      >
        <div className="w-full h-full mt-16 pb-10 md:px-36 md:py-28">
          <iframe
            width="00"
            height="1000"
            src="https://www.youtube.com/embed/5Kql_Q-38ME?si=MBA85MOwZLeGtK4z"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
