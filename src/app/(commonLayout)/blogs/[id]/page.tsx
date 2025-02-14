import BlogDetails from "@/components/blogsComponent/BlogDetails";
import SectionTitle from "@/components/shared/SectionTitle";

export default async function BlogDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/blogs/${id}`,
    {
      cache: "no-store",
    }
  );
  const result = await response.json();

  const blog = result?.data;

  return (
    <div className="lg:max-w-screen-2xl p-4 mx-auto ">
      <SectionTitle title="Blog Details" />
      <BlogDetails blog={blog} />
    </div>
  );
}
