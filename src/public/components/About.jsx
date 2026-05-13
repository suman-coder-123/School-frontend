import { useState } from "react";

export default function About() {

  const [showMore, setShowMore] =
    useState(false);

  return (

    <section
      id="about"
      className="py-14 px-5 md:px-10"
    >

      <div className="grid lg:grid-cols-2 gap-10 items-center">

        {/* LEFT CARD */}
        <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#07152F] via-[#0F2A5F] to-[#133B7A] p-7 md:p-8 text-white shadow-2xl">

          {/* GLOW */}
          <div className="absolute top-0 right-0 w-44 h-44 bg-cyan-400/10 blur-3xl rounded-full"></div>

          {/* TAG */}
          <p className="inline-block bg-white/10 border border-white/10 px-4 py-1.5 rounded-full text-xs text-cyan-200 mb-5">

            Since 1989

          </p>

          {/* TITLE */}
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">

            Excellence In
            <br />
            Modern Education

          </h2>

          {/* DESC */}
          <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">

            Building confident future leaders through
            academic excellence, innovation, and values.

          </p>

          {/* STATS */}
          <div className="grid grid-cols-2 gap-4">

            {[
              ["35+", "Years"],
              ["3500+", "Students"],
              ["120+", "Faculty"],
              ["98%", "Success"],
            ].map(([num, label], i) => (

              <div
                key={i}
                className="bg-white/10 border border-white/10 rounded-2xl p-4 backdrop-blur-md"
              >

                <h3 className="text-2xl font-bold text-cyan-300">
                  {num}
                </h3>

                <p className="text-sm text-gray-300">
                  {label}
                </p>

              </div>
            ))}

          </div>

        </div>

        {/* RIGHT CONTENT */}
        <div>

          {/* TOP */}
          <p className="text-blue-600 font-semibold uppercase tracking-wider text-sm mb-3">

            About Us

          </p>

          <h1 className="text-3xl md:text-4xl font-bold text-[#07152F] leading-tight mb-5">

            Shaping Students
            <br />
            For Tomorrow’s World

          </h1>

          <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-6">

            Our institution combines academic excellence,
            modern learning methods, and holistic development
            to prepare students for a successful future.

          </p>

          {/* FEATURES */}
          <div className="space-y-4">

            {[
              {
                icon: "🎯",
                title: "Mission",
                desc: "Empowering students with confidence.",
              },
              {
                icon: "🌍",
                title: "Vision",
                desc: "Creating globally capable leaders.",
              },
              {
                icon: "🚀",
                title: "Innovation",
                desc: "Smart classrooms & digital learning.",
              },
            ].map((item, i) => (

              <div
                key={i}
                className="flex gap-4 items-start bg-white border border-gray-100 rounded-2xl p-4 shadow-md hover:shadow-xl transition"
              >

                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white text-xl shadow-lg">

                  {item.icon}

                </div>

                <div>

                  <h3 className="font-semibold text-[#07152F]">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {item.desc}
                  </p>

                </div>

              </div>
            ))}

          </div>

          {/* EXTRA */}
          {showMore && (

            <div className="mt-5 bg-blue-50 border border-blue-100 rounded-2xl p-4 text-sm text-gray-600 leading-relaxed">

              Our campus encourages innovation,
              leadership, creativity, sports,
              and personality development through
              modern educational practices.

            </div>
          )}

          {/* BUTTON */}
          <button
            onClick={() =>
              setShowMore(!showMore)
            }
            className="mt-6 bg-gradient-to-r from-blue-500 to-cyan-400 hover:scale-105 transition-all duration-300 text-white px-6 py-3 rounded-2xl font-semibold shadow-lg"
          >

            {showMore
              ? "Show Less"
              : "Learn More"}

          </button>

        </div>

      </div>

    </section>
  );
}