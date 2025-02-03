// Función para abrir el modal y cargar la imagen correspondiente
const imagenesGaleria = document.querySelectorAll(".imagen-galeria");
const modalImagen = document.getElementById("modal-imagen");
const imagenModal = document.getElementById("imagenModal");
const descripcionModal = document.getElementById("descripcionModal");
const cerrarModalBtn = document.querySelector(".cerrar-btn");

// Descripciones de las imágenes (puedes personalizar cada una)
const descripciones = {
  imagen1: "Esta es la descripción de la Imagen 1.",
  imagen2: "Esta es la descripción de la Imagen 2.",
  imagen3: "Esta es la descripción de la Imagen 3.",
  imagen4: "Esta es la descripción de la Imagen 4.",
  imagen5: "Esta es la descripción de la Imagen 5.",
  imagen6: "Esta es la descripción de la Imagen 6."
};

// Función para abrir el modal
imagenesGaleria.forEach(imagen => {
  imagen.addEventListener("click", function() {
    const imagenId = this.id;  // Obtener el ID de la imagen clickeada
    const imagenSrc = this.src;
    const descripcion = descripciones[imagenId];  // Obtener la descripción según el ID

    // Cambiar la imagen y la descripción en el modal
    imagenModal.src = imagenSrc;
    descripcionModal.innerHTML = `<h3>Descripción de ${imagenId}</h3><p>${descripcion}</p>`;

    // Mostrar el modal con animación
    modalImagen.classList.add("show");
  });
});

// Función para cerrar el modal
cerrarModalBtn.addEventListener("click", function() {
  modalImagen.classList.remove("show");
});

// Cerrar el modal si se hace clic en el fondo
modalImagen.addEventListener("click", function(e) {
  if (e.target === modalImagen) {
    modalImagen.classList.remove("show");
  }
});
