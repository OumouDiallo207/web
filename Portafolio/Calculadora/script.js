const pantalla = document.getElementById("pantalla");
const botones = document.querySelectorAll(".boton");

let operacion = "";
let resetearPantalla = false;

botones.forEach(boton => {
  boton.addEventListener("click", () => {
    const valor = boton.textContent;

    if (boton.id === "clear") {
      pantalla.textContent = "0";
      operacion = "";
      return;
    }

    if (boton.id === "borrar") {
      pantalla.textContent = pantalla.textContent.slice(0, -1) || "0";
      return;
    }
    if (boton.id === "igual") {
      try {
        pantalla.textContent = eval(operacion + pantalla.textContent);
      } catch {
        pantalla.textContent = "Error";
      }
      operacion = "";
      return;
    }
    if (boton.classList.contains("operador")) {
      operacion = pantalla.textContent + valor;
      resetearPantalla = true;
      return;
    }

    if (pantalla.textContent === "0" || resetearPantalla) {
      pantalla.textContent = valor;
      resetearPantalla = false;
    } else {
      pantalla.textContent += valor;
    }
  });
});