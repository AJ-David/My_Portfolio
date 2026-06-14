/* THEME TOGGLE — Light / Dark mode */

const html = document.documentElement;
const toggleBtn = document.getElementById("theme-toggle");
const STORAGE_KEY = "david-portfolio-theme";

const ICON_DARK = '<i class="bi bi-sun-fill"></i>';
const ICON_LIGHT = '<i class="bi bi-moon-fill"></i>';

/** Apply a theme ('light' | 'dark') to the page, and update the toggle button icon. */
function applyTheme(theme) {
  if (theme === "light") {
    html.classList.add("light");
    toggleBtn.innerHTML = ICON_LIGHT;
    toggleBtn.title = "Switch to dark mode";
  } else {
    html.classList.remove("light");
    toggleBtn.innerHTML = ICON_DARK;
    toggleBtn.title = "Switch to light mode";
  }
}

/** Read saved preference, or fall back to the OS,  system preference via prefers-color-scheme. */
function getInitialTheme() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === "light" || saved === "dark") return saved;

  /* No saved preference — respect the OS setting */
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark" : "light";
}

/* Toggle between dark and light on button click */
toggleBtn.addEventListener("click", () => {
  const isLight = html.classList.contains("light");
  const next = isLight ? "dark" : "light";

  applyTheme(next);
  localStorage.setItem(STORAGE_KEY, next);
});

/* ── Init on page load ── */
applyTheme(getInitialTheme());
