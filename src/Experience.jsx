import React from 'react';

const experiences = [
  {
    year: "Present",
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
    <div className="flex flex-col max-w-6xl px-4 py-4 relative">
      {/* timeline full */}
      <div className="absolute left-1/2 transform -translate-x-1/2 top-5 bottom-32 w-1 rounded-full bg-white z-0" />

      {experiences.map((exp, idx) => {
        return (
          <div
            key={idx}
            className="grid lg:grid-cols-[1fr_40px_1fr] items-start gap-4 relative mb-12"
          >
            {/* LEFT SIDE (Year or Card) */}
            <div className="flex flex-col items-end lg:items-start justify-self-start lg:justify-self-end z-10">
              <div className="text-xl text-gray-300 italic mb-2">{exp.year}</div>
              {(idx === 1) && (
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl shadow-md text-white md:w-76">
                  <div className="flex items-center mb-2 gap-2 justify-evenly">
                    {exp.logo && (
                      <img src={exp.logo} alt="" className="w-16 h-16 object-contain rounded" />
                    )}
                    <h3 className="text-lg font-medium text-gray-300">{exp.company}</h3>
                  </div>
                  <p className="text-lg font-bold">{exp.title}</p>
                  <p className="italic mb-1 text-gray-300">{exp.location}</p>
                </div>
              )}
            </div>

            {/* MIDDLE Timeline Marker */}
            <div className="relative flex flex-col items-center z-10">
              <div className="w-3 h-3 bg-blue-500 rounded-full" />
            </div>

            {/* RIGHT SIDE (Card or Year) */}
            <div className="flex flex-col items-start justify-self-start z-10">
              {idx !== 1 && (
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl shadow-md text-white md:w-76">
                  <div className="flex items-center mb-2 gap-2 justify-evenly">
                    {exp.logo && (
                      <img src={exp.logo} alt="" className="w-16 h-16 object-contain rounded" />
                    )}
                    <h3 className="text-lg font-medium text-gray-300">{exp.company}</h3>
                  </div>
                  <p className="text-lg font-bold">{exp.title}</p>
                  <p className="italic mb-1 text-gray-300">{exp.location}</p>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Experience;