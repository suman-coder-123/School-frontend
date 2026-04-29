import { useEffect, useState } from "react";
import {
  getStudents,
  addStudent,
  updateStudent,
  deleteStudent,
} from "../../services/studentService";
import toast from "react-hot-toast";
import axios from "axios";

export default function Students() {
  const [students, setStudents] = useState([]);
  const [form, setForm] = useState({
    name: "",
    class: "",
    section: "",
  });
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    const res = await getStudents();
    setStudents(res.data);
  };

  const handleAdd = async () => {
    if (!form.name || !form.class) {
      return alert("Fill all fields");
    }

    await addStudent(form);
    setForm({ name: "", class: "", section: "" });
    fetchStudents();
  };

  const handleUpdate = async (s) => {
    await updateStudent(s._id, s);
    fetchStudents();
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete student?")) return;
    await deleteStudent(id);
    fetchStudents();
  };

  // 🔍 SEARCH FILTER
  const filtered = students.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  // 🎯 GROUP BY CLASS
  const groupedStudents = filtered.reduce((acc, s) => {
    if (!acc[s.class]) acc[s.class] = [];
    acc[s.class].push(s);
    return acc;
  }, {});



useEffect(() => {
  fetchNotices();
}, []);

const fetchNotices = async () => {
  const res = await axios.get("/api/notices?target=student");

  if (res.data.length > 0) {
    toast("📢 New Notice Available!");
  }
};
  return (
    <div className="p-6 space-y-6">

      <h1 className="text-2xl font-bold">Students</h1>

      {/* ADD FORM */}
      <div className="flex flex-wrap gap-3">
        <input
          placeholder="Name"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
          className="border p-2 rounded"
        />

        <input
          placeholder="Class"
          value={form.class}
          onChange={(e) =>
            setForm({ ...form, class: e.target.value })
          }
          className="border p-2 rounded"
        />

        <input
          placeholder="Section"
          value={form.section}
          onChange={(e) =>
            setForm({ ...form, section: e.target.value })
          }
          className="border p-2 rounded"
        />

        <button
          onClick={handleAdd}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </div>

      {/* SEARCH */}
      <input
        placeholder="Search student..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 rounded w-full md:w-1/3"
      />

      {/* CLASS-WISE TABLE */}
      {Object.keys(groupedStudents)
        .sort((a, b) => a - b)
        .map((cls) => (
          <div key={cls} className="mb-8">

            <h2 className="text-xl font-semibold mb-2">
              Class {cls}
            </h2>

            <div className="bg-white shadow rounded overflow-x-auto">

              <table className="w-full text-sm">

                <thead className="bg-gray-100">
                  <tr>
                    <th className="p-3 text-left">Name</th>
                    <th className="p-3 text-left">Section</th>
                    <th className="p-3 text-left">Status</th>
                    <th className="p-3 text-left">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {groupedStudents[cls].map((s) => (
                    <tr key={s._id} className="border-b">

                      <td className="p-3">
                        <input
                          value={s.name}
                          onChange={(e) => {
                            const updated = students.map((stu) =>
                              stu._id === s._id
                                ? { ...stu, name: e.target.value }
                                : stu
                            );
                            setStudents(updated);
                          }}
                          className="border px-2 py-1 rounded"
                        />
                      </td>

                      <td className="p-3">
                        <input
                          value={s.section}
                          onChange={(e) => {
                            const updated = students.map((stu) =>
                              stu._id === s._id
                                ? { ...stu, section: e.target.value }
                                : stu
                            );
                            setStudents(updated);
                          }}
                          className="border px-2 py-1 rounded"
                        />
                      </td>

                      <td className="p-3">
                        <select
                          value={s.status}
                          onChange={(e) => {
                            const updated = students.map((stu) =>
                              stu._id === s._id
                                ? { ...stu, status: e.target.value }
                                : stu
                            );
                            setStudents(updated);
                          }}
                          className="border px-2 py-1 rounded"
                        >
                          <option>Active</option>
                          <option>Inactive</option>
                        </select>
                      </td>

                      <td className="p-3 space-x-2">
                        <button
                          onClick={() => handleUpdate(s)}
                          className="bg-green-600 text-white px-2 py-1 rounded"
                        >
                          Save
                        </button>

                        <button
                          onClick={() => handleDelete(s._id)}
                          className="bg-red-500 text-white px-2 py-1 rounded"
                        >
                          Delete
                        </button>
                      </td>

                    </tr>
                  ))}
                </tbody>

              </table>

            </div>
          </div>
        ))}

    </div>
  );
}