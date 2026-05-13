import { useState } from "react";
import axios from "axios";

export default function AdmissionForm() {

  const [form, setForm] = useState({
    studentName: "",
    parentName: "",
    phone: "",
    email: "",
    class: "",
    message: "",
    contactMethod: "phone",
  });

  const [loading, setLoading] =
    useState(false);

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async () => {

    if (
      !form.studentName ||
      !form.phone
    ) {
      return alert(
        "Student name & phone required ❌"
      );
    }

    try {

      setLoading(true);

      await axios.post(
        "https://school-backend-2-ackw.onrender.com/api/enquiries",
        form
      );

      alert(
        "Enquiry submitted successfully ✅"
      );

      setForm({
        studentName: "",
        parentName: "",
        phone: "",
        email: "",
        class: "",
        message: "",
        contactMethod: "phone",
      });

    } catch (err) {

      console.log(
        err.response?.data ||
          err.message
      );

      alert("Something went wrong ❌");

    } finally {

      setLoading(false);

    }
  };

  return (

    <section
      id="contact"
      className="py-16 px-5 md:px-10 bg-[#F8FAFC]"
    >

      <div className="grid lg:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE */}
        <div>

          <p className="text-blue-600 font-semibold uppercase tracking-wider text-sm mb-3">

            Admissions Open

          </p>

          <h1 className="text-3xl md:text-5xl font-bold text-[#07152F] leading-tight mb-5">

            Start Your Child’s
            <br />
            Learning Journey

          </h1>

          <p className="text-gray-600 leading-relaxed mb-8 max-w-xl">

            Join a modern learning environment
            focused on academic excellence,
            innovation, leadership, and overall
            student development.

          </p>

          {/* FEATURES */}
          <div className="space-y-4">

            {[
              "Experienced & qualified faculty",
              "Smart classrooms & digital learning",
              "Sports, arts & personality development",
              "Safe and student-friendly campus",
            ].map((item, i) => (

              <div
                key={i}
                className="flex items-center gap-3"
              >

                <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-sm">

                  ✓

                </div>

                <p className="text-gray-700">

                  {item}

                </p>

              </div>
            ))}

          </div>

          {/* CONTACT BOX */}
          <div className="mt-10 bg-white border border-gray-100 rounded-3xl p-6 shadow-sm">

            <h3 className="font-semibold text-[#07152F] text-lg mb-4">

              Need Help?

            </h3>

            <div className="space-y-3 text-gray-600">

              <p>
                📞 +91 9876543210
              </p>

              <p>
                ✉️ admissions@svnschool.com
              </p>

              <p>
                📍 SVN School, Bhatkhedi
              </p>

            </div>

          </div>

        </div>

        {/* RIGHT FORM */}
        <div className="bg-white border border-gray-100 rounded-[32px] p-7 md:p-8 shadow-2xl">

          {/* TOP */}
          <div className="mb-8">

            <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-2">

              Admission Form

            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-[#07152F]">

              Enquiry Details

            </h2>

          </div>

          {/* FORM */}
          <div className="space-y-5">

            {/* STUDENT NAME */}
            <div>

              <label className="text-sm font-medium text-gray-700 block mb-2">

                Student Name *

              </label>

              <input
                type="text"
                name="studentName"
                value={form.studentName}
                onChange={handleChange}
                placeholder="Enter student name"
                className="w-full border border-gray-200 rounded-2xl px-4 py-3 outline-none focus:border-blue-500 transition"
              />

            </div>

            {/* PARENT NAME */}
            <div>

              <label className="text-sm font-medium text-gray-700 block mb-2">

                Parent Name

              </label>

              <input
                type="text"
                name="parentName"
                value={form.parentName}
                onChange={handleChange}
                placeholder="Enter parent name"
                className="w-full border border-gray-200 rounded-2xl px-4 py-3 outline-none focus:border-blue-500 transition"
              />

            </div>

            {/* PHONE + EMAIL */}
            <div className="grid md:grid-cols-2 gap-4">

              <div>

                <label className="text-sm font-medium text-gray-700 block mb-2">

                  Phone Number *

                </label>

                <input
                  type="text"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                  className="w-full border border-gray-200 rounded-2xl px-4 py-3 outline-none focus:border-blue-500 transition"
                />

              </div>

              <div>

                <label className="text-sm font-medium text-gray-700 block mb-2">

                  Email Address

                </label>

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter email"
                  className="w-full border border-gray-200 rounded-2xl px-4 py-3 outline-none focus:border-blue-500 transition"
                />

              </div>

            </div>

            {/* CLASS */}
            <div>

              <label className="text-sm font-medium text-gray-700 block mb-2">

                Select Class

              </label>

              <select
                name="class"
                value={form.class}
                onChange={handleChange}
                className="w-full border border-gray-200 rounded-2xl px-4 py-3 outline-none focus:border-blue-500 transition bg-white"
              >

                <option value="">
                  Select Class
                </option>

                <option>
                  Primary (I–V)
                </option>

                <option>
                  Middle (VI–VIII)
                </option>

                <option>
                  Secondary (IX–X)
                </option>

                <option>
                  Senior (XI–XII)
                </option>

              </select>

            </div>

            {/* MESSAGE */}
            <div>

              <label className="text-sm font-medium text-gray-700 block mb-2">

                Message

              </label>

              <textarea
                rows="4"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Write your message..."
                className="w-full border border-gray-200 rounded-2xl px-4 py-3 outline-none focus:border-blue-500 transition resize-none"
              />

            </div>

            {/* BUTTON */}
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-500 to-cyan-400 hover:scale-[1.01] transition-all duration-300 text-white py-4 rounded-2xl font-semibold shadow-lg"
            >

              {loading
                ? "Submitting..."
                : "Submit Enquiry"}

            </button>

          </div>

        </div>

      </div>

    </section>
  );
}