let estado = 0;
let intervalo;
let activo = true;
let velocidad = 3000;

function actualizarSemaforos() {
  const luces = document.querySelectorAll(".luz");
  luces.forEach(el => el.className = "luz");

  if (estado === 0) {
    document.getElementById("s1-verde").classList.add("verde");
    document.getElementById("s2-rojo").classList.add("rojo");
  } else if (estado === 1) {
    document.getElementById("s1-amarillo").classList.add("amarillo");
    document.getElementById("s2-rojo").classList.add("rojo");
  } else if (estado === 2) {
    document.getElementById("s1-rojo").classList.add("rojo");
    document.getElementById("s2-verde").classList.add("verde");
  } else if (estado === 3) {
    document.getElementById("s1-rojo").classList.add("rojo");
    document.getElementById("s2-amarillo").classList.add("amarillo");
  }

  estado = (estado + 1) % 4;
}

function iniciarSemaforo() {
  intervalo = setInterval(actualizarSemaforos, velocidad);
}

function detenerSemaforo() {
  clearInterval(intervalo);
}

function toggleSemaforo() {
  activo = !activo;
  if (activo) {
    iniciarSemaforo();
  } else {
    detenerSemaforo();
  }
}

function ajustarVelocidad() {
  const nuevaVel = parseInt(document.getElementById("velocidad").value) * 1000;
  velocidad = nuevaVel;
  if (activo) {
    detenerSemaforo();
    iniciarSemaforo();
  }
}

// Validar usuario
window.onload = () => {
  if (!localStorage.getItem("loggedUser")) {
    alert("Inicia sesión primero");
    window.location.href = "index.html";
  } else {
    iniciarSemaforo();
  }
}