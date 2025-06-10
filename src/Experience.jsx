import React from 'react';

const experiences = [
  {
    year: "Present",
    company: "Northwestern Medicine",
    location: "Chicago, IL",
    title: "Technology Support Analyst",
    logo: "/imgs/NMLogo.png",
  },
  {
    year: "20' - 24'",
    company: "University of Iowa",
    location: "Iowa City, IA",
    title: "B.S.E Computer Science & Engineering",
    logo: "/iowaGold.png",
  },
  {
    year: "22' - 24'",
    company: "College of Public Health",
    location: "Iowa City, IA",
    title: "IT Support Specialist",
    logo: "/PublicHealth-Affinity-Stacked-FFCD00-White.png",
  },
  {
    year: "22'",
    company: "John Deere",
    location: "Dubuque, IA",
    title: "Product Engineer",
    logo: "/jd-construction.png",
  },
  {
    year: "19' - 24'",
    company: "Various Locations",
    location: "Dallas, TX",
    title: "Craft Cocktail Bartender",
    logo: "/imgs/martini-glass.png",
  },
];

function Experience() {
  return (
    <div className="flex flex-col px-4 py-4 relative">
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
                <div className="bg-gray-50 text-black rounded-xl shadow-md p-5 w-full">
                  <div className="flex items-center gap-2 mb-2">
                    {exp.logo && (
                      <img src={exp.logo} alt="" className="w-14 h-14 object-contain rounded" />
                    )}
                    <h3 className="text-lg font-medium">{exp.company}</h3>
                  </div>
                  <p className="italic mb-1">{exp.location}</p>
                  <p className="text-lg font-bold">{exp.title}</p>
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
                <div className="bg-gray-50 text-black rounded-xl shadow-md p-5 w-full">
                  <div className="flex items-center gap-2 mb-2">
                    {exp.logo && (
                      <img src={exp.logo} alt="" className="w-14 h-14 object-contain rounded" />
                    )}
                    <h3 className="text-lg font-medium">{exp.company}</h3>
                  </div>
                  <p className="italic mb-1">{exp.location}</p>
                  <p className="text-lg font-bold">{exp.title}</p>
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