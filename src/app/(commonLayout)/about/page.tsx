import About from "@/components/aboutComponent/About";
import { Fragment } from "react";

export default function AboutPage() {
  return (
    <Fragment>
      <div className="lg:max-w-screen-2xl p-4 mx-auto ">
        <About />
      </div>
    </Fragment>
  );
}
