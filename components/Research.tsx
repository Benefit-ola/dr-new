interface ResearchItem {
  type: string;
  title: string;
  org: string;
  year: string;
  description?: string;
  link?: string;
}

const research: ResearchItem[] = [
  {
    type: "Case Report",
    title: "From benign to malignant — a rare case of mucoepidermoid carcinoma of the soft palate misdiagnosed as pleomorphic adenoma",
    org: "Published — Springer",
    year: "2025",
    link: "https://link.springer.com/article/10.1007/s44337-024-00188-3",
  },
  {
    type: "Study",
    title: "Knowledge and Prevalence of Substance Abuse among Commercial Bus Drivers in Ikeja",
    org: "Independent Research",
    year: "2024",
    description: "Implemented survey and data collection for the research project. Performed statistical analysis using SPSS to evaluate the research data.",
  },
  {
    type: "Student Research",
    title: "Fabrication of a borehole drilling machine and environmental impacts",
    org: "Yaba College of Technology — Geophysics",
    year: "2016",
  },
];

export const Research = () => (
  <section id="research" className="w-full bg-[#EBF2FB] py-24 px-6 md:px-12 lg:px-16">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col items-start mb-14">
        <div className="flex items-center gap-3 mb-3">
          <span className="h-[1px] w-8 bg-[#C9A84C]" />
          <span className="text-[11px] uppercase tracking-[0.18em] font-medium text-[#C9A84C]">
            Academic contributions
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#1A3A6B] tracking-tight">
          Research <span className="text-[#C9A84C]">Experience</span>
        </h2>
      </div>

      <div className="flex flex-col gap-5">
        {research.map((item) => (
          <div
            key={item.title}
            className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-[#EBF2FB] text-[#1A3A6B] border border-[#1A3A6B]/10">
                  {item.type}
                </span>
                <span className="text-xs text-gray-400">{item.year}</span>
              </div>
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium text-[#C9A84C] hover:underline flex items-center gap-1 whitespace-nowrap"
                >
                  View publication →
                </a>
              )}
            </div>
            <h3 className="text-sm font-bold text-[#1A3A6B] leading-snug mb-1">{item.title}</h3>
            <p className="text-xs text-gray-400 mb-2">{item.org}</p>
            {item.description && (
              <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);
