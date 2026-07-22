"use client";

export const Services = () => {
  const services = [
    { title: "General Consultation",    desc: "Comprehensive health assessment and diagnosis for adults and children." },
    { title: "Vaccination & Immunisation", desc: "Full range of vaccines for travel, childhood and adult immunisation." },
    { title: "Mental Health Assessment", desc: "Screening and referral for anxiety, depression and other conditions." },
    { title: "Chronic Disease Management",desc: "Long-term care for diabetes, hypertension and other chronic illnesses." },
    { title: "Infectious Disease Testing",desc: "Rapid testing and treatment for tropical and communicable diseases." },
    { title: "Lifestyle & Wellness",    desc: "Personalised nutrition, exercise and preventive health counseling." },
  ];

  return (
    <section id="services" className="w-full bg-white py-16 px-6 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-start mb-14">
          <div className="flex items-center gap-3 mb-3">
            <span className="h-[1px] w-8 bg-[#C9A84C]" />
            <span className="text-[11px] uppercase tracking-[0.18em] font-medium text-[#C9A84C]">
              What I offer
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1A3A6B] tracking-tight">
            Services
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <div key={s.title} className="bg-[#F8FAFC] border border-gray-100 rounded-2xl p-5 hover:border-[#C9A84C]/40 transition-all duration-300">
              <span className="text-xs font-bold text-[#C9A84C] mb-3 block">0{i + 1}</span>
              <h3 className="text-sm font-bold text-[#1A3A6B] mb-2">{s.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};