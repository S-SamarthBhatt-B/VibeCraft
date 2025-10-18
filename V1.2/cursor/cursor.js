document.addEventListener("DOMContentLoaded", () => {
  const cursor = document.getElementById("customV");
  const trailContainer = document.getElementById("trail-container");

  // Style cursor as solid white
  cursor.style.color = "#ffffff";
  cursor.style.textShadow = "0 0 10px #ffffff";
  cursor.style.animation = "vPulse 1.8s ease-in-out infinite";

  document.addEventListener("mousemove", (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;

    const dot = document.createElement("div");
    dot.classList.add("trail-dot");
    dot.style.left = `${e.clientX}px`;
    dot.style.top = `${e.clientY}px`;
    trailContainer.appendChild(dot);

    setTimeout(() => {
      dot.remove();
    }, 400);
  });

  document.addEventListener("click", (e) => {
    const ripple = document.createElement("div");
    ripple.className = "click-ripple";
    ripple.style.left = `${e.clientX}px`;
    ripple.style.top = `${e.clientY}px`;
    document.body.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  });
});
