const helloButton = document.querySelector("#helloButton");
const navLinks = document.querySelectorAll(".nav-links a, .logo");
const revealItems = document.querySelectorAll(".reveal");

helloButton.addEventListener("click", () => {
  alert("Hello World");
});

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    const target = document.querySelector(link.getAttribute("href"));

    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

const revealOnScroll = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  { threshold: 0.16 }
);

const revealVisibleItems = () => {
  revealItems.forEach((item) => {
    const rect = item.getBoundingClientRect();

    if (rect.top < window.innerHeight * 0.9 && rect.bottom > 0) {
      item.classList.add("is-visible");
    }
  });
};

revealItems.forEach((item) => {
  revealOnScroll.observe(item);
});

revealItems.forEach((item, index) => {
  item.style.setProperty("--reveal-delay", `${Math.min(index * 80, 240)}ms`);
});

revealVisibleItems();
window.addEventListener("scroll", revealVisibleItems);
