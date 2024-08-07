import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { close, menu } from "../assets";
import { navLinks } from "../data";

const Navbar = () => {
  const [active, setActive] = useState("hero");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("div[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -50% 0px'
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const handleYPClick = (e) => {
    e.preventDefault(); // Prevent default link behavior
    setActive("hero");
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <nav
      className="w-full flex items-center bg-gradient-to-b from-black sm:bg-none p-4 sm:px-8 sm:py-5 fixed z-20 pointer-events-none"
    >
      <div className='w-full flex justify-between items-start mx-auto'>
        <a
          href="#"
          className='flex items-start'
          onClick={handleYPClick}
        >
          <p className='text-white text-[13px] lg:text-[18px] font-bold pointer-events-auto cursor-pointer flex'>
            YP
          </p>
        </a>

        <ul className='list-none hidden sm:flex flex-col gap-4'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`relative flex items-center ${
                active === nav.id ? "text-white" : "text-slate-500"
              } hover:text-white text-[12px] lg:text-[18px] font-bold pointer-events-auto cursor-pointer`}
              onClick={() => setActive(nav.id)}
            >
              <a
                href={`#${nav.id}`}
                className={`relative ${
                  active === nav.id ? "text-white" : "text-slate-500"
                }`}
              >
                {nav.title}
                {active === nav.id && (
                  <span className="absolute block w-full h-[2px] bg-quaternary bottom-[-2px] left-0" />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain pointer-events-auto cursor-pointer'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-30 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.id ? "text-quaternary" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.id);
                  }}
                >
                  <a
                    href={`#${nav.id}`}
                    className={`relative ${
                      active === nav.id ? "text-quaternary" : "text-secondary"
                    }`}
                  >
                    {nav.title}
                    {active === nav.id && (
                      <span className="absolute block w-full h-[2px] bg-quaternary bottom-[-2px] left-0" />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
