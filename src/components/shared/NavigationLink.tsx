"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

type NavigationLinkProps = {
  path: string;
  route: string;
};

export default function NavigationLink({ path, route }: NavigationLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === path;

  return (
    <Link
      href={path}
      className={cn(
        "transition-all duration-300 relative group",
        isActive && "text-[#8750F7] font-semibold"
      )}
    >
      {route}
      <span
        className={cn(
          "absolute bottom-0 left-0 w-0 h-[2px] bg-[#733DD6] transition-all duration-300 group-hover:w-full",
          isActive && "w-full"
        )}
      />
    </Link>
  );
}
