import { useState } from "react";

export default function Curriculum() {
  const [active, setActive] = useState("primary");

  const data = {
    primary: [
      { name: "English", icon: "🔤" },
      { name: "Mathematics", icon: "🔢" },
      { name: "EVS", icon: "🌍" },
      { name: "Hindi", icon: "📖" },
      { name: "Art & Craft", icon: "🎨" },
      { name: "Music", icon: "🎵" },
      { name: "Physical Ed", icon: "🏃" },
      { name: "Computer", icon: "💻" },
    ],

    middle: [
      { name: "Maths", icon: "📐" },
      { name: "English", icon: "🔤" },
      { name: "Hindi", icon: "📖" },
      { name: "Science", icon: "🔬" },
      { name: "Social Studies", icon: "🌐" },
      { name: "IT", icon: "💻" },
      { name: "Art", icon: "🎨" },
      { name: "Physical Ed", icon: "🏃" },
      { name: "Sanskrit", icon: "🌿" },
    ],

    secondary: [
      { name: "Maths", icon: "📐" },
      { name: "Science", icon: "🔬" },
      { name: "Hindi", icon: "📖" },
      { name: "English", icon: "🔤" },
      { name: "Social Science", icon: "🌐" },
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
      { name: "Hindi", icon: "📖" },
      { name: "English", icon: "🔤" },
      { name: "Informatics", icon: "💻" },
    ],
  };

  const tabs = [
    { key: "primary", label: "Primary (I–V)" },
    { key: "middle", label: "Middle (VI–VIII)" },
    { key: "secondary", label: "Secondary (IX–X)" },
    { key: "senior", label: "Senior (XI–XII)" },
  ];

  return (
    <div id="curriculum"
    className="px-4 md:px-10 py-16 ">

      {/* TITLE */}
      <div className="mb-10">
        <h1 className="text-2xl md:text-4xl font-bold text-[#0F2A5F] mb-3">
          Curriculum & Subjects Offered
        </h1>
        <p className="text-gray-600 max-w-2xl">
          CBSE curriculum from Class I to XII. Stream selection in Class XI —
          Science, Commerce, and Humanities.
        </p>
      </div>

      {/* TABS */}
      <div className="flex flex-wrap gap-3 mb-10">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActive(tab.key)}
            className={`px-5 py-2 rounded-full text-sm transition ${
              active === tab.key
                ? "bg-[#0F2A5F] text-white"
                : "bg-gray-100 text-gray-600 border"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* SUBJECT CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {data[active].map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-4 bg-white border p-4 rounded-2xl hover:shadow-lg transition"
          >
            <div className="text-2xl">{item.icon}</div>
            <p className="font-medium text-gray-700">{item.name}</p>
          </div>
        ))}
      </div>

    </div>
  );
}