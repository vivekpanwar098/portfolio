import { ArrowUp, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";
export function Footer() {
  return (
    <footer className="border-t border-border px-4 py-8 sm:px-6">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 sm:flex-row">
        <div>
          <p className="font-display font-semibold">Vivek Panwar</p>
          <p className="mt-1 text-xs text-muted-foreground">Software Developer · Dehradun, India</p>
        </div>
        <p className="text-xs text-muted-foreground">© 2026 Vivek Panwar</p>
        <div className="flex gap-1">
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
          <Button
            variant="ghost"
            size="icon"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
          >
            <ArrowUp />
          </Button>
        </div>
      </div>
    </footer>
  );
}
