const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const navLinks = document.querySelectorAll(".site-nav a");
const currentYear = document.querySelector("#current-year");
const productButtons = document.querySelectorAll(".product-button");
const quizSuccess = document.querySelector(".quiz-success");

// Direct Gumroad checkout pages. Gumroad captures each buyer's checkout email,
// delivers the purchased file, and keeps the customer record in the Sales dashboard.
const STORE_CONFIG = {
  reset: "https://alvarez486.gumroad.com/l/30-day-iron-reset",
  transformation: "https://alvarez486.gumroad.com/l/iron-standard-transformation",
  toolkit: "https://alvarez486.gumroad.com/l/transformation-toolkit",
  club: "https://alvarez486.gumroad.com/l/iron-training-club",
};

function closeMenu() {
  menuToggle.setAttribute("aria-expanded", "false");
  siteNav.classList.remove("is-open");
  document.body.classList.remove("nav-open");
}

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";

  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  siteNav.classList.toggle("is-open", !isOpen);
  document.body.classList.toggle("nav-open", !isOpen);
});

navLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 760) {
    closeMenu();
  }
});

currentYear.textContent = new Date().getFullYear();

productButtons.forEach((button) => {
  const productUrl = STORE_CONFIG[button.dataset.product];

  if (productUrl) {
    button.href = productUrl;
    button.textContent = "Buy Now";
    button.target = "_blank";
    button.rel = "noopener";
    return;
  }

  button.classList.add("button-disabled");
  button.setAttribute("aria-disabled", "true");
  button.addEventListener("click", (event) => event.preventDefault());
});

if (window.Tally) {
  window.Tally.loadEmbeds();
}

window.addEventListener("message", (event) => {
  if (typeof event.data !== "string" || !event.data.includes("Tally.FormSubmitted")) {
    return;
  }

  quizSuccess.hidden = false;
});
