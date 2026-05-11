import { useEffect, useState } from "react";

import {
  getStudents,
  addStudent,
  deleteStudent,
} from "../../services/studentService";

export default function Students() {

  const [students, setStudents] = useState([]);

  const [form, setForm] = useState({
    name: "",
    class: "",
    section: "",
  });

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    const res = await getStudents();

    setStudents(res.data);
  };

  const handleAdd = async () => {

    if (
      !form.name ||
      !form.class ||
      !form.section
    ) return;

    await addStudent(form);

    fetchStudents();

    setForm({
      name: "",
      class: "",
      section: "",
    });
  };

  const handleDelete = async (id) => {
    await deleteStudent(id);

    fetchStudents();
  };

  return (
    <div className="p-6">

      <h1 className="text-2xl font-bold mb-6">
        Students
      </h1>

      {/* FORM */}
      <div className="flex gap-3 mb-6">

        <input
          placeholder="Name"
          value={form.name}
          onChange={(e) =>
            setForm({
              ...form,
              name: e.target.value,
            })
          }
          className="border p-2 rounded"
        />

        <input
          placeholder="Class"
          value={form.class}
          onChange={(e) =>
            setForm({
              ...form,
              class: e.target.value,
            })
          }
          className="border p-2 rounded"
        />

        <input
          placeholder="Section"
          value={form.section}
          onChange={(e) =>
            setForm({
              ...form,
              section: e.target.value,
            })
          }
          className="border p-2 rounded"
        />

        <button
          onClick={handleAdd}
          className="bg-blue-600 text-white px-4 rounded"
        >
          Add
        </button>

      </div>

      {/* TABLE */}
      <table className="w-full bg-white shadow rounded">

        <thead className="bg-gray-100">

          <tr>
            <th className="p-3">Name</th>
            <th>Class</th>
            <th>Section</th>
            <th>Status</th>
            <th>Action</th>
          </tr>

        </thead>

        <tbody>

          {students.map((s) => (

            <tr key={s._id} className="border-t">

              <td className="p-3">{s.name}</td>
              <td>{s.class}</td>
              <td>{s.section}</td>
              <td>{s.status}</td>

              <td>
                <button
                  onClick={() =>
                    handleDelete(s._id)
                  }
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}