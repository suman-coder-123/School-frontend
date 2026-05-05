import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#0F2A5F] text-white px-5 py-10 md:p-10 rounded-2xl relative overflow-hidden">
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* LEFT CONTENT */}
        <div className="text-center md:text-left">
          
          <p className="text-xs md:text-sm bg-blue-500 inline-block px-3 py-1 rounded-full mb-4">
            Excellence in Education
          </p>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-4">
            Shaping <span className="text-yellow-400">Future Leaders</span>
            <br className="hidden sm:block" />
            with Excellence
          </h1>

          <p className="text-gray-300 text-sm md:text-base mb-6">
            Join our school and build a strong foundation for success.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
            
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-green-600 w-full sm:w-auto px-6 py-3 rounded-lg"
            >
              Apply for Admission
            </button>

            <button className="border border-white w-full sm:w-auto px-5 py-3 rounded-lg">
              Virtual Tour
            </button>

          </div>

          {/* Stats */}
          <div className="flex justify-between sm:justify-start gap-6 mt-8 text-center md:text-left">
            
            <div>
              <h2 className="text-lg md:text-xl font-bold">98%</h2>
              <p className="text-xs md:text-sm text-gray-400">Success Rate</p>
            </div>

            <div>
              <h2 className="text-lg md:text-xl font-bold">120+</h2>
              <p className="text-xs md:text-sm text-gray-400">Teachers</p>
            </div>

            <div>
              <h2 className="text-lg md:text-xl font-bold">3500+</h2>
              <p className="text-xs md:text-sm text-gray-400">Students</p>
            </div>

          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="bg-[#2E4A7D] p-5 md:p-6 rounded-2xl shadow-xl text-white space-y-4 w-full">
          
          <h2 className="text-base md:text-lg font-semibold text-center md:text-left">
            Quick Access
          </h2>

          {/* Cards */}
          {[
            { label: "💳 Fee Payment", path: "/fee" },
            { label: "📊 Exam Results", path: "/results" },
            { label: "📅 TimeTable", path: "/timetable" },
            { label: "📊 Dashboard", path: "/dashboard" },
          ].map((item, i) => (
            <div
              key={i}
              onClick={() => navigate(item.path)}
              className="flex justify-between items-center p-4 bg-white/10 rounded-lg cursor-pointer hover:bg-white/20 transition"
            >
              <span className="text-sm md:text-base">{item.label}</span>
              <span>→</span>
            </div>
          ))}

          {/* WhatsApp */}
          <a
            href="https://wa.me/91XXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center bg-green-500 py-3 rounded-lg mt-4 text-sm md:text-base"
          >
            💬 Chat on WhatsApp
          </a>

        </div>

      </div>
    </div>
  );
}