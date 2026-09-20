import { BookOpen, BriefcaseBusiness, MapPin } from "lucide-react";
import { Reveal } from "@/components/animations/reveal";
import { Section, SectionHeading } from "./shared";
import { education, experience } from "@/data/experience";

export function ExperienceEducation() {
  return (
    <Section id="experience" className="bg-surface/20">
      <SectionHeading
        eyebrow="03 / Experience"
        title="Learning by building."
        description="Professional internships and academic engineering work across frontend, full stack and AI-enabled development."
      />
      <div className="relative ml-3 border-l border-border pl-7 md:ml-5 md:pl-12">
        {experience.map((item, index) => (
          <Reveal key={item.company} delay={index * 0.07} className="relative mb-5 last:mb-0">
            <span className="absolute -left-[2.22rem] top-7 h-3 w-3 rounded-full border-2 border-background bg-primary shadow-[0_0_18px_var(--primary)] md:-left-[3.43rem]" />
            <article className="panel p-6 md:p-8">
              <div className="flex flex-col justify-between gap-4 md:flex-row">
                <div>
                  <div className="mb-3 flex items-center gap-2 text-primary">
                    <BriefcaseBusiness className="h-4 w-4" />
                    <span className="font-mono text-xs">{item.duration}</span>
                  </div>
                  <h3 className="font-display text-xl font-semibold md:text-2xl">{item.role}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{item.company}</p>
                </div>
                <p className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  {item.location}
                </p>
              </div>
              <ul className="mt-6 space-y-3">
                {item.responsibilities.map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-6 text-muted-foreground">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {point}
                  </li>
                ))}
              </ul>
              {"reference" in item && (
                <p className="mt-5 font-mono text-xs text-muted-foreground">
                  Reference: {item.reference}
                </p>
              )}
            </article>
          </Reveal>
        ))}
      </div>
      <div className="mt-20">
        <SectionHeading eyebrow="Education" title="Academic foundation." />
        <Reveal className="panel relative overflow-hidden p-7 md:p-10">
          <div className="absolute right-0 top-0 h-full w-1/3 bg-grid-fade" />
          <div className="relative flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <span className="icon-box mb-7">
                <BookOpen />
              </span>
              <h3 className="font-display text-2xl font-semibold">{education.degree}</h3>
              <p className="mt-3 max-w-xl text-muted-foreground">{education.institution}</p>
              <p className="mt-5 font-mono text-xs text-primary">{education.duration}</p>
            </div>
            <div className="border-l border-border pl-5">
              <p className="font-mono text-xs uppercase text-muted-foreground">CGPA</p>
              <p className="mt-1 font-display text-3xl font-semibold">{education.cgpa}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
