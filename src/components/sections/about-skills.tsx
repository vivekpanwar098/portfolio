import {
  BrainCircuit,
  Code2,
  Database,
  GraduationCap,
  Languages,
  MapPin,
  Sparkles,
  Workflow,
} from "lucide-react";
import { Reveal } from "@/components/animations/reveal";
import { Section, SectionHeading, Tag } from "./shared";
import { profile } from "@/data/profile";
import { skillGroups } from "@/data/skills";
import portrait from "@/assets/vivek-portrait.png";

const info = [
  { icon: MapPin, label: "Location", value: profile.location },
  { icon: GraduationCap, label: "Education", value: profile.education },
  { icon: Sparkles, label: "Focus", value: profile.focus },
  { icon: Languages, label: "Languages", value: profile.languages.join(", ") },
];
const icons = [BrainCircuit, Code2, Database, Workflow, Sparkles];

export function AboutSkills() {
  return (
    <>
      <Section id="about">
        <SectionHeading eyebrow="01 / About" title="I build thoughtful digital experiences." />
        <div className="grid items-center gap-12 lg:grid-cols-[1.35fr_.65fr]">
          <Reveal>
            <p className="max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">{profile.summary}</p>
            <div className="mt-7 flex flex-wrap gap-2">
              {[
                "Frontend development",
                "Full Stack development",
                "React.js",
                "Node.js",
                "MongoDB",
                "Generative AI",
                "LLM API integration",
                "AI Chatbots",
                "AI-Enhanced UX",
              ].map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          </Reveal>
          <Reveal className="panel group overflow-hidden">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={portrait}
                alt="Vivek Panwar"
                width={1024}
                height={1024}
                loading="lazy"
                className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-x-0 bottom-0 h-2/5 bg-image-overlay" aria-hidden="true" />
              <span className="absolute bottom-5 left-5 font-display text-5xl font-semibold text-foreground/90">VP</span>
            </div>
            <div className="p-6 sm:p-7">
              <p className="font-mono text-xs font-semibold uppercase text-primary">Currently focused on</p>
              <p className="mt-2 font-display text-lg leading-7 text-foreground sm:text-xl">Turning AI capability into useful, human web products.</p>
              <div className="mt-5 border-t border-border pt-5 text-sm text-muted-foreground">
                <span className="mr-3 font-mono text-primary">&lt;/&gt;</span> Clean interfaces. Reliable systems.
              </div>
            </div>
          </Reveal>
        </div>
        <div className="mt-12 grid border border-border sm:grid-cols-2 lg:grid-cols-4">
          {info.map((item) => (
            <Reveal key={item.label} className="min-h-36 border-b border-border p-6 sm:[&:nth-child(odd)]:border-r lg:border-b-0 lg:border-r lg:last:border-r-0">
              <item.icon className="h-5 w-5 text-primary" />
              <p className="mt-8 font-mono text-[10px] uppercase text-muted-foreground">{item.label}</p>
              <p className="mt-1 text-sm font-semibold text-foreground">{item.value}</p>
            </Reveal>
          ))}
        </div>
      </Section>
      <Section id="skills">
        <SectionHeading
          eyebrow="02 / Toolkit"
          title="Technical skills, organized by impact."
          description="A practical stack for modern interfaces, dependable backends and AI-enhanced products."
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-6">
          {skillGroups.map((group, index) => {
            const Icon = icons[index] ?? Code2;
            return (
              <Reveal
                key={group.title}
                delay={index * 0.05}
                className={`panel group min-h-56 p-7 ${index < 2 ? "lg:col-span-3" : "lg:col-span-2"}`}
              >
                <span className="icon-box mb-8">
                  <Icon />
                </span>
                <h3 className="font-display text-xl font-medium">{group.title}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <Tag key={skill}>{skill}</Tag>
                  ))}
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>
    </>
  );
}
