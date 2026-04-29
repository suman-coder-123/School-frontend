export default function Infrastructure() {
  const data = [
    {
      title: "Smart Classrooms",
      desc: "Digitally enabled classrooms for interactive learning.",
      icon: "📺",
    },
    {
      title: "Science Labs",
      desc: "Fully equipped labs for practical experiments.",
      icon: "🧪",
    },
    {
      title: "Library",
      desc: "Wide collection of academic and reference books.",
      icon: "📚",
    },
    {
      title: "Sports Facilities",
      desc: "Indoor & outdoor sports for physical development.",
      icon: "⚽",
    },
    {
      title: "Transport",
      desc: "Safe and reliable school transport system.",
      icon: "🚌",
    },
    {
      title: "Computer Lab",
      desc: "Modern computers with latest technology.",
      icon: "💻",
    },
  ];

  return (
    <div className="px-4 md:px-10 py-16" id="infra">

      {/* TITLE */}
      <div className="text-center mb-10">
        <p className="text-blue-600 font-semibold">
          INFRASTRUCTURE
        </p>
        <h1 className="text-2xl md:text-3xl font-bold">
          World-Class Facilities
        </h1>
        <p className="text-gray-500 mt-2 text-sm md:text-base">
          Designed to provide the best learning environment
        </p>
      </div>

      {/* CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {data.map((item, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition group"
          >
            {/* ICON */}
            <div className="text-4xl mb-4 group-hover:scale-110 transition">
              {item.icon}
            </div>

            {/* TITLE */}
            <h2 className="text-lg font-semibold mb-2">
              {item.title}
            </h2>

            {/* DESC */}
            <p className="text-gray-500 text-sm">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
}