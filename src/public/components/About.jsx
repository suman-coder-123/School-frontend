export default function About() {
  return (
    <div
      id="about"
      className="grid md:grid-cols-2 gap-10 items-center px-4 md:px-10 py-16"
    >
      {/* LEFT CARD */}
      <div className="bg-[#1E3A8A] rounded-2xl p-6 text-white relative">
        <h2 className="text-lg font-semibold mb-2">
          Established Excellence
        </h2>

        <p className="text-sm text-gray-200">
          Over 35+ years of shaping young minds.
        </p>

        <div className="mt-6 bg-white text-black rounded-xl p-4 inline-block">
          <h3 className="text-xl font-bold">35+</h3>
          <p className="text-sm">Years Experience</p>
        </div>
      </div>

      {/* RIGHT CONTENT */}
      <div>
        <p className="text-blue-600 font-semibold mb-2">
          ABOUT US
        </p>

        <h1 className="text-2xl md:text-3xl font-bold mb-4 leading-snug">
          A Legacy of Learning & Leadership
        </h1>

        <p className="text-gray-600 mb-6 text-sm md:text-base">
          Our institution has been committed to academic excellence,
          holistic development, and nurturing future leaders through
          innovative teaching and strong values.
        </p>

        {/* FEATURES */}
        <div className="space-y-4">

          <div className="flex gap-3 items-start">
            <div className="bg-blue-100 text-blue-600 p-2 rounded-full">
              🎯
            </div>
            <div>
              <h3 className="font-semibold">Our Mission</h3>
              <p className="text-sm text-gray-500">
                Empower students with knowledge and confidence.
              </p>
            </div>
          </div>

          <div className="flex gap-3 items-start">
            <div className="bg-green-100 text-green-600 p-2 rounded-full">
              🌟
            </div>
            <div>
              <h3 className="font-semibold">Our Vision</h3>
              <p className="text-sm text-gray-500">
                Build future leaders with strong ethics and innovation.
              </p>
            </div>
          </div>

        </div>

        {/* BUTTON */}
        <button className="mt-6 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
          Learn More
        </button>
      </div>
    </div>
  );
}