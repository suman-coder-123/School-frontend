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

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!form.studentName || !form.phone) {
      return alert("Student name & phone required ❌");
    }

    try {
      setLoading(true);

      console.log("Sending:", form); // 🔍 debug

      await axios.post(
        "http://localhost:5000/api/enquiries",
        form
      );

      alert("Enquiry submitted ✅");

      // ✅ CORRECT RESET
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
      console.log("ERROR:", err.response?.data || err.message);
      alert("Error ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      id="contact"
      className="px-4 md:px-10 py-16 bg-gradient-to-r from-[#0F2A5F] to-[#1E3A8A] text-white"
    >
      <div className="grid md:grid-cols-2 gap-10 items-start">

        {/* LEFT */}
        <div>
          <h1 className="text-2xl md:text-3xl font-bold mb-4">
            Start Your Child’s Journey 🚀
          </h1>

          <p className="text-gray-300 mb-6">
            Fill the form — we’ll contact you within 24 hours.
          </p>
        </div>

        {/* FORM */}
        <div className="bg-white text-black p-6 rounded-2xl shadow-xl">

          <h2 className="text-lg font-semibold mb-4">
            Admission Enquiry
          </h2>

          <input
            name="studentName"
            value={form.studentName}
            placeholder="Student Name *"
            className="input mb-4"
            onChange={handleChange}
          />

          <input
            name="parentName"
            value={form.parentName}
            placeholder="Parent Name"
            className="input mb-4"
            onChange={handleChange}
          />

          <div className="grid md:grid-cols-2 gap-3">
            <input
              name="phone"
              value={form.phone}
              placeholder="Phone *"
              className="input mb-4"
              onChange={handleChange}
            />
            <input
              name="email"
              value={form.email}
              placeholder="Email"
              className="input mb-4"
              onChange={handleChange}
            />
          </div>

          <select
            name="class"
            value={form.class}
            className="input mb-4"
            onChange={handleChange}
          >
            <option value="">Select Class</option>
            <option>Primary (I–V)</option>
            <option>Middle (VI–VIII)</option>
            <option>Secondary (IX–X)</option>
            <option>Senior (XI–XII)</option>
          </select>

          <textarea
            name="message"
            value={form.message}
            placeholder="Your Message"
            rows="3"
            className="input mb-4"
            onChange={handleChange}
          />

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            {loading ? "Submitting..." : "Submit Enquiry"}
          </button>

        </div>
      </div>
    </div>
  );
}