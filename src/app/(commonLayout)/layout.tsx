import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { getServerSession } from "next-auth";
import { Fragment, ReactNode } from "react";

type CommonLayoutProps = {
  children: ReactNode;
};

export default async function CommonLayout({ children }: CommonLayoutProps) {
  const session = await getServerSession();

  return (
    <Fragment>
      <Navbar session={session} />
      <div className="min-h-screen">{children}</div>
      <Footer />
    </Fragment>
  );
}
