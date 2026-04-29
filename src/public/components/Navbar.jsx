import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
    setMenuOpen(false);
  };

  return (
    <div className="w-full">
      {/* TOP BAR */}
      <div className="bg-[#0F172A] text-white text-sm px-6 py-2 flex justify-between">
        <p>📞 +91 9876543210</p>
        <p>📍 SVN School Bhatkhedi</p>
      </div>

      {/* NAVBAR */}
      <div
        className={`flex justify-between items-center px-6 md:px-10 py-4 transition-all duration-300 ${
          scrolled
            ? "bg-white shadow fixed top-0 left-0 w-full z-50"
            : "bg-transparent absolute w-full z-50"
        }`}
      >
        {/* LOGO */}
        <h1 className="text-xl font-bold text-blue-600 cursor-pointer">
          🎓 Sharda Vidhya Niketan School
        </h1>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-6 font-medium items-center">
          <li
            onClick={() => scrollToSection("home")}
            className="cursor-pointer hover:text-blue-600"
          >
            Home
          </li>
          <li
            onClick={() => scrollToSection("about")}
            className="cursor-pointer hover:text-blue-600"
          >
            About
          </li>
          <li
            onClick={() => scrollToSection("curriculum")}
            className="hover:text-blue-600 cursor-pointer"
          >
            Subjects
          </li>
          <li
            onClick={() => scrollToSection("infra")}
            className="cursor-pointer hover:text-blue-600"
          >
            Facilities
          </li>

          <li
            onClick={() => scrollToSection("gallery")}
            className="cursor-pointer hover:text-blue-600"
          >
            Gallery
          </li>
          <li
            onClick={() => scrollToSection("contact")}
            className="cursor-pointer hover:text-blue-600"
          >
            Contact
          </li>
        </ul>

        

        {/* APPLY BUTTON */}
        <button className="hidden md:block bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
          Apply Now
        </button>

        {/* MOBILE MENU BUTTON */}
        <div
          className="md:hidden text-2xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-white z-50 flex flex-col items-center justify-center gap-6 text-lg font-medium">
          <p onClick={() => scrollToSection("home")}>Home</p>
          <p onClick={() => scrollToSection("about")}>About</p>
          <p onClick={() => scrollToSection("curriculum")}>Subject</p>
          <p onClick={() => scrollToSection("infra")}>Facilities</p>

          <p onClick={() => scrollToSection("gallery")}>Gallery</p>
          <p onClick={() => scrollToSection("contact")}>Contact</p>

          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg">
            Apply Now
          </button>

          <button
            className="absolute top-5 right-5 text-2xl"
            onClick={() => setMenuOpen(false)}
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
}
