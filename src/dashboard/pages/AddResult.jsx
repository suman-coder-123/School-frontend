import { useState } from "react";
import { addResult } from "../../services/resultService";
import toast from "react-hot-toast";
import { subjectsConfig } from "../../utils/subjects"; // ✅ FIX

export default function AddResult() {

  const [form, setForm] = useState({
    studentName: "",
    rollNumber: "",
    class: "",
    stream: "",
    subjects: [],
  });

  // ✅ ADD THIS (missing)
  const handleChange = (field, value) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // ✅ CLASS CHANGE
  const handleClassChange = (cls) => {
    if (cls === "Senior") {
      setForm((prev) => ({
        ...prev,
        class: cls,
        stream: "",
        subjects: [],
      }));
    } else {
      const subs = subjectsConfig[cls] || [];

      setForm((prev) => ({
        ...prev,
        class: cls,
        stream: "",
        subjects: subs.map((s) => ({
          name: s,
          marks: "",
        })),
      }));
    }
  };

  // ✅ STREAM CHANGE
  const handleStreamChange = (stream) => {
    const subs = subjectsConfig["Senior"]?.[stream] || [];

    setForm((prev) => ({
      ...prev,
      stream,
      subjects: subs.map((s) => ({
        name: s,
        marks: "",
      })),
    }));
  };

  // ✅ SUBMIT
  const handleSubmit = async () => {
    try {
      await addResult(form);
      toast.success("Result added ✅");
    } catch (err) {
      console.log(err);
      toast.error("Error ❌");
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto space-y-4">

      <h1 className="text-xl font-bold">Add Result</h1>

      <input
        placeholder="Student Name"
        className="input"
        value={form.studentName}
        onChange={(e) =>
          handleChange("studentName", e.target.value)
        }
      />

      <input
        placeholder="Roll Number"
        className="input"
        value={form.rollNumber}
        onChange={(e) =>
          handleChange("rollNumber", e.target.value)
        }
      />

      {/* CLASS */}
      <select
        className="input"
        value={form.class}
        onChange={(e) =>
          handleClassChange(e.target.value)
        }
      >
        <option value="">Select Class</option>
        <option value="Primary">Primary</option>
        <option value="Middle">Middle</option>
        <option value="Secondary">Secondary</option>
        <option value="Senior">Senior</option>
      </select>

      {/* STREAM */}
      {form.class === "Senior" && (
        <select
          className="input"
          value={form.stream}
          onChange={(e) =>
            handleStreamChange(e.target.value)
          }
        >
          <option value="">Select Stream</option>
          <option value="Science">Science</option>
          <option value="Commerce">Commerce</option>
          <option value="Arts">Arts</option>
        </select>
      )}

      {/* SUBJECTS */}
      {form.subjects.length > 0 && (
        <div className="space-y-2">
          {form.subjects.map((s, i) => (
            <div key={i} className="flex gap-2">
              <input
                value={s.name}
                disabled
                className="input w-1/2 bg-gray-100"
              />

              <input
                type="number"
                placeholder="Marks"
                className="input w-1/2"
                onChange={(e) => {
                  const updated = [...form.subjects];
                  updated[i].marks = Number(e.target.value);

                  setForm((prev) => ({
                    ...prev,
                    subjects: updated,
                  }));
                }}
              />
            </div>
          ))}
        </div>
      )}

      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Save Result
      </button>

    </div>
  );
}