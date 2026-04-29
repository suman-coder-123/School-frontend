export default function Footer() {
  return (
    <div className="bg-[#0F172A] text-white px-6 md:px-10 py-10">

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* LOGO + ABOUT */}
        <div>
          <h1 className="text-xl font-bold mb-3">🎓 SchoolMS</h1>
          <p className="text-sm text-gray-400">
            Providing quality education and shaping future leaders.
          </p>
        </div>

        {/* LINKS */}
        <div>
          <h2 className="font-semibold mb-3">Quick Links</h2>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Academics</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h2 className="font-semibold mb-3">Contact</h2>
          <p className="text-sm text-gray-400">📞 +91 9876543210</p>
          <p className="text-sm text-gray-400">📧 school@email.com</p>
          <p className="text-sm text-gray-400">📍 Madhya Pradesh, India</p>
        </div>

        {/* SOCIAL */}
        <div>
          <h2 className="font-semibold mb-3">Follow Us</h2>
          <div className="flex gap-4 text-xl">
            <span className="cursor-pointer hover:text-blue-400">🌐</span>
            <span className="cursor-pointer hover:text-blue-400">📘</span>
            <span className="cursor-pointer hover:text-blue-400">📸</span>
          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
        © 2026 SchoolMS. All rights reserved.
      </div>

    </div>
  );
}