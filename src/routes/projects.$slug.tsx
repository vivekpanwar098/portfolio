import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ExternalLink, Github, ImageOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tag } from "@/components/sections/shared";
import { getProject } from "@/data/projects";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return project;
  },
  head: ({ loaderData, params }) => {
    const title = loaderData
      ? `${loaderData.title} | Vivek Panwar`
      : "Project Not Found | Vivek Panwar";
    const description = loaderData?.overview ?? "The requested project could not be found.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/projects/${params.slug}` },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/projects/${params.slug}` }],
    };
  },
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="text-center">
        <h1 className="font-display text-4xl font-semibold">Project not found</h1>
        <Button asChild variant="hero" className="mt-6">
          <Link to="/">Return home</Link>
        </Button>
      </div>
    </div>
  ),
  component: ProjectPage,
});
function ProjectPage() {
  const project = Route.useLoaderData();
  return (
    <main className="min-h-screen bg-background">
      <header className="fixed inset-x-0 top-0 z-40 border-b border-border bg-background/80 px-4 py-4 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Button asChild variant="ghost">
            <Link to="/">
              <ArrowLeft /> Portfolio
            </Link>
          </Button>
          <span className="font-mono text-xs text-muted-foreground">{project.date}</span>
        </div>
      </header>
      <section className="px-4 pb-16 pt-28 sm:px-6 md:pb-24 md:pt-36">
        <div className="mx-auto max-w-7xl">
          <p className="font-mono text-xs uppercase tracking-[.2em] text-primary">
            Project case study
          </p>
          <h1 className="mt-5 max-w-4xl font-display text-5xl font-semibold leading-[.95] sm:text-6xl md:text-8xl">
            {project.title}
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground">
            {project.overview}
          </p>
          <div className="mt-7 flex flex-wrap gap-2">
            {project.technologies.map((item) => (
              <Tag key={item}>{item}</Tag>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {project.liveUrl ? (
              <Button asChild variant="hero">
                <a href={project.liveUrl} target="_blank" rel="noreferrer">
                  <ExternalLink /> View live project
                </a>
              </Button>
            ) : (
              <Button variant="hero" disabled>
                <ExternalLink /> Live demo unavailable
              </Button>
            )}
            {project.githubUrl ? (
              <Button asChild variant="glass">
                <a href={project.githubUrl} target="_blank" rel="noreferrer">
                  <Github /> GitHub
                </a>
              </Button>
            ) : (
              <Button variant="glass" disabled>
                <Github /> GitHub unavailable
              </Button>
            )}
          </div>
          <div className="mt-14 overflow-hidden rounded-lg border border-border">
            <img
              src={project.image}
              alt={`${project.title} abstract interface visual`}
              width={1408}
              height={912}
              className="aspect-[16/9] w-full object-cover"
            />
          </div>
        </div>
      </section>
      <section className="border-t border-border bg-surface/25 px-4 py-20 sm:px-6">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-3">
          <Detail title="Overview" className="lg:col-span-2">
            <div className="space-y-4">
              {project.details.map((detail) => (
                <p key={detail}>{detail}</p>
              ))}
            </div>
          </Detail>
          <Detail title="Features">
            <ul className="space-y-3">
              {project.features.map((feature) => (
                <li key={feature} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {feature}
                </li>
              ))}
            </ul>
          </Detail>
          <Detail title="Problem">
            <Placeholder text="A detailed problem statement has not been provided." />
          </Detail>
          <Detail title="Solution">
            <p>{project.overview}</p>
          </Detail>
          <Detail title="Architecture">
            <Placeholder text="Architecture documentation has not been provided." />
          </Detail>
          <Detail title="Screenshots" className="lg:col-span-2">
            <Placeholder icon text="Additional product screenshots have not been provided." />
          </Detail>
          <Detail title="Challenges">
            <Placeholder text="Implementation challenges have not been documented." />
          </Detail>
          <Detail title="Deployment">
            <p>
              {project.slug === "gemini-ai-chat-app"
                ? "Deployed on Netlify with automated CI/CD."
                : project.slug === "food-expresso-app"
                  ? "The live application is deployed on Netlify."
                  : "The project backend is deployed on Render and its frontend is available on Vercel."}
            </p>
          </Detail>
          <Detail title="Technology Stack">
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
            </div>
          </Detail>
        </div>
      </section>
    </main>
  );
}
function Detail({
  title,
  children,
  className = "",
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <article className={`panel p-6 md:p-8 ${className}`}>
      <p className="meta-label">{title}</p>
      <div className="mt-5 text-sm leading-7 text-muted-foreground">{children}</div>
    </article>
  );
}
function Placeholder({ text, icon = false }: { text: string; icon?: boolean }) {
  return (
    <div className="flex min-h-24 items-center gap-3 rounded-md border border-dashed border-border bg-background/40 p-5">
      {icon && <ImageOff className="h-5 w-5" />}
      <span>{text}</span>
    </div>
  );
}
