import { useEffect, useState } from "react";
import {
  getTeachers,
  addTeacher,
  updateTeacher as updateTeacherAPI,
  deleteTeacher,
} from "../../services/teacherService";
import toast from "react-hot-toast";
import axios from "axios";

import { updateUser as updateUserAPI } from "../../services/userService";

export default function Teachers() {
  const [teachers, setTeachers] = useState([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
  });

  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const perPage = 5;

  useEffect(() => {
    fetchTeachers();
  }, []);

  // 🔥 FETCH
  const fetchTeachers = async () => {
    try {
      setLoading(true);
      const res = await getTeachers();
      setTeachers(res.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  // 🔥 ADD
  const handleAdd = async () => {
    if (!form.name || !form.email) {
      return alert("Fill all fields");
    }

    try {
      await addTeacher(form);
      setForm({ name: "", email: "", subject: "" });
      fetchTeachers();
    } catch (err) {
      console.log(err);
    }
  };

  // 🔥 HANDLE INPUT CHANGE (SAFE)
  const handleChange = (index, field, value) => {
    const updated = teachers.map((t, i) => {
      if (i !== index) return t;

      if (field === "email") {
        return {
          ...t,
          userId: {
            ...t.userId,
            email: value,
          },
        };
      }

      return {
        ...t,
        [field]: value,
      };
    });

    setTeachers(updated);
  };

  // 🔥 UPDATE
  const updateTeacher = async (t) => {
    try {
      await updateTeacherAPI(t._id, {
        subject: t.subject,
        salaryPerDay: t.salaryPerDay,
      });

      await updateUserAPI(t.userId._id, {
        email: t.userId.email,
      });

      alert("Updated successfully ✅");
      fetchTeachers();
    } catch (err) {
      console.log(err);
      alert("Update failed ❌");
    }
  };

  // 🔥 DELETE
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this teacher?")) return;

    await deleteTeacher(id);
    fetchTeachers();
  };

  // 🔥 SEARCH
  const filteredTeachers = teachers.filter((t) =>
    t.userId?.name.toLowerCase().includes(search.toLowerCase())
  );

  // 🔥 PAGINATION
  const paginated = filteredTeachers.slice(
    (page - 1) * perPage,
    page * perPage
  );




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

      <h1 className="text-2xl font-bold">Teachers</h1>

      {/* 🔥 ADD FORM */}
      <div className="flex flex-wrap gap-3">

        <input
          placeholder="Name"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
          className="border p-2 rounded"
          required
        />

        <input
          placeholder="Email"
          value={form.email}
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
          className="border p-2 rounded"
          required
        />

        <input
          placeholder="Subject"
          value={form.subject}
          onChange={(e) =>
            setForm({ ...form, subject: e.target.value })
          }
          className="border p-2 rounded"
        />

        <button
          onClick={handleAdd}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add Teacher
        </button>

      </div>

      {/* 🔍 SEARCH */}
      <input
        placeholder="Search teacher..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 rounded w-full md:w-1/3"
      />

      {/* 🔥 TABLE */}
      <div className="bg-white shadow-lg rounded-xl overflow-hidden">

        {loading ? (
          <p className="text-center py-6">Loading...</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">

              <thead className="bg-gray-100 text-gray-700">
                <tr>
                  <th className="p-4 text-left">Name</th>
                  <th className="p-4 text-left">Subject</th>
                  <th className="p-4 text-left">Salary</th>
                  <th className="p-4 text-left">Email</th>
                  <th className="p-4 text-left">Actions</th>
                </tr>
              </thead>

              <tbody className="divide-y">

                {paginated.map((t, index) => (
                  <tr key={t._id} className="hover:bg-gray-50">

                    <td className="p-4 font-medium">
                      {t.userId?.name}
                    </td>

                    <td className="p-4">
                      <input
                        value={t.subject || ""}
                        onChange={(e) =>
                          handleChange(index, "subject", e.target.value)
                        }
                        className="border p-2 rounded w-full"
                      />
                    </td>

                    <td className="p-4">
                      <input
                        type="number"
                        value={t.salaryPerDay || ""}
                        onChange={(e) =>
                          handleChange(index, "salaryPerDay", e.target.value)
                        }
                        className="border p-2 rounded w-full"
                      />
                    </td>

                    <td className="p-4">
                      <input
                        value={t.userId?.email || ""}
                        onChange={(e) =>
                          handleChange(index, "email", e.target.value)
                        }
                        className="border p-2 rounded w-full"
                      />
                    </td>

                    <td className="p-4 space-x-2">

                      <button
                        onClick={() => updateTeacher(t)}
                        className="bg-blue-600 text-white px-3 py-1 rounded"
                      >
                        Save
                      </button>

                      <button
                        onClick={() => handleDelete(t._id)}
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
        )}

      </div>

      {/* 🔥 PAGINATION */}
      <div className="flex gap-3">
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          className="px-3 py-1 border rounded"
        >
          Prev
        </button>

        <button
          onClick={() => setPage(page + 1)}
          className="px-3 py-1 border rounded"
        >
          Next
        </button>
      </div>

    </div>
  );
}