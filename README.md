# Falguni Pathak — Portfolio

Personal portfolio of Falguni Pathak, a Computer Science student in Agra, India, who builds web applications with a focus on thoughtful interfaces.


## About this project

A single-page portfolio written in plain HTML, CSS and JavaScript. There is no framework, bundler or build step, so the folder you see here is exactly what gets deployed.

It includes:

- Hero, selected work, about, experience, skills, resume / education, and contact sections
- Project case-study layouts rendered from a single data file
- A warm-neutral lavender palette defined as CSS variables
- A responsive layout with a mobile menu and no horizontal scrolling
- One interaction: a dotted grid in the hero that follows the cursor (disabled when reduced motion is requested)
- Semantic HTML, visible focus states and keyboard-accessible navigation

## Tech

| Area | Used |
| --- | --- |
| Markup | HTML5 |
| Styling | CSS (custom properties, grid, flexbox) |
| Behavior | Vanilla JavaScript |
| Fonts | Fraunces, Inter, IBM Plex Mono (Google Fonts) |

## Project structure

```
portfolio/
├── index.html        Page structure, metadata and SEO tags
├── css/
│   └── styles.css    All styling; color tokens are at the top (:root)
├── js/
│   ├── data.js       Content: projects, skills, resume link
│   └── main.js       Rendering, mobile menu, nav highlighting, hero interaction
├── assets/           Screenshots and the resume PDF go here
└── .gitignore
```

## Run it locally

No install needed. Any of these works:

- Open `index.html` in a browser.
- In VS Code, install **Live Server**, right-click `index.html` and choose **Open with Live Server**.
- From the project folder, run `python -m http.server 8000` and open `http://localhost:8000`.

## Editing the content

Almost everything you will want to change is in `js/data.js`.

**Add a project.** Copy an object in the `PROJECTS` array and change its fields:

```js
{
  name: "Project name",
  category: ["Web development", "React"],
  featured: true,
  description: "One-line summary.",
  detail: "A short paragraph about what it does.",
  tech: ["React", "Node.js"],
  github: "https://github.com/your-username/your-repo",
  live: "",                       // leave empty if there is no live site
  preview: { kind: "schematic", rows: [["Label", "value"]] }
}
```

**Edit skills.** Change the `SKILLS` object. Each key is a category and each value is a list.

**Add the resume.** Put the PDF in `assets/` and set:

```js
const RESUME_URL = "assets/resume.pdf";
```

Until it is set, the Resume section shows "Coming soon". Use a relative path with no leading `/`, so it also works when the site is served from a repository subpath.

**Change colors.** Edit the variables at the top of `css/styles.css`.

## Deploy with GitHub Pages

1. Create a new repository on GitHub. Name it `<username>.github.io` for a root URL, or any other name for a project URL.
2. From the project folder (the one that contains `index.html`):
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<username>/<repo>.git
   git push -u origin main
   ```
3. On GitHub, open **Settings → Pages**, choose **Deploy from a branch**, select `main` and `/ (root)`, and save.
4. After a minute or two the site is live at the URL shown on that page.

## Notes

- Project descriptions only cover features that exist in each project's repository.
- The internship project at ADRDE, DRDO is confidential, so the site describes the experience in general terms only.

## Contact

- Email: [falguni13.fgp@gmail.com](mailto:falguni13.fgp@gmail.com)
- GitHub: [github.com/falguniiiii](https://github.com/falguniiiii)
- LinkedIn: [falguni-pathak](https://www.linkedin.com/in/falguni-pathak-618607352)

© 2026 Falguni Pathak. All rights reserved.
