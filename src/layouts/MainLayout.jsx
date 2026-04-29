import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

export default function MainLayout({ children }) {
  return (
    <div className="flex">
      
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 bg-[#F8FAFC] min-h-screen p-6">
        
        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        {children}

      </div>
    </div>
  );
}