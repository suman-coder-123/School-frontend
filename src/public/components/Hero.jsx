import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();
  return (
    <div className="bg-[#0F2A5F] text-white p-10 rounded-2xl relative overflow-hidden">
      <div className="grid grid-cols-2 gap-10 items-center">
        {/* LEFT CONTENT */}
        <div>
          <p className="text-sm bg-blue-500 inline-block px-3 py-1 rounded-full mb-4">
            Excellence in Education
          </p>

          <h1 className="text-4xl font-bold leading-tight mb-4">
            Shaping <span className="text-yellow-400">Future Leaders</span>{" "}
            <br />
            with Excellence
          </h1>

          <p className="text-gray-300 mb-6">
            Join our school and build a strong foundation for success.
          </p>

          <div className="flex gap-4">
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-green-600 text-white px-6 py-3 rounded-lg"
            >
              Apply for Admission
            </button>

            <button className="border border-white px-5 py-2 rounded-lg">
              Virtual Tour
            </button>
          </div>

          {/* Stats */}
          <div className="flex gap-6 mt-8">
            <div>
              <h2 className="text-xl font-bold">98%</h2>
              <p className="text-sm text-gray-400">Success Rate</p>
            </div>

            <div>
              <h2 className="text-xl font-bold">120+</h2>
              <p className="text-sm text-gray-400">Teachers</p>
            </div>

            <div>
              <h2 className="text-xl font-bold">3500+</h2>
              <p className="text-sm text-gray-400">Students</p>
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
            <div className="bg-[#2E4A7D] p-6 rounded-2xl shadow-xl text-white space-y-4">

      <h2 className="text-lg font-semibold">Quick Access</h2>

      {/* Fee Payment */}
      <div
        onClick={() => navigate("/fee")}
        className="flex justify-between items-center p-4 bg-white/10 rounded-lg cursor-pointer hover:bg-white/20 transition"
      >
        <span>💳 Fee Payment</span>
        <span>→</span>
      </div>

      {/* Exam Results */}
      <div
        onClick={() => navigate("/results")}
        className="flex justify-between items-center p-4 bg-white/10 rounded-lg cursor-pointer hover:bg-white/20 transition"
      >
        <span>📊 Exam Results</span>
        <span>→</span>
      </div>

       <div
        onClick={() => navigate("/timetable")}
        className="flex justify-between items-center p-4 bg-white/10 rounded-lg cursor-pointer hover:bg-white/20 transition"
      >
        <span>📊 TimeTable </span>
        <span>→</span>
      </div>

      <div
        onClick={() => navigate("/dashboard")}
        className="flex justify-between items-center p-4 bg-white/10 rounded-lg cursor-pointer hover:bg-white/20 transition"
      >
        <span> Dashboard</span>
        <span>→</span>
      </div>

    
      <a
        href="https://wa.me/91XXXXXXXXXX"
        target="_blank"
        className="block text-center bg-green-500 py-3 rounded-lg mt-4"
      >
        💬 Chat on WhatsApp
      </a>

    </div>



      </div>
    </div>
  );
}
