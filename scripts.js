const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-menu-link");
const logo = document.querySelector(".logo a"); // Ajusta el selector según tu HTML

// Abrir/cerrar menú
navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");

  if (navMenu.classList.contains("nav-menu_visible")) {
    navToggle.setAttribute("aria-label", "Cerrar menú");
  } else {
    navToggle.setAttribute("aria-label", "Abrir menú");
  }
});

// Cerrar menú y scroll suave al hacer clic en un enlace del menú
navLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    
    const targetId = link.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    // Cierra el menú
    navMenu.classList.remove("nav-menu_visible");
    navToggle.setAttribute("aria-label", "Abrir menú");

    // Hace scroll suave
    window.scrollTo({
      top: targetElement.offsetTop - 60,
      behavior: "smooth"
    });
  });
});

// Scroll suave al inicio al hacer clic en el logo
logo.addEventListener("click", (e) => {
  e.preventDefault();

  navMenu.classList.remove("nav-menu_visible");
  navToggle.setAttribute("aria-label", "Abrir menú");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});



  function toggleInfo(element) {
    const servicios = document.querySelectorAll('.servicio');

    servicios.forEach(servicio => {
      if (servicio !== element) {
        servicio.classList.remove('active');
      }
    });

    element.classList.toggle('active');
  }


document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = {
    nombre: this.nombre.value,
    correo: this.correo.value,
    empresa: this.empresa.value,
    telefono: this.telefono.value,
    mensaje: this.mensaje.value,
    fecha: new Date().toLocaleString()
  };

  const contactos = JSON.parse(localStorage.getItem("contactos") || "[]");
  contactos.push(formData);
  localStorage.setItem("contactos", JSON.stringify(contactos));

  alert("Tu mensaje ha sido guardado. Pronto nos estaremos en contacto, ¡Gracias!");
  this.reset();
});

