import { useState } from "react";
import { Github, Linkedin, Mail, Phone, Send, FileDown, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Section } from "./shared";
import { profile } from "@/data/profile";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    window.setTimeout(() => setStatus("success"), 700);
  };
  return (
    <Section id="contact" className="border-t border-border bg-surface/30">
      <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
        <div>
          <p className="mb-3 font-mono text-xs uppercase tracking-[.22em] text-primary">
            07 / Contact
          </p>
          <h2 className="font-display text-4xl font-semibold leading-tight sm:text-5xl">
            Let&apos;s Build Something Intelligent
          </h2>
          <p className="mt-5 max-w-md leading-7 text-muted-foreground">
            Have a project, idea or opportunity? Let&apos;s connect and build something meaningful.
          </p>
          <div className="mt-8 space-y-3">
            <a className="contact-link" href={`mailto:${profile.email}`}>
              <Mail />
              {profile.email}
            </a>
            <a className="contact-link" href={`tel:${profile.phone.replace(/\s/g, "")}`}>
              <Phone />
              {profile.phone}
            </a>
            <a className="contact-link" href={profile.linkedin} target="_blank" rel="noreferrer">
              <Linkedin />
              LinkedIn
            </a>
            <a className="contact-link" href={profile.github} target="_blank" rel="noreferrer">
              <Github />
              GitHub
            </a>
          </div>
          <Button asChild variant="glass" className="mt-6">
            <a href={profile.resume} download="Vivek-Panwar-Resume.pdf">
              <FileDown /> Download Resume
            </a>
          </Button>
        </div>
        <form onSubmit={submit} className="panel p-6 md:p-8" aria-label="Contact form">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="field-label">
              Name
              <Input name="name" required minLength={2} placeholder="Your name" />
            </label>
            <label className="field-label">
              Email
              <Input name="email" type="email" required placeholder="you@example.com" />
            </label>
          </div>
          <label className="field-label mt-5">
            Subject
            <Input
              name="subject"
              required
              minLength={3}
              placeholder="What would you like to discuss?"
            />
          </label>
          <label className="field-label mt-5">
            Message
            <Textarea
              name="message"
              required
              minLength={10}
              placeholder="Tell me about the idea or opportunity..."
            />
          </label>
          <div className="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <Button type="submit" variant="hero" size="lg" disabled={status === "loading"}>
              {status === "loading" ? "Validating…" : "Prepare message"}
              <Send />
            </Button>
            <p className="text-xs leading-5 text-muted-foreground">
              Email delivery is not connected. This form validates your message but does not send
              it.
            </p>
          </div>
          {status === "success" && (
            <div
              role="status"
              className="mt-5 flex gap-3 rounded-md border border-success/25 bg-success/10 p-4 text-sm text-success"
            >
              <CheckCircle2 className="h-5 w-5 shrink-0" />
              Your details are valid. Please email Vivek directly to send this message.
            </div>
          )}
        </form>
      </div>
    </Section>
  );
}
