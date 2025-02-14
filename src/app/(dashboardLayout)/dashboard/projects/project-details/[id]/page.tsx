import DashboardSectionTitle from "@/components/dashboard/shared/DashboardSectionTitle";
import ProjectDetails from "@/components/shared/ProjectDetails";

export default async function DashboardProjectDetailsPage({
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

  return (
    <div>
      {/* dashboard title */}
      <DashboardSectionTitle title="Project Details" />
      <ProjectDetails project={project} />
    </div>
  );
}
