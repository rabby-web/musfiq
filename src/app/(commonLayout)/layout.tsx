import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import { Fragment, ReactNode } from "react";

type CommonLayoutProps = {
  children: ReactNode;
};

export default async function CommonLayout({ children }: CommonLayoutProps) {
  const session = await getServerSession(authOptions);

  return (
    <Fragment>
      <Navbar session={session} />
      <div className="min-h-screen">{children}</div>
      <Footer />
    </Fragment>
  );
}
