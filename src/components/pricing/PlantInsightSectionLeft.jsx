export default function PlantInsightSectionLeft() {
  return (
    <div className="w-full max-w-screen-xl mx-auto py-10">
      {/* Content Row */}
      <div className="flex flex-col md:flex-row items-start gap-8">
        {/* Left: Image */}
        <div className="flex-shrink-0 w-full md:w-1/3">
          <img
            src="/ilastrations/plantCapturing.png"
            alt="Plant being captured by camera"
            className="rounded-xl object-cover h-60 w-auto"
          />
        </div>

        {/* Right: Paragraph */}
        <div className="md:w-2/3 text-gray-700 text-lg leading-relaxed">
        <h1 className="p-5 text-green-700 text-2xl"> Watch Growth in Real Time</h1>
          <p>
            GreenScope’s live stream feature lets you witness your plant’s
            journey in real time. From gentle leaf movements to subtle growth
            shifts, you can watch your plant respond to care, light, and
            atmosphere — even from miles away. It’s more than monitoring; it’s
            emotional connection. Whether you’re watering during a stressful
            moment or celebrating a bloom, the live feed brings your garden’s
            rhythm to life, helping you feel grounded, present, and proud of
            your impact.
          </p>
        </div>
      </div>
    </div>
  );
}
