import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/sections/hero";
import { AboutSkills } from "@/components/sections/about-skills";
import { ExperienceEducation } from "@/components/sections/experience-education";
import { Projects } from "@/components/sections/projects";
import { CertificationsServices } from "@/components/sections/certifications-services";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/footer";

const title = "Vivek Panwar | Software Developer";
const description =
  "Vivek Panwar is a Software Developer focused on modern web development, Full Stack applications, React.js, Node.js and Generative AI integrations.";
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "Software Developer, Full Stack Developer, Frontend Developer, React Developer, Next.js Developer, Generative AI Developer, Node.js Developer, Vivek Panwar",
      },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});
function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Navbar />
      <main>
        <Hero />
        <AboutSkills />
        <ExperienceEducation />
        <Projects />
        <CertificationsServices />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
