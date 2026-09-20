import type { ReactNode } from "react";
import { Reveal } from "@/components/animations/reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <Reveal className="mb-10 max-w-4xl md:mb-14">
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.22em] text-primary">{eyebrow}</p>
      <h2 className="font-display text-4xl font-normal leading-[1.08] text-foreground sm:text-5xl md:text-6xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">{description}</p>
      )}
    </Reveal>
  );
}

export function Section({
  id,
  children,
  className = "",
}: {
  id: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`scroll-mt-28 px-4 py-20 sm:px-6 md:py-28 lg:px-8 ${className}`}>
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex min-h-8 items-center rounded-md border border-border bg-secondary/40 px-3 font-mono text-xs text-secondary-foreground">
      {children}
    </span>
  );
}
