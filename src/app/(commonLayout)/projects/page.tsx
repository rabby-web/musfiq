import Projects from "@/components/projectsComponent/projects";

export default async function ProjectsPage() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/projects`, {
    next: { revalidate: 30 },
  });
  if (!response.ok) {
    throw new Error("Failed to fetch projects data!");
  }
  const result = await response.json();
  const projects = result?.data || [];

  return (
    <div className="lg:max-w-screen-2xl p-4 mx-auto ">
      <Projects projects={projects} />
    </div>
  );
}
