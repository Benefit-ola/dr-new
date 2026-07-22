"use client";

import { useEffect, useState } from "react";
import { navLinks } from "@/data";

const NavBar = () => {
  const [scrolled,    setScrolled]    = useState(false);
  const [mobileOpen,  setMobileOpen]  = useState(false);
  const [activeId,    setActiveId]    = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-3">
      <nav
        className={`relative flex items-center justify-between w-full max-w-7xl px-6 md:px-8 py-3 rounded-2xl transition-all duration-500 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl shadow-lg border border-white/20"
            : "bg-transparent"
        }`}
      >
        {/* LOGO */}
        <button
          onClick={() => scrollTo("home")}
          className="flex items-center gap-2 z-50"
        >
          <span className={`text-xl font-bold tracking-tight ${scrolled ? "text-[#1A3A6B]" : "text-white"}`}>
            Dr. Adekunle <span className="text-[#C9A84C]">Misbau</span>
          </span>
        </button>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`group relative text-sm font-medium uppercase tracking-widest transition-colors ${
                scrolled
                  ? activeId === link.id ? "text-[#1A3A6B]" : "text-gray-500 hover:text-[#1A3A6B]"
                  : activeId === link.id ? "text-[#C9A84C]" : "text-white/70 hover:text-white"
              }`}
            >
              {link.name}
              <span className={`absolute left-0 -bottom-1 h-[2px] bg-[#C9A84C] transition-all duration-300 ${
                activeId === link.id ? "w-full" : "w-0 group-hover:w-full"
              }`} />
            </button>
          ))}
        </div>

        {/* BOOK BUTTON */}
        <button
          onClick={() => scrollTo("contact")}
          className="hidden md:inline-flex items-center px-5 py-2 rounded-full bg-[#C9A84C] text-[#1A3A6B] text-sm font-semibold hover:bg-[#F0D080] transition-all duration-300"
        >
          Book Appointment
        </button>

        {/* MOBILE TOGGLE */}
        <button
          className={`md:hidden text-2xl ${scrolled ? "text-[#1A3A6B]" : "text-white"}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? "✕" : "☰"}
        </button>

        {/* MOBILE MENU */}
        {mobileOpen && (
          <div className="absolute top-full left-0 w-full mt-3 bg-white border border-gray-100 rounded-2xl shadow-xl md:hidden flex flex-col p-5 gap-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`text-left text-sm uppercase tracking-widest font-medium transition-colors ${
                  activeId === link.id ? "text-[#1A3A6B]" : "text-gray-500 hover:text-[#1A3A6B]"
                }`}
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => scrollTo("contact")}
              className="mt-2 text-center px-5 py-2.5 rounded-full bg-[#C9A84C] text-[#1A3A6B] text-sm font-semibold"
            >
              Book Appointment
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default NavBar;
