import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicRoutes from "./routes/PublicRoutes";
import DashboardLayout from "./layouts/DashboardLayout";
import ProtectedRoute from "./dashboard/components/ProtectedRoute";
import { Toaster } from "react-hot-toast";

// Pages
import Dashboard from "./dashboard/pages/Dashboard";
import Students from "./dashboard/pages/Students";
import Teachers from "./dashboard/pages/Teachers";
import AttendancePage from "./dashboard/pages/AttendancePage";
import TeacherPanel from "./dashboard/pages/TeacherPanel";
import Notices from "./dashboard/pages/Notices";
import Login from "./dashboard/pages/Login";
import Register from "./dashboard/pages/Register";

// Extra Pages
import ResultsPage from "./dashboard/pages/ResultsPage";
import AddResult from "./dashboard/pages/AddResult";
import FeePage from "./dashboard/pages/FeePage";
import FeeAdmin from "./dashboard/pages/FeeAdmin";
import Timetable from "./dashboard/pages/Timetable";
import TimetableAdmin from "./dashboard/pages/TimetableAdmin";
import NoticesPage from "./dashboard/pages/NoticesPage";
export default function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-right" />

      <Routes>

        {/* 🌐 Public Website */}
        <Route path="/" element={<PublicRoutes />} />

        {/* 🟡 Public Pages */}
        <Route path="/fee" element={<FeePage />} />
        <Route path="/results" element={<ResultsPage />} />
        <Route path="/timetable" element={<Timetable />} />
        <Route path="/notices" element={<NoticesPage />} />

        {/* 🔐 Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* 🔐 Admin Dashboard */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute role="admin">
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="students" element={<Students />} />
          <Route path="teachers" element={<Teachers />} />
          <Route path="attendance" element={<AttendancePage />} />
          <Route path="notices" element={<Notices />} />

          {/* ✅ Admin Features */}
          <Route path="fees" element={<FeeAdmin />} />
          <Route path="add-result" element={<AddResult />} />
          <Route path="timetable" element={<TimetableAdmin />} />
        </Route>

        {/* 👨‍🏫 Teacher Panel */}
        <Route
          path="/teacher"
          element={
            <ProtectedRoute role="teacher">
              <TeacherPanel />
            </ProtectedRoute>
          }
        />

        {/* ❌ 404 */}
        <Route
          path="*"
          element={
            <div className="p-10 text-center text-2xl">
              404 Not Found ❌
            </div>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}