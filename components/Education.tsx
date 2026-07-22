interface Education {
  degree: string;
  institution: string;
  period: string;
  highlights: string[];
}

interface Certification {
  title: string;
  issuer: string;
  year: string;
}

const education: Education[] = [
  {
    degree: "Bachelor of Medicine, Bachelor of Surgery (MBBS)",
    institution: "Lagos State University, Nigeria",
    period: "Nov 2016 – March 2024",
    highlights: [
      "Top 10% of class in Clinical Microbiology and excellence in practicals",
      "Coursework: Basic Principles of Microbiology and Immunology, Medical Bacteriology and Virology, Antimicrobials and Resistance, Diagnostic Techniques and Interpretation, Infection Control and Public Health",
    ],
  },
  {
    degree: "National Diploma in Science Laboratory Technology",
    institution: "Yaba College of Technology, Nigeria",
    period: "Apr 2013 – Aug 2016",
    highlights: [
      "Top 2% of graduating class",
      "Coursework: Basic Science Principles, Applied Statistics, Laboratory and Scientific Procedures",
    ],
  },
];

const certifications: Certification[] = [
  {
    title: "Data Analytics Essentials",
    issuer: "Cisco Networking Academy",
    year: "2025",
  },
  {
    title: "Basic Life Support (BLS)",
    issuer: "American Heart Association",
    year: "2022",
  },
];

export const Education = () => (
  <section id="education" className="w-full bg-white py-16 px-6 md:px-12 lg:px-16">
    <div className="max-w-7xl mx-auto">

      {/* header */}
      <div className="flex flex-col items-start mb-14">
        <div className="flex items-center gap-3 mb-3">
          <span className="h-[1px] w-8 bg-[#C9A84C]" />
          <span className="text-[11px] uppercase tracking-[0.18em] font-medium text-[#C9A84C]">
            Academic background
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#1A3A6B] tracking-tight">
          Education & <span className="text-[#C9A84C]">Certifications</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* EDUCATION — timeline style, takes 2 columns */}
        <div className="lg:col-span-2 flex flex-col gap-8">
          <h3 className="text-xs font-bold text-[#1A3A6B] uppercase tracking-widest">
            Education
          </h3>

          <div className="relative flex flex-col gap-10 pl-8 border-l-2 border-[#EBF2FB]">
            {education.map((edu) => (
              <div key={edu.degree} className="relative">
                {/* timeline dot */}
                <span className="absolute -left-[34px] top-1 w-4 h-4 rounded-full bg-[#1A3A6B] border-4 border-[#EBF2FB]" />

                <div className="bg-[#F8FAFC] border border-gray-100 rounded-2xl p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <h4 className="text-base font-bold text-[#1A3A6B] leading-snug">
                      {edu.degree}
                    </h4>
                    <span className="text-xs font-medium text-[#C9A84C] bg-[#FDF8EC] px-3 py-1 rounded-full whitespace-nowrap border border-[#C9A84C]/20">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mb-4">{edu.institution}</p>

                  <ul className="flex flex-col gap-2">
                    {edu.highlights.map((point, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] mt-1.5 flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CERTIFICATIONS — sidebar, takes 1 column */}
        <div className="flex flex-col gap-6">
          <h3 className="text-xs font-bold text-[#1A3A6B] uppercase tracking-widest">
            Certifications
          </h3>

          <div className="flex flex-col gap-4">
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className="bg-[#1A3A6B] rounded-2xl p-5 relative overflow-hidden"
              >
                <span className="absolute top-0 right-0 w-20 h-20 rounded-full bg-[#C9A84C]/10 -translate-y-6 translate-x-6" />
                <div className="relative z-10">
                  <span className="text-[10px] font-semibold text-[#F0D080] uppercase tracking-widest mb-2 block">
                    {cert.year}
                  </span>
                  <h4 className="text-sm font-bold text-white mb-1 leading-snug">
                    {cert.title}
                  </h4>
                  <p className="text-xs text-white/50">{cert.issuer}</p>
                </div>
              </div>
            ))}
          </div>

          {/* summary card */}
          <div className="bg-[#FDF8EC] border border-[#C9A84C]/20 rounded-2xl p-5 mt-2">
            <p className="text-xs text-gray-500 leading-relaxed">
              Continuously expanding expertise across clinical medicine, public health,
              and data-driven healthcare practices.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);