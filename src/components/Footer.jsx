import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer id="" className="bg-resto-bright-yellow text-black ">
      <div className="mx-auto max-w-[1440px] w-full mt-[120px] px-6 pb-5">
        <div className="flex flex-col md:flex-row md:justify-between gap-6 pt-10 ">
          {/* Brand Section */}
          <div >
            <h5 className="text-lg md:text-xl font-bold mb-2">
              BuntuMondongCoffee
            </h5>
            <p className="text-sm md:text-base">Enjoy the best coffee</p>
          </div>

          {/* Contact Section */}
          <div>
            <h6 className="font-semibold mb-2 text-base md:text-lg">
              Contact Us
            </h6>
            <ul className="space-y-1 text-sm md:text-base">
              <li className="flex items-center gap-2">
                <MapPin size={16} /> Gura, Buntu Mondong, Kec. Buntu Batu,
                Kabupaten Enrekang, Sulawesi Selatan 91750
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

        {/* Footer Copyright */}
        <p className="text-center text-xs md:text-sm mt-6">
          &copy; 2025 BuntuMondongCoffee. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
