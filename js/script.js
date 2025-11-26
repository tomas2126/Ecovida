function mostrarSeccion(id) {
    document.querySelectorAll(".seccion").forEach((sec) => {
      sec.classList.remove("activa");
    });
    document.getElementById(id).classList.add("activa");
  }
  
  // Funcionalidad botones Login y Exit
  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("login-btn").addEventListener("click", () => {
      alert("Has pulsado Login");
    });
  
    document.getElementById("exit-btn").addEventListener("click", () => {
      alert("Has pulsado Exit");
    });
  });
function mostrarSeccion(id) {
  document.querySelectorAll('.seccion').forEach(sec => {
    sec.classList.remove('activa');
  });
  const seccion = document.getElementById(id);
  if (seccion) {
    seccion.classList.add('activa');
  }
}

// Opcional: botones Login y Exit funcionales básicos
document.getElementById('login-btn').addEventListener('click', () => {
  alert('Funcionalidad Login pendiente de implementar.');
});

document.getElementById('exit-btn').addEventListener('click', () => {
  alert('Funcionalidad Exit pendiente de implementar.');
});
  
document.addEventListener('DOMContentLoaded', () => {
  const loginBtn = document.getElementById('login-btn');

  loginBtn.addEventListener('click', () => {
    // Cambia "dashboard.html" por la página a la que quieres redirigir
    window.location.href = 'dashboard.html';
  });
});
