import Shuriken from "../../assets/icons/shuriken.png";

const services = [
  "Website Design",
  "Brand Design",
  "Logo Design",
];
const experience = [
  "Senior Designer",
  "10 Years of Experience",
  "Over 100 Customers"
];



function RotatedBands() {

  return (
    <section className="relative flex h-[300px] items-center justify-center overflow-hidden bg-white">

      {/* Dark band - anticlockwise */}
      <div className="absolute w-[140%] -rotate-6 bg-[#111] py-4 shadow-xl">
        <div className="flex w-max animate-marquee whitespace-nowrap">
          {[...Array(8)].map((_, i) => (
            <div  key={i} className="flex justify-center">
              {experience.map((item, index) => (
                <span
                  key={index}
                  className="flex items-center text-3xl font-bold tracking-widest text-white"
                >
                  {item}
                  <img src={Shuriken} alt="Shuriken" className="mx-6 h-6 w-6" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Orange band - clockwise */}
      <div className="absolute w-[140%] rotate-6 bg-accent py-4 shadow-xl">
        <div className="flex w-max animate-marquee whitespace-nowrap">
          {[...Array(8)].map((_, i) => (
            <div  key={i} className="flex justify-center">
              {services.map((item, index) => (
                <span
                  key={index}
                  className="flex items-center text-3xl font-bold tracking-widest text-white"
                >
                  {item}
                  <img src={Shuriken} alt="Shuriken" className="mx-6 h-6 w-6" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}

export default function MarqueeSection() {
  return (
    <RotatedBands />
  );
}
