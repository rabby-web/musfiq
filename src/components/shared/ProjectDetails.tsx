import Image from "next/image";
import { Fragment } from "react";
import calendar from "@/assets/schedule.png";
import { Button } from "../ui/button";
import Link from "next/link";
import { PlayCircle } from "lucide-react";
import { FaBook, FaGithub } from "react-icons/fa";
import { TProject } from "@/types/project";

type ProjectDetailsProps = {
  project: TProject;
};

export default function ProjectDetails({ project }: ProjectDetailsProps) {
  // Function to check if a URL is valid
  function isValidUrl(url: string | undefined): boolean {
    try {
      if (!url) return false;
      new URL(url); // Try to create a new URL object
      return true;
    } catch (e) {
      return false;
    }
  }
  return (
    <Fragment>
      <div className="mt-10  space-y-4 dark:bg-[#140C1C] rounded-md p-4">
        {/* image */}
        <div className="h-[600px]">
          {isValidUrl(project?.thumbnail) ? (
            <Image
              src={project?.thumbnail}
              alt="Featured Project"
              sizes="100vw"
              width={1200}
              height={500}
              className="w-full h-full object-cover rounded"
            />
          ) : (
            // Custom placeholder image
            <div className="w-full h-full bg-gray-300 rounded flex justify-center items-center">
              <Image
                src="https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ="
                alt="Placeholder Image"
                width={1200}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>
        {/* title and timeline*/}
        <div className="flex flex-col xl:flex-row gap-4 xl:gap-0 xl:justify-between">
          <h2 className="text-2xl text-[#8750F7] font-bold">
            {project?.title}
          </h2>
          {project?.projectTimeline && (
            <div className="flex items-center space-x-3 ">
              <p className="text-base text-[#989BA4]">
                {project?.projectTimeline}
              </p>
              <Image
                width={25}
                height={25}
                alt="Calendar Icon"
                src={calendar}
              />
            </div>
          )}
        </div>
        {/* description */}
        <div>
          <p className=" text-base text-[#989BA4] leading-relaxed">
            {project?.description}
          </p>
        </div>
        {/* key features */}
        <div>
          <h3 className="text-[#8750F7] text-xl font-medium">Key Features:</h3>
          <ul className="text-[#989BA4] text-base list-inside list-disc">
            {project?.keyFeatures.map((keyFeature, index) => (
              <li key={index}>{keyFeature}</li>
            ))}
          </ul>
        </div>

        {/* technology used */}
        <div>
          <h3 className="text-[#8750F7] text-xl font-medium">
            Uses Technologies:
          </h3>
          <ul className="text-[#989BA4] text-base list-inside list-disc">
            {project?.technologiesUsed.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>
        {/* project role */}
        <div>
          <h3 className="text-[#8750F7] text-xl font-medium">Project Role:</h3>
          <p className=" text-base text-[#989BA4] leading-relaxed">
            {project?.projectRole}
          </p>
        </div>
        {/*  Project goals & objectives */}
        {project?.projectGoals && (
          <div>
            <h3 className="text-[#8750F7] text-xl font-medium">
              Project goals & objectives:
            </h3>
            <p className=" text-base text-[#989BA4] leading-relaxed">
              {project?.projectGoals}
            </p>
          </div>
        )}
        {/*  Challenges Faced:*/}
        {project?.challengesFaced && (
          <div>
            <h3 className="text-[#8750F7] text-xl font-medium">
              Challenges Faced:
            </h3>
            <p className=" text-base text-[#989BA4] leading-relaxed">
              {project?.challengesFaced}
            </p>
          </div>
        )}

        {/*  Solution/Outcome*/}
        {project?.solution && (
          <div>
            <h3 className="text-[#8750F7] text-xl font-medium">
              Solution/Outcome:
            </h3>
            <p className=" text-base text-[#989BA4] leading-relaxed">
              {project?.solution}
            </p>
          </div>
        )}

        {/*  Solution/Outcome*/}
        {project?.futureImprovements && (
          <div>
            <h3 className="text-[#8750F7] text-xl font-medium">
              Future Improvements:
            </h3>
            <p className=" text-base text-[#989BA4] leading-relaxed">
              {project?.futureImprovements}
            </p>
          </div>
        )}
        {/*  Security Considerations*/}
        {project?.securityConsiderations && (
          <div>
            <h3 className="text-[#8750F7] text-xl font-medium">
              Security Considerations:
            </h3>
            <p className=" text-base text-[#989BA4] leading-relaxed">
              {project?.securityConsiderations}
            </p>
          </div>
        )}
        {/* button */}
        <div className="flex gap-4 flex-wrap">
          <Button
            asChild
            className="bg-[#8750F7] hover:bg-[#733DD6] text-white"
          >
            <Link
              href={isValidUrl(project?.liveLink) ? project?.liveLink : "/"}
            >
              Live Demo <PlayCircle size={18} />
            </Link>
          </Button>
          {project?.frontendSourceCode && (
            <Button
              asChild
              className="bg-[#8750F7] hover:bg-[#733DD6] text-white"
            >
              <Link
                href={
                  isValidUrl(project?.frontendSourceCode)
                    ? project?.frontendSourceCode
                    : "/"
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                Frontend GitHub <FaGithub size={18} />
              </Link>
            </Button>
          )}
          {project?.backendSourceCode && (
            <Button
              asChild
              className="bg-[#8750F7] hover:bg-[#733DD6] text-white"
            >
              <Link
                href={
                  isValidUrl(project?.backendSourceCode)
                    ? project?.backendSourceCode
                    : "/"
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                Backend GitHub <FaGithub size={18} />
              </Link>
            </Button>
          )}
          {project?.apiDocumentation && (
            <Button
              asChild
              className="bg-[#8750F7] hover:bg-[#733DD6] text-white"
            >
              <Link
                href={
                  isValidUrl(project?.apiDocumentation)
                    ? project?.apiDocumentation
                    : "/"
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                Api Documentation <FaBook size={18} />
              </Link>
            </Button>
          )}
        </div>
      </div>
    </Fragment>
  );
}
