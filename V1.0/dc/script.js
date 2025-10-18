// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("popup");
  const closeBtn = document.querySelector(".close");
  const popupTitle = document.getElementById("popup-title");
  const popupDescription = document.getElementById("popup-description");

  const teamDescriptions = {
    "Owner": `
• Oversees entire server operations and vision  
• Makes final decisions on all server matters  
• Manages server settings, roles, and permissions  
• Appoints/removes staff members  
• Handles escalated disputes and conflicts  
• Ensures compliance with Discord’s Terms of Service
    `,
    "Co-Owner": `
• Assists the Owner in server management  
• Acts on behalf of the Owner when absent  
• Helps supervise and guide staff  
• Handles serious issues from Admins/Moderators  
• Contributes to server strategy and growth planning
    `,
    "Admin": `
• Manages server structure (channels, bots, categories)  
• Supervises Moderators and Support team  
• Handles user reports and ban appeals  
• Enforces rules and applies discipline  
• Configures bots and automation  
• Coordinates with Event and Design teams
    `,
    "Moderator": `
• Watches chat and enforces rules  
• Warns, mutes, kicks, or bans members when needed  
• Helps users with minor issues  
• Removes spam/inappropriate content  
• Reports major issues to Admins
    `,
    "Support Team": `
• Responds to support tickets and queries  
• Assists users with bot usage and commands  
• Resolves common technical or permission issues  
• Escalates complex issues to Admins or Co-Owner
    `,
    "Event Manager": `
• Plans and organizes server events (games, contests, etc.)  
• Promotes events to increase engagement  
• Works with Designers for graphics and promotions  
• Collects and reviews event feedback
    `,
    "Server Designer": `
• Designs server layout (channels, categories, icons)  
• Creates visuals like logos, emojis, banners  
• Collaborates on event themes and branding  
• Suggests aesthetic or UX improvements
    `,
    "Partner Manager": `
• Manages partnerships with other servers/communities  
• Reviews and handles partnership applications  
• Maintains communication with partners  
• Organizes cross-promotions and joint events
    `,
    "Tester": `
• Tests bots, permissions, and new features  
• Reports bugs to Developers or Admins  
• Suggests improvements to user experience  
• Simulates member experience during test phases
    `
  };

  // Add click event to all 'Learn More' buttons
  document.querySelectorAll(".learn-more").forEach(button => {
    button.addEventListener("click", () => {
      const role = button.getAttribute("data-role");
      popupTitle.textContent = role;
      popupDescription.innerHTML = teamDescriptions[role]?.replace(/\n/g, "<br>") || "Description not available.";
      modal.style.display = "block";
    });
  });

  // Close modal on clicking the close button
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Optional: Close modal if clicked outside the modal content
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});

    // Hamburger menu toggle
  const toggleBtn = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  toggleBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
