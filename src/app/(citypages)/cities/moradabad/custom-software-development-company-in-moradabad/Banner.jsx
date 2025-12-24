import Image from "next/image";

export default function Banner() {
  return (
    <section className="relative w-[400px] md:w-full h-[300px] sm:h-[400px] md:h-[570px] overflow-hidden">
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1587440871875-191322ee64b0?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Custom Software Development Company in Moradabad"
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70" />
      </div>
      
      <div className="relative z-20 flex items-center justify-center h-full px-4">
        <div className="text-center text-white max-w-5xl mt-18">
          <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-medium tracking-wide capitalize mb-4 md:mb-6 leading-tight">
            Custom Software Development Company in Moradabad
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-serif font-medium text-white tracking-wide drop-shadow-lg">
            Grow your business with smarter websites.
          </p>
        </div>
      </div>
    </section>
  );
}