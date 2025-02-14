import { Fragment } from "react";
import SectionTitle from "../shared/SectionTitle";
import profileImage from "@/assets/image.jpg";
import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <Fragment>
      {/* section title */}
      <SectionTitle title="About Me" />
      <div className="mt-10  dark:bg-[#140C1C] p-4 rounded-md ">
        <div className="space-y-4">
          <div>
            {/* name  */}
            <h2 className="text-center text-2xl font-bold text-[#8750F7]">
              Moshfiqur Rahman
            </h2>
            {/* title */}
            <h3 className="text-center text-xl font-medium">
              Full-Stack Web Developer
            </h3>
          </div>
          {/* image */}
          <div className="flex justify-center">
            {/* Rotating dotted border */}
            <div className="relative w-[220px] h-[220px] flex items-center justify-center">
              <div className="absolute w-full h-full border-[3px] border-dotted border-[#8750F7] rounded-full animate-spin-slow shadow-glow drop-shadow-md"></div>

              {/* Profile Image with solid border */}
              <div className="flex justify-center overflow-hidden rounded-full w-[200px] h-[200px] border-2 border-[#733DD6]">
                <Image
                  src={profileImage}
                  width={200}
                  height={200}
                  alt="Profile Image"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <p className="text-[#989BA4] text-base leading-relaxed">
            Hi! I am Moshfiqur Rahman, a Full-stack Web Developer with a deep
            passion for building efficient, responsive, and user-friendly
            websites. My journey started in 2023-July-02, and since then, I have
            been focused on creating impactful digital experiences.
          </p>
          {/* skills */}
          <div>
            <h3 className="text-[#8750F7] text-lg font-medium">
              Skills & Technologies:
            </h3>
            <div className="space-y-4">
              <p className="text-[#989BA4] text-base leading-relaxed">
                Proficient in modern web technologies with a strong focus on
                performance, scalability, and user experience. My expertise
                includes:
              </p>
              <ul className="text-[#989BA4] text-base leading-relaxed list-disc list-inside">
                <li>
                  <span className="font-semibold">Frontend:</span> React,
                  Next.js, Redux, Tailwind CSS, MUI, ShadCN UI
                </li>
                <li>
                  <span className="font-semibold">Backend:</span> Node.js,
                  Express.js, MongoDB, PostgreSQL, Prisma ORM
                </li>
                <li>
                  <span className="font-semibold">State Management:</span> Redux
                  Toolkit, React Query, TanStack Table
                </li>
              </ul>
            </div>
          </div>
          {/* experience and achievements */}
          <div>
            <h3 className="text-[#8750F7] text-lg font-medium">Experience:</h3>
            <p className="text-[#989BA4] text-base leading-relaxed">
              I have worked on various projects, focusing on scalable and
              efficient solutions. Some of my key projects include:
            </p>
            <ul className="text-[#989BA4] text-base leading-relaxed space-y-4">
              <li>
                <span className="font-semibold">
                  Hospital Management System:
                </span>{" "}
                Developed a full-stack hospital management platform using
                Next.js, Node.js, Express, MongoDB, and ShadCN UI, featuring
                patient records, billing, and reports.
              </li>
              <li>
                <span className="font-semibold">
                  Flight Booking Application:
                </span>{" "}
                Built a dynamic flight booking system with Redux, allowing users
                to search, book, and manage reservations.
              </li>
              <li>
                <span className="font-semibold">
                  Weather Data Fetching App:
                </span>{" "}
                Integrated OpenWeatherMap API with geolocation to provide
                real-time weather updates.
              </li>
            </ul>
          </div>
          {/* Work Philosophy: */}
          <div>
            <h3 className="text-[#8750F7] text-lg font-medium">
              Work Philosophy:
            </h3>
            <div className="space-y-4">
              <p className="text-[#989BA4] text-base leading-relaxed">
                I believe in writing clean, maintainable, and efficient code
                while focusing on delivering the best user experience.
                Continuous learning and improvement drive my development
                approach, ensuring that my work remains scalable and
                future-proof.
              </p>
              <p className="text-[#989BA4] text-base leading-relaxed">
                Collaboration is at the core of my workflow. I thrive in team
                environments where knowledge-sharing, constructive feedback, and
                collective problem-solving lead to better outcomes. I strongly
                value clear communication and a growth mindset in every project
                I undertake.
              </p>
            </div>
          </div>
          {/* Personal Interests or Hobbies: */}
          <div>
            <h3 className="text-[#8750F7] text-lg font-medium">
              Personal Interests or Hobbies:
            </h3>
            <p className="text-[#989BA4] text-base leading-relaxed">
              Beyond development, I have a passion for exploring emerging
              technologies, staying updated with industry trends, and
              experimenting with new tools. In my free time, I enjoy
              photography, traveling, and deep-diving into tech-related
              discussions. I also appreciate a well-structured design and love
              refining UI/UX experiences.
            </p>
          </div>
          {/* Call to action */}
          <div className="space-y-4">
            <p className="text-[#989BA4] text-base leading-relaxed">
              Feel free to check out my projects and get in touch for
              collaboration opportunities.
            </p>
            <Button className="bg-[#8750F7] hover:bg-[#733DD6] text-white">
              Check My Projects
              <ArrowRight size={18} />
            </Button>
          </div>
          {/* Social Links */}
        </div>
      </div>
    </Fragment>
  );
}
