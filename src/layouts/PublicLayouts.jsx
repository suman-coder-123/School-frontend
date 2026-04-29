import Navbar from "../public/components/Navbar";

export default function PublicLayout({ children }) {
  return (
    <div>
      <Navbar />
      <div className="px-6 py-4">
        {children}
      </div>
    </div>
  );
}