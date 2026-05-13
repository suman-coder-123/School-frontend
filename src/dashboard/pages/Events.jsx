import {
  useEffect,
  useState,
} from "react";

import axios from "axios";

export default function Events() {

  const [events, setEvents] =
    useState([]);

  const [form, setForm] =
    useState({
      title: "",
      description: "",
      date: "",
      time: "",
      location: "",
      target: "all",
    });

  useEffect(() => {

    fetchEvents();

  }, []);

  const fetchEvents =
    async () => {

      const role =
        localStorage.getItem(
          "role"
        ) || "student";

      const res =
        await axios.get(
          `https://school-backend-2-ackw.onrender.com/api/events?target=${role}`
        );

      setEvents(res.data);
    };

  const handleChange = (
    e
  ) => {

    setForm({
      ...form,
      [e.target.name]:
        e.target.value,
    });

  };

  const addEvent =
    async () => {

      await axios.post(
        "https://school-backend-2-ackw.onrender.com/api/events",
        form
      );

      fetchEvents();

      setForm({
        title: "",
        description: "",
        date: "",
        time: "",
        location: "",
        target: "all",
      });
    };

  return (

    <div className="p-6">

      <h1 className="text-3xl font-bold mb-6">

        Events

      </h1>

      {/* FORM */}
      <div className="bg-white p-5 rounded-2xl shadow mb-8 space-y-4">

        <input
          name="title"
          value={form.title}
          onChange={
            handleChange
          }
          placeholder="Event Title"
          className="border p-3 rounded-xl w-full"
        />

        <textarea
          name="description"
          value={
            form.description
          }
          onChange={
            handleChange
          }
          placeholder="Description"
          className="border p-3 rounded-xl w-full"
        />

        <div className="grid md:grid-cols-3 gap-4">

          <input
            type="date"
            name="date"
            value={form.date}
            onChange={
              handleChange
            }
            className="border p-3 rounded-xl"
          />

          <input
            type="text"
            name="time"
            value={form.time}
            onChange={
              handleChange
            }
            placeholder="Time"
            className="border p-3 rounded-xl"
          />

          <input
            type="text"
            name="location"
            value={
              form.location
            }
            onChange={
              handleChange
            }
            placeholder="Location"
            className="border p-3 rounded-xl"
          />

        </div>

        <select
          name="target"
          value={form.target}
          onChange={
            handleChange
          }
          className="border p-3 rounded-xl w-full"
        >

          <option value="all">

            All

          </option>

          <option value="student">

            Students

          </option>

          <option value="teacher">

            Teachers

          </option>

        </select>

        <button
          onClick={addEvent}
          className="bg-blue-600 text-white px-6 py-3 rounded-xl"
        >

          Add Event

        </button>

      </div>

      {/* EVENTS */}
      <div className="space-y-4">

        {events.map((e) => (

          <div
            key={e._id}
            className="bg-white p-5 rounded-2xl shadow"
          >

            <h2 className="text-xl font-bold">

              {e.title}

            </h2>

            <p className="text-gray-600 mt-2">

              {e.description}

            </p>

            <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-500">

              <p>
                📅 {e.date}
              </p>

              <p>
                ⏰ {e.time}
              </p>

              <p>
                📍 {e.location}
              </p>

              <p>
                🎯 {e.target}
              </p>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}