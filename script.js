// Inicializar tooltips de Bootstrap
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
});

// Inicializar Swiper
const swiper = new Swiper('.swiper-container', {
    // Parámetros básicos
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    
    // Efecto de transición
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },

    // Autoplay
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },

    // Paginación
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    }
});

// Inicializar modal de Bootstrap
let modalRRHH = new bootstrap.Modal(document.getElementById('modalRRHH'));

// Manejar clicks en los botones laterales
document.querySelectorAll('.atm-button[data-slide]').forEach(button => {
    button.addEventListener('click', () => {
        const slideIndex = parseInt(button.getAttribute('data-slide'));
        swiper.slideTo(slideIndex);
    });
});

// Función para navegar a las secciones
function navigateToSection(section) {
    switch(section) {
        case 'rrhh':
            modalRRHH.show();
            break;
        case 'tienda':
            alert('Accediendo a Tienda Virtual...');
            break;
        case 'transportes':
            alert('Accediendo a Liquidación de Transportistas...');
            break;
    }
}

// Función para navegar a las subsecciones de RRHH
function navigateToRRHHSection(subsection) {
    modalRRHH.hide();
    switch(subsection) {
        case 'documentos':
            alert('Accediendo a Recepción de Documentos...');
            break;
        case 'colilla':
            alert('Accediendo a Consulta de Colilla...');
            break;
        case 'vacaciones':
            alert('Accediendo a Gestión de Vacaciones...');
            break;
        case 'constancias':
            alert('Accediendo a Constancias y Certificados...');
            break;
        case 'permisos':
            alert('Accediendo a Solicitud de Permisos...');
            break;
        case 'capacitacion':
            alert('Accediendo a Capacitación...');
            break;
    }
}

// Funciones adicionales para los botones del lado derecho
function navigateToHelp() {
    alert('Accediendo a la sección de Ayuda...');
}

function navigateToSettings() {
    alert('Accediendo a la Configuración...');
}

// Efecto de presión en los botones
document.querySelectorAll('.atm-button').forEach(button => {
    button.addEventListener('mousedown', () => {
        button.style.transform = 'scale(0.95)';
    });
    
    button.addEventListener('mouseup', () => {
        button.style.transform = 'scale(1)';
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
    });
});

// Añadir efectos visuales a las tarjetas
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.service-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});
