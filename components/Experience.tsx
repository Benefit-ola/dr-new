interface ExperienceItem {
  role: string;
  org: string;
  period: string;
  current?: boolean;
  points: string[];
}

const experience: ExperienceItem[] = [
  {
    role: "Medical Officer",
    org: "The Health Arena, Lagos",
    period: "Jul 2025 – Present",
    current: true,
    points: [
      "Providing comprehensive clinical care in outpatient and inpatient settings, including diagnosis, treatment, and patient monitoring across diverse medical cases",
      "Provided surgical assistance in various medical procedures, including pre-op and post-op care",
      "Collaborated with the information department to implement electronic medical records and billing software",
      "Educating patients on preventive health, medication adherence, and lifestyle modification to support long-term health outcomes",
    ],
  },
  {
    role: "Medical House Officer",
    org: "General Hospital, Lagos",
    period: "Jun 2024 – Jun 2025",
    points: [
      "Conducted thorough patient assessments to support accurate diagnoses and personalised treatment planning",
      "Collaborated with multidisciplinary teams to provide coordinated, patient-centred care across clinical departments",
      "Delivered direct medical care during high-volume consultations, assisted in surgical procedures, and provided health education to enhance recovery and reduce re-admissions",
      "Participated in an annual workshop centred on prevention of infections among healthcare workers",
      "Designed management protocols and charts on exposure to infectious disease",
    ],
  },
  {
    role: "Visiting Medical Assistant",
    org: "AfriHealth",
    period: "Mar 2023 – Feb 2024",
    points: [
      "Provided expert guidance on healthcare programs such as vaccinations, immunisations and health promotions",
      "Conducted assessments and advised on improving healthcare delivery",
    ],
  },
  {
    role: "Medical Assistant",
    org: "Lagos State Health-care Mission International",
    period: "Jan 2021 – 2024",
    points: [
      "Delivered medical assessments and treatment plans in under-served areas",
      "Worked with local health providers to improve healthcare outcomes",
    ],
  },
  {
    role: "General Health Assistant",
    org: "Lagos Food Bank",
    period: "Apr – Jun 2024",
    points: [
      "Provided consultations to food bank beneficiaries",
      "Led health assessments and developed educational programs",
      "Lectured on modes of transmission of infectious diseases",
    ],
  },
  {
    role: "Health Educator",
    org: "Local Council Development Areas, Lagos Island",
    period: "Jul 2020 – Oct 2020",
    points: [
      "Provided education and health policy guidance on the COVID-19 pandemic",
      "Assisted in implementing health policy and ensuring safety guidelines",
    ],
  },
  {
    role: "Public Health Assistant",
    org: "Olowogbowo Primary Health Care, Lagos",
    period: "Aug 2014 – Sep 2015",
    points: [
      "Collaborated with healthcare and community workers to create awareness on Ebola virus disease and prevention",
      "Designed educational materials on reporting Ebola virus disease",
      "Assisted in data collection and immediate care for workers exposed during the outbreak",
    ],
  },
];

export const Experience = () => (
  <section id="experience" className="w-full bg-[#F8FAFC] py-16 px-6 md:px-12 lg:px-16">
    <div className="max-w-5xl mx-auto">

      {/* header */}
      <div className="flex flex-col items-start mb-14">
        <div className="flex items-center gap-3 mb-3">
          <span className="h-[1px] w-8 bg-[#C9A84C]" />
          <span className="text-[11px] uppercase tracking-[0.18em] font-medium text-[#C9A84C]">
            Career journey
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#1A3A6B] tracking-tight">
          Professional <span className="text-[#C9A84C]">Experience</span>
        </h2>
      </div>

      {/* timeline */}
      <div className="relative flex flex-col gap-8 pl-8 border-l-2 border-[#EBF2FB]">
        {experience.map((job) => (
          <div key={job.role + job.period} className="relative">
            {/* timeline dot */}
            <span
              className={`absolute -left-[34px] top-1 w-4 h-4 rounded-full border-4 border-[#F8FAFC] ${
                job.current ? "bg-[#C9A84C]" : "bg-[#1A3A6B]"
              }`}
            />

            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-1">
                <div>
                  <h3 className="text-base font-bold text-[#1A3A6B]">{job.role}</h3>
                  <p className="text-sm text-gray-500">{job.org}</p>
                </div>
                <span
                  className={`text-xs font-medium px-3 py-1 rounded-full whitespace-nowrap border ${
                    job.current
                      ? "bg-[#FDF8EC] text-[#C9A84C] border-[#C9A84C]/30"
                      : "bg-gray-50 text-gray-500 border-gray-200"
                  }`}
                >
                  {job.current && (
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#C9A84C] mr-1.5 animate-pulse" />
                  )}
                  {job.period}
                </span>
              </div>

              <ul className="flex flex-col gap-2 mt-4">
                {job.points.map((point, i) => (
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
  </section>
);
