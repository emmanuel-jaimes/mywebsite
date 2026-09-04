import React from "react";
import SocialIcon from "./SocialIcon";
import Experience from "./Experience";
import About from './About';
import Projects from "./Projects";

export default function Hero() {
  const navLinks = [
    { href: '#about', text: 'About' },
    { href: '#projects', text: 'Projects' },
    { href: '#experience', text: 'Experience' },
    { href: '#connect', text: 'Connect' },
  ];

  const sections = {
    Projects: <Projects/>,
    About: <About/>,
    Experience: <Experience/>,
  }

  const logos = [
    { alt: 'LinkedIn Logo', src: 'public/Linkedin.svg', className: 'h-6 w-fit' },
    { alt: 'GitHub Logo', src: 'public/Github.svg', className: 'h-5 w-fit' },
    { alt: 'Resume Logo', src: 'public/File_text.svg', className: 'h-6 w-fit' },
    { alt: 'Email Logo', src: 'public/mail.svg', className: 'h-4 w-fit' },
    { alt: 'icon', src: 'public/Icon.svg', className: 'h-5 w-fit' },
  ];

  return (
    <div className="bg-gray-950 dark:bg-neutral-950 relative isolate z-999 h-screen flex flex-col justify-end items-start antialiased text-white text-decoration-none pb-16">
      <div className="pointer-events-auto absolute inset-0 -z-10 overflow-visible">
        <div className="h-[50vh] w-[50vh] rounded-full bg-gradient-to-br absolute bottom-20 left-0 from-indigo-200 via-lime-200 to-purple-300 opacity-20 blur-2xl dark:opacity-0"></div>
        <div className="h-[40vh] w-[50vh] rounded-full bg-gradient-to-tr absolute bottom-20 left-1/2 from-fuchsia-300 via-orange-300 to-rose-200 opacity-40 blur-3xl dark:opacity-0"></div>
        <div className="h-[35vh] w-[45vh] rounded-full bg-gradient-to-b dark:h-[28vh] absolute bottom-20 left-0 from-orange-300 via-red-200 to-rose-100 opacity-60 blur-3xl dark:from-orange-600 dark:via-amber-500 dark:to-rose-400 dark:opacity-64"></div>
      </div>
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-visible">
        <div className="h-[50vh] w-[50vh] rounded-full bg-gradient-to-br absolute bottom-20 right-0 from-indigo-200 via-lime-200 to-purple-300 opacity-20 blur-2xl dark:opacity-0"></div>
        <div className="h-[40vh] w-[50vh] rounded-full bg-gradient-to-tr absolute bottom-20 right-1/2 from-fuchsia-300 via-purple-300 to-purple-200 opacity-40 blur-3xl dark:opacity-0"></div>
        <div className="h-[35vh] w-[45vh] rounded-full bg-gradient-to-b dark:h-[28vh] absolute bottom-20 right-0 from-purple-300 via-red-200 to-pink-100 opacity-60 blur-3xl dark:from-purple-600 dark:via-amber-500 dark:to-purple-400 dark:opacity-64"></div>
      </div>
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-visible">
        <div className="h-[50vh] w-[50vh] rounded-full bg-gradient-to-br absolute top-20 right-1/2 from-indigo-200 via-lime-200 to-purple-300 opacity-20 blur-2xl dark:opacity-0"></div>
        <div className="h-[40vh] w-[50vh] rounded-full bg-gradient-to-tr absolute top-20 right-0 from-fuchsia-300 via-purple-300 to-purple-200 opacity-40 blur-3xl dark:opacity-0"></div>
        <div className="h-[35vh] w-[45vh] rounded-full bg-gradient-to-b dark:h-[28vh] absolute top-20 right-20 from-purple-300 via-red-200 to-pink-100 opacity-60 blur-3xl dark:from-purple-600 dark:via-amber-500 dark:to-purple-400 dark:opacity-64"></div>
      </div>
      <header className="w-full z-20 transition-colors duration-150 fixed top-0 left-0 bg-neutral-950/7₀ backdrop-blur-sm border-b border-zinc-3₀/7₀ dark:border-white/2₀">
        <div className="mx-auto px-6 max-w-5xl transition-all duration-300">
          <div className="items-center justify-between py-3 lg:gap-0 lg:py-4 relative flex flex-wrap gap-6">
            <div className="w-full items-center justify-between lg:w-auto flex gap-12">
              <p className="font-semibold tracking-wide text-white">EJ</p>
              <button type="button" className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                <svg className="w-6 h-6 m-auto duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              {/* CHECK CLASSNAMES HERE FOR TEXT DECORATION  */}
              {/* CHECK FUNCTIONALITY SECTIONS NAVLINKS */}
              <div className="lg:block hidden text-white hover:text-neutral-100 text-decoration-none">
                <ul className="text-sm flex gap-8 text-white hover:text-neutral-100 text-decoration-none">
                  {navLinks.map((link, idx) => (
                    <li key={idx} className="text-white hover:text-neutral-100 text-decoration-none">
                      <a href={link.href} className="block duration-150 text-white hover:text-neutral-100 text-decoration-none">
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="lg:flex lg:w-fit lg:gap-6 lg:space-y-0 hidden">
              <div className="w-full sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit flex flex-col space-y-3">
                {/* icons go here */}
                <div className="grid grid-cols-2 md:flex justify-center md:justify-end gap-6 ">
                  <SocialIcon
                    href="https://www.linkedin.com/in/jaimes-emmanuel"
                    src="/Linkedin.svg"
                    alt="LinkedIn"
                    hoverColor="hover:bg-blue-800"
                  />
                  <SocialIcon
                    href="https://github.com/emmanuel-jaimes"
                    src="/Github.svg"
                    alt="GitHub"
                    hoverColor="hover:bg-purple-800"
                  />
                  <SocialIcon
                    href="mailto:emnl.jms@gmail.com"
                    src="/Mail.svg"
                    alt="Email"
                    hoverColor="hover:bg-green-800"
                  />
                  <SocialIcon
                    href="https://github.com/emmanuel-jaimes/uni-projects/blob/main/emmanuelJaimes_%20Resume26.pdf"
                    src="/File_text.svg"
                    alt="Resume"
                    hoverColor="hover:bg-yellow-800"
                    download
                  />
                </div>
                {/* <button className="inline-flex border border-zinc-300/70 dark:border-white/20 transition-colors hover:bg-black/5 dark:hover:bg-white/10 items-center justify-center rounded-md bg-white/70 dark:bg-white/10 px-4 py-2 font-medium text-sm">Login</button>
                <button className="inline-flex border border-transparent transition-colors hover:bg-neutral-700 dark:hover:bg-indigo-500 items-center justify-center rounded-md bg-neutral-900 px-4 py-2 font-medium text-neutral-100 dark:bg-indigo-600 text-sm">Sign Up</button> */}
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* text */}
      <main className="overflow-hidden w-full flex flex-col justify-end flex-1">
        <section className="w-full">
          <div className="px-8 pb-12 text-gray-300">
            <h1 id='hero-text-lg' className="mt-0 text-[10vw] leading-none tracking-tight items-left">
              Emmanuel<br />
              <em>Jaimes</em>
            </h1>
            <p className="left-0 mt-4 text-lg text-gray-700/80 font-serif dark:text-neutral-300/80">Software Engineer</p>
            <p className="left-40 mt-2 ml-2 text-lg text-gray-700/80 font-serif dark:text-neutral-300/80">Chicago</p>
            
          </div>
        </section>

      </main>
    </div>
  );
};
