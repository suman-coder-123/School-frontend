import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import PublicRoutes from "./routes/PublicRoutes";
import DashboardLayout from "./layouts/DashboardLayout";

import ProtectedRoute from "./dashboard/components/ProtectedRoute";

// AUTH
import Login from "./dashboard/pages/Login";
import Register from "./dashboard/pages/Register";
import ChangePassword from "./dashboard/pages/ChangePassword";
import ForgotPassword from "./dashboard/pages/ForgotPassword";

// DASHBOARD PAGES
import Dashboard from "./dashboard/pages/Dashboard";
import Students from "./dashboard/pages/Students";
import Teachers from "./dashboard/pages/Teachers";
import AttendancePage from "./dashboard/pages/AttendancePage";
import Notices from "./dashboard/pages/Notices";
import AddResult from "./dashboard/pages/AddResult";
import FeeAdmin from "./dashboard/pages/FeeAdmin";
import TimetableAdmin from "./dashboard/pages/TimetableAdmin";

// STUDENT PAGES
import ResultsPage from "./dashboard/pages/ResultsPage";
import FeePage from "./dashboard/pages/FeePage";
import Timetable from "./dashboard/pages/Timetable";
import NoticesPage from "./dashboard/pages/NoticesPage";

export default function App() {
  return (
    <BrowserRouter>

      <Toaster position="top-right" />

      <Routes>

        {/* PUBLIC WEBSITE */}
        <Route path="/" element={<PublicRoutes />} />

        {/* AUTH */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* MAIN DASHBOARD */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute
              allowedRoles={["admin", "teacher", "student"]}
            >
              <DashboardLayout />
            </ProtectedRoute>
          }
        >

          {/* COMMON */}
          <Route index element={<Dashboard />} />
          <Route path="notices" element={<Notices />} />

          {/* ADMIN ONLY */}
          <Route
            path="students"
            element={
              <ProtectedRoute allowedRoles={["admin"]}>
                <Students />
              </ProtectedRoute>
            }
          />

          <Route
            path="teachers"
            element={
              <ProtectedRoute allowedRoles={["admin"]}>
                <Teachers />
              </ProtectedRoute>
            }
          />

          {/* ADMIN + TEACHER */}
          <Route
            path="attendance"
            element={
              <ProtectedRoute
                allowedRoles={["admin", "teacher"]}
              >
                <AttendancePage />
              </ProtectedRoute>
            }
          />

          <Route
            path="add-result"
            element={
              <ProtectedRoute
                allowedRoles={["admin", "teacher"]}
              >
                <AddResult />
              </ProtectedRoute>
            }
          />

          <Route
            path="timetable"
            element={
              <ProtectedRoute
                allowedRoles={["admin", "teacher"]}
              >
                <TimetableAdmin />
              </ProtectedRoute>
            }
          />

          {/* STUDENT */}
          <Route
            path="my-results"
            element={
              <ProtectedRoute allowedRoles={["student"]}>
                <ResultsPage />
              </ProtectedRoute>
            }
          />
        

          <Route
            path="fees"
            element={
              <ProtectedRoute
                allowedRoles={["admin", "student"]}
              >
                <FeeAdmin />
              </ProtectedRoute>
            }
          />

          <Route
            path="my-timetable"
            element={
              <ProtectedRoute allowedRoles={["student"]}>
                <Timetable />
              </ProtectedRoute>
            }
          />

          <Route
            path="my-notices"
            element={
              <ProtectedRoute allowedRoles={["student"]}>
                <NoticesPage />
              </ProtectedRoute>
            }
          />

        </Route>

        {/* 404 */}
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