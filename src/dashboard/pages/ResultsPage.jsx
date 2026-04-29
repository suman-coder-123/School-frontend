import { useState, useRef } from "react";
import { getResult } from "../../services/resultService";
import toast from "react-hot-toast";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import logo from "../../assets/logo.png";


export default function ResultsPage() {

  const [roll, setRoll] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const reportRef = useRef(null); // ✅ MUST BE HERE

  // 🔍 SEARCH RESULT
  const handleSearch = async () => {
    if (!roll) return toast.error("Enter roll number");

    try {
      setLoading(true);

      const res = await getResult(String(roll));
      setData(res.data);

      toast.success("Result loaded ✅");

    } catch (err) {
      console.log(err);
      toast.error("Result not found ❌");
      setData(null);
    } finally {
      setLoading(false);
    }
  };

const downloadPDF = async () => {
  if (!data) return;

  const pdf = new jsPDF("p", "mm", "a4");

  // 🎯 ADD BORDER
  pdf.rect(10, 10, 190, 277);

  // 🎯 ADD LOGO (TOP CENTER)
  const img = new Image();
  img.src = logo;

  await new Promise((resolve) => {
    img.onload = resolve;
  });

  pdf.addImage(img, "PNG", 85, 12, 40, 20);

  // 🎯 HEADER
  pdf.setFontSize(16);
  pdf.text("Sharda Vidhya Niketan School", 105, 40, {
    align: "center",
  });

  pdf.setFontSize(12);
  pdf.text("Academic Report Card", 105, 48, {
    align: "center",
  });

  // 🎯 WATERMARK (LIGHT)
  pdf.setTextColor(200);
  pdf.setFontSize(40);
  pdf.text("SCHOOL", 60, 150, { angle: 45 });

  // RESET COLOR
  pdf.setTextColor(0);

  // 🎯 STUDENT DETAILS
  pdf.setFontSize(11);
  pdf.text(`Name: ${data.studentName}`, 20, 65);
  pdf.text(`Class: ${data.class}`, 20, 72);
  pdf.text(`Roll No: ${data.rollNumber}`, 20, 79);

  if (data.stream) {
    pdf.text(`Stream: ${data.stream}`, 20, 86);
  }

  // 🎯 TABLE HEADER
  let y = 100;

  pdf.setFontSize(12);
  pdf.text("Subject", 20, y);
  pdf.text("Marks", 100, y);
  pdf.text("Grade", 150, y);

  y += 3;
  pdf.line(20, y, 190, y);
  y += 8;

  // 🎯 SUBJECTS
  pdf.setFontSize(11);

  data.subjects.forEach((s) => {
    pdf.text(s.name, 20, y);
    pdf.text(String(s.marks), 100, y);
    pdf.text(s.grade || "-", 150, y);
    y += 8;
  });

  // 🎯 SUMMARY
  y += 10;

  pdf.setFontSize(12);
  pdf.text(`Total: ${data.total}`, 20, y);
  y += 7;

  pdf.text(`Percentage: ${data.percentage}%`, 20, y);
  y += 7;

  pdf.text(`Result: ${data.resultStatus}`, 20, y);
  y += 7;

  pdf.text(`Remark: ${data.remark}`, 20, y);

  // 🎯 SIGNATURE AREA
  y += 25;

  pdf.line(20, y, 80, y);
  pdf.line(120, y, 180, y);

  pdf.setFontSize(10);
  pdf.text("Class Teacher", 25, y + 5);
  pdf.text("Principal", 135, y + 5);

  // 🎯 FOOTER
  pdf.setFontSize(9);
  pdf.text("This is a computer generated report card", 105, 285, {
    align: "center",
  });

  // SAVE
  pdf.save(`${data.studentName}_report.pdf`);
};
return (
  <div className="p-6 max-w-3xl mx-auto">

    {/* TITLE */}
    <h1 className="text-2xl font-bold text-center mb-6">
      Check Exam Result 📊
    </h1>

    {/* SEARCH */}
    <div className="flex gap-2 mb-6">
      <input
        value={roll}
        onChange={(e) => setRoll(e.target.value)}
        placeholder="Enter Roll Number"
        className="border p-2 rounded w-full"
      />

      <button
        onClick={handleSearch}
        className="bg-blue-600 text-white px-4 rounded"
      >
        {loading ? "..." : "Search"}
      </button>
    </div>

    {/* ✅ VISIBLE RESULT UI */}
    {data && (
      <div className="bg-white shadow rounded p-6">

        <h2 className="text-xl font-bold text-center mb-2">
          Sharda Vidhya Niketan School
        </h2>

        <p className="text-center text-sm mb-4">
          Academic Report Card
        </p>

        <h3 className="text-lg font-semibold">
          {data.studentName}
        </h3>

        <p>Class: {data.class}</p>
        <p>Roll No: {data.rollNumber}</p>

        <table className="w-full mt-4 text-sm border">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 text-left">Subject</th>
              <th className="p-2 text-center">Marks</th>
              <th className="p-2 text-center">Grade</th>
            </tr>
          </thead>

          <tbody>
            {data.subjects.map((s, i) => (
              <tr key={i} className="border-t">
                <td className="p-2">{s.name}</td>
                <td className="p-2 text-center">{s.marks}</td>
                <td className="p-2 text-center">{s.grade}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <p className="mt-4">Total: {data.total}</p>
        <p>Percentage: {data.percentage}%</p>
        <p>Result: {data.resultStatus}</p>
        <p>Remark: {data.remark}</p>

      </div>
    )}

    {/* ✅ DOWNLOAD BUTTON */}
    {data && (
      <div className="text-center mt-4">
        <button
          onClick={downloadPDF}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Download Report 📄
        </button>
      </div>
    )}

    {/* ✅ HIDDEN PDF LAYOUT (NO TAILWIND) */}
    {data && (
      <div
        ref={reportRef}
        style={{
          position: "absolute",
          top: "-9999px",
          left: "-9999px",
          width: "800px",
          backgroundColor: "#ffffff",
          color: "#000000",
          padding: "20px",
          fontFamily: "Arial",
        }}
      >
        <h2 style={{ textAlign: "center" }}>
          Sharda Vidhya Niketan School
        </h2>

        <p style={{ textAlign: "center" }}>
          Academic Report Card
        </p>

        <h3>{data.studentName}</h3>
        <p>Class: {data.class}</p>
        <p>Roll No: {data.rollNumber}</p>

        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr className="pb-5">
              <th style={{ border: "1px solid black"  }}>Subject</th>
              <th style={{ border: "1px solid black" }}>Marks</th>
              <th style={{ border: "1px solid black" }}>Grade</th>
            </tr>
          </thead>

          <tbody>
            {data.subjects.map((s, i) => (
              <tr key={i} className="pb-5">
                <td style={{ border: "1px solid black" }}>{s.name}</td>
                <td style={{ border: "1px solid black" }}>{s.marks}</td>
                <td style={{ border: "1px solid black" }}>{s.grade}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <p>Total: {data.total}</p>
        <p>Percentage: {data.percentage}%</p>
        <p>Result: {data.resultStatus}</p>
        <p>Remark: {data.remark}</p>
      </div>
    )}

  </div>
);
}