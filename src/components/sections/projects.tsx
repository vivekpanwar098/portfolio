import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeading, Tag } from "./shared";
import { projectFilters, projects, type ProjectCategory } from "@/data/projects";

export function Projects() {
  const [filter, setFilter] = useState<(typeof projectFilters)[number]>("All");
  const visible = projects.filter(
    (p) => filter === "All" || p.categories.includes(filter as ProjectCategory),
  );
  return (
    <Section id="projects">
      <SectionHeading
        eyebrow="04 / Projects"
        title="Featured Projects"
        description="Selected work combining modern web development, APIs, AI and scalable application architecture."
      />
      <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filter projects">
        {projectFilters.map((item) => (
          <Button
            key={item}
            variant={filter === item ? "default" : "glass"}
            size="sm"
            onClick={() => setFilter(item)}
            aria-pressed={filter === item}
          >
            {item}
          </Button>
        ))}
      </div>
      <motion.div layout className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((project, index) => (
            <motion.article
              layout
              key={project.slug}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              whileHover={{ y: -8, scale: 1.015 }}
              transition={{ type: "spring", stiffness: 420, damping: 28 }}
              data-cursor="project"
              className="panel group relative overflow-hidden"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} abstract interface preview`}
                  loading="lazy"
                  width={1408}
                  height={912}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-image-overlay transition-opacity duration-300 group-hover:opacity-80" />
                <div className="absolute inset-0 flex items-center justify-center bg-background/30 opacity-0 backdrop-blur-[2px] transition-all duration-300 group-hover:opacity-100">
                  <span className="translate-y-3 rounded-full border border-primary/40 bg-background/85 px-4 py-2 font-mono text-xs text-primary transition-transform duration-300 group-hover:translate-y-0">
                    Explore project ↗
                  </span>
                </div>
                <span className="absolute left-4 top-4 rounded-full border border-border bg-background/80 px-3 py-1 font-mono text-[10px] backdrop-blur">
                  0{index + 1} / {project.date}
                </span>
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-xl font-semibold leading-tight">{project.title}</h3>
                    <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted-foreground">
                      {project.overview}
                    </p>
                  </div>
                  <Button asChild variant="glass" size="icon">
                    <Link
                      to="/projects/$slug"
                      params={{ slug: project.slug }}
                      aria-label={`View ${project.title}`}
                    >
                      <ArrowUpRight />
                    </Link>
                  </Button>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <Tag key={tech}>{tech}</Tag>
                  ))}
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  <Button asChild size="sm" variant="hero">
                    <Link to="/projects/$slug" params={{ slug: project.slug }}>
                      View Details <ArrowUpRight />
                    </Link>
                  </Button>
                  {project.liveUrl && (
                    <Button asChild size="sm" variant="glass">
                      <a href={project.liveUrl} target="_blank" rel="noreferrer">
                        <ExternalLink /> Live
                      </a>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button asChild size="sm" variant="glass">
                      <a href={project.githubUrl} target="_blank" rel="noreferrer">
                        <Github /> GitHub
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}
