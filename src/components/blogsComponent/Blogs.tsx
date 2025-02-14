import { Fragment } from "react";
import SectionTitle from "../shared/SectionTitle";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import calendar from "@/assets/schedule.png";
import Link from "next/link";
import moment from "moment-timezone";
import { TBlog } from "@/types/blog";

type BlogsProps = {
  blogs: TBlog[];
};

export default function Blogs({ blogs }: BlogsProps) {
  // Function to check if a URL is valid
  function isValidUrl(url: string | undefined): boolean {
    try {
      if (!url) return false;
      new URL(url);
      return true;
    } catch (e) {
      return false;
    }
  }
  return (
    <Fragment>
      <SectionTitle title="Blogs" />
      <div className="mt-10 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
          {blogs?.map((blog) => (
            <Card
              key={blog?._id}
              className="w-full dark:bg-[#140C1C]  overflow-hidden flex flex-col gap-5 p-4 "
            >
              {/*  Image */}
              <div className="h-[250px]">
                {isValidUrl(blog?.thumbnail) ? (
                  <Image
                    src={blog?.thumbnail}
                    alt={blog?.title}
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
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                )}
              </div>

              {/* Right Side - Content */}
              <CardContent className=" p-0 space-y-4">
                {/* title */}
                <div>
                  <h2 className="text-2xl text-[#8750F7] font-bold">
                    {blog?.title}
                  </h2>
                </div>

                {/* categories and published date */}
                <div className="flex justify-between">
                  <h2 className="text-base text-[#989BA4]">{blog?.category}</h2>
                  <div className="flex items-center space-x-3 ">
                    <p className="text-base text-[#989BA4]">
                      {moment(blog?.publishedDate)
                        .tz("Asia/Dhaka")
                        .format("MMMM D, YYYY")}
                    </p>
                    <Image
                      width={25}
                      height={25}
                      alt="Calendar Icon"
                      src={calendar}
                    />
                  </div>
                </div>
                {/* author name */}
                <div>
                  <h2 className="text-[#989BA4]">Author: {blog?.authorName}</h2>
                </div>
                {/* intro */}
                <p className=" text-base text-[#989BA4] leading-relaxed">
                  {blog?.introduction}
                </p>
                {/* read more button */}
                <Link href={`/blogs/${blog?._id}`} className="block">
                  <Button className="bg-[#8750F7] hover:bg-[#733DD6] text-white ">
                    Read More
                    <ArrowRight />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Fragment>
  );
}
