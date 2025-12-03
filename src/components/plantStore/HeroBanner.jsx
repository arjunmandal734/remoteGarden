import React from "react";

export default function HeroBanner() {
  return (
    <section className="relative h-[320px] md:h-[280px] bg-gradient-to-r from-green-100 via-green-200 to-green-300 rounded-xl shadow-lg overflow-hidden mb-10 group">
      {/* Background image with subtle zoom effect */}
      <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105">
        <img
          src="/images/hero-banner.jpg"
          alt="Featured Plant"
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      {/* Glowing border effect */}
      <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-green-400 group-hover:animate-pulse"></div>

      {/* Overlay content */}
      <div className="relative z-10 px-6 md:px-12 py-10 text-center md:text-left">
        <span className="inline-block bg-green-600 text-white text-sm font-semibold px-3 py-1 rounded-full shadow-md animate-bounce">
          🌿 Featured Plant
        </span>

        <h1 className="mt-4 text-3xl md:text-4xl font-bold text-green-900 drop-shadow-lg">
          Grow Green, Live Better
        </h1>
        <p className="mt-2 text-base md:text-lg text-green-800 max-w-xl">
          Discover plants that bring life, health, and sustainability to your home.
          Today’s highlight: <span className="font-semibold">Aloe Vera</span> —
          nature’s healing companion.
        </p>
      </div>
    </section>
  );
}