import Image from "next/image";
import Header from "./header";
import About from "./about";
import Experience from "./experience";
import Projects from "./projects";
import Footer from "./footer";

export default function Home() {
  return (
    <div className="text-slate-400 container min-h-screen flex lg:flex-row lg:justify-between space-x-5">
      <Header />
      <main className="pt-24 lg:w-1/2 lg:py-24">
        <About />
        <Experience />
        <Projects />
        <Footer />
      </main>
    </div>
  );
}
