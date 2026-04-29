import { useEffect, useState } from "react";
import { getAllFees, payFee } from "../../services/feeService";
import toast from "react-hot-toast";

export default function FeeAdmin() {

  const [fees, setFees] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchFees = async () => {
    try {
      setLoading(true);
      const res = await getAllFees();
      setFees(res.data);
    } catch (err) {
      toast.error("Failed to load fees ❌");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFees();
  }, []);

  // 💳 MARK PAID
  const handlePay = async (id) => {
    try {
      await payFee(id);
      toast.success("Marked as Paid ✅");
      fetchFees();
    } catch (err) {
      toast.error("Error ❌");
    }
  };

  return (
    <div className="p-6">

      <h1 className="text-2xl font-bold mb-4">
        Fee Management 💳
      </h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="bg-white shadow rounded overflow-x-auto">

          <table className="w-full text-sm">

            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 text-left">Name</th>
                <th className="p-3">Roll</th>
                <th className="p-3">Class</th>
                <th className="p-3">Amount</th>
                <th className="p-3">Status</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>

            <tbody>
              {fees.map((f) => (
                <tr key={f._id} className="border-t">

                 <td className="p-3">{f.studentId?.name}</td>
                  <td className="p-3 text-center">{f.rollNumber}</td>
                  <td className="p-3 text-center">{f.class}</td>
                  <td className="p-3 text-center">₹{f.amount}</td>

                  <td
                    className={`p-3 text-center font-bold ${
                      f.status === "Paid"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {f.status}
                  </td>

                  <td className="p-3 text-center">
                    {f.status === "Pending" && (
                      <button
                        onClick={() => handlePay(f._id)}
                        className="bg-green-600 text-white px-3 py-1 rounded"
                      >
                        Mark Paid
                      </button>
                    )}
                  </td>

                </tr>
              ))}
            </tbody>

          </table>

        </div>
      )}

    </div>
  );
}