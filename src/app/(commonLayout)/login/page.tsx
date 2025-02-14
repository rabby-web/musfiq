"use client";
import { Fragment } from "react";
import facebook from "@/assets/facebook-icon.png";
import google from "@/assets/Google.svg";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { signIn } from "next-auth/react";
import github from "@/assets/github-icon-1.svg";

export default function LoginPage() {
  return (
    <Fragment>
      <div className="lg:max-w-screen-2xl p-4 mx-auto min-h-[calc(100vh-100px)] flex justify-center items-center ">
        <Card className="dark:bg-[#140C1C] w-80 mx-auto">
          <CardContent className="space-y-4">
            <h2 className="text-[#110E18] dark:text-white text-2xl font-medium text-center mt-3">
              Login Or SignUp
            </h2>
            <p className="text-[#989BA4] text-sm">
              Use your email or another service to continue
            </p>
            {/* google login */}
            <button
              onClick={() =>
                signIn("google", {
                  callbackUrl: "/dashboard",
                })
              }
              className="w-full"
            >
              <div className=" flex justify-between p-2 rounded bg-[#F2F3F5] hover:bg-gray-200 dark:bg-gray-300 dark:hover:bg-[#F2F3F5] transition-colors duration-200">
                <Image src={google} width={25} height={25} alt="Google Icon" />
                <p className="text-[#110E18] text-base">Continue with Google</p>
              </div>
            </button>
            {/* github login */}
            <button
              onClick={() =>
                signIn("github", {
                  callbackUrl: "/dashboard",
                })
              }
              className="w-full"
            >
              <div className=" flex justify-between p-2 rounded bg-[#F2F3F5] hover:bg-gray-200 dark:bg-gray-300 dark:hover:bg-[#F2F3F5] transition-colors duration-200">
                <Image src={github} width={25} height={25} alt="Gmail Icon" />
                <p className="text-[#110E18] text-base">Continue with GitHub</p>
              </div>
            </button>
            {/* facebook login */}
            <div className=" flex justify-between p-2 rounded bg-[#F2F3F5] hover:bg-gray-200 dark:bg-gray-300 dark:hover:bg-[#F2F3F5] transition-colors duration-200 cursor-not-allowed">
              <Image
                src={facebook}
                width={25}
                height={25}
                alt="Facebook Icon"
              />
              <p className="text-[#110E18] text-base">Continue with Facebook</p>
            </div>
            {/* text */}
            <p className="text-[#110E18] dark:text-white text-base font-medium text-center">
              Continue another way
            </p>
            <p className="text-[#989BA4] text-sm">
              By Continue, You agree to this site{" "}
              <u className="cursor-pointer text-[#110E18] dark:text-white font-medium ">
                Term & Conditions
              </u>{" "}
              Read our{" "}
              <u className="cursor-pointer text-[#110E18] dark:text-white font-medium">
                privacy policy
              </u>
            </p>
          </CardContent>
        </Card>
      </div>
    </Fragment>
  );
}
