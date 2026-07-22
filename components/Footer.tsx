"use client";

export const Footer = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: "smooth" });
  };

  const navItems = [
    { label: "Home",        id: "home" },
    { label: "About",       id: "about" },
    { label: "Experience",  id: "experience" },
    { label: "Research",    id: "research" },
    { label: "Skills",      id: "skills" },
    { label: "Contact",     id: "contact" },
  ];

  return (
    <footer className="w-full bg-[#0F2347] py-10 px-6 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-white/10">

          {/* brand */}
          <div>
            <p className="text-xl font-bold text-white mb-3">
              Dr. Adekunle{" "}
              <span className="text-[#C9A84C]">Misbau</span>
            </p>
            <p className="text-sm text-white/40 leading-relaxed max-w-xs">
              General Practitioner specialising in infectious disease control,
              mental health, and preventive medicine. Lagos, Nigeria.
            </p>
          </div>

          {/* navigation */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">
              Navigation
            </h4>
            <div className="flex flex-col gap-2">
              {navItems.map(({ label, id }) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className="text-left text-sm text-white/40 hover:text-[#C9A84C] transition-colors w-fit"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* hours */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">
              Clinic Hours
            </h4>
            <div className="flex flex-col gap-2 text-sm text-white/40 mb-6">
              <p>Monday – Friday: 8am – 6pm</p>
              <p>Saturday: 9am – 2pm</p>
              <p>Sunday: Closed</p>
            </div>
            <button
              onClick={() => scrollTo("contact")}
              className="text-sm font-medium text-[#C9A84C] border border-[#C9A84C]/40 px-4 py-2 rounded-full hover:bg-[#C9A84C] hover:text-[#1A3A6B] transition-all duration-300"
            >
              Book now →
            </button>
          </div>
        </div>

        {/* bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Dr. Adekunle Misbau. All rights reserved.
          </p>
          <p className="text-xs text-white/30">
            Built by{" "}
            <span className="text-[#C9A84C] font-medium">FaidatWorks</span>
          </p>
        </div>

      </div>
    </footer>
  );
};