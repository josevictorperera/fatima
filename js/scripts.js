// Placeholder for future JS functionality
console.log("Página cargada: Clínica Nuestra Señora de Fátima");
// Mostrar mensaje cuando se envía el formulario
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Gracias por contactarnos. Le responderemos pronto.");
    form.reset();
  });
});

// Place floater

document.addEventListener("DOMContentLoaded", function () {
  const infoBox = document.getElementById("infoFija");
  const toggleBtn = document.getElementById("toggleInfoBtn");

  toggleBtn.addEventListener("click", function () {
    if (infoBox.classList.contains("d-none")) {
      infoBox.classList.remove("d-none");
      toggleBtn.textContent = "Ocultar información";
    } else {
      infoBox.classList.add("d-none");
      toggleBtn.textContent = "Mostrar información";
    }
  });
});
    document.getElementById("year").textContent = new Date().getFullYear();
