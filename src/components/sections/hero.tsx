import { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react";
import { ArrowDown, FileDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const mx = useMotionValue(50);
  const my = useMotionValue(40);
  const sx = useSpring(mx, { stiffness: 100, damping: 20 });
  const sy = useSpring(my, { stiffness: 100, damping: 20 });
  const spotlight = useMotionTemplate`radial-gradient(450px circle at ${sx}% ${sy}%, color-mix(in oklab, var(--primary) 10%, transparent), transparent 72%)`;
  return (
    <section
      ref={ref}
      id="home"
      onMouseMove={(event) => {
        if (!ref.current || reduced) return;
        const rect = ref.current.getBoundingClientRect();
        mx.set(((event.clientX - rect.left) / rect.width) * 100);
        my.set(((event.clientY - rect.top) / rect.height) * 100);
      }}
      className="relative flex min-h-screen scroll-mt-24 items-center overflow-hidden px-4 pb-20 pt-32 sm:px-6 lg:px-8"
    >
      <div className="hero-grid absolute inset-0" aria-hidden="true" />
      <motion.div
        className="absolute inset-0"
        style={{ background: spotlight }}
        aria-hidden="true"
      />
      <div className="aurora absolute inset-x-0 top-0 h-[65%]" aria-hidden="true" />
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.08fr_.92fr]">
        <motion.div
          initial={reduced ? false : "hidden"}
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          className="max-w-3xl"
        >
          {[
            <div
              key="badge"
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-success/25 bg-success/10 px-4 py-2 font-mono text-xs text-success"
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-success" /> Available for
              Opportunities
            </div>,
            <div key="hello" className="mb-4">
              <p className="font-mono text-base font-semibold text-primary sm:text-lg">
                Hi, I&apos;m Vivek Panwar
              </p>
            </div>,
            <h1
              key="title"
              className="font-display text-[clamp(3.4rem,7.4vw,7.4rem)] font-medium leading-[0.82] text-foreground"
            >
              Software
              <br />
              <span className="text-outline">Developer</span>
            </h1>,
            <h2
              key="line"
              className="mt-7 font-display text-xl font-medium text-foreground sm:text-2xl md:text-3xl"
            >
              Building Modern Web Experiences with AI
            </h2>,
            <p
              key="copy"
              className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg"
            >
              {profile.heroSummary}
            </p>,
            <div key="actions" className="mt-9 flex flex-wrap gap-3">
              <Button
                size="lg"
                variant="hero"
                onClick={() =>
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                View My Work <ArrowDown />
              </Button>
              <Button asChild size="lg" variant="glass">
                <a href={profile.resume} download="Vivek-Panwar-Resume.pdf">
                  <FileDown /> Download Resume
                </a>
              </Button>
            </div>,
            <div key="social" className="mt-6 flex items-center gap-1">
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
              <Button asChild variant="ghost" size="icon">
                <a href={`mailto:${profile.email}`} aria-label="Email Vivek">
                  <Mail />
                </a>
              </Button>
            </div>,
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 24 },
                show: { opacity: 1, y: 0, transition: { duration: 0.65 } },
              }}
            >
              {item}
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          initial={reduced ? false : { opacity: 0, x: 36 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="panel relative hidden overflow-hidden lg:block"
        >
          <div className="flex h-14 items-center justify-between border-b border-border px-5">
            <div className="flex gap-2" aria-hidden="true">
              <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/50" />
              <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/50" />
              <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/50" />
            </div>
            <span className="font-mono text-xs text-muted-foreground">vivek.profile.ts</span>
          </div>
          <div className="px-9 py-10 font-mono text-sm leading-8 text-muted-foreground xl:px-12 xl:text-base">
            <p><span className="text-code-keyword">const</span> developer = {"{"}</p>
            <p className="pl-5">name: <span className="text-primary">&quot;Vivek Panwar&quot;</span>,</p>
            <p className="pl-5">craft: [<span className="text-primary">&quot;Web&quot;</span>, <span className="text-primary">&quot;AI&quot;</span>],</p>
            <p className="pl-5">mindset: <span className="text-primary">&quot;build → learn → ship&quot;</span>,</p>
            <p className="pl-5">available: <span className="text-success">true</span></p>
            <p>{"};"}</p>
          </div>
          <div className="flex items-center justify-between border-t border-border px-5 py-4 font-mono text-[10px] text-muted-foreground">
            <span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full border border-primary" /> Systems ready</span>
            <span>Dehradun · IN</span>
          </div>
        </motion.div>
      </div>
      <a
        href="#about"
        aria-label="Scroll to About"
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground md:flex"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </a>
    </section>
  );
}
