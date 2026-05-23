export default function Watermark({ text }) {
  return (
    <div
      className="absolute inset-x-0 top-0 flex items-start justify-center pointer-events-none overflow-hidden select-none"
      aria-hidden
    >
      <span
        className="watermark-text whitespace-nowrap"
        style={{ fontSize: "clamp(80px, 14vw, 180px)" }}
      >
        {text}
      </span>
    </div>
  );
}
