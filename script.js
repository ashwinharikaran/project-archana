// Smooth scrolling and fade-in effects
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    });

    sections.forEach(section => {
        observer.observe(section);
    });
});

// Mobile Menu Toggle
function toggleMenu() {
    document.querySelector("nav ul").classList.toggle("show");
}