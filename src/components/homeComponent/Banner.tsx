import { Fragment } from "react";
import TechAnimation from "./TechAnimation";
import FindWithMe from "./FindWithMe";
import BestSkillsOn from "./BestSkillsOn";
import { Button } from "../ui/button";
import { Download } from "lucide-react";
import ResumeDownloadButton from "./ResumeDownloadButton";

export default function Banner() {
  return (
    <Fragment>
      <div className="relative flex justify-between items-center  xl:h-[calc(100vh-7rem)] gap-10 ">
        {/* text */}
        <div className=" space-y-4">
          <h2 className="text-sm font-medium text-[#110E18] dark:text-white">
            Welcome To My Profile
          </h2>
          <h3 className="text-5xl lg:text-[60px] font-bold text-[#110E18] dark:text-white">
            Hi, I’m{" "}
            <span className="text-[#8750F7] font-semibold">
              Moshfiqur Rahman
            </span>
          </h3>
          <h4 className="text-4xl lg:text-5xl font-medium text-[#110E18] dark:text-white">
            Full-Stack Developer
          </h4>
          <p className="text-base text-[#989BA4]">
            My mother tongue in programming language is JavaScript. I work
            Frontend with <br /> JavaScript based libraries and frameworks such
            as React and NextJS. Backend works <br /> with Node Js, Express Js,
            MongoDB and PostgreSql Database.
          </p>
          {/* icons */}
          <div className="flex flex-col xl:flex-row  gap-4 xl:gap-20">
            {/* find with me  */}
            <FindWithMe />
            {/* best skills on */}
            <BestSkillsOn />
          </div>
          {/* download resume button */}
          <ResumeDownloadButton />
        </div>
        {/* animation */}
        <div className="hidden lg:block">
          <TechAnimation />
        </div>
      </div>
      {/* icons */}
    </Fragment>
  );
}
