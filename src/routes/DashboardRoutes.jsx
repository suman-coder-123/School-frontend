import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../dashboard/pages/Dashboard";
import Students from "../dashboard/pages/Students";
import Teachers from "../dashboard/pages/Teachers";

export default function DashboardRoutes() {
  return (
    <DashboardLayout>
      <Dashboard />
    </DashboardLayout>
  );
}