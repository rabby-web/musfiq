/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import DashboardSectionTitle from "@/components/dashboard/shared/DashboardSectionTitle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useParams, useRouter } from "next/navigation";
import React, { Fragment, useEffect, useState } from "react";
import { FaPen } from "react-icons/fa";
import { toast } from "sonner";
export default function DashboardProjectUpdatePage() {
  const { id } = useParams();
  const router = useRouter();

  const [formData, setFormData] = useState({
    title: "",
    thumbnail: "",
    description: "",
    projectRole: "",
    technologiesUsed: [] as string[],
    challengesFaced: "",
    solution: "",
    keyFeatures: [] as string[],
    liveLink: "",
    frontendSourceCode: "",
    backendSourceCode: "",
    apiDocumentation: "",
    projectGoals: "",
    futureImprovements: "",
    securityConsiderations: "",
    projectTimeline: "",
  });

  useEffect(() => {
    if (id) {
      fetch(`https://dreams-portfolio-backend.vercel.app/api/v1/projects/${id}`)
        .then((response) => {
          if (!response.ok) {
            toast.error("Failed to fetch project data");
          }
          return response.json();
        })
        .then((data) => {
          setFormData({
            title: data?.data?.title,
            thumbnail: data?.data?.thumbnail,
            description: data?.data?.description,
            projectRole: data?.data?.projectRole,
            technologiesUsed: data?.data?.technologiesUsed,
            challengesFaced: data?.data?.challengesFaced,
            solution: data?.data?.solution,
            keyFeatures: data?.data?.keyFeatures,
            liveLink: data?.data?.liveLink,
            frontendSourceCode: data?.data?.frontendSourceCode,
            backendSourceCode: data?.data?.backendSourceCode,
            apiDocumentation: data?.data?.apiDocumentation,
            projectGoals: data?.data?.projectGoals,
            futureImprovements: data?.data?.futureImprovements,
            securityConsiderations: data?.data?.securityConsiderations,
            projectTimeline: data?.data?.projectTimeline,
          });
        })
        .catch((error) => {
          console.log(error);
          toast.error("Something went wrong!");
        });
    }
  }, [id]);

  const roles = [
    { value: "frontend", label: "Frontend Developer" },
    { value: "backend", label: "Backend Developer" },
    { value: "fullstack", label: "Full-Stack Developer" },
    { value: "ui-ux", label: "UI/UX Designer" },
  ];

  const technologies = [
    { value: "javascript", label: "Javascript" },
    { value: "typescript", label: "Typescript" },
    { value: "mongodb", label: "Mongodb" },
    { value: "mongoose", label: "Mongoose" },
    { value: "tailwindCss", label: "Tailwind Css" },
    { value: "shadcnUi", label: "Shadcn/Ui" },
    { value: "antDesign", label: "Ant Design" },
    { value: "materialUi", label: "MaterialUi" },
    { value: "jwt", label: "Json Web Token" },
    { value: "other", label: "other" },
  ];

  const handleTechnologiesChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedOptions = Array.from(e.target.selectedOptions).map(
      (option) => option.value
    );
    setFormData({ ...formData, technologiesUsed: selectedOptions });
  };

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;

    if (name === "keyFeatures") {
      // Split the key features string by commas and trim any extra spaces
      const featuresArray = value
        .split(",")
        .map((feature) => feature.trimStart());
      setFormData({
        ...formData,
        [name]: featuresArray,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  }

  //   role change
  const handleProjectRoleChange = (value: string) => {
    setFormData({
      ...formData,
      projectRole: value,
    });
  };

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    console.log(formData, "Form data");

    try {
      const response = await fetch(
        `https://dreams-portfolio-backend.vercel.app/api/v1/projects/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        toast.error("Failed to update project");
        return;
      }

      const data = await response.json();

      if (data?.success) {
        toast.success("Project updated successfully", {
          duration: 2000,
        });
        router.push("/dashboard/projects");
      } else {
        toast.error("Failed to update project");
      }

      //   reset form
      setFormData({
        title: "",
        thumbnail: "",
        description: "",
        projectRole: "",
        technologiesUsed: [] as string[],
        challengesFaced: "",
        solution: "",
        keyFeatures: [] as string[],
        liveLink: "",
        frontendSourceCode: "",
        backendSourceCode: "",
        apiDocumentation: "",
        projectGoals: "",
        futureImprovements: "",
        securityConsiderations: "",
        projectTimeline: "",
      });
    } catch (err: any) {
      if (err) {
        toast.error("Something went wrong!");
      }
    }
  }

  return (
    <Fragment>
      <div>
        {/* section title */}
        <DashboardSectionTitle title="Update Project" />
        <form onSubmit={handleSubmit} className="mt-10">
          <div className="space-y-4">
            <div className="flex gap-5">
              {/* title */}
              <div className="space-y-2 flex-1">
                <Label htmlFor="title" className="text-white">
                  Project Title:<span className="text-red-500 ml-1">*</span>
                </Label>
                <Input
                  required
                  placeholder="Enter project title"
                  name="title"
                  value={formData?.title || ""}
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
                  value={formData?.thumbnail || ""}
                  onChange={handleChange}
                  className="border-[#27272A] text-white"
                />
              </div>
            </div>

            <div className="flex gap-5">
              {/* project timeline */}
              <div className="space-y-2 flex-1">
                <label
                  htmlFor="projectTimeline"
                  className="block font-medium text-white"
                >
                  Project Timeline:
                </label>
                <Input
                  required
                  placeholder="Enter project timeline (e.g, Completed in 25days)"
                  name="projectTimeline"
                  value={formData?.projectTimeline || ""}
                  onChange={handleChange}
                  className="border-[#27272A] text-white"
                />
              </div>

              {/* project role */}
              <div className="space-y-2 flex-1">
                <Label htmlFor="projectRole" className="text-white">
                  Project Role:
                  <span className="text-red-500 ml-1 ">*</span>
                </Label>
                <Select required onValueChange={handleProjectRoleChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a Role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Project Role</SelectLabel>
                      {roles.map((role) => (
                        <SelectItem key={role.value} value={role.value}>
                          {role.label}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* description */}
            <div className="space-y-2">
              <Label htmlFor="description" className="text-white">
                Project Description:<span className="text-red-500 ml-1">*</span>
              </Label>
              <Textarea
                required
                placeholder="Enter project description"
                name="description"
                value={formData?.description || ""}
                onChange={handleChange}
                className="min-h-36 border-[#27272A] text-white"
              />
            </div>

            {/* Technologies Used */}
            <div className="space-y-2">
              <Label htmlFor="technologiesUsed" className="text-white">
                Technologies Used:<span className="text-red-500 ml-1">*</span>
              </Label>
              <select
                className="w-full min-h-36"
                name="technologiesUsed"
                value={formData?.technologiesUsed || []}
                onChange={handleTechnologiesChange}
                multiple
                required
              >
                {technologies?.map((tech) => (
                  <option
                    key={tech.value}
                    value={tech.value}
                    className="text-sm"
                  >
                    {tech.label}
                  </option>
                ))}
              </select>
            </div>

            {/* challengesFaced */}
            <div className="space-y-2">
              <Label htmlFor="challengesFaced" className="text-white">
                Challenges Faced:
              </Label>
              <Textarea
                placeholder="Enter challenges faced"
                name="challengesFaced"
                value={formData?.challengesFaced || ""}
                onChange={handleChange}
                className="min-h-36 border-[#27272A] text-white"
              />
            </div>

            {/* solution */}
            <div className="space-y-2">
              <Label htmlFor="solution" className="text-white">
                Solution & Outcome:
              </Label>
              <Textarea
                placeholder="Enter solution and outcome"
                name="solution"
                value={formData?.solution || ""}
                onChange={handleChange}
                className="min-h-36 border-[#27272A] text-white"
              />
            </div>

            {/* keyFeatures (Comma Separated) */}
            <div className="space-y-2">
              <Label htmlFor="keyFeatures" className="text-white">
                Key Features:<span className="text-red-500 ml-1">*</span>
              </Label>
              <Textarea
                placeholder="Enter keyFeatures, separated by commas (e.g., Responsive design, User authentication, API integration)"
                name="keyFeatures"
                value={formData?.keyFeatures || []}
                onChange={handleChange}
                className="min-h-20 border-[#27272A] text-white"
                required
              />
            </div>

            <div className="flex gap-5">
              {/* liveLink */}
              <div className="space-y-2 flex-1">
                <Label htmlFor="liveLink" className="text-white">
                  Project Live Link:<span className="text-red-500 ml-1">*</span>
                </Label>
                <Input
                  type="url"
                  required
                  placeholder="Enter live url"
                  name="liveLink"
                  value={formData?.liveLink || ""}
                  onChange={handleChange}
                  className="border-[#27272A] text-white"
                />
              </div>

              {/* frontendSourceCode */}
              <div className="space-y-2 flex-1">
                <Label htmlFor="frontendSourceCode" className="text-white">
                  Frontend Source Code:
                  <span className="text-red-500 ml-1">*</span>
                </Label>
                <Input
                  type="url"
                  required
                  placeholder="Enter frontend source code url"
                  name="frontendSourceCode"
                  value={formData?.frontendSourceCode || ""}
                  onChange={handleChange}
                  className="border-[#27272A] text-white"
                />
              </div>
            </div>

            <div className="flex gap-5">
              {/* backendSourceCode */}
              <div className="space-y-2 flex-1">
                <Label htmlFor="backendSourceCode" className="text-white">
                  Backend Source Code:
                </Label>
                <Input
                  type="url"
                  placeholder="Enter backend source code url"
                  name="backendSourceCode"
                  value={formData?.backendSourceCode || ""}
                  onChange={handleChange}
                  className="border-[#27272A] text-white"
                />
              </div>

              {/* apiDocumentation */}
              <div className="space-y-2 flex-1">
                <Label htmlFor="apiDocumentation" className="text-white">
                  Api Documentation:
                </Label>
                <Input
                  type="url"
                  placeholder="Enter api documentation  url"
                  name="apiDocumentation"
                  value={formData?.apiDocumentation || ""}
                  onChange={handleChange}
                  className="border-[#27272A] text-white"
                />
              </div>
            </div>

            {/* projectGoals*/}
            <div className="space-y-2">
              <Label htmlFor="solution" className="text-white">
                Project Goals And Objectives:
              </Label>
              <Textarea
                placeholder="Enter project goals and objectives"
                name="projectGoals"
                value={formData?.projectGoals || ""}
                onChange={handleChange}
                className="min-h-36 border-[#27272A] text-white"
              />
            </div>

            {/* futureImprovements*/}
            <div className="space-y-2">
              <Label htmlFor="futureImprovements" className="text-white">
                Future Improvements:
              </Label>
              <Textarea
                placeholder="Enter  future improvements"
                name="futureImprovements"
                value={formData?.futureImprovements || ""}
                onChange={handleChange}
                className="min-h-36 border-[#27272A] text-white"
              />
            </div>

            {/* securityConsiderations*/}
            <div className="space-y-2">
              <Label htmlFor="securityConsiderations" className="text-white">
                Security Considerations:
              </Label>
              <Textarea
                placeholder="Enter security considerations"
                name="securityConsiderations"
                value={formData?.securityConsiderations || ""}
                onChange={handleChange}
                className="min-h-36 border-[#27272A] text-white"
              />
            </div>

            {/* submit button */}
            <div className="flex justify-center">
              <Button
                type="submit"
                className="bg-[#8750F7] text-white hover:bg-[#733DD6] "
              >
                <FaPen size={18} />
                Update Project
              </Button>
            </div>
          </div>
        </form>
      </div>
    </Fragment>
  );
}
