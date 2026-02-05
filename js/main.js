document.addEventListener("DOMContentLoaded", () => {

  // Section scroll animations
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

  // Toggle mobile menu
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.sidebar');

  if(menuToggle && navLinks){
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
  }

  // Contact form
  const form = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');

  if(form && formStatus){
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const data = new FormData(form);

      try {
        const response = await fetch(form.action,{
          method: form.method,
          body: data,
          headers: {
            'Accept': 'application/json',
          },
        });

        if (response.ok) {
          form.reset();
          formStatus.textContent = "Message sent successfully. I'll be in touch.";
          formStatus.classList.add("success");
          formStatus.classList.remove("error");
        } else {
          formStatus.textContent = "Oops! There was a problem submitting your form";
          formStatus.classList.add("error");
          formStatus.classList.remove("success");
        }
      } catch(error) {
        formStatus.textContent = "Oops! There was a problem submitting your form";
        formStatus.classList.remove("success");
        formStatus.classList.add("error");
      }
    });
  }

  // Active section highlight
  const links = document.querySelectorAll(".sidebar nav a");
  const activeSections = document.querySelectorAll("section");

  window.addEventListener("scroll", () => {
    let current = "";

    activeSections.forEach(section => {
      const sectionTop = section.offsetTop -120;
      if(window.scrollY >= sectionTop) {
        current = section.getAttribute("id"); // <-- fixed typo: was "curent"
      }
    });

    links.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`){
        link.classList.add("active");
      }
    });
  });

});
