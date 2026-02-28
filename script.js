document.addEventListener("DOMContentLoaded", function() {
    // 1. Render Icons
    lucide.createIcons();

    // 2. Sticky Header Effect
    const header = document.querySelector("header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
});