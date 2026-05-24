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
        <div className="flex justify-center">
          <h2 className="text-3xl font-bold uppercase tracking-widest text-white">
            Web Design • Motion • UX/UI • Development •
          </h2>
        </div>
      </div>

      {/* Orange band - clockwise */}
      <div className="absolute w-[140%] rotate-6 bg-accent py-4">
        <div className="flex justify-center">
          <h2 className="text-3xl font-bold uppercase tracking-widest text-white">
            Creative Design • Branding • Strategy •
          </h2>
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
