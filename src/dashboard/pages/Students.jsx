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

  // 🔍 SEARCH
  const [search, setSearch] = useState("");

  // 🎯 FILTER
  const [selectedClass, setSelectedClass] =
    useState("");

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

    try {

      await addStudent(form);

      fetchStudents();

      setForm({
        name: "",
        class: "",
        section: "",
      });

    } catch (err) {

      alert(
        err.response?.data?.message ||
        "Failed to add student"
      );
    }
  };

  const handleDelete = async (id) => {

    await deleteStudent(id);

    fetchStudents();
  };

  // 🎯 UNIQUE CLASSES
  const uniqueClasses = [
    ...new Set(
      students.map((s) => s.class)
    ),
  ];

  // 🔍 FILTERED STUDENTS
  const filteredStudents = students.filter(
    (s) => {

      const matchName =
        s.name
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchClass =
        selectedClass
          ? s.class === selectedClass
          : true;

      return matchName && matchClass;
    }
  );

  return (
    <div className="p-6">

      <h1 className="text-2xl font-bold mb-6">
        Students
      </h1>

      {/* ADD FORM */}
      <div className="flex flex-wrap gap-3 mb-6">

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

      {/* 🔍 SEARCH + FILTER */}
      <div className="flex flex-wrap gap-3 mb-6">

        {/* SEARCH */}
        <input
          type="text"
          placeholder="Search student..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="border p-2 rounded"
        />

        {/* FILTER */}
        <select
          value={selectedClass}
          onChange={(e) =>
            setSelectedClass(e.target.value)
          }
          className="border p-2 rounded"
        >

          <option value="">
            All Classes
          </option>

          {uniqueClasses.map((cls) => (
            <option
              key={cls}
              value={cls}
            >
              Class {cls}
            </option>
          ))}

        </select>

        {/* RESET */}
        <button
          onClick={() => {
            setSearch("");
            setSelectedClass("");
          }}
          className="bg-gray-500 text-white px-4 rounded"
        >
          Reset
        </button>

      </div>

      {/* TABLE */}
      <div className="overflow-x-auto">

        <table className="w-full bg-white shadow rounded">

          <thead className="bg-gray-100">

            <tr>
              <th className="p-3">
                Name
              </th>

              <th>
                Class
              </th>

              <th>
                Section
              </th>

              <th>
                Status
              </th>

              <th>
                Action
              </th>
            </tr>

          </thead>

          <tbody>

            {filteredStudents.map((s) => (

              <tr
                key={s._id}
                className="border-t text-center"
              >

                <td className="p-3">
                  {s.name}
                </td>

                <td>
                  {s.class}
                </td>

                <td>
                  {s.section}
                </td>

                <td>
                  {s.status}
                </td>

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

            {/* EMPTY */}
            {filteredStudents.length === 0 && (
              <tr>

                <td
                  colSpan="5"
                  className="text-center p-5 text-gray-500"
                >
                  No students found
                </td>

              </tr>
            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}