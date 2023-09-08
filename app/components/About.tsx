import Skills from "./Skills";

const About = () => {
  return (
    <div
      id="about"
      className="
        w-full 
        m-auto 
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        gap-4 
        justify-center 
        items-center 
        overflow-hidden
      "
    >
      <div
        className="
          mt-[90px] 
          h-full 
          flex 
          flex-col 
          gap-4 
          items-start 
          justify-start 
          font-medium 
          [&>p]:text-sm 
          md:[&>p]:text-base 
          dark:text-light
        "
      >
        <p>
          My nombre es
          <span className="font-bold text-lightemerald"> Alexis Tamayo. </span>
          Soy desarrollador Front-End.
        </p>
        <p>
          Disfruto de la música y los videojuegos, y me enorgullezco de mi
          capacidad para liderar y aprender rápidamente.
        </p>
        <p>
          Estoy emocionado de tener la oportunidad de contribuir con mis
          habilidades y pasión a su próximo proyecto. ¡Gracias por visitar mi
          portafolio!
        </p>
      </div>
      <Skills />
    </div>
  );
};

export default About;
