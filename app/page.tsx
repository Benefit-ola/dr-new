"use client";

import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import { StatsStrip } from "@/components/StatsStrip";
import { About } from "@/components/About";
import { Specialties } from "@/components/Specialties";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { Research } from "@/components/Research";
import { PresentationsAndAffiliations } from "@/components/PresentationsAndAffiliations";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <section id="home"><Hero /></section>
        <StatsStrip />
        <About />
        <Specialties />
        <Experience />
        <Education />
        <Skills />
        <Research />
        <PresentationsAndAffiliations />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}