"use client";
import Image from "next/image";
import logo from "@/assets/Logo.png";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Home,
  Info,
  Briefcase,
  PenTool,
  Menu,
  Contact,
  LogInIcon,
  LogOutIcon,
  LayoutDashboard,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import NavigationLink from "./NavigationLink";
import { ModeToggle } from "./ModeToggle";
import { signOut } from "next-auth/react";

export type SessionProps = {
  user?: {
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
  };
};

export default function Navbar({
  session,
}: {
  session: SessionProps | null | undefined;
}) {
  // console.log(session);
  return (
    <nav className="flex items-center justify-between p-4  text-[#110E18] dark:text-white  lg:max-w-screen-2xl mx-auto">
      {/*  Logo */}
      <div className="text-xl font-bold">
        <Link href="/">
          <Image src={logo} alt="Logo" width={50} height={50} />
        </Link>
      </div>

      {/* Navigation links and Login button */}
      <div className="hidden lg:flex items-center space-x-6">
        <NavigationLink path="/" route="Home" />
        <NavigationLink path="/about" route="About" />
        <NavigationLink path="/projects" route="Projects" />
        <NavigationLink path="/blogs" route="Blogs" />
        <NavigationLink path="/contact" route="Contact" />
        {session?.user && (
          <NavigationLink path="/dashboard" route="Dashboard" />
        )}
        <ModeToggle />
        {session?.user ? (
          <Button
            onClick={() => signOut()}
            className="bg-[#8750F7] hover:bg-[#733DD6] text-white dark:text-white"
          >
            <LogOutIcon className="w-4 h-4" />
            LogOut
          </Button>
        ) : (
          <Link href="/login">
            <Button className="bg-[#8750F7] hover:bg-[#733DD6] text-white dark:text-white">
              <LogInIcon className="w-4 h-4" />
              Login
            </Button>
          </Link>
        )}
      </div>

      {/* Hamburger Menu for mobile */}
      {/* Hamburger Menu for small devices */}
      <div className="lg:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Menu />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Explore</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Link href="/" className="flex gap-2">
                  <Home className="w-4 h-4  " />
                  Home
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/about" className="flex gap-2">
                  <Info className="w-4 h-4" />
                  About
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/projects" className="flex gap-2">
                  <Briefcase className="w-4 h-4" />
                  Projects
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/blogs" className="flex gap-2">
                  <PenTool className="w-4 h-4" />
                  Blogs
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/contact" className="flex gap-2">
                  <Contact className="w-4 h-4" />
                  Contact
                </Link>
              </DropdownMenuItem>
              {session?.user && (
                <DropdownMenuItem>
                  <Link href="/dashboard" className="flex gap-2">
                    <LayoutDashboard className="w-4 h-4" />
                    Dashboard
                  </Link>
                </DropdownMenuItem>
              )}
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            {session?.user ? (
              <DropdownMenuItem onClick={() => signOut()}>
                <LogOutIcon className="w-4 h-4" />
                LogOut
              </DropdownMenuItem>
            ) : (
              <DropdownMenuItem>
                <Link href="/login" className="flex gap-2">
                  <LogInIcon className="w-4 h-4" />
                  Login
                </Link>
              </DropdownMenuItem>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}
