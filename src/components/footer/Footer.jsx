export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 py-8 mt-20">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm text-left">
        {/* About Us */}
        <div>
          <h3 className="font-semibold text-green-800 mb-2">About Us</h3>
          <ul className="space-y-1">
            <li>
              <a href="#" className="hover:text-green-600">
                Our Mission
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600">
                Team
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600">
                Careers
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-green-800 mb-2">Contact Us</h3>
          <ul className="space-y-1">
            <li>
              Email:{" "}
              <a
                href="mailto:support@plantapp.com"
                className="hover:text-green-600"
              >
                support@plantapp.com
              </a>
            </li>
            <li>
              Phone:{" "}
              <a href="tel:+919876543210" className="hover:text-green-600">
                +91 98765 43210
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600">
                Help Center
              </a>
            </li>
          </ul>
        </div>

        {/* Upcoming Services */}
        <div>
          <h3 className="font-semibold text-green-800 mb-2">
            Upcoming Services
          </h3>
          <ul className="space-y-1">
            <li>
              <a href="#" className="hover:text-green-600">
                Live Plant Streaming
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600">
                AI Growth Tracker
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600">
                Remote Watering
              </a>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="font-semibold text-green-800 mb-2">Legal</h3>
          <ul className="space-y-1">
            <li>
              <a href="#" className="hover:text-green-600">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600">
                Copyright © 2025 PlantApp
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-xs text-gray-500 mt-8">
        © 2025 PlantApp. All rights reserved.
      </div>
    </footer>
  );
}
