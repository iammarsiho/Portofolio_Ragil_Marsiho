(() => {
  const root = document.documentElement;
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const fine = matchMedia("(hover: hover) and (pointer: fine)").matches;
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];

  // Progress bar
  const bar = Object.assign(document.createElement("div"), { className: "scroll-progress", ariaHidden: "true" });
  document.body.prepend(bar);

  // Hero: urutan masuk, cincin, marquee
  $$(".hero-copy > *").forEach((el, i) => el.style.setProperty("--i", i));
  const visual = $(".hero-visual");
  if (visual) visual.prepend(Object.assign(document.createElement("div"), { className: "hero-ring", ariaHidden: "true" }));
  const words = ["Lean Manufacturing", "Six Sigma DMAIC", "Product Design", "Quality Engineering", "Process Optimization", "Data Analytics", "Sustainable Manufacturing", "Project Coordination"];
  const marquee = document.createElement("div");
  marquee.className = "marquee"; marquee.setAttribute("aria-hidden", "true");
  marquee.innerHTML = `<div class="marquee-track">${[...words, ...words].map((w) => `<span>${w}</span>`).join("")}</div>`;
  $("#about")?.before(marquee);

  // Parallax pointer pada hero (foto hanya bergeser, tidak diubah)
  const hero = $(".hero");
  if (hero && fine && !reduce) hero.addEventListener("pointermove", (e) => {
    const r = hero.getBoundingClientRect();
    hero.style.setProperty("--px", ((e.clientX - r.left) / r.width - .5) * 2);
    hero.style.setProperty("--py", ((e.clientY - r.top) / r.height - .5) * 2);
  });
  hero?.addEventListener("pointerleave", () => { hero.style.setProperty("--px", 0); hero.style.setProperty("--py", 0); });

  // Scroll reveal otomatis (termasuk kartu yang dirender ulang oleh filter)
  const targets = ".section-heading, .about-copy, .focus-card, .principle-card, .education-card, .filter-row, .research-list span, .empty-card, .contact-layout > *, .project-card, .timeline-entry, .skill-card, .illustration-note";
  const io = new IntersectionObserver((entries) => entries.forEach((en) => {
    if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
  }), { threshold: .12, rootMargin: "0px 0px -6% 0px" });
  const glowSel = ".principle-card, .focus-card, .skill-card, .experience-card, .empty-card, .education-card, .contact-card, .project-card";
  const tag = (el) => {
    if (el.nodeType !== 1) return;
    [el, ...$$(targets, el)].filter((n) => n.matches?.(targets) && !n.dataset.reveal).forEach((n) => {
      n.dataset.reveal = ""; n.style.setProperty("--d", `${(n.parentElement ? [...n.parentElement.children].indexOf(n) % 4 : 0) * .08}s`); io.observe(n);
    });
    [el, ...$$(glowSel, el)].filter((n) => n.matches?.(glowSel)).forEach((n) => n.classList.add("glow"));
  };
  tag(document.body);
  new MutationObserver((ms) => ms.forEach((m) => m.addedNodes.forEach(tag)))
    .observe($("main"), { childList: true, subtree: true });

  // Spotlight + tilt kartu proyek
  if (fine && !reduce) document.addEventListener("pointermove", (e) => {
    const card = e.target.closest?.(".glow");
    if (!card) return;
    const r = card.getBoundingClientRect();
    card.style.setProperty("--mx", `${e.clientX - r.left}px`);
    card.style.setProperty("--my", `${e.clientY - r.top}px`);
    if (card.matches(".project-card")) {
      card.style.setProperty("--ry", `${((e.clientX - r.left) / r.width - .5) * 5}deg`);
      card.style.setProperty("--rx", `${-((e.clientY - r.top) / r.height - .5) * 4}deg`);
    }
  });
  document.addEventListener("pointerout", (e) => {
    const c = e.target.closest?.(".project-card");
    if (c && !c.contains(e.relatedTarget)) { c.style.setProperty("--rx", "0deg"); c.style.setProperty("--ry", "0deg"); }
  });
  // Klik di mana saja pada kartu proyek membuka detail
  document.addEventListener("click", (e) => {
    const c = e.target.closest(".project-card");
    if (c && !e.target.closest("button")) c.querySelector("[data-project]")?.click();
  });

  // Marker timeline menyala saat dilewati
  const mio = new IntersectionObserver((es) => es.forEach((en) =>
    en.target.classList.toggle("is-active", en.isIntersecting || en.boundingClientRect.top < 0)),
    { rootMargin: "0px 0px -45% 0px" });
  const watchMarkers = () => $$(".timeline-marker").forEach((m) => mio.observe(m));
  watchMarkers();
  new MutationObserver(watchMarkers).observe($("#experience-list"), { childList: true });

  // Scroll: progress + header
  let lastY = scrollY, ticking = false;
  const hdr = $(".site-header");
  const onScroll = () => {
    const y = scrollY, max = root.scrollHeight - innerHeight;
    bar.style.setProperty("--sp", max > 0 ? y / max : 0);
    hdr.classList.toggle("is-scrolled", y > 20);
    hdr.classList.toggle("is-hidden", y > lastY && y > 320 && !$("#nav-links").classList.contains("is-open"));
    lastY = y; ticking = false;
  };
  addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
  onScroll();

  // Tombol magnetik
  if (fine && !reduce) $$(".button, .copy-email").forEach((b) => {
    b.addEventListener("pointermove", (e) => {
      const r = b.getBoundingClientRect();
      b.style.translate = `${(e.clientX - r.left - r.width / 2) * .15}px ${(e.clientY - r.top - r.height / 2) * .25}px`;
    });
    b.addEventListener("pointerleave", () => { b.style.translate = ""; });
  });
})();
