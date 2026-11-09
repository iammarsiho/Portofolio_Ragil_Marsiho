const experiences = [
  {
    role: "Quality Control Internship",
    organization: "PT DUNIATEX — Quality Control Division, Semarang, Central Java",
    category: "professional",
    period: "April–July 2026 (3 months)",
    details: [
      "Participated in a three-month Quality Control internship within a manufacturing environment.",
      "Supported quality control activities, inspection workflows, and process-standard observations in the production area.",
      "Built practical understanding of product conformity, quality documentation, and manufacturing quality awareness.",
      "Gained direct exposure to industrial quality control and production-based problem identification."
    ]
  },
  {
    role: "Lean Production Systems Teaching Assistant",
    organization: "Production Systems Laboratory — Institut Teknologi Del",
    category: "teaching",
    period: "2025–2026",
    details: [
      "Assisted students in understanding Lean Manufacturing principles and production-system concepts.",
      "Supported practical learning on waste identification, process efficiency, and continuous improvement.",
      "Guided students in applying structured problem-solving approaches to production-related cases."
    ]
  },
  {
    role: "Calculus I & II Teaching Assistant",
    organization: "Institut Teknologi Del",
    category: "teaching",
    period: "2024–2025",
    details: [
      "Assisted lecturers in learning activities for Calculus I and Calculus II.",
      "Provided academic guidance on mathematical concepts and problem-solving techniques.",
      "Supported tutorials, discussions, and academic assessments while strengthening students’ analytical reasoning."
    ]
  },
  {
    role: "President / Chairman",
    organization: "HIMAMERA — Institut Teknologi Del",
    category: "leadership",
    period: "2025–2026",
    details: [
      "Led and coordinated the student association’s organizational activities, strategic programs, and performance priorities.",
      "Developed work plans and organizational direction while supervising department-level activities.",
      "Facilitated communication between students, faculty members, and university stakeholders.",
      "Promoted HASEA values: Harmony, Adaptability, Problem-Solving, Empathy, and Aspirations."
    ]
  },
  {
    role: "Organizational Member / Committee Member",
    organization: "Del Chess Club — Institut Teknologi Del",
    category: "leadership",
    period: "2024–2025",
    details: [
      "Participated in organizational activities and supported chess-club initiatives.",
      "Contributed to coordination and implementation of student engagement activities."
    ]
  },
  {
    role: "Project Coordinator / Team Coordinator",
    organization: "Program Mahasiswa Berdampak — Kemdiktisaintek / DPPM",
    category: "project",
    period: "2026",
    details: [
      "Coordinated a multidisciplinary student team within a community-service initiative in Desa Sigurung-gurung.",
      "Supported project planning, field coordination, and resource allocation for community implementation.",
      "Contributed to the proposal titled ‘Penerapan Teknologi Tepat Guna dan Manajemen Pengolahan Lahan yang Efektif di Desa Sigurung-gurung.’",
      "Focused on community empowerment and practical support for disaster-affected local residents through appropriate technology and effective land-management approaches."
    ],
    scope: "Reported scope: more than 50 students and an estimated IDR 120 million project budget for the overall initiative. These figures describe the program scope, not personal budget ownership."
  },
  {
    role: "Examination Operator",
    organization: "Toba Science Olympiad",
    category: "project",
    period: "Date not provided",
    details: [
      "Managed technical operations during examination activities.",
      "Supported examination-system readiness and technical troubleshooting.",
      "Helped ensure examination procedures were conducted smoothly and systematically."
    ]
  },
  {
    role: "Lean Production Systems Laboratory Assistant",
    organization: "Production Systems Laboratory — Institut Teknologi Del",
    category: "teaching",
    period: "2025–2026",
    details: [
      "Supported laboratory practical sessions, learning materials, and equipment preparation.",
      "Guided students in understanding production waste, workflow efficiency, and process improvement."
    ]
  }
];

const experienceCategories = [
  { id: "all", label: "All experience" },
  { id: "professional", label: "Professional" },
  { id: "teaching", label: "Teaching & academic" },
  { id: "leadership", label: "Leadership" },
  { id: "project", label: "Project & committee" }
];

const projects = [
  {
    id: "six-sigma-dmaic",
    title: "Sliver Quality Control Improvement Using Six Sigma DMAIC",
    originalTitle: "Analisis Pengendalian dan Peningkatan Kualitas Sliver pada Proses Produksi Benang Menggunakan Metode Six Sigma dengan Pendekatan DMAIC di PT Delta Dunia Sandang Tekstil",
    category: "Manufacturing / Quality Improvement",
    image: "assets/project-six-sigma.webp",
    imageAlt: "Seminar presentation of the Six Sigma DMAIC sliver quality improvement project.",
    summary: "A manufacturing quality-improvement project focused on sliver quality analysis in yarn production using the Six Sigma methodology and the DMAIC approach.",
    skills: ["Six Sigma", "DMAIC", "Quality Control", "Process Improvement", "Root Cause Analysis", "Manufacturing Analysis"],
    overview: "This project examined quality issues in sliver during the yarn production process at PT Delta Dunia Sandang Tekstil. Using the Six Sigma framework and the DMAIC approach, the work focused on identifying quality problems, analyzing process conditions, and proposing improvement actions to support better production performance.",
    method: "Applied the DMAIC cycle to define the problem, measure process conditions, analyze causes, improve proposed actions, and establish control-oriented recommendations.",
    status: "Project displayed using the provided seminar photo, refined to match the website’s dark visual theme."
  },
  {
    id: "guava-guts",
    title: "GUAVA GUTS",
    category: "Product Development / Entrepreneurship",
    image: "assets/project-guava-guts.webp",
    imageAlt: "GUAVA GUTS packaged functional food product display.",
    summary: "A functional food product-development concept using guava leaf extract in jelly candy form, focused on innovation, positioning, and product presentation.",
    skills: ["Product Development", "Innovation", "Market Research", "Product Packaging", "Business Modeling"],
    overview: "GUAVA GUTS is a product-development project centered on a functional food concept that uses guava leaf extract in jelly candy form. The project emphasizes product innovation, consumer-oriented development, packaging presentation, and business potential.",
    method: "Combined product-concept development, user-value thinking, and business-oriented positioning into a marketable product idea.",
    status: "Product imagery was adapted from the supplied photo and visually harmonized with the portfolio’s black-red theme."
  },
  {
    id: "biogen",
    title: "BIOGEN",
    category: "Engineering Design / Sustainable Innovation",
    image: "assets/project-biogen.webp",
    imageAlt: "BIOGEN team and poster presentation for a biogas-related engineering project.",
    summary: "A product development and engineering design project focused on converting waste into renewable biogas through anaerobic digestion.",
    skills: ["Engineering Design", "Product Development", "Sustainable Energy", "Waste Management", "System Design"],
    overview: "BIOGEN is a product-development and engineering-design project focused on converting buffalo manure into renewable biogas through an anaerobic digestion process. The project aims to transform agricultural and livestock waste into an alternative energy source while promoting sustainable waste management.",
    method: "Designed a biogas production concept by considering digester components, material selection, and process functionality to support efficient biogas generation.",
    status: "This project demonstrates the application of engineering design and problem-solving principles in sustainable energy solutions using locally available resources."
  },
  {
    id: "trash-photobooth",
    title: "Trash Photobooth",
    category: "Social Entrepreneurship / Sustainability",
    art: "trash",
    visualLabel: "CIRCULARITY / SERVICE",
    summary: "A waste-based business concept that combines environmental awareness with creative service innovation.",
    skills: ["Business Development", "Circular Economy", "Project Management", "Sustainability"],
    overview: "Trash Photobooth is a social-entrepreneurship concept that integrates waste collection and environmental awareness with creative service delivery. The project focuses on circular-economy thinking, community engagement, and business development.",
    method: "Developed as a sustainability-oriented business concept with measurable collection targets and social-impact intent.",
    status: "Reported initial achievement: over 130 kg of waste collected in three months. Reported target: more than 500 kg within six months. The target is not presented as achieved."
  },
  {
    id: "mahasiswa-berdampak",
    title: "Appropriate Technology & Effective Land Management in Desa Sigurung-gurung",
    category: "Community Service / Program Mahasiswa Berdampak",
    image: "assets/project-mahasiswa-berdampak.webp",
    imageAlt: "Program Mahasiswa Berdampak group photo for the community-service initiative.",
    summary: "A community-service initiative focused on helping disaster-affected residents through appropriate technology and effective land-management approaches.",
    skills: ["Community Development", "Project Coordination", "Stakeholder Engagement", "Appropriate Technology", "Field Implementation"],
    overview: "This project was part of Program Mahasiswa Berdampak and focused on community-service activities in Desa Sigurung-gurung, a village affected by disaster conditions. The initiative aimed to support the community through the application of appropriate technology and effective land management.",
    method: "Combined field coordination, community engagement, implementation support, and practical problem-solving through a proposal-based service program.",
    status: "Project title basis: ‘Penerapan Teknologi Tepat Guna dan Manajemen Pengolahan Lahan yang Efektif di Desa Sigurung-gurung.’"
  }
];

const skillGroups = [
  { title: "Manufacturing & Process Improvement", items: ["Lean Manufacturing", "Six Sigma", "DMAIC", "Root Cause Analysis", "Standard Operating Procedures", "Quality Management"] },
  { title: "Product Design & Engineering Analysis", items: ["Product Design", "Engineering Analysis", "Experimentation", "Problem Solving"] },
  { title: "Data Analytics", items: ["Data Collection", "Data Cleaning", "Exploratory Data Analysis", "Statistical Analysis", "Data Visualization"] },
  { title: "Business & Process Analysis", items: ["Requirements Analysis", "Problem Identification", "Stakeholder Analysis", "Business Process Mapping", "Feasibility Analysis"] },
  { title: "Project Management", items: ["Project Planning", "Resource Allocation", "Team Coordination", "Performance Monitoring"] },
  { title: "Machine Learning Foundations", items: ["Supervised Learning", "Unsupervised Learning", "Model Evaluation", "Predictive Analytics"] },
  { title: "Programming & Data", items: ["Python", "SQL"] },
  { title: "Business Intelligence", items: ["Microsoft Excel", "Power BI"] },
  { title: "Statistical & Simulation Tools", items: ["Minitab", "Arena Simulation"] },
  { title: "Productivity", items: ["Microsoft Office", "Google Workspace"] }
];

const categoryLabels = {
  professional: "Professional",
  teaching: "Teaching & academic",
  leadership: "Leadership",
  project: "Project & committee"
};

const escapeHTML = (value) => String(value).replace(/[&<>"']/g, (character) => ({
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
})[character]);

const experienceFilters = document.querySelector("#experience-filters");
const experienceList = document.querySelector("#experience-list");
const projectFilters = document.querySelector("#project-filters");
const projectGrid = document.querySelector("#project-grid");
const skillsGrid = document.querySelector("#skills-grid");

function renderFilters(container, categories, active, onSelect) {
  container.innerHTML = categories.map((category) => `
    <button class="filter-button" type="button" data-filter="${escapeHTML(category.id)}" aria-pressed="${category.id === active}">
      ${escapeHTML(category.label)}
    </button>
  `).join("");
  container.addEventListener("click", (event) => {
    const button = event.target.closest("[data-filter]");
    if (!button) return;
    onSelect(button.dataset.filter);
  });
}

function renderExperiences(filter = "all") {
  const visible = experiences.filter((item) => filter === "all" || item.category === filter);
  experienceList.innerHTML = visible.length ? visible.map((item) => {
    const id = `experience-detail-${experiences.indexOf(item)}`;
    return `
      <article class="timeline-entry">
        <span class="timeline-marker" aria-hidden="true"></span>
        <div class="experience-card">
          <button class="experience-toggle" type="button" aria-expanded="false" aria-controls="${id}">
            <span>
              <span class="experience-title">${escapeHTML(item.role)}</span>
              <span class="experience-org">${escapeHTML(item.organization)}</span>
            </span>
            <span class="experience-meta"><span class="category-tag">${escapeHTML(categoryLabels[item.category])}</span><span>${escapeHTML(item.period)}</span><span class="expand-icon" aria-hidden="true">+</span></span>
          </button>
          <div class="experience-details" id="${id}" hidden>
            <p>RESPONSIBILITIES &amp; CONTRIBUTIONS</p>
            <ul>${item.details.map((detail) => `<li>${escapeHTML(detail)}</li>`).join("")}</ul>
            ${item.scope ? `<p class="scope-note">${escapeHTML(item.scope)}</p>` : ""}
          </div>
        </div>
      </article>
    `;
  }).join("") : `<p class="empty-filter">No experience entries in this category.</p>`;

  experienceList.querySelectorAll(".experience-toggle").forEach((button) => {
    button.addEventListener("click", () => {
      const expanded = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!expanded));
      document.getElementById(button.getAttribute("aria-controls")).hidden = expanded;
      button.querySelector(".expand-icon").textContent = expanded ? "+" : "−";
    });
  });
}

function renderProjectVisual(project, index) {
  if (project.image) {
    return `
      <div class="project-media">
        <img class="project-photo" src="${escapeHTML(project.image)}" alt="${escapeHTML(project.imageAlt || project.title)}" loading="lazy" width="1250" height="938">
        <div class="project-photo-overlay">
          <span class="project-overlay-text">PROJECT / 0${index + 1}</span>
          <span class="project-overlay-pill">${escapeHTML(project.category)}</span>
        </div>
      </div>
    `;
  }
  return `
    <div class="project-art art-${escapeHTML(project.art)}" role="img" aria-label="Illustrative graphic for ${escapeHTML(project.title)}">
      <span class="art-label">${escapeHTML(project.visualLabel)}</span><span class="art-index">PROJECT / 0${index + 1}</span>
    </div>
  `;
}

function renderProjects(filter = "all") {
  const visible = filter === "all"
    ? projects
    : projects.filter((project) => project.category === filter);

  projectGrid.innerHTML = visible.length ? visible.map((project, index) => `
    <article class="project-card ${project.image ? 'project-card--photo' : 'project-card--art'} ${project.id === 'six-sigma-dmaic' ? 'project-card--featured' : ''}">
      ${renderProjectVisual(project, index)}
      <div class="project-body">
        <span class="project-category">${escapeHTML(project.category)}</span>
        <h3>${escapeHTML(project.title)}</h3>
        <p>${escapeHTML(project.summary)}</p>
        <div class="project-footer"><span class="project-tags">${escapeHTML(project.skills.slice(0, 3).join(" · "))}</span><button class="project-open" type="button" data-project="${escapeHTML(project.id)}">View details <span aria-hidden="true">↗</span></button></div>
      </div>
    </article>
  `).join("") : `<p class="empty-filter">No projects match this category.</p>`;

  projectGrid.querySelectorAll("[data-project]").forEach((button) => {
    button.addEventListener("click", () => openProject(button.dataset.project));
  });
}

function openProject(projectId) {
  const project = projects.find((item) => item.id === projectId);
  if (!project) return;
  const dialog = document.querySelector("#project-dialog");
  const content = document.querySelector("#dialog-content");
  content.innerHTML = `
    ${project.image ? `<figure class="dialog-media"><img src="${escapeHTML(project.image)}" alt="${escapeHTML(project.imageAlt || project.title)}" width="1250" height="938"><figcaption>${escapeHTML(project.category)}</figcaption></figure>` : ""}
    <p class="eyebrow">${escapeHTML(project.category)}</p>
    <h2 id="dialog-title">${escapeHTML(project.title)}</h2>
    ${project.originalTitle ? `<p class="dialog-original-title"><strong>Original project title:</strong> ${escapeHTML(project.originalTitle)}</p>` : ""}
    <p>${escapeHTML(project.overview)}</p>
    <h3>Approach</h3><p>${escapeHTML(project.method)}</p>
    <h3>Related skills</h3><p>${escapeHTML(project.skills.join(" · "))}</p>
    <p class="dialog-status">${escapeHTML(project.status)}</p>
  `;
  if (!dialog.open) dialog.showModal();
}

function renderSkills(search = "") {
  const normalizedSearch = search.trim().toLowerCase();
  const groups = skillGroups.map((group) => ({
    ...group,
    items: group.items.filter((item) => !normalizedSearch
      || item.toLowerCase().includes(normalizedSearch)
      || group.title.toLowerCase().includes(normalizedSearch))
  })).filter((group) => group.items.length);

  skillsGrid.innerHTML = groups.length ? groups.map((group) => `
    <article class="skill-card">
      <h3>${escapeHTML(group.title)}</h3>
      <div class="skill-tags">${group.items.map((item) => `<span class="skill-tag">${escapeHTML(item)}</span>`).join("")}</div>
    </article>
  `).join("") : `<p class="no-results">No skills found. Try a different search.</p>`;
}

let activeExperienceFilter = "all";
renderFilters(experienceFilters, experienceCategories, activeExperienceFilter, (filter) => {
  activeExperienceFilter = filter;
  experienceFilters.querySelectorAll("[data-filter]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.filter === filter));
  });
  renderExperiences(filter);
});
renderExperiences();

const projectCategories = [
  { id: "all", label: "All projects" },
  ...[...new Set(projects.map((project) => project.category))].map((category) => ({ id: category, label: category }))
];
renderFilters(projectFilters, projectCategories, "all", (filter) => {
  projectFilters.querySelectorAll("[data-filter]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.filter === filter));
  });
  renderProjects(filter);
});
renderProjects();
renderSkills();

document.querySelector("#skill-search").addEventListener("input", (event) => {
  renderSkills(event.target.value);
});

const projectDialog = document.querySelector("#project-dialog");
projectDialog.querySelector(".dialog-close").addEventListener("click", () => projectDialog.close());
projectDialog.addEventListener("click", (event) => {
  if (event.target === projectDialog) projectDialog.close();
});

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector("#nav-links");
function closeMenu() {
  navLinks.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation");
}
menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") !== "true";
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  navLinks.classList.toggle("is-open", isOpen);
});
navLinks.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
});

const themeButton = document.querySelector(".theme-toggle");
function updateThemeControl(theme) {
  const nextTheme = theme === "dark" ? "light" : "dark";
  themeButton.setAttribute("aria-label", `Switch to ${nextTheme} theme`);
  themeButton.querySelector(".theme-label").textContent = `${nextTheme === "light" ? "Light" : "Dark"} mode`;
  themeButton.querySelector(".theme-icon").textContent = nextTheme === "light" ? "☼" : "◐";
}
updateThemeControl(document.documentElement.dataset.theme);
themeButton.addEventListener("click", () => {
  const theme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = theme;
  document.querySelector('meta[name="theme-color"]').content = theme === "dark" ? "#08090d" : "#f4f3f1";
  updateThemeControl(theme);
  try {
    localStorage.setItem("ragil-theme", theme);
  } catch {
    themeButton.title = "Theme changed for this visit; browser storage is unavailable.";
  }
});

const navSections = [...document.querySelectorAll("main section[id]")];
if ("IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      document.querySelectorAll(".nav-links > a").forEach((link) => {
        if (link.hash === `#${entry.target.id}`) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    });
  }, { rootMargin: "-30% 0px -60% 0px" });
  navSections.forEach((section) => sectionObserver.observe(section));
}

document.querySelector(".copy-email").addEventListener("click", async (event) => {
  const feedback = document.querySelector("#copy-feedback");
  try {
    await navigator.clipboard.writeText(event.currentTarget.dataset.email);
    feedback.textContent = "Email address copied.";
  } catch {
    feedback.textContent = "Copy is unavailable here. You can select the email address above.";
  }
});

document.querySelector("#current-year").textContent = new Date().getFullYear();
