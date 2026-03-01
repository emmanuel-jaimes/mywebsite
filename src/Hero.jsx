import React from "react";
import SocialIcon from "./SocialIcon";

export default function Hero() {
  return (
    <div className="bg-black text-white tracking-widest font-roboto p-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Emmanuel Jaimes</h1>
          <h2 className="text-2xl md:text-3xl mb-1">Software Engineer</h2>
          <h2 className="text-2xl md:text-2xl"><i>📍Chicago</i></h2>   
        </div>

        {/* right social icon */}
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
      </div>
    </div>
  );
}
