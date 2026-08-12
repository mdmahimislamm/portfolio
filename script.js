// =========================
// MOBILE MENU
// =========================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.querySelector(".nav-menu");

menuBtn.addEventListener("click", () => {
navMenu.classList.toggle("active");
});

// =========================
// CLOSE MENU AFTER CLICK
// =========================

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach((link) => {

```
link.addEventListener("click", () => {
    navMenu.classList.remove("active");
});
```

});

// =========================
// CONTACT FORM
// =========================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (event) => {

```
event.preventDefault();

const name = document.getElementById("name").value;

alert(
    "Thank you, " + name +
    "! Your message has been received."
);

contactForm.reset();
```

});

// =========================
// CURRENT YEAR
// =========================

const year = document.getElementById("year");

year.textContent = new Date().getFullYear();
