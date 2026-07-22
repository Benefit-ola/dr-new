interface Affiliation {
  org: string;
  period: string;
}

interface Presentation {
  role: string;
  event: string;
  year: string;
  topic?: string;
}

interface Award {
  title: string;
  year: string;
}

interface Leadership {
  role: string;
  org: string;
  period: string;
  points: string[];
}

const presentations: Presentation[] = [
  {
    role: "Lead Presenter",
    event: "Hospital Grand Round, General Hospital, Lagos",
    year: "2024",
    topic: "Cholera Outbreak — Epidemiology and Management",
  },
];

const affiliations: Affiliation[] = [
  { org: "Institute of Human Virology, Nigeria",                     period: "2025 – Present" },
  { org: "Nigeria Medical Association",                              period: "2025 – Present" },
  { org: "Parasitology and Public Health Society of Nigeria",        period: "2024 – Present" },
  { org: "Medical Guild",                                            period: "2024 – Present" },
  { org: "Public Health Interest Group Africa (PHIGA)",              period: "2022 – Present" },
  { org: "Nigeria Institute of Science Laboratory Technology",       period: "2017 – Present" },
  { org: "Association of Science Laboratory Technologists of Nigeria", period: "2017 – Present" },
];

const leadership: Leadership[] = [
  {
    role: "Assistant Editor",
    org: "Rotaract Club of LASUCOM",
    period: "Jul 2020 – Jul 2022",
    points: [
      "Reviewed and edited articles for publication",
      "Coordinated editorial planning and collaborated with content writers",
    ],
  },
  {
    role: "Chairman",
    org: "Provost Cup and LASUCOM Olympics",
    period: "Jul 2021",
    points: [
      "Led the organisation of the Provost Cup football tournament at Lagos State University College of Medicine",
      "Secured sponsorship and ensured regulatory compliance",
    ],
  },
  {
    role: "Program Planning Coordinator",
    org: "AHMS National Convention",
    period: "Nov 2023",
    points: [],
  },
  {
    role: "Program Planning Chairman (Ramadhan)",
    org: "LASUCOM",
    period: "2019 – 2021",
    points: [],
  },
  {
    role: "Coordinator",
    org: "Yabatech Geophysics Research",
    period: "2016",
    points: [],
  },
];

const awards: Award[] = [
  { title: "Award of Service, Association of Muslim Health Students",              year: "2023" },
  { title: "Iga Idungaran Club Scholarship",                                        year: "2018" },
  { title: "Lagos State Government Bursary Scholarship",                            year: "2016 – 2021" },
  { title: "Outstanding Academic Award, National Association of Science & Technology", year: "2016" },
  { title: "Award of Service, Muslim Student Society of Nigeria, YABATECH",        year: "2016" },
];

export const PresentationsAndAffiliations = () => (
  <>
    {/* PRESENTATIONS */}
    <section id="presentations" className="w-full bg-white py-16 px-6 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-start mb-14">
          <div className="flex items-center gap-3 mb-3">
            <span className="h-[1px] w-8 bg-[#C9A84C]" />
            <span className="text-[11px] uppercase tracking-[0.18em] font-medium text-[#C9A84C]">
              Speaking
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1A3A6B] tracking-tight">
            Presentations & <span className="text-[#C9A84C]">Conferences</span>
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {presentations.map((p) => (
            <div key={p.topic} className="bg-[#1A3A6B] rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <span className="text-[10px] font-bold text-[#F0D080] uppercase tracking-widest block mb-2">
                  {p.role} · {p.year}
                </span>
                <h3 className="text-sm font-bold text-white mb-1">{p.event}</h3>
                {p.topic && (
                  <p className="text-xs text-white/50 flex items-center gap-1">
                    <span className="text-[#C9A84C]">Topic:</span> {p.topic}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* AFFILIATIONS + LEADERSHIP + AWARDS */}
    <section id="affiliations" className="w-full bg-[#F8FAFC] py-24 px-6 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">

        {/* AFFILIATIONS */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-[1px] w-6 bg-[#C9A84C]" />
            <h2 className="text-xs font-bold text-[#1A3A6B] uppercase tracking-widest">
              Professional Affiliations
            </h2>
          </div>
          <div className="flex flex-col gap-3">
            {affiliations.map((a) => (
              <div key={a.org} className="bg-white border border-gray-100 rounded-2xl px-4 py-3 shadow-sm">
                <p className="text-sm font-semibold text-[#1A3A6B] leading-snug">{a.org}</p>
                <p className="text-[10px] text-[#C9A84C] font-medium mt-1">{a.period}</p>
              </div>
            ))}
          </div>
        </div>

        {/* LEADERSHIP */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-[1px] w-6 bg-[#C9A84C]" />
            <h2 className="text-xs font-bold text-[#1A3A6B] uppercase tracking-widest">
              Leadership & Volunteering
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            {leadership.map((l) => (
              <div key={l.role + l.period} className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3 className="text-sm font-bold text-[#1A3A6B] leading-snug">{l.role}</h3>
                  <span className="text-[10px] text-gray-400 whitespace-nowrap">{l.period}</span>
                </div>
                <p className="text-xs text-gray-400 mb-2">{l.org}</p>
                {l.points.length > 0 && (
                  <ul className="flex flex-col gap-1.5">
                    {l.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-gray-500 leading-relaxed">
                        <span className="w-1 h-1 rounded-full bg-[#C9A84C] mt-1.5 flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* AWARDS */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-[1px] w-6 bg-[#C9A84C]" />
            <h2 className="text-xs font-bold text-[#1A3A6B] uppercase tracking-widest">
              Awards & Honours
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            {awards.map((a) => (
              <div key={a.title} className="bg-white border border-gray-100 rounded-2xl px-4 py-4 shadow-sm flex items-start gap-4">
                <span className="text-xl mt-0.5">🏅</span>
                <div>
                  <p className="text-sm font-semibold text-[#1A3A6B] leading-snug">{a.title}</p>
                  <p className="text-[10px] text-[#C9A84C] font-medium mt-1">{a.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  </>
);
