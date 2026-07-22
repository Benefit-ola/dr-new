import { facts } from "@/data";
import { Fact } from "@/types";

const interests = [
  "Healthcare-Associated Infections",
  "Infection Prevention & Control",
  "Disease Surveillance & Outbreak Response",
  "Antimicrobial Stewardship",
  "Public Health Research",
  "Patient Safety",
];

export const About = () => (
  <section id="about" className="w-full bg-[#EBF2FB] py-16 px-6 md:px-12 lg:px-16">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

      {/* image */}
      <div className="relative flex justify-center lg:justify-start">
        <div className="relative w-[280px] h-[340px] md:w-[340px] md:h-[400px]">
          <div className="absolute -bottom-4 -right-4 w-full h-full rounded-3xl border border-[#C9A84C]/30 z-0" />
          <div className="relative z-10 w-full h-full rounded-3xl bg-[#1A3A6B] flex items-center justify-center border border-[#C9A84C]/20 overflow-hidden">
            {/* Replace with Image when you have a photo */}
            <p className="text-6xl">👨‍⚕️</p>
          </div>
          <div className="absolute -top-4 -right-4 z-20 bg-white rounded-2xl shadow-lg px-4 py-3 border border-gray-100 text-center">
            <p className="text-2xl font-extrabold text-[#1A3A6B]">5+</p>
            <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">Years</p>
          </div>
        </div>
      </div>

      {/* text */}
      <div>
        <div className="flex items-center gap-3 mb-4">
          <span className="h-[1px] w-8 bg-[#C9A84C]" />
          <span className="text-[11px] uppercase tracking-[0.18em] font-medium text-[#C9A84C]">
            About the doctor
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A3A6B] tracking-tight mb-6">
          Committed to <span className="text-[#C9A84C]">whole-person</span> care
        </h2>

        <p className="text-gray-500 text-sm leading-relaxed mb-6">
          A dedicated and highly motivated medical doctor with a strong clinical and
          community health background in healthcare-associated infections, disease
          prevention, and evidence-based infection control practices. Committed to
          strengthening infection prevention strategies and supporting safer healthcare
          systems — particularly in resource-limited environments.
        </p>

        {/* interests card */}
        <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm mb-8">
          <h3 className="text-xs font-bold text-[#1A3A6B] uppercase tracking-widest mb-4">
            Areas of Interest
          </h3>
          <div className="flex flex-wrap gap-2">
            {interests.map((interest) => (
              <span
                key={interest}
                className="text-xs px-3 py-1.5 rounded-full bg-[#EBF2FB] text-[#1A3A6B] border border-[#1A3A6B]/10"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>

        {/* facts grid */}
        <div className="grid grid-cols-2 gap-3">
          {facts.map((fact: Fact) => (
            <div key={fact.label} className="bg-white border border-gray-100 rounded-2xl px-4 py-3 shadow-sm">
              <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-1">{fact.label}</p>
              <p className="text-sm font-semibold text-[#1A3A6B]">{fact.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);