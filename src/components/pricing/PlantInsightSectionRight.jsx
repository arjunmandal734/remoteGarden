export default function PlantInsightSectionRight() {
  return (
    <div className="w-full max-w-screen-xl mx-auto py-10">
      {/* Content Row */}
      <div className="flex flex-col md:flex-row items-start gap-8 ">
        {/* Right: Paragraph */}
        <div className="md:w-2/3 text-gray-700 text-lg leading-relaxed">
          <h1 className="p-5 text-green-700 text-2xl">
            Track Every Leaf, Frame by Frame
          </h1>
          <p>
            GreenScope captures daily photographs of your plant(In Bloom plan), creating a
            visual diary of its growth. Each image is analyzed to detect subtle
            changes — from leaf expansion and stem posture to color shifts and
            hydration levels. These insights are transformed into intuitive
            charts and timelines, helping you understand your plant’s rhythm,
            health, and progress with clarity. It’s not just data — it’s a
            living story told through pixels and purpose.
          </p>
        </div>
        {/* Left: Image */}
        <div className="flex-shrink-0 w-full md:w-1/3">
          <img
            src="/images/photAlbum.png"
            alt="Plant being captured by camera"
            className="rounded-xl object-cover h-60 w-auto"
          />
        </div>
      </div>
    </div>
  );
}
