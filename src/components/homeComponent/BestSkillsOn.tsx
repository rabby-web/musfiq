import Image from "next/image";
import { Fragment } from "react";
import react from "@/assets/React.svg";
import redux from "@/assets/Redux.svg";
import mongodb from "@/assets/MongoDB.svg";
import javascript from "@/assets/JavaScript.svg";

export default function BestSkillsOn() {
  return (
    <Fragment>
      <div className="space-y-4">
        <p className="text-sm text-[#110E18] dark:text-white">Best Skills On</p>

        <div className="flex items-center gap-5">
          <Image
            src={javascript}
            width={50}
            height={50}
            alt="Javascript Icon"
          />
          <Image src={react} width={50} height={50} alt="React Icon" />
          <Image src={redux} width={50} height={50} alt="Redux Icon" />
          <Image src={mongodb} width={50} height={50} alt="MongodDB Icon" />
        </div>
      </div>
    </Fragment>
  );
}
