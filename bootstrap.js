// Efekt zvětšení loga
document.addEventListener("DOMContentLoaded", function () {
  const logo = document.querySelector(".logo");

  logo.addEventListener("mouseover", function () {
    logo.style.transform = "scale(1.2)";
  });

  logo.addEventListener("mouseout", function () {
    logo.style.transform = "scale(1)";
  });
});

// Animace navigace při scrollování
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("bg-dark");
  } else {
    navbar.classList.remove("bg-dark");
  }
});

// Plynulý scroll na sekci kontakt při kliknutí na navigaci
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});

// Validace formuláře
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Formulář byl úspěšně odeslán!");
    this.reset();
  });

// Efekt plynulého načítání formuláře
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".form-container");
  form.style.opacity = 0;
  setTimeout(() => {
    form.style.transition = "opacity 1s ease";
    form.style.opacity = 1;
  }, 500);
});

// Efekt animace při načítání sekce Skills
document.addEventListener("DOMContentLoaded", () => {
  const skillCards = document.querySelectorAll(".skill-card");

  skillCards.forEach((card, index) => {
    card.style.opacity = 0;
    card.style.transform = "translateY(30px)";

    setTimeout(() => {
      card.style.transition = "opacity 0.8s ease, transform 0.8s ease";
      card.style.opacity = 1;
      card.style.transform = "translateY(0)";
    }, index * 200);
  });
});

// Aktivace navigačních odkazů při scrollování
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  function changeActiveNav() {
    let scrollY = window.scrollY;

    sections.forEach((section) => {
      if (
        section.offsetTop - 120 <= scrollY &&
        section.offsetTop + section.offsetHeight > scrollY
      ) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href").substring(1) === section.id) {
            link.classList.add("active");
          }
        });
      }
    });
  }

  window.addEventListener("scroll", changeActiveNav);
});

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    document.querySelector(".welcome-text").classList.add("show");
  }, 1000);
});

// Zavření navigace po kliknutí na odkaz (pro mobilní verzi)
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  const navbarToggler = document.querySelector(".navbar-toggler");
  const navbarCollapse = document.querySelector(".navbar-collapse");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (navbarCollapse.classList.contains("show")) {
        // Zavře navigaci pomocí Bootstrap metody
        new bootstrap.Collapse(navbarCollapse).hide();
      }
    });
  });
});

// Efekt pro sociální ikonky
document.addEventListener("DOMContentLoaded", function () {
  const profileContainer = document.querySelector(".profile-container");
  const socialIcons = document.querySelector(".social-icons");

  let timeout;

  profileContainer.addEventListener("mouseenter", function () {
    socialIcons.style.opacity = "1";
    socialIcons.style.pointerEvents = "auto";

    clearTimeout(timeout);
  });

  profileContainer.addEventListener("mouseleave", function () {
    timeout = setTimeout(() => {
      socialIcons.style.opacity = "0";
      socialIcons.style.pointerEvents = "none";
    }, 1000);
  });
});

// Efekt přechodu mezi sekcemi
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");

  function revealSections() {
    let windowHeight = window.innerHeight;

    sections.forEach((section) => {
      let position = section.getBoundingClientRect().top;
      if (position < windowHeight - 100) {
        section.style.opacity = "1";
        section.style.transform = "scale(1)";
      }
    });
  }

  window.addEventListener("scroll", revealSections);
  revealSections(); // Aktivuje efekt při načtení stránky
});
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault(); // Zabrání výchozímu chování odkazu

      const targetId = this.getAttribute("href"); // Získá cílové ID (např. "#home")
      const offset = parseInt(this.getAttribute("data-offset")) || 100; // Získá hodnotu offsetu nebo použije výchozí 100

      // Plynulý scroll na cílovou sekci s individuálním offsetem
      document.querySelector(targetId).scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
        offsetTop: offset, // Nastaví individuální offset
      });

      // Aktualizace aktivní třídy v navigaci
      navLinks.forEach((link) => link.classList.remove("active"));
      this.classList.add("active");
    });
  });
});
