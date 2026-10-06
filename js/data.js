/* ---- Content lives here. Edit this block to add projects, skills or the resume. ---- */
const RESUME_URL = ""; // e.g. "/resume.pdf" once the real file exists

const PROJECTS = [
  {
    name: "RoleLens",
    category: ["Web development", "AI", "React"],
    featured: true,
    description:
      "Paste a job description, add your resume or a short self-description, and get a tailored interview strategy.",
    detail:
      "A full-stack app: a React client, an Express API, and Gemini returning a validated report with a match score, technical and behavioral questions, ranked skill gaps and a day-by-day preparation plan. Reports are saved to your account, and it can generate a role-tailored resume as a PDF.",
    tech: [
      "React",
      "Vite",
      "Node.js",
      "Express",
      "MongoDB",
      "Gemini API",
      "Zod",
      "JWT",
      "Puppeteer",
    ],
    github: "https://github.com/falguniiiii/RoleLens",
    live: "https://role-lens-kappa.vercel.app",
    preview: {
      kind: "image",
      src: "assets/rolelens.png",
      alt: "Screenshot of RoleLens, showing a job description and a report with a match score, skill gaps, and a preparation plan.",
    },
  },

  {
    name: "Quick Scam Link Checker",
    category: ["Web development", "Web security", "Deployed"],
    featured: true,
    description: "Paste a link and see which suspicious patterns it triggers.",
    detail:
      "A rule-based analyzer built with Node.js, Express and vanilla JavaScript. It starts every URL at a score of 100, lowers it for each rule triggered (HTTP, odd TLDs, IP-address hosts, '@' in the URL, long URLs, scam-style keywords) and explains each reason. It checks URL patterns only, so it's a warning signal, not a verdict.",
    tech: ["Node.js", "Express", "HTML", "CSS", "JavaScript", "Render"],
    github: "https://github.com/falguniiiii/quick-scam-link-checker",
    live: "https://quick-scam-link-checker.onrender.com",
    preview: {
      kind: "image",
      src: "assets/scam-link-checker.png",
      alt: "Screenshot of the Quick Scam Link Checker showing a suspicious link analysis and safety score.",
    },
  },

  {
    name: "Jarvis Voice Assistant",
    category: ["Python", "Voice assistant", "Automation"],
    featured: true,
    description:
      'A Python voice assistant that wakes on "Jarvis" and does things you ask out loud.',
    detail:
      "Listens for a wake word, then opens websites, plays songs from a custom library, reads out weather and news, tells the time, takes screenshots, and hands open questions to Gemini. Speech comes back through text-to-speech.",
    tech: [
      "Python",
      "SpeechRecognition",
      "Gemini API",
      "gTTS",
      "Pygame",
      "OpenWeatherMap",
      "NewsAPI",
    ],
    github: "https://github.com/falguniiiii/Jarvis-Voice-Assistant",
    preview: {
      kind: "image",
      src: "assets/jarvis.png",
      alt: "Screenshot of Jarvis Voice Assistant running in the terminal and recognizing voice commands.",
    },
  },
];

const SKILLS = {
  "Web Development": [
    "HTML",
    "CSS / SCSS",
    "JavaScript",
    "React",
    "Vite",
    "Responsive Design",
  ],
  "Databases & APIs": [
    "MongoDB",
    "REST APIs",
    "Gemini API",
    "OpenWeatherMap API",
    "NewsAPI",
    "Postman",
    "JWT",
  ],
  Design: [
    "UI design",
    "UX design",
    "Figma",
    "Framer",
    "Wireframing",
    "Prototyping",
    "Accessibility",
  ],
  "Development Tools": [
    "Git",
    "GitHub",
    "PyCharm",
    "Jupyter Notebook",
    "Vercel",
    "Render",
    "VS Code",
  ],
  Backend: ["Node.js", "Express", "Python", "FastAPI"],
};
