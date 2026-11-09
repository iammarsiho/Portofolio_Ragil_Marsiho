# Ragil Marsiho — Portfolio redesign (HTML, CSS, JavaScript)

Version: 8 November 2026. No Node.js, npm, React, or paid service is needed.

## Run locally

Open this entire folder in VS Code, then right-click `index.html` and choose **Open with Live Server**. Or double-click `index.html` to open it in Chrome/Edge.

## What's included

- `index.html` — main page, nav, hero, About, education, experience, projects, skills, contact.
- `style.css` — dark-red engineering design, integrated hero photo, editorial project cards, and responsive layouts.
- `script.js` — professional experience timeline, project categories, project-detail dialog, mobile menu, theme switcher, skill search.
- `assets/ragil-hero.webp`, `assets/ragil-avatar.webp`, `assets/ragil-about.webp` — portrait photography.
- `assets/logo-del.jpg` — official institutional mark supplied by the user.
- `assets/project-six-sigma.webp` — edited seminar photograph, dark theme.
- `assets/project-guava-guts.webp` — edited product photograph, dark theme.
- `assets/project-biogen.webp` — edited BIOGEN team photograph, dark theme.
- `assets/project-mahasiswa-berdampak.webp` — edited community initiative photo, dark theme.

Four AI-styled project images have been optimized to WebP for faster loading. Original unedited photographs are not included in this website package; keep them separately as original evidence.

## Content changes

- Quality Control Internship: PT DUNIATEX, Semarang, April–July 2026 (three months).
- Education: Institut Teknologi Del, August 2023–Present.
- Six Sigma/DMAIC project made specific to sliver quality improvement in textile yarn production at PT Delta Dunia Sandang Tekstil.
- GUAVA GUTS project photo added.
- BIOGEN project added using the project description provided by the user.
- Solar Water Harvester removed.
- Program Mahasiswa Berdampak replaced with the Desa Sigurung-gurung appropriate technology and land-management community-service project.
- Trash Photobooth retained without a fabricated photograph.

## Important publishing checks

The four project photographs are **AI-edited artwork** derived from supplied references. AI editing can change small text, logos, faces, equipment details, and labels. In particular, the BIOGEN poster visible in the edited image may contain subject-matter terminology that does not match the separately supplied buffalo-manure / anaerobic-digestion description. Replace project images with original documentary photos for applications where factual accuracy is important. Do not treat the AI-styled edits as original evidence.

The internship date shown as April–July 2026 is user-provided as a 3-month placement; verify the exact start/end days if this is needed for a CV. Skills and achievements are not assigned unsupported numbers.

## Final manual QA

1. Run `index.html` in Chrome via Live Server.
2. Scroll to Projects: verify there are **five** cards and that each cover corresponds to the correct project.
3. Click **View details** on each project; verify dialog and dismissal.
4. Try project filters and experience filters.
5. Resize to 390, 768, and 1440 px. Check wrapping, nav and photo crops.
6. Toggle light/dark theme and check readability.
7. Verify the original project documents and AI-styled graphics before public posting.

Static JavaScript syntax check: `node --check script.js`.


## Hero V4 — Layered Typography Behind Portrait

Only the Hero Section was modified. The oversized `RAGIL` text is genuine HTML text (`.hero-bigtype`), not an image, and can be edited directly in `index.html`. The foreground portrait uses `assets/ragil-portrait-transparent.png`, a transparent-background cutout prepared from the supplied headshot. `style.css` contains the `HERO V4` override block controlling absolute positioning and z-index.

Layer order: background → large RAGIL typography → transparent portrait → copy and caption. On small screens the portrait stacks beneath the copy while keeping the large letters behind the person. All other sections, project image paths, and JavaScript remain unchanged.

Run the website using Live Server or open `index.html` directly. Keep the `assets/` folder when uploading to GitHub Pages.

## V5 presentation changes

- Removed the large decorative `RAGIL` word from the Hero Section, retaining the previous background colors, lighting, and transparent portrait.
- Removed the About portrait while keeping the biography and professional-focus card.
- No other sections or behavior intentionally changed.

## V6 — Modern motion layer

Tambahan file `modern.css` dan `modern.js` (dimuat setelah file lama). Semua foto di `assets/` tidak diubah sama sekali; wajah dan rambut tetap asli. Fitur: urutan animasi masuk hero, cincin berputar di belakang potret, parallax pointer, marquee keahlian, scroll reveal, spotlight & tilt kartu, unmask foto proyek, timeline menyala, dialog animasi, progress bar, header auto-hide, tombol magnetik, dan dukungan `prefers-reduced-motion`.
