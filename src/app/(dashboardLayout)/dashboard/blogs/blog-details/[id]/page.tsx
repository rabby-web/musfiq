import BlogDetails from "@/components/blogsComponent/BlogDetails";
import DashboardSectionTitle from "@/components/dashboard/shared/DashboardSectionTitle";

export default async function DashboardBlogDetailsPage({
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
    <div>
      <DashboardSectionTitle title="Blog Details" />
      <BlogDetails blog={blog} />
    </div>
  );
}
