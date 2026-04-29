export default function Testimonials() {
  const reviews = [
    {
      name: "Rohit Sharma",
      role: "Parent",
      message:
        "This school has transformed my child's future. Excellent teachers and environment!",
    },
    {
      name: "Anjali Verma",
      role: "Student",
      message:
        "Amazing learning experience with supportive teachers and modern facilities.",
    },
    {
      name: "Mr. Singh",
      role: "Parent",
      message:
        "Best decision for my child. Strong academics and discipline.",
    },
  ];

  return (
    <div className="px-4 md:px-10 py-16">

      {/* TITLE */}
      <div className="text-center mb-10">
        <p className="text-blue-600 font-semibold">TESTIMONIALS</p>
        <h1 className="text-2xl md:text-3xl font-bold">
          What People Say About Us
        </h1>
        <p className="text-gray-500 mt-2 text-sm md:text-base">
          Hear from our students and parents
        </p>
      </div>

      {/* CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((r, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition"
          >
            {/* STARS */}
            <div className="text-yellow-400 mb-3">
              ⭐⭐⭐⭐⭐
            </div>

            {/* MESSAGE */}
            <p className="text-gray-600 text-sm mb-4">
              "{r.message}"
            </p>

            {/* USER */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 text-white flex items-center justify-center rounded-full">
                {r.name.charAt(0)}
              </div>

              <div>
                <h3 className="font-semibold">{r.name}</h3>
                <p className="text-sm text-gray-500">{r.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}