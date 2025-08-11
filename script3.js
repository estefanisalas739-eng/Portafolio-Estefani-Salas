// Obtener elementos del DOM
const modal = document.getElementById('modal');
const modalTitulo = document.getElementById('modal-titulo');
const modalImagen = document.getElementById('modal-imagen');
const modalDetalles = document.getElementById('modal-detalles');
const modalCaracteristicas = document.getElementById('modal-caracteristicas');
const btnCerrar = document.getElementById('cerrar');

// Abrir modal con datos del proyecto
document.querySelectorAll('.ver-mas').forEach(boton => {
  boton.addEventListener('click', () => {
    const tarjeta = boton.closest('.tarjeta');
    const dataProyecto = JSON.parse(tarjeta.getAttribute('data-proyecto'));

    modalTitulo.textContent = dataProyecto.titulo;
    modalImagen.src = dataProyecto.imagen;
    modalImagen.alt = dataProyecto.titulo;
    modalDetalles.textContent = dataProyecto.detalles;

    // Limpiar lista y agregar características
    modalCaracteristicas.innerHTML = '';
    dataProyecto.caracteristicas.forEach(carac => {
      const li = document.createElement('li');
      li.textContent = carac;
      modalCaracteristicas.appendChild(li);
    });

    modal.classList.remove('oculto');
  });
});

// Cerrar modal al hacer clic en X
btnCerrar.addEventListener('click', () => {
  modal.classList.add('oculto');
});

// Cerrar modal al hacer clic fuera del contenido
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.add('oculto');
  }
});
