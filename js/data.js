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
      kind: "schematic",
      rows: [
        ["Input", "job description + resume"],
        ["Match score", "0–100"],
        ["Questions", "technical + behavioral"],
        ["Skill gaps", "ranked by severity"],
        ["Roadmap", "day by day"],
      ],
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
      kind: "schematic",
      rows: [
        ["Start", "score 100"],
        ["http: instead of https:", "−30"],
        ["Suspicious TLD", "−40"],
        ["IP-address hostname", "−25"],
        ["Result", "score + reasons"],
      ],
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
    live: "",
    preview: {
      kind: "term",
      rows: [
        ["you", '"Jarvis"'],
        ["you", '"open github"'],
        ["you", '"weather in [city]"'],
        ["you", '"take a screenshot"'],
        ["jarvis", "speaks the reply"],
      ],
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
  Backend: ["Node.js", "Express", "Python", "FastAPI"],
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
    "Pycharm",
    "Jupyter Notebook",
    "Vercel",
    "Render",
    "VS Code",
  ],
};
