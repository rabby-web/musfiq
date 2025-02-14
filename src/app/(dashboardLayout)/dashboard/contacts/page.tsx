import ContactTable from "@/components/dashboard/DashboardContactComponent/ContactTable";
import DashboardSectionTitle from "@/components/dashboard/shared/DashboardSectionTitle";

export default function AllContactsPage() {
  return (
    <div className="w-full">
      <DashboardSectionTitle title="Contacts" />
      <ContactTable />
    </div>
  );
}
