// Typing Effect
const words = ["Web Developer", "JavaScript Developer", "Frontend Coder", "Tech Enthusiast"];
let i = 0, j = 0, deleting = false;
const typingEl = document.getElementById("typing");

function type() {
  const word = words[i];
  typingEl.textContent = word.slice(0, j);
  if (!deleting && j < word.length) { j++; setTimeout(type, 100); }
  else if (deleting && j > 0) { j--; setTimeout(type, 50); }
  else {
    if (!deleting) { deleting = true; setTimeout(type, 1500); }
    else { deleting = false; i = (i + 1) % words.length; setTimeout(type, 300); }
  }
}
type();

// Dark/Light Toggle
document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("light");
});

// Contact Form
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  document.getElementById("formMsg").textContent =
    `Thanks ${name}! Your message has been received ✅`;
  e.target.reset();
});
