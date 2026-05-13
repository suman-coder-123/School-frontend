import { useState } from "react";

export default function Curriculum() {

  const [active, setActive] =
    useState("primary");

  const data = {

    primary: [
      { name: "English", icon: "📘" },
      { name: "Mathematics", icon: "📐" },
      { name: "EVS", icon: "🌍" },
      { name: "Hindi", icon: "📝" },
      { name: "Art & Craft", icon: "🎨" },
      { name: "Music", icon: "🎵" },
      { name: "Physical Ed", icon: "🏃" },
      { name: "Computer", icon: "💻" },
    ],

    middle: [
      { name: "Maths", icon: "📐" },
      { name: "English", icon: "📘" },
      { name: "Hindi", icon: "📝" },
      { name: "Science", icon: "🔬" },
      { name: "Social Studies", icon: "🌐" },
      { name: "IT", icon: "💻" },
      { name: "Art", icon: "🎨" },
      { name: "Physical Ed", icon: "🏃" },
      { name: "Sanskrit", icon: "🌿" },
    ],

    secondary: [
      { name: "Maths", icon: "📐" },
      { name: "Science", icon: "⚛️" },
      { name: "Hindi", icon: "📝" },
      { name: "English", icon: "📘" },
      { name: "Social Science", icon: "🌎" },
      { name: "IT", icon: "💻" },
      { name: "Sanskrit/French", icon: "🌿" },
    ],

    senior: [
      { name: "Physics", icon: "⚛️" },
      { name: "Chemistry", icon: "🧪" },
      { name: "Biology", icon: "🧬" },
      { name: "Maths", icon: "📐" },
      { name: "Accounts", icon: "💼" },
      { name: "Economics", icon: "📊" },
      { name: "Business Studies", icon: "📈" },
      { name: "History", icon: "🏛️" },
      { name: "Political Sci.", icon: "📋" },
      { name: "Hindi", icon: "📝" },
      { name: "English", icon: "📘" },
      { name: "Informatics", icon: "💻" },
    ],
  };

  const tabs = [
    {
      key: "primary",
      label: "Primary",
      class: "I - V",
    },
    {
      key: "middle",
      label: "Middle",
      class: "VI - VIII",
    },
    {
      key: "secondary",
      label: "Secondary",
      class: "IX - X",
    },
    {
      key: "senior",
      label: "Senior Secondary",
      class: "XI - XII",
    },
  ];

  return (

    <section
      id="curriculum"
      className="py-16 px-5 md:px-10 bg-[#F8FAFC]"
    >

      {/* TOP SECTION */}
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">

        {/* LEFT */}
        <div className="max-w-3xl">

          <p className="text-blue-600 font-semibold uppercase tracking-wider text-sm mb-3">

            Curriculum

          </p>

          <h1 className="text-3xl md:text-5xl font-bold text-[#07152F] leading-tight mb-5">

            Curriculum &
            Subjects Offered

          </h1>

          <p className="text-gray-600 leading-relaxed text-sm md:text-base">

            We follow a modern CBSE curriculum designed
            to balance academics, creativity, technology,
            practical learning, and overall student
            development from Primary to Senior Secondary.

          </p>

        </div>

        {/* RIGHT INFO */}
        <div className="grid grid-cols-2 gap-4">

          <div className="bg-white border border-gray-100 rounded-2xl px-5 py-4 shadow-sm">

            <h3 className="text-2xl font-bold text-[#07152F]">
              4
            </h3>

            <p className="text-sm text-gray-500">
              Learning Levels
            </p>

          </div>

          <div className="bg-white border border-gray-100 rounded-2xl px-5 py-4 shadow-sm">

            <h3 className="text-2xl font-bold text-[#07152F]">
              30+
            </h3>

            <p className="text-sm text-gray-500">
              Subjects Offered
            </p>

          </div>

        </div>

      </div>

      {/* TABS */}
      <div className="flex flex-wrap gap-3 mb-10">

        {tabs.map((tab) => (

          <button
            key={tab.key}
            onClick={() =>
              setActive(tab.key)
            }
            className={`px-5 py-3 rounded-2xl transition-all duration-300 ${
              active === tab.key
                ? "bg-[#07152F] text-white shadow-lg"
                : "bg-white border border-gray-200 text-gray-600 hover:border-blue-400"
            }`}
          >

            <h3 className="font-semibold">

              {tab.label}

            </h3>

            <p
              className={`text-xs mt-1 ${
                active === tab.key
                  ? "text-gray-300"
                  : "text-gray-500"
              }`}
            >

              Classes {tab.class}

            </p>

          </button>
        ))}

      </div>

      {/* SUBJECTS */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

        {data[active].map((subject, i) => (

          <div
            key={i}
            className="bg-white border border-gray-100 rounded-2xl px-4 py-4 hover:shadow-md transition-all duration-300"
          >

            <div className="flex items-center gap-3">

              {/* ICON */}
              <span className="text-2xl">

                {subject.icon}

              </span>

              {/* NAME */}
              <div>

                <h3 className="font-medium text-[#07152F] text-sm md:text-base">

                  {subject.name}

                </h3>

                <p className="text-xs text-gray-500 mt-1">

                  Interactive learning

                </p>

              </div>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}