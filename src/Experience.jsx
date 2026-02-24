import React from "react";
import DateCard from "./DateCard";

const experiences = [
  {
    year: "25' - Present",
    company: "Northwestern Medicine",
    title: "Technology Support Analyst",
    location: "Chicago, IL",
    logo: "/IMG_0762.PNG",
  },
  {
    year: "20' - 24'",
    company: "University of Iowa",
    title: "B.S.E Computer Science & Engineering",
    location: "Iowa City, IA",
    logo: "/Block-IOWA-GOLD-ffcd00.png",
  },
  {
    year: "22' - 24'",
    company: "College of Public Health",
    title: "IT Support Specialist",
    location: "Iowa City, IA",
    logo: "/Block-IOWA-GOLD-ffcd00.png",
  },
  {
    year: "22'",
    company: "John Deere",
    title: "Product Engineer",
    location: "Dubuque, IA",
    logo: "/John Deere_idueR-FERQ_0.svg",
  },
  {
    year: "19' - 24'",
    company: "Various Establishments",
    title: "Craft Cocktail Bartender",
    location: "Dallas, TX",
    logo: "/martini-glass.png",
  },
];

function Experience() {
  return (
    <div className="relative max-w-3xl mx-auto px-4 py-8">
      {/* Timeline line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 top-6 bottom-24 w-1 bg-white/40 rounded-full" />

      <div className="flex flex-col gap-12">
        {experiences.map((exp, idx) => {
          const isLeft = idx % 2 === 0;

          return (
            <div
              key={idx}
              className="grid lg:grid-cols-[1fr_40px_1fr] items-start relative"
            >
              {/* Left */}
              <div className="flex justify-end">
                {isLeft && (
                  <DateCard
                    {...exp}
                    align="left"
                    hoverClass="hover:bg-blue-500/20"
                  />
                )}
              </div>

              {/* Marker */}
              <div className="flex justify-center items-start relative z-10">
                <div className="w-3 h-3 bg-blue-500 rounded-full mt-4" />
              </div>

              {/* Right */}
              <div className="flex justify-end">
                {!isLeft && (
                  <DateCard
                    {...exp}
                    align="right"
                    hoverClass="hover:bg-purple-500/20"
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Experience;
