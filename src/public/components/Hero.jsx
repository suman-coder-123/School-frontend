import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
<div className="relative overflow-hidden bg-gradient-to-br from-[#07152F] via-[#0F2A5F] to-[#133B7A] text-white rounded-[32px] mt-3 px-6 py-10 md:px-12 md:py-14 shadow-2xl">

  {/* BACKGROUND GLOW */}
  <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"></div>
  <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-400/10 blur-3xl rounded-full"></div>

  <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

    {/* LEFT CONTENT */}
    <div className="text-center lg:text-left">

      {/* TAG */}
      <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full mb-6">

        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>

        <p className="text-sm text-blue-100">
          Admissions Open For 2026
        </p>

      </div>

      {/* HEADING */}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-6">

        Building
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">
          {" "}Future Leaders
        </span>

        <br />

        Through Modern Education

      </h1>

      {/* DESCRIPTION */}
      <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">

        Experience world-class education, innovative learning,
        expert faculty, and a vibrant campus environment
        designed for academic excellence and future success.

      </p>

      {/* BUTTONS */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

        <button
          onClick={() =>
            document
              .getElementById("contact")
              ?.scrollIntoView({
                behavior: "smooth",
              })
          }
          className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:scale-105 transition-all duration-300 px-7 py-4 rounded-xl font-semibold shadow-xl"
        >
          Apply For Admission
        </button>

        <button className="border border-white/20 backdrop-blur-md bg-white/5 hover:bg-white/10 transition px-7 py-4 rounded-xl font-semibold">
          Explore Campus
        </button>

      </div>

      {/* STATS */}
      <div className="grid grid-cols-3 gap-4 mt-12">

        {[
          {
            number: "98%",
            label: "Success Rate",
          },
          {
            number: "120+",
            label: "Expert Teachers",
          },
          {
            number: "3500+",
            label: "Students",
          },
        ].map((item, i) => (

          <div
            key={i}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 text-center"
          >

            <h2 className="text-2xl md:text-3xl font-bold text-cyan-300">
              {item.number}
            </h2>

            <p className="text-sm text-gray-300 mt-1">
              {item.label}
            </p>

          </div>
        ))}

      </div>

    </div>

    {/* RIGHT PREMIUM PANEL */}
    <div className="relative">

      {/* GLOW */}
      <div className="absolute inset-0 bg-cyan-400/10 blur-3xl rounded-full"></div>

      <div className="relative bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[28px] p-6 md:p-8 shadow-2xl">

        {/* TOP */}
        <div className="mb-8">

          <p className="text-cyan-300 text-sm mb-2">
            Why Choose Us
          </p>

          <h2 className="text-3xl font-bold leading-snug">
            Excellence Beyond
            <br />
            Traditional Learning
          </h2>

        </div>

        {/* CARDS */}
        <div className="space-y-4">

          {[
            {
              icon: "🏆",
              title: "Academic Excellence",
              desc: "Consistently top-ranked student performance",
            },
            {
              icon: "🎓",
              title: "Smart Classrooms",
              desc: "Advanced digital learning infrastructure",
            },
            {
              icon: "🌍",
              title: "Global Opportunities",
              desc: "Preparing students for international success",
            },
            {
              icon: "🚀",
              title: "Future-Focused Education",
              desc: "Innovation, creativity & leadership skills",
            },
          ].map((item, i) => (

            <div
              key={i}
              className="group bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-5 transition duration-300 cursor-pointer"
            >

              <div className="flex items-start gap-4">

                <div className="text-3xl">
                  {item.icon}
                </div>

                <div>

                  <h3 className="font-semibold text-lg">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-300 mt-1">
                    {item.desc}
                  </p>

                </div>

              </div>

            </div>
          ))}

        </div>

        {/* CTA */}
        <a
          href="https://wa.me/91XXXXXXXXXX"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center mt-8 bg-gradient-to-r from-green-500 to-emerald-400 hover:scale-[1.02] transition py-4 rounded-2xl font-semibold shadow-xl"
        >
          💬 Connect With Admission Team
        </a>

      </div>

    </div>

  </div>

</div>  );
}