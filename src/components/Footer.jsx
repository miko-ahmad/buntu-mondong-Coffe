import { MapPin, Phone, Mail, Menu } from "lucide-react";

export default function footer() {
  return (
    <footer id="contact" className="bg-amber-900 text-white py-12 px-4 md:px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-6">
        <div>
          <h5 className="text-lg md:text-xl font-bold mb-2">BuntuMondongCoffee</h5>
          <p className="text-sm md:text-base">Enjoy the best coffee</p>
        </div>
        <div>
          <h6 className="font-semibold mb-2 text-base md:text-lg">
            Contact Us
          </h6>
          <ul className="space-y-1 text-sm md:text-base">
            <li className="flex items-center gap-2">
              <MapPin size={16} /> Gura, Buntu Mondong, Kec. Buntu Batu, Kabupaten Enrekang, Sulawesi Selatan 91750
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} /> 0812-3456-7890
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} /> buntumondongcoffe@gmail.id
            </li>
          </ul>
        </div>
      </div>
      <p className="text-center text-xs md:text-sm mt-6">
        &copy; 2025 BuntuMondongCoffee. All rights reserved.
      </p>
    </footer>
  );
}
