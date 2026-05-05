import { useEffect, useState } from "react";
import axios from "axios";

export default function Enquiries() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await axios.get(
      "https://school-backend-2-ackw.onrender.com/api/enquiries"
    );
    setData(res.data);
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">
        Enquiries
      </h1>

      <table className="w-full">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Message</th>
          </tr>
        </thead>

        <tbody>
          {data.map((e) => (
            <tr key={e._id}>
              <td>{e.name}</td>
              <td>{e.phone}</td>
              <td>{e.email}</td>
              <td>{e.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}