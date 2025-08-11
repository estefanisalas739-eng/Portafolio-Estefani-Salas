// Activar expansión de detalles dentro de cada tarjeta
document.querySelectorAll('.tarjeta').forEach(tarjeta => {
  const boton = tarjeta.querySelector('.ver-mas');

  // Crear contenedor para los detalles si no existe
  let detallesElemento = tarjeta.querySelector('.detalles-expandido');
  if (!detallesElemento) {
    detallesElemento = document.createElement('div');
    detallesElemento.classList.add('detalles-expandido');
    detallesElemento.style.display = 'none'; // Oculto por defecto
    tarjeta.appendChild(detallesElemento);
  }

  // Obtener datos del proyecto desde el atributo data-proyecto
  const dataProyectoRaw = tarjeta.getAttribute('data-proyecto');
  let dataProyecto;
  try {
    dataProyecto = JSON.parse(dataProyectoRaw);
  } catch (error) {
    console.error('Error al parsear data-proyecto:', error);
    return;
  }

  // Insertar contenido de detalles si no está ya insertado
  detallesElemento.textContent = dataProyecto.detalles || 'Sin detalles disponibles';

  // Alternar visibilidad al hacer clic
  boton.addEventListener('click', () => {
    const estaVisible = detallesElemento.style.display === 'block';
    detallesElemento.style.display = estaVisible ? 'none' : 'block';
    boton.textContent = estaVisible ? 'Ver más' : 'Ver menos';
  });
});
