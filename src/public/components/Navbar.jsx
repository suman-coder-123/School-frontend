import { useState, useEffect } from "react";

export default function Navbar() {

  const [scrolled, setScrolled] =
    useState(false);

  const [menuOpen, setMenuOpen] =
    useState(false);

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );

  }, []);

  const scrollToSection = (id) => {

    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: "smooth",
      });

    setMenuOpen(false);
  };

  return (

    <div className="w-full relative z-50">

      {/* NAVBAR */}
      <div
        className={`transition-all duration-500 ${
          scrolled
            ? "fixed top-4 left-1/2 -translate-x-1/2 w-[95%] md:w-[92%] bg-white/90 backdrop-blur-2xl shadow-2xl border border-white/30"
            : "absolute top-4 left-1/2 -translate-x-1/2 w-[95%] md:w-[92%] bg-white/80 backdrop-blur-2xl shadow-xl border border-white/20"
        } rounded-2xl px-6 md:px-8 py-4`}
      >

        <div className="flex items-center justify-between">

          {/* LOGO */}
          <div className="flex items-center gap-3 cursor-pointer">

            {/* ICON */}
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white text-xl shadow-lg">

              🎓

            </div>

            {/* TEXT */}
            <div>

              <h1 className="text-lg md:text-xl font-bold text-[#07152F] leading-tight">

                Sharda Vidhya Niketan

              </h1>

              <p className="text-xs text-gray-500">

                Excellence In Education

              </p>

            </div>

          </div>

          {/* DESKTOP MENU */}
          <ul className="hidden lg:flex items-center gap-8 font-medium">

            {[
              ["Home", "home"],
              ["About", "about"],
              ["Academics", "curriculum"],
              ["Facilities", "infra"],
              ["Gallery", "gallery"],
              ["Contact", "contact"],
            ].map(([label, section], i) => (

              <li
                key={i}
                onClick={() =>
                  scrollToSection(section)
                }
                className="relative group cursor-pointer text-gray-700 hover:text-blue-600 transition-all duration-300"
              >

                {label}

                {/* UNDERLINE */}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>

              </li>
            ))}

          </ul>

          {/* RIGHT BUTTONS */}
          <div className="hidden lg:flex items-center gap-4">

            {/* DASHBOARD */}
            <button
              onClick={() =>
                window.location.href =
                  "/dashboard"
              }
              className="px-5 py-2.5 rounded-xl border border-gray-300 text-[#07152F] hover:bg-gray-100 transition-all duration-300 font-medium"
            >

              Dashboard

            </button>

            {/* APPLY */}
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  })
              }
              className="bg-gradient-to-r from-blue-500 to-cyan-400 hover:scale-105 transition-all duration-300 text-white px-6 py-3 rounded-xl font-semibold shadow-xl"
            >

              Apply Now

            </button>

          </div>

          {/* MOBILE BUTTON */}
          <button
            className="lg:hidden text-3xl text-[#07152F]"
            onClick={() =>
              setMenuOpen(!menuOpen)
            }
          >

            ☰

          </button>

        </div>

      </div>

      {/* MOBILE MENU */}
      {menuOpen && (

        <div className="fixed inset-0 bg-[#07152F]/95 backdrop-blur-2xl z-[999] flex flex-col items-center justify-center text-white">

          {/* CLOSE */}
          <button
            className="absolute top-6 right-6 text-4xl"
            onClick={() =>
              setMenuOpen(false)
            }
          >

            ✕

          </button>

          {/* LINKS */}
          <div className="flex flex-col gap-8 text-2xl font-semibold text-center">

            {[
              ["Home", "home"],
              ["About", "about"],
              ["Academics", "curriculum"],
              ["Facilities", "infra"],
              ["Gallery", "gallery"],
              ["Contact", "contact"],
            ].map(([label, section], i) => (

              <p
                key={i}
                onClick={() => {
                  scrollToSection(section);
                  setMenuOpen(false);
                }}
                className="hover:text-cyan-300 transition cursor-pointer"
              >

                {label}

              </p>
            ))}

          </div>

          {/* DASHBOARD */}
          <button
            onClick={() => {
              window.location.href =
                "/dashboard";

              setMenuOpen(false);
            }}
            className="mt-10 border border-white/20 px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-white/10 transition"
          >

            Dashboard

          </button>

          {/* APPLY */}
          <button
            onClick={() => {
              scrollToSection("contact");
              setMenuOpen(false);
            }}
            className="mt-5 bg-gradient-to-r from-blue-500 to-cyan-400 px-8 py-4 rounded-2xl text-lg font-semibold shadow-2xl"
          >

            Apply For Admission

          </button>

        </div>
      )}

    </div>
  );
}