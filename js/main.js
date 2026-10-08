document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger-button");
  const mobileMenu = document.querySelector(".mobile-menu");

  if (hamburger && mobileMenu) {
    hamburger.addEventListener("click", () => {
      const isOpen = hamburger.classList.toggle("active");

      mobileMenu.classList.toggle("active", isOpen);
      hamburger.setAttribute("aria-expanded", String(isOpen));
      mobileMenu.setAttribute("aria-hidden", String(!isOpen));
      hamburger.setAttribute(
        "aria-label",
        isOpen ? "Close menu" : "Open menu"
      );
      document.body.classList.toggle("menu-open", isOpen);
    });

    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        mobileMenu.classList.remove("active");
        hamburger.setAttribute("aria-expanded", "false");
        mobileMenu.setAttribute("aria-hidden", "true");
        hamburger.setAttribute("aria-label", "Open menu");
        document.body.classList.remove("menu-open");
      });
    });
  }

  document.querySelectorAll(".faq-group-header").forEach((header) => {
    header.addEventListener("click", () => {
      const body = header.nextElementSibling;
      const isExpanded = header.getAttribute("aria-expanded") === "true";

      document.querySelectorAll(".faq-group-header").forEach((otherHeader) => {
        if (otherHeader !== header) {
          otherHeader.setAttribute("aria-expanded", "false");
          const otherBody = otherHeader.nextElementSibling;
          if (otherBody) {
            otherBody.classList.remove("open");
          }
        }
      });

      header.setAttribute("aria-expanded", String(!isExpanded));

      if (body) {
        body.classList.toggle("open", !isExpanded);
      }
    });
  });

  const year = document.querySelector("#year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }
});
