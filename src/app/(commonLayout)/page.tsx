import Banner from "@/components/homeComponent/Banner";
import FeaturedProject from "@/components/homeComponent/FeaturedProject";
import { Pattern } from "@/components/homeComponent/Pattern";
import Skills from "@/components/homeComponent/Skills";

export default async function HomePage() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/projects/featured-project`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch featured project data!");
  }
  const result = await response.json();
  const featuredProject = result?.data;

  return (
    <div className="lg:max-w-screen-2xl p-4 mx-auto ">
      <Banner />
      <Pattern />
      <Skills />
      <FeaturedProject featuredProject={featuredProject} />
    </div>
  );
}
