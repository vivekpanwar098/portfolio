import geminiImage from "@/assets/gemini-chatbot.png";
import foodImage from "@/assets/food-expresso.png";
import whatsappImage from "@/assets/whatsapp-chatbot.png";
export type ProjectCategory = "AI" | "Web" | "Full Stack" | "Mobile";
export type Project = {
  slug: string;
  title: string;
  date: string;
  categories: ProjectCategory[];
  technologies: string[];
  details: string[];
  image: string;
  overview: string;
  features: string[];
  liveUrl?: string;
  githubUrl?: string;
};
export const projects: Project[] = [
  {
    slug: "gemini-ai-chat-app",
    title: "Gemini AI Chat App",
    date: "01/2026",
    categories: ["AI", "Web"],
    technologies: ["React 18", "Vite.js", "Google Gemini API", "Netlify"],
    image: geminiImage,
    overview:
      "A real-time conversational AI application focused on low-latency responses, resilient error handling, and secure deployment.",
    features: [
      "Real-time conversational responses",
      "Automated chat auto-scroll",
      "Rate-limit and authentication error handling",
      "Shimmer and skeleton loading states",
      "Environment-isolated API configuration",
    ],
    details: [
      "Low-Latency AI Streaming: Integrated Gemini Flash API via @google/genai SDK for real-time conversational responses with automated auto-scroll using useRef/useEffect.",
      "Resilient API Architecture: Built robust exception pipelines handling HTTP 429 rate-limits, authentication errors and network fallbacks with shimmer/skeleton loading UX.",
      "Security & Deployment: Isolated API keys via .env configurations to ensure zero exposure and set up automated Netlify CI/CD deployment.",
    ],
    liveUrl: "https://chatbot5000.netlify.app",
  },
  {
    slug: "food-expresso-app",
    title: "Food Expresso App",
    date: "05/2026",
    categories: ["Web", "Full Stack", "Mobile"],
    technologies: [
      "React.js",
      "Redux",
      "Context API",
      "JWT",
      "OpenStreetMap",
      "Live GPS Tracker",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Razorpay",
    ],
    image: foodImage,
    overview:
      "A mobile-first food delivery web application with secure authentication, cart management, payments, and live order tracking.",
    features: [
      "JWT authentication",
      "Redux Toolkit cart management",
      "Razorpay payment gateway",
      "Dynamic UPI QR code",
      "OpenStreetMap live order tracking",
      "Mobile-first responsive UI",
    ],
    details: [
      "Built a responsive Food Delivery Web Application using React.js, Vite, Tailwind CSS, Node.js, Express.js, and MongoDB.",
      "Implemented JWT Authentication, Redux Toolkit Cart Management, and React Router DOM for secure authentication and seamless user experience.",
      "Integrated Razorpay Payment Gateway, Dynamic UPI QR Code, and OpenStreetMap Live Order Tracking with a mobile-first responsive UI.",
    ],
    liveUrl: "https://foodexpresso.netlify.app",
  },
  {
    slug: "whatsapp-chatbot",
    title: "Real-Time WhatsApp Chatbot",
    date: "07/2026 – 09/2026",
    categories: ["AI", "Web", "Full Stack"],
    technologies: ["Node.js", "Express.js", "Meta WhatsApp API", "MongoDB", "Webhooks", "Render"],
    image: whatsappImage,
    overview:
      "A real-time chatbot integrated with Meta's WhatsApp Business API for secure, automated two-way messaging.",
    features: [
      "Meta Graph API integration",
      "Secure webhook verification",
      "Real-time dynamic responses",
      "API rate-limit management",
      "Message queuing and error logging",
      "Production deployment configuration",
    ],
    details: [
      "Built a RESTful Express.js backend to receive webhook events, process messages, and generate dynamic responses in real time.",
      "Implemented webhook verification and message-handling logic for secure, reliable communication with the Meta Graph API.",
      "Designed scalable message processing with error logging, rate-limit management, and message queuing for stable operation.",
    ],
    liveUrl: "https://forntend-gold.vercel.app",
  },
];
export const projectFilters = ["All", "AI", "Web", "Full Stack", "Mobile"] as const;
export const getProject = (slug: string) => projects.find((project) => project.slug === slug);
