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
