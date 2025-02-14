import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/providers";
import { Poppins } from "next/font/google";
import { Toaster } from "sonner";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const poppinsClassName: string = poppins.className;

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "I'am a full-stack web developer with expertise in building responsive and scalable web applications. Explore my skills in React, Next.js, Node.js, Express, MongoDB, PostgreSQL, and more.",
  generator: "Next.js",
  applicationName: "Portfolio",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Next.js",
    "React",
    "JavaScript",
    "Full-stack Developer",
    "Web Development",
    "MongoDB",
    "PostgreSQL",
    "Mern Stack",
    "Frontend Developer",
    "Backend Developer",
    "Node.js Developer",
  ],
  authors: [
    { name: "Moshfiqur Rahman", url: "https://www.facebook.com/emambokhari99" },
  ],
  creator: "Moshfiqur Rahman",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppinsClassName} antialiased  bg-white dark:bg-[#050709]`}
      >
        <Providers>
          {children}{" "}
          <Toaster position="top-right" richColors={true} expand={true} />
        </Providers>
      </body>
    </html>
  );
}
