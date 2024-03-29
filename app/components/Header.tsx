"use client";

import { useRef, useState } from "react";
import Link from "next/link";

import { AnimatePresence, motion } from "framer-motion";
import { FaBars } from "react-icons/fa";
import { CgCodeSlash } from "react-icons/cg";
import Navbar from "./Navbar";
import ModalNavbar from "./ModalNavbar";

const Header: React.FC = () => {
  const [show, setshow] = useState(false);
  const menu = useRef<HTMLDivElement>(null);

  const handleMouseEnter = (evt: React.MouseEvent<HTMLLIElement>) => {
    const target = evt.target as Element;
    const { left, top, width, height } = target.getBoundingClientRect();

    if (menu.current) {
      menu.current.style.setProperty("--left", `${left}px`);
      menu.current.style.setProperty("--top", `${top}px`);
      menu.current.style.setProperty("--width", `${width}px`);
      menu.current.style.setProperty("--height", `${height}px`);
      menu.current.style.opacity = "1";
      menu.current.style.visibility = "visible";
    }
  };

  const handleMouseLeave = () => {
    if (menu.current) {
      menu.current.style.opacity = "0";
      menu.current.style.visibility = "hidden";
    }
  };

  return (
    <header
      className="
        py-4
        w-[90vw]
        xl:max-w-7xl
        m-auto
      "
    >
      <div
        className="
            relative
            flex
            items-center
            justify-between
            m-auto
        "
      >
        <Link
          href="/"
          className="
              flex
              items-center
            "
        >
          <motion.div whileHover={{ y: -2 }}>
            <CgCodeSlash
              className="
              text-lightemerald
              dark:text-darkemerald
                font-bold
                text-lg
                sm:text-2xl
                "
            />
          </motion.div>
          <h3
            className="
              px-2 
              text-lightemerald
              dark:text-darkemerald
              font-bold 
              text-lg 
              sm:text-2xl
            "
          >
            matq
          </h3>
        </Link>
        <nav className="flex items-center ">
          <button
            className="
              sm:hidden 
              flex 
              flex-col 
              justify-center 
              items-center 
              w-8 h-8
            "
            onClick={() => setshow(!show)}
          >
            <FaBars
              size={20}
              className="
              text-lightemerald
              dark:text-darkemerald
              "
            />
          </button>

          <AnimatePresence
            initial={false}
            mode="sync"
            onExitComplete={() => null}
          >
            {show && (
              <ModalNavbar onClose={() => setshow(false)}>
                <Navbar onClose={() => setshow(false)} />
              </ModalNavbar>
            )}
          </AnimatePresence>
          <div className="hidden sm:flex">
            <Navbar
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
            />
          </div>
        </nav>
      </div>

      <div
        ref={menu}
        className={`
          absolute
          bg-lightemerald/75 dark:bg-darkhover backdrop-blur-lg rounded 
          translate-x-[var(--left)] translate-y-[var(--top)]
          left-0 top-0
          w-[var(--width)] h-[var(--height)]
          transition-all duration-500
          ease-in-out opacity-0 -z-10
        `}
      />
    </header>
  );
};

export default Header;
