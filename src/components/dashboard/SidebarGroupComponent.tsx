import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import Link from "next/link";

export default function SidebarGroupComponent({
  label,
  items,
  pathName,
}: {
  label: string;
  items: { title: string; url: string; icon: React.ElementType }[];
  pathName: string;
}) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel className="text-[#989BA4]">{label}</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => {
            const isActive = pathName === item.url;

            return (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <Link
                    href={item.url}
                    className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
                      isActive
                        ? "bg-[#8750F7] text-white"
                        : "hover:bg-[#2A1B30]"
                    }`}
                  >
                    <item.icon
                      className={`${
                        isActive ? "text-white" : "text-[#989BA4]"
                      }`}
                    />
                    <span className="text-sm">{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
