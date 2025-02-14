/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import DashboardSectionTitle from "@/components/dashboard/shared/DashboardSectionTitle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Pencil } from "lucide-react";
import { useRouter } from "next/navigation";
import { Fragment, useState } from "react";
import { toast } from "sonner";

export default function CreateBlogPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: "",
    thumbnail: "",
    category: "",
    introduction: "",
    mainContent: "",
    authorName: "",
    tags: [] as string[],
  });

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;

    if (name === "tags") {
      // Split the tags string by commas and trim any extra spaces
      const tagsArray = value.split(",").map((tag) => tag.trimStart());
      setFormData({
        ...formData,
        [name]: tagsArray,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    console.log(formData, "Form data");

    try {
      const response = await fetch(
        "https://dreams-portfolio-backend.vercel.app/api/v1/blogs",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        toast.error("Failed to create blog");
        return;
      }

      const data = await response.json();
      console.log(data);

      if (data?.success) {
        toast.success("Blog Created successfully", {
          duration: 2000,
        });
        router.push("/dashboard/blogs");
      } else {
        toast.error("Failed to create blog");
      }

      // reset field
      setFormData({
        title: "",
        thumbnail: "",
        category: "",
        introduction: "",
        mainContent: "",
        authorName: "",
        tags: [] as string[],
      });

      // reset field
    } catch (err: any) {
      // console.log(err);
      if (err) {
        toast.error("Something went wrong!");
      }
    }
  }

  return (
    <Fragment>
      <div>
        {/* section title */}
        <DashboardSectionTitle title="Create Blog" />
        <form onSubmit={handleSubmit} className="mt-10">
          <div className="space-y-4">
            <div className="flex flex-col xl:flex-row gap-5">
              {/* title */}
              <div className="space-y-2 flex-1 text-white">
                <Label htmlFor="title" className="text-white">
                  Title:<span className="text-red-500 ml-1">*</span>
                </Label>
                <Input
                  required
                  placeholder="Enter blog title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="border-[#27272A] text-white"
                />
              </div>

              {/* thumbnail */}
              <div className="space-y-2 flex-1">
                <Label htmlFor="thumbnail" className="text-white">
                  Thumbnail Image Url:
                  <span className="text-red-500 ml-1">*</span>
                </Label>
                <Input
                  type="url"
                  required
                  placeholder="Enter thumbnail image url"
                  name="thumbnail"
                  value={formData.thumbnail}
                  onChange={handleChange}
                  className="border-[#27272A] text-white"
                />
              </div>
            </div>

            <div className="flex flex-col xl:flex-row gap-5">
              {/* category */}
              <div className="space-y-2 flex-1">
                <Label htmlFor="category" className="text-white">
                  Category:<span className="text-red-500 ml-1">*</span>
                </Label>
                <Input
                  required
                  placeholder="Enter blog category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="border-[#27272A] text-white"
                />
              </div>

              {/* author name */}
              <div className="space-y-2 flex-1">
                <Label htmlFor="authorName" className="text-white">
                  Author Name:
                  <span className="text-red-500 ml-1">*</span>
                </Label>
                <Input
                  required
                  placeholder="Enter author name"
                  name="authorName"
                  value={formData.authorName}
                  onChange={handleChange}
                  className="border-[#27272A] text-white"
                />
              </div>
            </div>

            {/* introduction */}
            <div className="space-y-2">
              <Label htmlFor="introduction" className="text-white">
                Introduction:<span className="text-red-500 ml-1">*</span>
              </Label>
              <Input
                required
                placeholder="Enter blog introduction"
                name="introduction"
                value={formData.introduction}
                onChange={handleChange}
                className="border-[#27272A] text-white"
              />
            </div>

            {/* mainContent */}
            <div className="space-y-2">
              <Label htmlFor="mainContent" className="text-white">
                Main Content:
                <span className="text-red-500 ml-1">*</span>
              </Label>
              <Textarea
                required
                placeholder="Enter blog main content"
                name="mainContent"
                value={formData.mainContent}
                onChange={handleChange}
                className="min-h-36 border-[#27272A] text-white"
              />
            </div>

            {/* tags */}
            <div className="space-y-2">
              <Label htmlFor="tags" className="text-white">
                Tags:
              </Label>
              <Textarea
                placeholder="Enter tags, separated by commas (e.g., React, Technology, Anguler)"
                name="tags"
                value={formData?.tags}
                onChange={handleChange}
                className="min-h-20 border-[#27272A] text-white"
              />
            </div>

            {/* submit button */}
            <div className="flex justify-center">
              <Button
                type="submit"
                className="bg-[#8750F7] text-white hover:bg-[#733DD6] "
              >
                <Pencil size={18} />
                Create Blog
              </Button>
            </div>
          </div>
        </form>
      </div>
    </Fragment>
  );
}
