// app.js – interactions and dynamic content

// Simple product data for the Bestseller section
const PRODUCTS = [
  {
    id: 1,
    name: "Infinity Pendant Necklace",
    price: 29614,
    oldPrice: 32990,
    tag: "Best Seller",
    image: "assets/infinity-pendant.jpg",
    category: "necklaces",
  },
  {
    id: 2,
    name: "Tennis Necklace",
    price: 41290,
    oldPrice: 44990,
    tag: "New",
    image: "assets/necklace-model.jpg",
    category: "necklaces",
  },
  {
    id: 3,
    name: "Infinity Bracelet",
    price: 18990,
    oldPrice: 21990,
    tag: "Gifting Favourite",
    image: "assets/infinity-bracelet.jpg",
    category: "bracelets",
  },
  {
    id: 4,
    name: "Classic Engagement Ring",
    price: 59990,
    oldPrice: 64990,
    tag: "Wedding",
    image: "assets/engagement-ring.jpg",
    category: "rings",
  },
  {
    id: 5,
    name: "Everyday Studs",
    price: 12990,
    oldPrice: 14990,
    tag: "Daily Wear",
    image: "assets/earring.jpg",
    category: "rings",
  },
];

let cartCount = 0;

// Render products into Bestseller grid
function renderProducts(filter = "all") {
  const grid = document.getElementById("bestsellerGrid");
  if (!grid) return;

  const items =
    filter === "all"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === filter);

  grid.innerHTML = items
    .map(
      (p) => `
      <article class="bestseller-card">
        <div class="bestseller-card-image">
          <img src="${p.image}" alt="${p.name}">
        </div>
        <h3 class="bestseller-card-title">${p.name}</h3>
        <div class="bestseller-card-prices">
          <span class="current">₹${p.price.toLocaleString("en-IN")}</span>
          <span class="old">₹${p.oldPrice.toLocaleString("en-IN")}</span>
        </div>
        <button class="btn-add" type="button" data-id="${p.id}">
          Add to cart
        </button>
      </article>
    `
    )
    .join("");
}

// Tabs behaviour (desktop + mobile)
function initTabs() {
  const tabButtons = document.querySelectorAll(".tab-btn");
  const panels = document.querySelectorAll(".tab-panel");
  if (!tabButtons.length) return;

  tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = btn.dataset.tab || "all";

      tabButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      panels.forEach((panel) => {
        const match =
          panel.dataset.tabPanel === target ||
          (target === "all" && panel.dataset.tabPanel === "all");
        panel.classList.toggle("active", match);
      });

      renderProducts(target);
    });
  });
}

// Mobile menu
function initMobileMenu() {
  const toggle = document.getElementById("mobileMenuToggle");
  const menu = document.getElementById("mobileMenu");
  if (!toggle || !menu) return;

  toggle.addEventListener("click", () => {
    const open = menu.style.display === "flex";
    menu.style.display = open ? "none" : "flex";
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.style.display = "none";
    });
  });
}

// Toast
let toastTimeout;
function showToast(message) {
  let el = document.getElementById("toast");
  if (!el) {
    el = document.createElement("div");
    el.id = "toast";
    Object.assign(el.style, {
      position: "fixed",
      bottom: "1.5rem",
      right: "1.5rem",
      padding: "0.8rem 1.2rem",
      borderRadius: "999px",
      background: "hsl(168 35% 22%)",
      color: "#fdfdfb",
      fontSize: "0.85rem",
      boxShadow: "0 16px 40px rgba(0,0,0,0.18)",
      zIndex: 50,
      opacity: 0,
      transform: "translateY(20px)",
      transition: "all 0.25s ease",
    });
    document.body.appendChild(el);
  }

  el.textContent = message;
  clearTimeout(toastTimeout);

  requestAnimationFrame(() => {
    el.style.opacity = "1";
    el.style.transform = "translateY(0)";
  });

  toastTimeout = setTimeout(() => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
  }, 2400);
}

// Cart buttons
function initCart() {
  const grid = document.getElementById("bestsellerGrid");
  const cartCountEl = document.getElementById("cartCount");
  if (!grid || !cartCountEl) return;

  grid.addEventListener("click", (e) => {
    const btn = e.target.closest(".btn-add");
    if (!btn) return;

    cartCount += 1;
    cartCountEl.textContent = String(cartCount);
    showToast("Added to cart");
  });
}

// Smooth scroll for hero CTA and gifts buttons
function initScrollLinks() {
  const exploreBtn = document.getElementById("exploreBtn");
  const anniversaryBtn = document.getElementById("anniversaryBtn");

  if (exploreBtn) {
    exploreBtn.addEventListener("click", () => {
      const el = document.getElementById("bestsellers");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    });
  }

  if (anniversaryBtn) {
    anniversaryBtn.addEventListener("click", () => {
      const el = document.getElementById("gifts");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    });
  }
}

// Footer year
function setYear() {
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
}

// Init all when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  renderProducts("all");
  initTabs();
  initMobileMenu();
  initCart();
  initScrollLinks();
  setYear();
});
