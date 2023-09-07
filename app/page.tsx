import Hero from "./components/Hero";

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
    </main>
  );
}

export default HomePage;
