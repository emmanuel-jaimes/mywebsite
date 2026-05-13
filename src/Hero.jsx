import React from "react";
import SocialIcon from "./SocialIcon";

export default function Hero() {
  const navLinks = [
    { href: '#about', text: 'About' },
    { href: '#projects', text: 'Projects' },
    { href: '#experience', text: 'Experience' },
    { href: '#connect', text: 'Connect' },
  ];

  const logos = [
    { alt: 'LinkedIn Logo', src: 'public/Linkedin.svg', className: 'h-6 w-fit' },
    { alt: 'GitHub Logo', src: 'public/Github.svg', className: 'h-5 w-fit' },
    { alt: 'Resume Logo', src: 'public/File_text.svg', className: 'h-6 w-fit' },
    { alt: 'Email Logo', src: 'public/mail.svg', className: 'h-4 w-fit' },
    { alt: 'icon', src: 'public/Icon.svg', className: 'h-5 w-fit' },
  ];

  return (
    <div className="bg-white text-gray-800 dark:bg-neutral-950 relative isolate min-h-screen antialiased dark:text-neutral-100">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="h-[60vh] w-[60vh] rounded-full bg-gradient-to-br absolute -top-32 -left-32 from-indigo-200 via-lime-200 to-purple-300 opacity-20 blur-2xl dark:opacity-0"></div>
        <div className="h-[40vh] w-[50vh] rounded-full bg-gradient-to-tr absolute bottom-160 right-10 from-fuchsia-300 via-orange-300 to-rose-200 opacity-40 blur-3xl dark:opacity-0"></div>
        <div className="h-[35vh] w-[45vh] rounded-full bg-gradient-to-b dark:h-[28vh] absolute top-28 left-1/4 from-orange-300 via-amber-200 to-rose-100 opacity-60 blur-3xl dark:from-orange-600 dark:via-amber-500 dark:to-rose-400 dark:opacity-64"></div>
      </div>
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="h-[60vh] w-[60vh] rounded-full bg-gradient-to-br absolute -top-28 -left-28 from-indigo-200 via-lime-200 to-purple-300 opacity-20 blur-2xl dark:opacity-0"></div>
        <div className="h-[40vh] w-[50vh] rounded-full bg-gradient-to-tr absolute bottom-160 right-10 from-fuchsia-300 via-purple-300 to-purple-200 opacity-40 blur-3xl dark:opacity-0"></div>
        <div className="h-[35vh] w-[45vh] rounded-full bg-gradient-to-b dark:h-[28vh] absolute top-28 left-1/4 from-purple-300 via-amber-200 to-pink-100 opacity-60 blur-3xl dark:from-purple-600 dark:via-amber-500 dark:to-purple-400 dark:opacity-64"></div>
      </div>
      <header className="w-full z-20 transition-colors duration-150">
        <div className="mx-auto px-6 max-w-5xl transition-all duration-300">
          <div className="items-center justify-between py-3 lg:gap-0 lg:py-4 relative flex flex-wrap gap-6">
            <div className="w-full items-center justify-between lg:w-auto flex gap-12">
              <p className="font-semibold tracking-wide">EJ</p>
              <button type="button" className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                <svg className="w-6 h-6 m-auto duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <div className="lg:block hidden">
                <ul className="text-sm flex gap-8">
                  {navLinks.map((link, idx) => (
                    <li key={idx}>
                      <a href={link.href} className="text-gray-700/80 dark:text-neutral-300/80 hover:text-gray-800 dark:hover:text-neutral-100 block duration-150">
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
                <div className="grid grid-cols-2 md:flex justify-center md:justify-end gap-6">
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

      <main className="overflow-hidden">
        <section>
          <div className="pt-8 relative">
            <div className="w-full h-full absolute inset-0 -z-10 bg-gradient-radial from-transparent to-white dark:to-neutral-950"></div>
            <div className="mx-auto px-6 max-w-5xl">
              <div className="sm:mx-auto lg:mr-auto lg:mt-0">
                <p className="mt-8 text-5xl font-medium md:text-6xl lg:mt-16 max-w-2xl text-balance">Emmanuel Jaimes</p>
                {/* <div className="mt-11 items-center flex gap-2">
                  <div className="bg-gray-800/10 dark:bg-neutral-100/10 rounded-xl border border-zinc-300/70 dark:border-black/20 p-0.5">
                    <button className="inline-flex border border-transparent transition-colors hover:bg-neutral-700 dark:hover:bg-indigo-500 items-center justify-center rounded-xl bg-neutral-900 px-5 py-3 font-medium text-neutral-100 dark:bg-indigo-600 text-base">Join Nebula</button>
                  </div>
                  <button className="inline-flex border border-transparent transition-colors hover:bg-black/5 dark:hover:bg-white/10 items-center justify-center rounded-xl bg-transparent px-5 py-3 font-medium text-base">Request a demo</button>
                </div> */}
                <p className="mt-8 text-lg text-gray-700/80 max-w-2xl text-pretty dark:text-neutral-300/80">Software Engineer</p>
                <p className="mt-8 ml-2 text-lg text-gray-700/80 max-w-2xl text-pretty dark:text-neutral-300/80">Chicago</p>
                
                {/* <div className="items-center flex mt-4">
                  <img alt="" src="https://devwares-pull-zone.b-cdn.net/mockimages/John%20Carter%20-%20Cirlce%20Small.png" className="object-cover object-right h-8 w-8 rounded-full" />
                  <img alt="" src="https://devwares-pull-zone.b-cdn.net/mockimages/Sophie%20Moore%20-%20Circle%20Small.png" className="-ml-2 object-cover h-8 w-8 rounded-full" />
                  <img alt="" src="https://images.unsplash.com/photo-1506863530036-1efeddceb993?..." className="-ml-2 object-cover object-top h-8 w-8 rounded-full" />
                  <img alt="" src="https://assets.website-files.com/.../Image-4.jpg" className="-ml-2 object-cover h-8 w-8 rounded-full" />
                  <div className="ml-4 items-start flex flex-col">
                    <p className="text-base font-medium m-0 dark:text-gray-200 text-gray-900">Trusted by over 500k+ users</p>
                  </div>
                </div> */}
              </div>
            </div>
            {/* <div className="mt-8 px-2 sm:mr-0 sm:mt-12 md:mt-20 relative -mr-56 overflow-hidden">
              <div aria-hidden className="bg-linear-to-b absolute inset-0 z-10 from-transparent from-35% to-white dark:to-neutral-950"></div>
              <div className="mx-auto rounded-2xl bg-white dark:bg-neutral-950 shadow-lg relative max-w-5xl overflow-hidden border border-black/10 dark:border-white/15 p-4 ring-1 ring-white dark:ring-neutral-950">
                <img alt="app screen" src="https://devwares-pull-zone.b-cdn.net/mockimages/ChatGPT%20Image%20May%209%2C%202025%2C%2002_54_42%20AM.png" className="relative hidden dark:block rounded-2xl" />
                <img alt="app screen" src="https://devwares-pull-zone.b-cdn.net/mockimages/ChatGPT%20Image%20May%209%2C%202025%2C%2001_49_56%20AM.png" className="relative border border-black/10 dark:hidden rounded-2xl" />
              </div>
            </div> */}
          </div>
        </section>

        {/* <section className="bg-white dark:bg-neutral-950 pb-16 pt-16 md:pb-32">
          <div className="px-6 group relative m-auto max-w-5xl">
            <div className="items-center justify-center absolute inset-0 z-10 flex scale-95 opacity-0 duration-500 group-hover:scale-100 group-hover:opacity-100">
              <a href="/" className="text-sm text-gray-700/80 block duration-150 hover:opacity-75 dark:text-neutral-300/80">
                You are in good hands
                <svg className="ml-1 w-3 h-3 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            <div className="mx-auto mt-12 sm:gap-x-16 sm:gap-y-14 group-hover:blur-sm grid max-w-2xl grid-cols-4 gap-x-12 gap-y-8 transition-all duration-500 group-hover:opacity-50">
              {logos.map((logo, index) => (
                <div key={index} className="flex">
                  <img alt={logo.alt} src={logo.src} className={"dark:invert brightness-0 mx-auto " + logo.className} />
                </div>
              ))}
            </div>
          </div>
        </section> */}
      </main>
    </div>
  );
};
