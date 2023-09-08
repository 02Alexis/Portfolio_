import About from "./components/About";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

function HomePage() {
  return (
    <main
      className="
        w-[90vw]
        m-auto
        px-4
        py-3
        gap-16
        sm:px-6
        sm:py-6
        max-w-screen-xl
        flex
        flex-col        
      "
    >
      <Hero />
      <About />
      <Projects />
    </main>
  );
}

export default HomePage;
