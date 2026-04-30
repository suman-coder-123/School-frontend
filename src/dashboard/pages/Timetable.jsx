import { useState } from "react";
import axios from "axios";
import { getTimetable } from "../../services/timetableService";

export default function Timetable() {

  const [className, setClassName] = useState("");
  const [data, setData] = useState(null);

const fetchTimetable = async () => {
  try {
 const res = await getTimetable(className);


    console.log(res.data); // 🔍 DEBUG

    setData(res.data);
  } catch (err) {
    console.log(err);
  }
};
  return (
    <div className="p-6">

      <h1 className="text-xl font-bold mb-4">
        View Timetable 📅
      </h1>

      <input
        placeholder="Enter Class"
        className="input"
        onChange={(e) => setClassName(e.target.value)}
      />

      <button onClick={fetchTimetable} className="bg-blue-500 text-white px-3 py-1 mt-2">
        Get Timetable
      </button>

     {data.schedule.map((d) => (
  <div key={d.day}>
    <h3>{d.day}</h3>

    {d.periods.map((p, i) => (
      <p key={i}>
        {p.subject} - {p.time}
      </p>
    ))}
  </div>
))}

    </div>
  );
}