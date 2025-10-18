
// Slogan typewriter effect with delay and loop
document.addEventListener("DOMContentLoaded", () => {
  const slogan = document.querySelector(".slogan");
  const slogans = [
    "Craft your vibe. Share your world.",
    "Ideas, sounds, and dreams in motion.",
    "Every project tells a story.",
    "From code to creativity.",
    "Welcome to your creative space."
  ];
  let i = 0, j = 0, isDeleting = false;
  function type() {
    if (!slogan) return;
    const currentText = slogans[i];
    slogan.textContent = currentText.substring(0, j);
    if (isDeleting) {
      if (j > 0) {
        j--; setTimeout(type, 40);
      } else {
        isDeleting = false; i = (i + 1) % slogans.length; setTimeout(type, 1000);
      }
    } else {
      if (j < currentText.length) {
        j++; setTimeout(type, 100);
      } else {
        isDeleting = true; setTimeout(type, 3000);
      }
    }
  }
  type();

  // Reveal animation on scroll
  const revealElements = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("active");
    });
  }, { threshold: 0.2 });
  revealElements.forEach(el => observer.observe(el));
});
