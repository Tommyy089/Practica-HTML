document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');

  if (form && status) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      const nombre = document.getElementById('nombre')?.value.trim() || 'gamer';

      status.textContent = 'Mensaje enviado correctamente, ' + nombre + '. Nuestro equipo te responderá pronto.';
      status.classList.add('visible');
      form.reset();
    });
  }

  const yearNode = document.getElementById('year');
  if (yearNode) {
    yearNode.textContent = new Date().getFullYear();
  }
});
