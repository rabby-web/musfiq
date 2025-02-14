"use client";
import { LayoutDashboard, LogOut, Settings } from "lucide-react";
import logo from "@/assets/Logo.png";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";
import Image from "next/image";
import Link from "next/link";
import SidebarGroupComponent from "./dashboard/SidebarGroupComponent";
import {
  FilePlus,
  FolderKanban,
  Edit,
  BookOpenText,
  Users,
} from "lucide-react";
import { Button } from "./ui/button";
import { ModeToggle } from "./shared/ModeToggle";
import { signOut } from "next-auth/react";
import { usePathname } from "next/navigation";

// menu items

const application = [
  {
    title: "Home",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
];

const project = [
  {
    title: "Create Project",
    url: "/dashboard/projects/create-project",
    icon: FilePlus,
  },
  {
    title: "Projects",
    url: "/dashboard/projects",
    icon: FolderKanban,
  },
];

const blog = [
  {
    title: "Create Blog",
    url: "/dashboard/blogs/create-blog",
    icon: Edit,
  },
  {
    title: "Blogs",
    url: "/dashboard/blogs",
    icon: BookOpenText,
  },
];

const contact = [
  {
    title: "Contacts",
    url: "/dashboard/contacts",
    icon: Users,
  },
];

export type SessionProps = {
  user?: {
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
  };
};

export function AppSidebar({
  session,
}: {
  session: SessionProps | null | undefined;
}) {
  // console.log(session);
  const pathName = usePathname();
  return (
    <Sidebar className="bg-[#140C1C] border-[#27272A]">
      <SidebarHeader className="bg-[#140C1C]">
        <Link href="/">
          <div className="flex gap-2">
            <Image src={logo} width={40} height={40} alt="Logo" />
            <div className="leading-[0.8] text-sm">
              <h2 className="text-base text-white">Portfolio</h2>
              <small className="text-xs text-white">Moshfiqur Rahman</small>
            </div>
          </div>
        </Link>
      </SidebarHeader>
      <SidebarContent className="bg-[#140C1C]">
        <SidebarGroupComponent
          label="Application"
          items={application}
          pathName={pathName}
        />
        <SidebarGroupComponent
          label="Project"
          items={project}
          pathName={pathName}
        />
        <SidebarGroupComponent label="Blog" items={blog} pathName={pathName} />
        <SidebarGroupComponent
          label="Contact"
          items={contact}
          pathName={pathName}
        />
      </SidebarContent>
      <SidebarFooter className="border-t border-gray-700 p-3 bg-[#140C1C]">
        {/* user info */}
        <div className="flex items-center gap-3">
          <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center text-lg font-semibold text-gray-600">
            {session?.user?.image ? (
              <Image
                src={session?.user?.image}
                alt="Image"
                layout="fill"
                objectFit="cover"
              />
            ) : (
              <span>MR</span>
            )}
          </div>
          <div className="text-white text-sm">
            <p className="font-medium text-white">{session?.user?.name}</p>
            <p className="text-[11px] text-gray-400">{session?.user?.email}</p>
          </div>
        </div>

        {/* actions */}
        <div className="mt-3 flex justify-between">
          {/* theme toggle */}

          <ModeToggle />

          {/* settings */}
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-gray-800"
          >
            <Settings className="w-5 h-5" />
          </Button>

          {/* logout */}
          <Button
            onClick={() => signOut()}
            className="bg-[#8750F7] hover:bg-[#733DD6] text-white flex items-center gap-2"
          >
            <LogOut className="w-5 h-5" />
            Log Out
          </Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
