import { useState } from "react";
import { getStudentFees, payFee } from "../../services/feeService";
import toast from "react-hot-toast";
import { feeStructure } from "../../utils/feeStructure";

export default function FeePage() {
  const [roll, setRoll] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  // 🔍 FETCH FEES (MONTHLY)
  const handleSearch = async () => {
    if (!roll) return toast.error("Enter roll number");

    try {
      setLoading(true);

      const res = await getStudentFees(roll); // ✅ FIXED
      console.log("API DATA:", res.data); // 🔍 DEBUG

      setData(res.data);

      if (res.data.length === 0) {
        toast("No fees found");
      } else {
        toast.success("Fees loaded ✅");
      }

    } catch (err) {
      toast.error("Fee not found ❌");
      setData([]);
    } finally {
      setLoading(false);
    }
  };

  // 💳 PAY
  const handlePay = async (id) => {
    try {
      await payFee(id);
      toast.success("Payment successful 💳");

      // 🔁 reload
      handleSearch();

    } catch (err) {
      toast.error("Payment failed ❌");
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">

      <h1 className="text-2xl font-bold mb-6 text-center">
        Fee Payment 💳
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
          {loading ? "..." : "Check"}
        </button>
      </div>

      {/* RESULT */}
      {data.length === 0 && !loading && (
        <p className="text-center text-gray-500">
          No fee data found
        </p>
      )}

      {data.map((f) => (
        <div
          key={f._id}
          className="bg-white shadow rounded p-4 mb-4"
        >

          <p><b>Month:</b> {f.month}</p>
          <p>Class: {f.class}</p>
          <p>Roll No: {f.rollNumber}</p>

          <p className="text-lg font-bold">
            Amount: ₹{f.amount}
          </p>

          <p
            className={`font-bold ${
              f.status === "Paid"
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            Status: {f.status}
          </p>

          {f.paymentDate && (
            <p className="text-sm text-gray-500">
              Paid on: {new Date(f.paymentDate).toLocaleDateString()}
            </p>
          )}

          {f.status === "Pending" && (
            <button
              onClick={() => handlePay(f._id)}
              className="mt-2 bg-green-600 text-white px-3 py-1 rounded"
            >
              Pay Now 💳
            </button>
          )}

        </div>
      ))}



<div className="bg-white shadow rounded p-5 mb-6">

  <h2 className="text-lg font-bold mb-4 text-center">
    Complete Fee Structure 📊
  </h2>

  <table className="w-full text-sm border">

    <thead className="bg-gray-100">
      <tr>
        <th className="p-2 text-left">Class</th>
        <th className="p-2 text-center">Monthly Fee</th>
      </tr>
    </thead>

    <tbody>
      {feeStructure.map((f, i) => (
        <tr key={i} className="border-t">
          <td className="p-2">{f.class}</td>
          <td className="p-2 text-center font-semibold">
            ₹{f.fee}
          </td>
        </tr>
      ))}
    </tbody>

  </table>

</div>

    </div>
    
  );

}