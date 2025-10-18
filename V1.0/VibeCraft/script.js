function openVibeCraft() {
  window.open('vibecraft.html', '_blank');
}

    // Hamburger menu toggle
const toggleBtn = document.getElementById("checkbox");
  const navLinks = document.getElementById("nav-links");

  toggleBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });