"use client";

export default function VideoBanner() {
  return (
    <section className="relative w-full  text-black py-11 px-4 overflow-hidden">

      {/* ✅ Heading */}
      <h2 className="text-3xl sm:text-5xl md:text-6xl font-medium font-serif text-slate-900 mb-4 sm:mb-6 leading-tight tracking-tight text-left md:text-center">
        ON YOUR MARKS. GET SET GO.{" "}
        <span className="text-emerald-400">GROW.</span>
      </h2>

      {/* ✅ Subheading */}
      <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed text-left md:text-center">
        We combine strategy, creativity, technology, and data to help ambitious brands stand out, connect with their audiences, and drive sustainable growth.
      </p>

      {/* ✅ GIF Section */}
      <div className="relative mt-6 flex justify-center items-center">
        <div className="relative w-full max-w-6xl">

          <img
            src="https://res.cloudinary.com/dxpyhablz/image/upload/v1765191900/output-onlinegiftools_dw7ku9.gif"
            alt="Growth Animation"
            className="w-full h-auto object-contain rounded-lg"
          />

          {/* ✅ Soft Glow Overlay */}
          <div className="absolute inset-0 bg-black/20 rounded-lg"></div>

        </div>
      </div>

      {/* ✅ Bottom Labels */}
      <div className="mt-2 grid grid-cols-3 font-serif text-center text-lg md:text-2xl font-medium">
        <span>Strategise</span>
        <span >Execute</span>
        <span>Grow</span>
      </div>

    </section>
  );
}