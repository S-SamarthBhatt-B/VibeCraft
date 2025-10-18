document.addEventListener("DOMContentLoaded", () => {
  // Only run on landing page
  if (!document.body.classList.contains("landing-page")) return;

  const slogan = document.querySelector(".slogan");

  const slogans = [
    "Craft your vibe. Share your world.",
    "Ideas, sounds, and dreams in motion.",
    "Every project tells a story.",
    "From code to creativity.",
    "Welcome to your creative space."
  ];

  if (!slogan) return;

  let i = 0; // slogan index
  let j = 0; // char index
  let isDeleting = false;

  function type() {
    const current = slogans[i];
    slogan.textContent = current.substring(0, j);

    if (isDeleting) {
      if (j > 0) {
        j--;
        setTimeout(type, 40);
      } else {
        isDeleting = false;
        i = (i + 1) % slogans.length;
        setTimeout(type, 1000); // wait before next slogan
      }
    } else {
      if (j < current.length) {
        j++;
        setTimeout(type, 100);
      } else {
        isDeleting = true;
        setTimeout(type, 3000); // wait before deleting
      }
    }
  }

  type();
});
