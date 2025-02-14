import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import facebook from "@/assets/facebook.png";
import linkedin from "@/assets/linkedin.png";

export default function FindWithMe() {
  return (
    <Fragment>
      <div className="space-y-4">
        <p className="text-sm text-[#110E18] dark:text-white">Find With Me</p>

        <div className="flex items-center gap-5">
          <Link href="https://www.facebook.com/emambokhari99">
            <Image src={facebook} width={50} height={50} alt="Facebook Icon" />
          </Link>
          <Link href="#">
            <Image src={linkedin} width={50} height={50} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
    </Fragment>
  );
}
