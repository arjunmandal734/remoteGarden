export default function ImpactPurchesText({ oxyzenAmount = 2.4 }) {
  return (
    <>
      {/* Mini Impact Preview */}
      <div className="text-center mt-8 animate-fade-in">
        <p className="text-sm text-green-700 font-medium italic">
          🌿 Your plant will offset{" "}
          <span className="font-semibold">{oxyzenAmount}kg CO₂/year</span> — a
          quiet step toward a greener planet.
        </p>
      </div>
    </>
  );
}
