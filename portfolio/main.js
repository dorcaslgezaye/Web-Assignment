// This code runs when the page loads
console.log("Portfolio website loaded!");

// Handle contact form submission
const form = document.querySelector("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();  // Stop form from refreshing page
    alert("Thank you for your message!");
    form.reset();  // Clear the form
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        target.scrollIntoView({ behavior: "smooth" });
    });
});
