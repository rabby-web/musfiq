import ContactDetails from "@/components/contactComponent/ContactDetails";
import DashboardSectionTitle from "@/components/dashboard/shared/DashboardSectionTitle";

export default async function DashboardContactDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/contacts/${id}`,
    {
      cache: "no-store",
    }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch contact details data!");
  }
  const result = await response.json();
  const contact = result?.data || {};
  // console.log(contact);
  return (
    <div>
      {/*  title */}
      <DashboardSectionTitle title="Contact Details" />

      <ContactDetails contact={contact} />
    </div>
  );
}
