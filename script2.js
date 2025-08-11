//limpiar formulario y mostar mensaje de éxito si aplica
window.addEventListener("load",function() {const formulario = 
    document.getElementaryById("formulario-contacto");
    const mensajeExito =
    document.getElementaryBiId("mensaje-exito");
//Limpiar siempre los campos al cargar
    formulario.reset();
//Si venimos de un envío exitoso, mostrar mensaje
const params= new
URLSearchParams(window.location.search);
if(params.has("enviado")){ mensajeExito.textContent="¡Tu mensaje ha sido enviado con éxito!";}
  
});
document.getElementById("formulario-contacto").addEventListener("submit", function(event) {
  event.preventDefault(); // Detenemos envío para validar

  const nombre = document.getElementById("nombre").value.trim();
  const correo = document.getElementById("correo").value.trim();
  const telefono = document.getElementById("telefono").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();
  const mensajeError = document.getElementById("mensaje-error");

  const errores = [];

  // Validar nombre
  if (nombre === "") {
    errores.push("El campo 'Nombre completo' es obligatorio.");
  }

  // Validar correo
  if (correo === "") {
    errores.push("El campo 'Correo electrónico' es obligatorio.");
  } else if (!/^[\w.-]+@[\w-]+\.[a-z]{2,}$/i.test(correo)) {
    errores.push("El correo electrónico ingresado no tiene un formato válido.");
  }

  // Validar teléfono
  if (telefono === "") {
    errores.push("El campo 'Teléfono' es obligatorio.");
  } else if (!/^\d{10}$/.test(telefono)) {
    errores.push("El número telefónico debe tener exactamente 10 dígitos numéricos.");
  }

  // Validar mensaje
  if (mensaje === "") {
    errores.push("El campo 'Mensaje' es obligatorio.");
  }

  // Mostrar errores si hay
  if (errores.length > 0) {
    mensajeError.innerHTML = errores.join("<br>");
    return;
  }

  // Si todo está correcto, limpiar errores y enviar
  mensajeError.textContent = "";
  this.submit(); // Envío real a Formspree
});