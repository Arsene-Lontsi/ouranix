import { motion } from "framer-motion";

import Partner1 from "../../assets/partners/partner1.png";
import Partner2 from "../../assets/partners/partner2.png";
import Partner3 from "../../assets/partners/partner3.png";
import Partner4 from "../../assets/partners/partner4.png";
import Partner5 from "../../assets/partners/partner5.png";
import Partner6 from "../../assets/partners/partner6.png";
import Partner7 from "../../assets/partners/partner7.png";

const partners = [
  Partner1,
  Partner2,
  Partner3,
  Partner4,
  Partner5,
  Partner6,
  Partner7
];

export default function ClientStrip() {
  return (
    <section className="relative overflow-hidden py-8">

      {/* Fade effect on edges */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-64 bg-linear-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-64 bg-linear-to-l from-white to-transparent" />

      <div className="flex overflow-hidden ">
        {/* Marquee container */}
        <div className="flex shrink-0 items-center justify-between gap-16 animate-logo-marquee">
          {partners.map((partner, index) => (
            <img
              key={index}
              src={partner}
              alt={`Partner ${index + 1}`}
              className="h-16 w-auto object-contain"
            />
          ))}
        </div>

        {/* Marquee container duplicate*/}
        <div className="flex shrink-0 items-center justify-between gap-16 animate-logo-marquee">
          {partners.map((partner, index) => (
            <img
              key={index}
              src={partner}
              alt={`Partner ${index + 1}`}
              className="h-16 w-auto object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
