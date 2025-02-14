import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { getServerSession } from "next-auth";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();
  // console.log(session);

  return (
    <SidebarProvider>
      <div className="flex h-screen w-full">
        <AppSidebar session={session} />
        <main className=" bg-[#050709]  flex-1 overflow-auto p-4">
          <SidebarTrigger className="text-white" />
          <span>{children}</span>
        </main>
      </div>
    </SidebarProvider>
  );
}
