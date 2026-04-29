export default function NotificationBell() {
  return (
    <div className="relative">
      <span className="text-2xl">🔔</span>
      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded">
        3
      </span>
    </div>
  );
}