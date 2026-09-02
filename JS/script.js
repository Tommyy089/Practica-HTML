document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('searchInput');
  const gameItems = document.querySelectorAll('.game-item');
  const loginBtn = document.getElementById('loginBtn');

  // Filtro de búsqueda interactivo en tiempo real
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();

    gameItems.forEach(item => {
      const title = item.querySelector('.card-title').textContent.toLowerCase();
      if (title.includes(query)) {
        item.classList.remove('d-none');
      } else {
        item.classList.add('d-none');
      }
    });
  });

  // Simulación de Inicio de Sesión
  loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const user = prompt('Ingrese su usuario para iniciar sesión:');
    if (user) {
      loginBtn.innerHTML = `<i class="bi bi-person-check-fill text-success"></i> <span>${user}</span>`;
      loginBtn.classList.replace('btn-outline-light', 'btn-dark');
    }
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const profileForm = document.getElementById('profileForm');
  const inputUsername = document.getElementById('inputUsername');
  const inputEmail = document.getElementById('inputEmail');
  const displayUsername = document.getElementById('displayUsername');
  const displayEmail = document.getElementById('displayEmail');
  const navUsername = document.getElementById('navUsername');
  const avatarUpload = document.getElementById('avatarUpload');
  const profileAvatar = document.getElementById('profileAvatar');

  // Actualizar datos de perfil en tiempo real al guardar
  profileForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const newName = inputUsername.value;
    const newEmail = inputEmail.value;

    displayUsername.textContent = newName;
    navUsername.textContent = newName;
    displayEmail.textContent = newEmail;

    alert('¡Perfil actualizado con éxito!');
  });

  // Cambiar avatar dinámicamente
  avatarUpload.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        profileAvatar.src = event.target.result;
      };
      reader.readAsDataURL(file);
    }
  });
});