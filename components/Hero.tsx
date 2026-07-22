import Image from "next/image";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-[#1A3A6B] flex items-center overflow-hidden"
    >
      {/* decorative circles */}
      <div className="absolute top-[-80px] right-[-80px] w-[400px] h-[400px] rounded-full border border-[#C9A84C]/10 pointer-events-none" />
      <div className="absolute bottom-[-40px] left-[20%] w-[280px] h-[280px] rounded-full border border-white/5 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full flex flex-col lg:flex-row items-center justify-between gap-12 pt-28 pb-16">

        {/* LEFT */}
        <div className="flex-1 max-w-xl">

          {/* eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <span className="h-[1px] w-8 bg-[#C9A84C]" />
            <span className="text-[11px] uppercase tracking-[0.18em] font-medium text-[#C9A84C]">
              MBBS · General Practitioner
            </span>
          </div>

          {/* name */}
          <h1
            className="font-extrabold text-white leading-none tracking-tight mb-4"
            style={{ fontSize: "clamp(44px, 7vw, 76px)" }}
          >
            Dr. Adekunle
            <br />
            <span className="text-[#F0D080]">Misbau O</span>
            <span className="text-[#C9A84C]">.</span>
          </h1>

          {/* subtitle */}
          <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-md">
            Infectious Disease Control · Mental Health Counseling · Preventive Medicine
          </p>

          {/* specialty tags */}
          <div className="flex flex-wrap gap-2 mb-10">
            {["Infectious Disease", "Mental Health", "Preventive Medicine"].map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1.5 rounded-full border border-[#C9A84C]/40 text-[#F0D080] bg-[#C9A84C]/10"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="px-7 py-3 rounded-full bg-[#C9A84C] text-[#1A3A6B] text-sm font-bold hover:bg-[#F0D080] transition-colors duration-300 shadow-lg shadow-yellow-900/20"
            >
              Book Appointment
            </a>
            <a
              href="#about"
              className="px-7 py-3 rounded-full border border-white/30 text-white text-sm font-medium hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all duration-300"
            >
              View Profile
            </a>
          </div>
        </div>

        {/* RIGHT — IMAGE */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="relative w-[280px] h-[360px] md:w-[320px] md:h-[400px] lg:w-[380px] lg:h-[460px]">
            {/* offset border */}
            <div className="absolute -bottom-4 -right-4 w-full h-full rounded-3xl border border-[#C9A84C]/30 z-0" />
            {/* glow */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#C9A84C]/10 to-transparent blur-xl z-0" />
            {/* image */}
            <div className="relative z-10 w-full h-full rounded-3xl overflow-hidden border border-[#C9A84C]/20 bg-[#0F2347] flex items-center justify-center">
              {/* Replace with actual Image component when you have a photo:
                <Image src="/doctor.jpg" alt="Dr. Amara Okafor" fill className="object-cover object-top" />
              */}
              <div className="text-center">
                <p className="text-6xl mb-3">👨‍⚕️</p>
                <p className="text-white/30 text-xs">Add your photo here</p>
              </div>
            </div>

            {/* badge top right */}
            <div className="absolute -top-4 -right-4 z-20 bg-white rounded-2xl shadow-lg px-4 py-3 flex items-center gap-2 border border-gray-100">
              <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs font-semibold text-gray-700">Accepting patients</span>
            </div>

            {/* badge bottom left */}
            <div className="absolute -bottom-4 -left-4 z-20 bg-white rounded-2xl shadow-lg px-4 py-3 border border-gray-100">
              <p className="text-[10px] text-gray-400 uppercase tracking-widest">Experience</p>
              <p className="text-sm font-bold text-[#1A3A6B]">5+ Years</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
