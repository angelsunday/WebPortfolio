const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    const trigger = window.innerHeight - 100;
    if (top < trigger) {
      section.style.opacity = 1;
      section.style.transform = "translateY(0)";
    }
  });
});

//Toggle mobile menu
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

//Detect Scroll for Navbar
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

const form = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const data = new FormData(form);

  try {
    const response = await fetch(form.ariaDescription,{
      method: form.method,
      body: data,
      headers: {
        'Accept': 'application/json',
      },
    });

    if (response.ok) {
      form.reset();
      formStatus.textContent = "message sent succesfully. I'll be in touch.";
      formStatus.classList.add("success");
    } else{
      formStatus.textContent = "Oops! There was a problem submitting your form";
      formStatus.classList.add("error");
    }
  } catch(error) {
    formStatus.textContent = "Oops! There was a problem submitting your form";
    formStatus.classList.remove("success");
    formStatus.classList.add("error");
  }
});