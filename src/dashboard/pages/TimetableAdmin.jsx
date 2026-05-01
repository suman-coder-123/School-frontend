import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { saveTimetable } from "../../services/timetableService";

export default function TimetableAdmin() {
    console.log("working ")

  const [className, setClassName] = useState("");
  const [schedule, setSchedule] = useState([]);

  const addDay = () => {
    setSchedule([...schedule, { day: "", periods: [] }]);
  };

  const addPeriod = (index) => {
    const updated = [...schedule];  
    updated[index].periods.push({ subject: "", time: "" });
    setSchedule(updated);
  };

  const handleSave = async () => {
    try {
      await saveTimetable({
  class: className,
  schedule,
});

      toast.success("Timetable saved ✅");
    } catch (err) {
      toast.error("Error ❌");
    }
  };

  return (
    <div className="p-6">

      <h1 className="text-xl font-bold mb-4">
        Create Timetable 📅
      </h1>

      <input
        placeholder="Class (e.g. Class 10)"
        className="input mb-4"
        onChange={(e) => setClassName(e.target.value)}
      />

      <button onClick={addDay} className="bg-blue-500 text-white px-3 py-1 mb-4">
        Add Day
      </button>

      {schedule.map((d, i) => (
        <div key={i} className="border p-3 mb-3">

          <input
            placeholder="Day"
            className="input mb-2"
            onChange={(e) => {
              const updated = [...schedule];
              updated[i].day = e.target.value;
              setSchedule(updated);
            }}
          />

          <button onClick={() => addPeriod(i)} className="bg-green-500 text-white px-2 py-1">
            Add Period
          </button>

          {d.periods.map((p, j) => (
            <div key={j} className="flex gap-2 mt-2">
              <input
                placeholder="Subject"
                className="input"
                onChange={(e) => {
                  const updated = [...schedule];
                  updated[i].periods[j].subject = e.target.value;
                  setSchedule(updated);
                }}
              />
              <input
                placeholder="Time"
                className="input"
                onChange={(e) => {
                  const updated = [...schedule];
                  updated[i].periods[j].time = e.target.value;
                  setSchedule(updated);
                }}
              />
            </div>
          ))}
        </div>
      ))}

      <button onClick={handleSave} className="bg-purple-600 text-white px-4 py-2">
        Save Timetable
      </button>

    </div>
  );
}