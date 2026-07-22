import {  specialties,} from "@/data";
import { Specialty,  } from "@/types";

export const Specialties = () => (
  <section id="specialties" className="w-full bg-white py-24 px-6 md:px-12 lg:px-16">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col items-start mb-14">
        <div className="flex items-center gap-3 mb-3">
          <span className="h-[1px] w-8 bg-[#C9A84C]" />
          <span className="text-[11px] uppercase tracking-[0.18em] font-medium text-[#C9A84C]">
            Areas of focus
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#1A3A6B] tracking-tight">
          Specialties
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {specialties.map((s: Specialty) => (
          <div
            key={s.title}
            className="group bg-[#F8FAFC] border border-gray-100 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-[#EBF2FB] flex items-center justify-center text-2xl mb-5">
              {s.icon}
            </div>
            <h3 className="text-base font-bold text-[#1A3A6B] mb-3 group-hover:text-[#C9A84C] transition-colors">
              {s.title}
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">{s.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);