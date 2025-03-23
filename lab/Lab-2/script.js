// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Contact button interaction
document.getElementById("contact-btn").addEventListener("click", function() {
    alert("📩 Contact us at example@travelblog.com or call +123 456 7890");
});
