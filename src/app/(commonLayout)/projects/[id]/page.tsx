import ProjectDetails from "@/components/shared/ProjectDetails";

export default async function ProjectDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/projects/${id}`,
    {
      cache: "no-store",
    }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch project details data!");
  }
  const result = await response.json();
  const project = result?.data || {};
  console.log(project);
  return (
    <div className="lg:max-w-screen-2xl p-4 mx-auto ">
      <ProjectDetails project={project} />
    </div>
  );
}
