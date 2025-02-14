import { Fragment } from "react";
import bannerImage from "@/assets/banner-dashboard.jpg";
import Image from "next/image";
import DhakaTime from "@/lib/DhakaTime";
import CurrentDate from "@/lib/CurrrentDate";
import Greeting from "@/lib/Gretting";
import ContactTable from "@/components/dashboard/DashboardContactComponent/ContactTable";
import ProjectTable from "@/components/dashboard/DashboardProjectComponent/ProjectTable";
import DashboardPieChart from "@/components/dashboard/DashboardHomeComponent/DashboardPieChart";

export default function DashboardHomePage() {
  return (
    <Fragment>
      <div className="grid grid-cols-1 xl:grid-cols-[70%,30%] gap-4">
        <div className="relative ">
          {/* Background Image with Gradient Overlay */}
          <div className="h-[300px] w-full  relative">
            <Image
              src={bannerImage}
              alt="Banner Image"
              sizes="100vw"
              width={1200}
              height={500}
              className="w-full h-full object-cover rounded"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-40 rounded"></div>

            {/* Motivational Text (Left-Aligned with Animation) */}
            <div className="absolute left-4 top-4 space-y-2 text-white text-xl font-semibold mb-2 transform transition duration-500 ease-in-out hover:scale-105">
              <Greeting />
              <div className="text-2xl font-medium ">
                Welcome to Your Dashboard
              </div>
            </div>

            {/* Quote of the Day */}
            <div className="absolute right-4 bottom-4 text-white text-sm italic opacity-80">
              The best way to predict the future is to create it.
            </div>

            {/* Time Display (Top-Right with Shadow) */}
            <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-4 py-2 rounded-md text-lg font-semibold shadow-lg hidden xl:block">
              <DhakaTime />
            </div>

            {/* Date Display (Below Time with Separate Background and Hover Effect) */}
            <div className="absolute top-16 right-4 bg-black bg-opacity-30 text-white px-4 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out hover:bg-opacity-50 hidden xl:block">
              <CurrentDate />
            </div>
          </div>
        </div>

        {/* pie chart */}
        <div>
          <DashboardPieChart />
        </div>
      </div>

      {/* card */}
      <div className="flex flex-col xl:flex-row gap-5 ">
        <ProjectTable />
        <ContactTable />
      </div>
    </Fragment>
  );
}
