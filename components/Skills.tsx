const skillGroups = [
  {
    label: "Public Health & Clinical",
    color: "bg-[#EBF2FB] text-[#1A3A6B] border-[#1A3A6B]/10",
    skills: [
      "Disease Prevention & Health Promotion",
      "Healthcare-associated Infection Risk Assessment",
      "Clinical Research",
      "Evidence-based Practices & Ethics",
      "Patient Safety & Quality Improvement",
    ],
  },
  {
    label: "Technical Skills",
    color: "bg-[#FDF8EC] text-[#8B6914] border-[#C9A84C]/20",
    skills: [
      "SPSS", "Tableau", "Data Collection", "Report Writing",
      "Microsoft Office Suite", "Google Workspace",
    ],
  },
  {
    label: "Soft Skills",
    color: "bg-[#F0FDF4] text-[#166534] border-green-200",
    skills: [
      "Communication", "Leadership & Conflict Resolution",
      "Time Management", "Adaptability", "Teamwork & Collaboration",
    ],
  },
];

export const Skills = () => (
  <section id="skills" className="w-full bg-white py-16 px-6 md:px-12 lg:px-16">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col items-start mb-14">
        <div className="flex items-center gap-3 mb-3">
          <span className="h-[1px] w-8 bg-[#C9A84C]" />
          <span className="text-[11px] uppercase tracking-[0.18em] font-medium text-[#C9A84C]">
            Competencies
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#1A3A6B] tracking-tight">
          Skills
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skillGroups.map((group) => (
          <div key={group.label} className="bg-[#F8FAFC] border border-gray-100 rounded-2xl p-6">
            <h3 className="text-xs font-bold text-[#1A3A6B] uppercase tracking-widest mb-5">
              {group.label}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className={`text-xs px-3 py-1.5 rounded-full border font-medium ${group.color}`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
