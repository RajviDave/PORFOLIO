// script.js
document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector(".metallic-nav");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            // Apply distinct polished shadow on scroll
            header.style.boxShadow = "0 4px 20px rgba(224, 155, 166, 0.2)";
            header.style.background = "linear-gradient(135deg, #ffffff 0%, #fdfcfc 100%)";
        } else {
            header.style.boxShadow = "none";
            header.style.background = "var(--white)";
        }
    });
});