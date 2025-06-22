// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Configuración de la galería
    const galleryItems = document.querySelectorAll('.gallery-item');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const modal = document.getElementById('gallery-modal');
    const modalImage = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const modalCategory = document.getElementById('modal-category');
    const modalDescription = document.getElementById('modal-description');
    const closeModal = document.querySelector('.close-modal');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    // Datos de las imágenes (puedes expandir esto)
    const galleryData = [
      {
        src: 'img/galeria1.jpeg',
        title: 'Muffin de Cereza',
        category: 'muffins',
        description: 'Sumérgete en la indulgencia de nuestros Muffins Delicia de Cereza. Cada bocado es una explosión de sabor: la suavidad de la crema batida se funde con la frescura de la cereza, todo sobre un muffin esponjoso y dorado a la perfección.'
      },
      {
        src: 'imagenes/minibrawnis.jfif',
        title: 'Mini Brownies',
        category: 'muffins',
        description: 'Exquisitos brownies en formato mini, con un intenso sabor a chocolate y textura suave en el centro con bordes ligeramente crujientes. Perfectos para eventos y regalos.'
      },
      {
        src: 'imagenes/minilemonpie.jfif',
        title: 'Mini Lemon Pie',
        category: 'tortas',
        description: 'Nuestra versión mini del clásico lemon pie, con una base crujiente, cremosa y suave crema de limón con el balance perfecto entre dulce y ácido, coronado con merengue italiano.'
      },
      {
        src: 'imagenes/minirogel.jfif',
        title: 'Mini Rogel',
        category: 'tortas',
        description: 'El clásico argentino en versión mini. Capas de masa crocante intercaladas con dulce de leche repostero y cubierto con un merengue italiano que se derrite en tu boca.'
      },
      {
        src: 'imagenes/minisbrawnisvariedad.jfif',
        title: 'Brownies Variados',
        category: 'muffins',
        description: 'Variedad de brownies con diferentes toppings: nueces, chips de chocolate, crema de maní y frutos rojos. Cada uno es una experiencia única de sabor.'
      },
      {
        src: 'imagenes/minitartafloras.jfif',
        title: 'Mini Tartafloras',
        category: 'tortas',
        description: 'Deliciosas mini tartas artesanales con una base crujiente de masa quebrada, rellenas de dulce de membrillo y batata. Una combinación clásica y equilibrada que resalta su sabor casero y tradicional.'
      },
      {
        src: 'imagenes/minitortitasfrutales.jfif',
        title: 'Mini Tortitas Frutales',
        category: 'tortas',
        description: 'Pequeñas tortas decoradas con frutas frescas de estación, combinando la frescura de las frutas con bizcochos esponjosos y cremas ligeras.'
      },
      {
        src: 'imagenes/paletasdechocolate.jfif',
        title: 'Paletas de Chocolate',
        category: 'bombones',
        description: 'Paletas artesanales de chocolate semi-amargo, con decoraciones personalizadas y rellenos sorpresa. Perfectas para eventos temáticos.'
      },
      {
        src: 'img/1.jpeg',
        title: 'Mesa dulce 15 años',
        category: 'fiestas',
        description: 'Elegante mesa dulce para fiesta de 15 años, con una variedad de postres finos, cupcakes decorados, macarons y delicias pasteleras que complementan la celebración de este momento tan especial.'
      },
      {
        src: 'img/servicio2 (2).jpeg',
        title: 'Macarons Elegantes',
        category: 'fiestas',
        description: 'Exquisitos macarons en tonos verdes y blancos, personalizados para la ocasión. Crujientes por fuera y suaves por dentro, rellenos con una irresistible combinación de crema de maní cremosa y dulce de leche artesanal. Perfectos para dar un toque de sofisticación a tu evento especial.'
      },
      {
        src: 'img/4.jpeg',
        title: 'Arreglo Frutal Elegante',
        category: 'fiestas',
        description: 'Hermosa presentación de frutas frescas incluyendo piña, kiwi, frutillas y uvas, cuidadosamente seleccionadas y dispuestas para crear un centro de mesa vibrante y natural. Perfecta para añadir un toque de frescura y color a tus eventos especiales.'
      },
      {
        src: 'img/2.jpeg',
        title: 'Oreos Premium Bañadas',
        category: 'bombones',
        description: 'Exquisitas galletitas Oreo bañadas artesanalmente en chocolate blanco y negro de alta calidad, decoradas elegantemente con diseños personalizados para tu evento. Cada pieza es una combinación perfecta entre el crujiente de la galleta y la suavidad del chocolate premium.'
      },
      {
        src: 'img/galeria3.jpeg',
        title: 'Bombones Artesanales Premium',
        category: 'bombones',
        description: 'Delicados bombones hechos a mano con chocolate de primera calidad, rellenos con una irresistible combinación de dulce de leche artesanal y suave Nutela. Cada pieza es una experiencia gourmet, perfecta para acompañar momentos especiales.'
      }
    ];

    function shareOnInstagram() {
        const text = `Mira este delicioso ${galleryData[currentIndex].title} de Toque Dulce!`;
        const shareText = `${text}\nhttps://facunsix.github.io/toquedulce/`;
        const imageUrl = "https://facunsix.github.io/toquedulce/img/1.jpeg"; // Imagen que quieres compartir
    
        navigator.clipboard.writeText(shareText).then(() => {
            Swal.fire({
                title: "Texto copiado 📋",
                text: "Abre Instagram y pégalo en un chat.",
                imageUrl: imageUrl,  // La imagen aparece arriba
                imageWidth: 200,
                imageHeight: 150,
                imageAlt: "Imagen de Toque Dulce",
                icon: "info",
                showCancelButton: true,
                confirmButtonText: "Abrir Instagram",
                cancelButtonText: "Cerrar",
                customClass: {
                    popup: "custom-popup",
                    title: "custom-title",
                    confirmButton: "custom-confirm",
                    cancelButton: "custom-cancel"
                }
            }).then((result) => {
                if (result.isConfirmed) {
                    window.open('https://www.instagram.com/direct/new/', '_blank');
                }
            });
        });
    }
    
    function shareOnWhatsApp() {
        const text = `Mira este delicioso ${galleryData[currentIndex].title} de Toque Dulce!\nhttps://facunsix.github.io/toquedulce/`;
        const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
    
        window.open(url, '_blank', 'width=600,height=400');
    }
    
    
    
    
  // Asignar eventos a los botones de compartir
  document.querySelector('.social-btn.instagram').addEventListener('click', shareOnInstagram);
  document.querySelector('.social-btn.whatsapp').addEventListener('click', shareOnWhatsApp);

    
    let currentIndex = 0;
    
    // Filtrado de la galería
    filterButtons.forEach(button => {
      button.addEventListener('click', function() {
        // Remover clase active de todos los botones
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Agregar clase active al botón clickeado
        this.classList.add('active');
        
        const filterValue = this.getAttribute('data-filter');
        
        galleryItems.forEach(item => {
          const itemCategory = item.getAttribute('data-category');
          
          if (filterValue === 'all' || itemCategory === filterValue) {
            item.style.display = 'block';
            item.classList.add('fade-in-item');
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
    
    // Abrir modal al hacer clic en una imagen
    galleryItems.forEach((item, index) => {
      item.addEventListener('click', function() {
        currentIndex = index;
        updateModal(currentIndex);
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Deshabilitar scroll
      });
    });
    
    // Función para actualizar el modal
    function updateModal(index) {
      const itemData = galleryData[index];
      modalImage.src = itemData.src;
      modalTitle.textContent = itemData.title;
      modalCategory.textContent = itemData.category;
      modalDescription.textContent = itemData.description;
      
      // Cambiar color según categoría
      switch(itemData.category) {
        case 'tortas':
          modalCategory.style.backgroundColor = '#e50914';
          break;
        case 'bombones':
          modalCategory.style.backgroundColor = '#8B4513';
          break;
        case 'muffins':
          modalCategory.style.backgroundColor = '#D2691E';
          break;
        case 'fiestas':
          modalCategory.style.backgroundColor = '#FF1493';
          break;
        default:
          modalCategory.style.backgroundColor = '#e50914';
      }
    }
    
    // Navegación entre imágenes
    prevBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      currentIndex = (currentIndex - 1 + galleryData.length) % galleryData.length;
      updateModal(currentIndex);
    });
    
    nextBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      currentIndex = (currentIndex + 1) % galleryData.length;
      updateModal(currentIndex);
    });
    
    // Cerrar modal
    closeModal.addEventListener('click', function() {
      modal.classList.remove('active');
      document.body.style.overflow = ''; // Habilitar scroll
    });
    
    // Cerrar al hacer clic fuera del modal
    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Habilitar scroll
      }
    });
    
    // Animación de aparición para los elementos de la galería
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
  
    const animatedItems = document.querySelectorAll(".fade-in, .fade-in-item");
    animatedItems.forEach(item => observer.observe(item));
    
    // Efecto hover para las tarjetas
    galleryItems.forEach(item => {
      item.addEventListener('mousemove', function(e) {
        const x = e.clientX - this.getBoundingClientRect().left;
        const y = e.clientY - this.getBoundingClientRect().top;
        
        const centerX = this.offsetWidth / 2;
        const centerY = this.offsetHeight / 2;
        
        const angleX = (y - centerY) / 10;
        const angleY = (centerX - x) / 10;
        
        this.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
      });
      
      item.addEventListener('mouseleave', function() {
        this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
      });
    });
  });