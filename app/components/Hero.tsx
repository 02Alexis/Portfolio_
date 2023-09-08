import Image from "next/image";
import { HiOutlineExternalLink } from "react-icons/hi";

import Github from "./Svgs/Github";
import Twitter from "./Svgs/Twitter";
import Linkedin from "./Svgs/Linkedin";

function Hero() {
  return (
    <div
      className="
        mt-6 
        gap-6 
        flex 
        flex-col 
        md:flex-row 
        items-start 
        justify-start 
        w-full m-auto
      "
    >
      <Image
        className="
          w-[200px]
          object-contain 
          rounded-full 
          drop-shadow-lg 
          m-auto
        "
        src="/images/perfil.jpeg"
        height={200}
        width={200}
        alt="Biography"
        quality={100}
      />
      <div
        className="
          flex 
          flex-1 
          flex-col 
          gap-3
        "
      >
        <div
          className="
            mb-3 
            font-bold 
            text-2xl 
            md:text-4xl 
            flex 
            flex-col 
            gap-4
          "
        >
          <h2 className="dark:text-light">Soy Alexis Tamayo</h2>
          <h2 className="text-lightemerald dark:text-darkemerald">
            Desarrollador Front-End
          </h2>
          <p
            className="
              font-medium 
              text-sm 
              md:text-base 
              dark:text-light
            "
          >
            Desarrollando soluciones web para mejorar la experiencia del
            usuario. Únete a mi viaje hacia la innovación tecnológica
          </p>
        </div>

        <div
          className="
          flex 
          gap-3 
          md:gap-4 
          items-center 
          justify-start
        "
        >
          <a
            href="https://drive.google.com/file/d/1OqAl3lqqUhzEafoaHAU_Vv-uqI-NyNoI/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="linkbutton"
          >
            <p
              className="
              text-sm 
              md:text-base 
              font-semibold
            "
            >
              Resume CV
            </p>
            <HiOutlineExternalLink className="text-base md:text-xl" />
          </a>
          <a
            href="https://github.com/02Alexis"
            target="_blank"
            rel="noopener noreferrer"
            className="herosvg group/hero"
          >
            <Github />
          </a>
          <a
            href="https://www.linkedin.com/in/alexis-tamayo-quintero/"
            target="_blank"
            rel="noopener noreferrer"
            className="herosvg group/hero"
          >
            <Linkedin />
          </a>
          <a
            href="https://twitter.com/matq_01"
            target="_blank"
            rel="noopener noreferrer"
            className="herosvg group/hero"
          >
            <Twitter />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
