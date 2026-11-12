export default function Signature({ className = "" }) {
  return (
    <span className={`signature ${className}`} aria-hidden="true">
      Nihal<span className="signature-dot">.</span>
    </span>
  );
}
