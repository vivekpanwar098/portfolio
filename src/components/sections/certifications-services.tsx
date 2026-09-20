import {
  Award,
  Bot,
  CodeXml,
  ExternalLink,
  Github,
  Globe2,
  Languages as LanguagesIcon,
  ServerCog,
  Smartphone,
  Waypoints,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/animations/reveal";
import { Section, SectionHeading } from "./shared";
import { certifications } from "@/data/certifications";
import { services } from "@/data/services";
import { profile } from "@/data/profile";

const serviceIcons = [CodeXml, ServerCog, Bot, Waypoints, Bot, Smartphone];
export function CertificationsServices() {
  return (
    <>
      <Section id="certifications" className="bg-surface/20">
        <SectionHeading eyebrow="05 / Certifications" title="Validated AI foundations." />
        <div className="grid gap-4 md:grid-cols-2">
          {certifications.map((cert, index) => (
            <Reveal
              key={cert.credential}
              delay={index * 0.08}
              className="panel flex h-full flex-col p-6 md:p-8"
            >
              <span className="icon-box mb-8">
                <Award />
              </span>
              <h3 className="font-display text-xl font-semibold leading-7">{cert.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{cert.issuer}</p>
              <div className="mt-6 grid grid-cols-2 gap-4 border-t border-border pt-5">
                <div>
                  <p className="meta-label">Date</p>
                  <p className="mt-1 font-mono text-xs">{cert.date}</p>
                </div>
                <div>
                  <p className="meta-label">Credential ID</p>
                  <p className="mt-1 break-all font-mono text-xs">{cert.credential}</p>
                </div>
              </div>
              <Button
                variant="glass"
                className="mt-7 self-start"
                disabled
                title="Certificate file not provided"
              >
                <ExternalLink /> Certificate unavailable
              </Button>
            </Reveal>
          ))}
        </div>
      </Section>
      <Section id="services">
        <SectionHeading
          eyebrow="06 / Services"
          title="From interface to intelligence."
          description="Focused development services grounded in Vivek’s actual technology experience."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = serviceIcons[index] ?? CodeXml;
            return (
              <Reveal
                key={service.title}
                delay={index * 0.04}
                className="panel group min-h-52 p-6 transition hover:-translate-y-1 hover:border-primary/40"
              >
                <span className="icon-box mb-7">
                  <Icon />
                </span>
                <h3 className="font-display text-lg font-semibold">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {service.description}
                </p>
              </Reveal>
            );
          })}
        </div>
        <div className="mt-20 grid gap-4 lg:grid-cols-[1.4fr_.6fr]">
          <Reveal className="panel relative overflow-hidden p-7 md:p-10">
            <div className="absolute right-0 top-0 h-full w-1/2 bg-grid-fade" />
            <div className="relative">
              <Github className="h-8 w-8 text-primary" />
              <p className="mt-10 font-mono text-xs uppercase tracking-[.2em] text-primary">
                GitHub
              </p>
              <h3 className="mt-3 font-display text-3xl font-semibold">
                Code, Experiments & Open Source
              </h3>
              <p className="mt-4 max-w-xl text-sm leading-6 text-muted-foreground">
                Repository data is not connected, so no activity or contribution metrics are
                displayed.
              </p>
              <Button asChild variant="hero" className="mt-7">
                <a href={profile.github} target="_blank" rel="noreferrer">
                  Visit GitHub <ExternalLink />
                </a>
              </Button>
            </div>
          </Reveal>
          <Reveal className="panel p-7 md:p-10">
            <LanguagesIcon className="h-8 w-8 text-primary" />
            <p className="mt-10 font-mono text-xs uppercase tracking-[.2em] text-primary">
              Languages
            </p>
            <div className="mt-5 space-y-3">
              {profile.languages.map((language) => (
                <div
                  key={language}
                  className="flex items-center justify-between border-b border-border pb-3 text-lg"
                >
                  <span>{language}</span>
                  <Globe2 className="h-4 w-4 text-muted-foreground" />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
