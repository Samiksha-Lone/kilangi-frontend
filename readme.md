# Kilangi Jewellery – Frontend Assignment

Responsive eCommerce homepage for the **Kilangi** jewellery brand, implemented from the provided desktop and mobile design PDFs using **HTML, CSS and vanilla JavaScript**. The goal of this project is to match the UI closely and showcase clean code plus thoughtful interactions.

---

## 🔍 Overview

- Pixel‑aligned layout based on the given desktop and mobile designs.
- Semantic HTML structure for all homepage sections.
- Custom CSS (no UI framework) for typography, spacing, and responsiveness.
- Vanilla JS for interactivity: product rendering, filtering, cart badge, toast notifications, smooth scrolling, and mobile navigation.

---

## 🧱 Tech Stack

- **HTML5** – semantic structure for all sections.
- **CSS3** – custom layout, typography, responsive design.
- **JavaScript (ES6+)** – DOM manipulation and interactions.
- **(Optional in your case)** Deployed on _Netlify / Vercel / GitHub Pages_.

---

## 🚀 Live Demo

- **Live URL:** `https://your-deployment-url.com`
- **Repository:** `https://github.com/Samiksha-Lone/kilangi-frontend.git`

_Update these links with your actual URLs._

---

## 📂 Project Structure

.
├── index.html # Main HTML file (single-page layout)
├── styles.css # All styling, layout and responsive rules
├── app.js # Interactions and dynamic behaviour
└── assets/ # Images, logo, icons used in the design


Key IDs/classes are wired to JavaScript for behaviour:

- `#bestsellerGrid` – container where JS renders product cards.
- `.tab-btn` with `data-tab` – category filter tabs.
- `#mobileMenuToggle`, `#mobileMenu` – mobile navigation toggle.
- `#cartCount` – cart badge in the header.
- `#exploreBtn`, `#anniversaryBtn` – buttons with smooth scroll.
- `#year` – auto‑updated year in the footer.

---

## ✨ Features

- **Hero Section**
  - Large two‑column hero with overlay text.
  - “Explore the Elegance” CTA scrolling to the bestsellers section.

- **Timeless Bestsellers**
  - Category tabs to filter products (`All`, `Rings`, `Necklaces`, `Bracelets`, etc.).
  - Product cards rendered from a JS data array (`PRODUCTS`).
  - Old vs. current price styling, matching the provided UI.

- **Add to Cart + Toast**
  - Clicking **Add to cart** updates the cart count badge.
  - Subtle toast notification appears and auto‑dismisses.

- **Lab‑Grown Jewellery Banner**
  - Pure CSS recreation of the “Not Just A Trend. It’s The Future.” banner.
  - Diamond shapes, 925 badge, and icons built using CSS only.

- **Gifting, Ethos & Reviews Sections**
  - Layout and copy aligned with the PDFs.
  - Smooth typography, consistent spacing, and card styles.

- **Responsive Navigation**
  - Desktop navigation bar.
  - Mobile header with a menu toggle that opens a stacked nav.

- **Fully Responsive**
  - Desktop layout closely matches the desktop PDF.
  - Mobile layout stacks sections as in the mobile PDF (tested around 375px).

---

## 🛠️ Setup & Running Locally

clone the repo
git clone https://github.com/Samiksha-Lone/kilangi-frontend.git
cd kilangi-frontend

open in browser
(no build step needed; it's a static site)

if you have Node installed
npx serve .


---

## 🧪 Notes & Decisions

- All styling is handwritten in `styles.css` to keep full control and match the designs precisely.
- Interactions are intentionally lightweight and unobtrusive (no heavy animations) to respect the original UI while demonstrating JS skills.
- Product data is mocked in `app.js` and can be replaced with real data or API calls later.

---

## 📜 License

This project was created as part of a frontend assignment and uses assets only for demonstration purposes. Please do not use it as a production site without replacing brand assets and confirming usage rights.
