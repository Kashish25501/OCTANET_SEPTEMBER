const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-3-line"
  );
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// container
ScrollReveal().reveal(".container-content h1", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".container-content h2", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".container-content p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".socials", {
  ...scrollRevealOption,
  delay: 1500,
});
ScrollReveal().reveal(".about-image-1, .about-image-3", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".about-image-2", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".about-content .section-subheader", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".about-content .section-header", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".about-content p", {
  ...scrollRevealOption,
  delay: 1500,
});
ScrollReveal().reveal(".about-content .about-btn", {
  ...scrollRevealOption,
  delay: 2000,
});

const typed = new Typed('.multiple-words', {
  strings: ['CALLING', 'CALMING'],
  typeSpeed: 130,
  backSpeed: 90,
  backDelay: 1400,
  loop: true,
});