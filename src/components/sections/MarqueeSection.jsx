const items = [
  "Website Design",
  "Brand Design",
  "Logo Design",
  "Senior Designer",
  "10 Years of Experience",
];

function Band({ dark = false, reverse = false }) {
  const repeated = [...items, ...items, ...items, ...items];
  const trackClass = reverse ? "marquee-track-reverse" : "marquee-track";
  const bg = dark ? "bg-dark" : "bg-accent";

  return (
    <div className={`overflow-hidden py-3.5 ${bg}`}>
      <div className={trackClass}>
        {repeated.map((item, i) => (
          <span key={i} className="flex items-center gap-5 px-4 whitespace-nowrap text-[13px] font-semibold tracking-wide text-white">
            {item}
            <span className="opacity-40 text-lg leading-none">×</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function MarqueeSection() {
  return (
    <section
      className="relative overflow-hidden bg-page"
      style={{ paddingTop: "40px", paddingBottom: "40px" }}
    >
      {/* Two bands crossing at ≈±7° */}
      <div className="absolute inset-0 flex flex-col justify-center" style={{ gap: "20px" }}>
        <div style={{ transform: "rotate(-7deg)", margin: "0 -15%", transformOrigin: "center" }}>
          <Band dark={false} reverse={false} />
        </div>
        <div style={{ transform: "rotate(7deg)", margin: "0 -15%", transformOrigin: "center" }}>
          <Band dark={true} reverse={true} />
        </div>
      </div>
      {/* Vertical spacer so the section has height */}
      <div aria-hidden style={{ height: "160px" }} />
    </section>
  );
}
