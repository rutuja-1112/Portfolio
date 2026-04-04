document.querySelector(".download-btn").addEventListener("click", function() {
    window.location.href = "resume.pdf";
});
particlesJS("galaxy-bg", {
  particles: {
    number: { value: 120 },
    size: { value: 2 },
    move: { speed: 0.5 },
    line_linked: { enable: false },
    color: { value: "#ffffff" }
  }
});
const cards = document.querySelectorAll(".card");
window.addEventListener("scroll", () => {
  const triggerBottom = window.innerHeight * 0.85;
  cards.forEach(card => {
    const boxTop = card.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }
  });
});
cards.forEach(card => {
  card.style.opacity = "0";
  card.style.transform = "translateY(50px)";
  card.style.transition = "0.5s";
});
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Message sent successfully!");
    this.reset();
});