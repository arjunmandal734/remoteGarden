export default function BottomNavbar() {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-inner z-10">
      <div className="flex justify-around items-center py-2">
        {["Home", "Features", "Pricing", "Contact"].map((label, idx) => (
          <a key={idx} href="#" className="flex flex-col items-center text-gray-700 hover:text-green-600">
            <span className="text-xs">{label}</span>
          </a>
        ))}
      </div>
    </nav>
  );
}