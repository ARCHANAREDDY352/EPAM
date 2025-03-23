document.addEventListener("DOMContentLoaded", function () {
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
        alert("📩 Contact us at travelblog123@gmail.com or call 9876542419");
    });

    // Print Button Functionality
    document.getElementById("print-btn").addEventListener("click", function () {
        alert("Preparing the page for printing...");
        window.print();
    });
});
