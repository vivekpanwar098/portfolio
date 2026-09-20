import { useEffect, useState } from "react";
import { Github, Linkedin, Menu, X, FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";

const links = ["Home", "About", "Skills", "Experience", "Projects", "Certifications", "Contact"];

export function Navbar() {
  const [active, setActive] = useState("Home");
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (entry) =>
            entry.isIntersecting &&
            setActive(entry.target.id.charAt(0).toUpperCase() + entry.target.id.slice(1)),
        ),
      { rootMargin: "-30% 0px -60%", threshold: 0 },
    );
    links.forEach((link) => {
      const node = document.getElementById(link.toLowerCase());
      if (node) observer.observe(node);
    });
    return () => observer.disconnect();
  }, []);
  const go = (name: string) => {
    document.getElementById(name.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };
  return (
    <header className="fixed inset-x-0 top-4 z-50 px-3 sm:px-5">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between rounded-lg border border-border bg-nav/80 px-4 shadow-[var(--shadow-nav)] backdrop-blur-xl"
      >
        <button
          onClick={() => go("Home")}
          aria-label="Go to home"
          className="flex h-11 w-11 items-center justify-center rounded-md border border-primary/30 bg-primary/10 font-display text-sm font-bold text-primary"
        >
          VP
        </button>
        <div className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => go(link)}
              className={`relative min-h-11 px-3 text-sm transition-colors ${active === link ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
            >
              {link}
              {active === link && <span className="absolute inset-x-3 bottom-1 h-px bg-primary" />}
            </button>
          ))}
        </div>
        <div className="hidden items-center gap-1 sm:flex">
          <Button asChild variant="ghost" size="icon">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github />
            </a>
          </Button>
          <Button asChild variant="ghost" size="icon">
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin />
            </a>
          </Button>
          <Button asChild variant="glass" size="sm">
            <a href={profile.resume} download="Vivek-Panwar-Resume.pdf">
              <FileDown /> Resume
            </a>
          </Button>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="sm:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </Button>
        {open && (
          <div className="absolute left-3 right-3 top-20 rounded-lg border border-border bg-nav p-3 shadow-[var(--shadow-nav)] sm:hidden">
            {links.map((link) => (
              <button
                key={link}
                onClick={() => go(link)}
                className="flex min-h-12 w-full items-center rounded-md px-4 text-left text-sm text-muted-foreground hover:bg-accent hover:text-foreground"
              >
                {link}
              </button>
            ))}
            <div className="mt-2 flex gap-2 border-t border-border pt-3">
              <Button asChild variant="glass" className="flex-1">
                <a href={profile.github} target="_blank" rel="noreferrer">
                  <Github /> GitHub
                </a>
              </Button>
              <Button asChild variant="glass" className="flex-1">
                <a href={profile.linkedin} target="_blank" rel="noreferrer">
                  <Linkedin /> LinkedIn
                </a>
              </Button>
            </div>
            <Button asChild variant="hero" className="mt-2 w-full">
              <a href={profile.resume} download="Vivek-Panwar-Resume.pdf">
                <FileDown /> Download Resume
              </a>
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
}
