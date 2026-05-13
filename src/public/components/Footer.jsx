export default function Footer() {

  const scrollToSection = (id) => {

    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: "smooth",
      });

  };

  return (

    <footer className="bg-[#07152F] text-white pt-16 pb-8 px-5 md:px-10 overflow-hidden">

      {/* TOP */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-white/10 pb-12">

        {/* BRAND */}
        <div>

          {/* LOGO */}
          <div className="flex items-center gap-3 mb-5">

            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-xl shadow-lg">

              🎓

            </div>

            <div>

              <h1 className="text-xl font-bold">

                Sharda Vidhya Niketan

              </h1>

              <p className="text-sm text-gray-400">

                Excellence In Education

              </p>

            </div>

          </div>

          {/* TEXT */}
          <p className="text-gray-400 leading-relaxed text-sm">

            Providing modern education, strong values,
            and future-focused learning experiences
            to help students grow into confident leaders.

          </p>

        </div>

        {/* QUICK LINKS */}
        <div>

          <h2 className="text-lg font-semibold mb-5">

            Quick Links

          </h2>

          <div className="space-y-3 text-gray-400 text-sm">

            {[
              ["Home", "home"],
              ["About", "about"],
              ["Academics", "curriculum"],
              ["Facilities", "infra"],
              ["Gallery", "gallery"],
              ["Contact", "contact"],
            ].map(([label, id], i) => (

              <p
                key={i}
                onClick={() =>
                  scrollToSection(id)
                }
                className="cursor-pointer hover:text-white transition"
              >

                {label}

              </p>
            ))}

          </div>

        </div>

        {/* CONTACT */}
        <div>

          <h2 className="text-lg font-semibold mb-5">

            Contact Us

          </h2>

          <div className="space-y-4 text-sm text-gray-400">

            <p className="flex items-center gap-3">

              📞 +91 9876543210

            </p>

            <p className="flex items-center gap-3">

              ✉️ admissions@svnschool.com

            </p>

            <p className="flex items-start gap-3">

              📍 SVN School, Bhatkhedi,
              Madhya Pradesh, India

            </p>

          </div>

        </div>

        {/* SOCIAL + CTA */}
        <div>

          <h2 className="text-lg font-semibold mb-5">

            Stay Connected

          </h2>

          {/* SOCIAL */}
          <div className="flex gap-4 mb-6">

            {[
              "🌐",
              "📘",
              "📸",
              "▶️",
            ].map((icon, i) => (

              <div
                key={i}
                className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-xl hover:bg-white/10 transition cursor-pointer"
              >

                {icon}

              </div>
            ))}

          </div>

          {/* CTA */}
          <button
            onClick={() =>
              scrollToSection("contact")
            }
            className="bg-gradient-to-r from-blue-500 to-cyan-400 hover:scale-105 transition-all duration-300 text-white px-6 py-3 rounded-2xl font-semibold shadow-xl"
          >

            Apply For Admission

          </button>

        </div>

      </div>

      {/* BOTTOM */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 text-sm text-gray-500">

        <p>

          © 2026 Sharda Vidhya Niketan.
          All rights reserved.

        </p>

        <div className="flex gap-6">

          <p className="hover:text-white cursor-pointer transition">

            Privacy Policy

          </p>

          <p className="hover:text-white cursor-pointer transition">

            Terms & Conditions

          </p>

        </div>

      </div>

    </footer>
  );
}