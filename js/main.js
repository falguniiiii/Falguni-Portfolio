const esc = (s) =>
  s.replace(
    /[&<>"]/g,
    (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c],
  );

document.getElementById("projects").innerHTML = PROJECTS.map((p) => {
  const pv = p.preview;

  const preview =
    pv.kind === "image"
      ? `<div class="pv image-preview" role="img" aria-label="${esc(pv.alt)}">
           <img src="${esc(pv.src)}" alt="${esc(pv.alt)}" loading="lazy">
         </div>`
      : `<div class="pv${pv.kind === "term" ? " term" : ""}" role="img" aria-label="Schematic of how ${esc(p.name)} works. Not a screenshot.">
           ${pv.rows
             .map(
               (r) =>
                 `<div class="row"><span>${pv.kind === "term" ? `<b>${esc(r[0])}</b> &gt;` : esc(r[0])}</span><span>${esc(r[1])}</span></div>`,
             )
             .join("")}
           <small>${pv.kind === "term" ? "commands from the README" : "how it works, simplified"} · not a screenshot</small>
         </div>`;

  return `<article class="proj">
    ${preview}
    <div>
      <span class="mono">${p.category.map(esc).join(" · ")}</span>
      <h3>${esc(p.name)}</h3>
      <p>${esc(p.description)}</p>
      <p style="color:var(--mute);font-size:15.5px">${esc(p.detail)}</p>
      <ul class="tags">${p.tech.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>
      <div class="links">
        <a class="ul" href="${p.github}" target="_blank" rel="noopener">
          GitHub <span class="ar" aria-hidden="true">↗</span>
        </a>
        ${p.live ? `<a class="ul" href="${p.live}" target="_blank" rel="noopener">Live site <span class="ar" aria-hidden="true">↗</span></a>` : ""}
      </div>
    </div>
  </article>`;
}).join("");
document.getElementById("skillgrid").innerHTML = Object.entries(SKILLS)
  .map(
    ([k, v]) =>
      `<div><h3>${esc(k)}</h3><ul>${v.map((s) => `<li>${esc(s)}</li>`).join("")}</ul></div>`,
  )
  .join("");
document.getElementById("resumeSlot").innerHTML = RESUME_URL
  ? `<a class="btn p" style="margin-top:14px" href="${RESUME_URL}" target="_blank" rel="noopener">Open resume (PDF)</a>`
  : `<span class="mono soon">Coming soon</span>`;

/* ---- Nav ---- */
const btn = document.querySelector(".menu"),
  list = document.getElementById("links");
btn.addEventListener("click", () => {
  const o = list.classList.toggle("open");
  btn.setAttribute("aria-expanded", o);
});
list.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    list.classList.remove("open");
    btn.setAttribute("aria-expanded", "false");
  }
});
const links = [...list.querySelectorAll("a")];
const spy = new IntersectionObserver(
  (es) =>
    es.forEach((e) => {
      if (e.isIntersecting)
        links.forEach((a) =>
          a.classList.toggle("on", a.hash === "#" + e.target.id),
        );
    }),
  { rootMargin: "-45% 0px -50% 0px" },
);
document.querySelectorAll("main section[id]").forEach((s) => spy.observe(s));

/* ---- The one interaction: dotted grid that lights up under the cursor ---- */
const hero = document.getElementById("hero");
if (!matchMedia("(prefers-reduced-motion: reduce)").matches) {
  hero.addEventListener("pointermove", (e) => {
    const r = hero.getBoundingClientRect();
    hero.style.setProperty("--x", e.clientX - r.left + "px");
    hero.style.setProperty("--y", e.clientY - r.top + "px");
  });
}
