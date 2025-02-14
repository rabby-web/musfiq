import Blogs from "@/components/blogsComponent/Blogs";
import { Fragment } from "react";

export default async function BlogsPage() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/blogs`, {
    next: { revalidate: 30 },
  });
  if (!response.ok) {
    throw new Error("Failed to fetch blogs data!");
  }
  const result = await response.json();
  const blogs = result?.data || [];

  return (
    <Fragment>
      <div className="lg:max-w-screen-2xl p-4 mx-auto ">
        <Blogs blogs={blogs} />
      </div>
    </Fragment>
  );
}
