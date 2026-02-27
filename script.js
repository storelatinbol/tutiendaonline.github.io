// 🎉 MENSAJE DE BIENVENIDA
console.log("¡Bienvenido a Mi Tienda Genial!");

// 🛒 BOTONES DE COMPRAR
const botonesComprar = document.querySelectorAll('.boton-comprar');

botonesComprar.forEach(boton => {
    boton.addEventListener('click', function() {
        // Cambia el texto del botón
        this.textContent = '✓ ¡Agregado!';
        this.style.background = '#00b894';
        
        // Vuelve a la normalidad después de 2 segundos
        setTimeout(() => {
            this.textContent = 'Comprar';
            this.style.background = '#6c5ce7';
        }, 2000);
        
        // Muestra un mensaje
        alert('¡Producto agregado al carrito! 🛒');
    });
});

// 📧 FORMULARIO DE CONTACTO
const formulario = document.querySelector('form');

formulario.addEventListener('submit', function(evento) {
    evento.preventDefault(); // Evita que se recargue la página
    
    // Obtiene los datos
    const nombre = this.querySelector('input[type="text"]').value;
    
    // Muestra mensaje de éxito
    alert(`¡Gracias ${nombre}! Te contactaremos pronto 📧`);
    
    // Limpia el formulario
    this.reset();
});

// 🎭 ANIMACIÓN AL HACER SCROLL
const tarjetas = document.querySelectorAll('.tarjeta');

// Función para ver si un elemento está visible
function estaVisible(elemento) {
    const rect = elemento.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Cuando haces scroll, revisa las tarjetas
window.addEventListener('scroll', () => {
    tarjetas.forEach(tarjeta => {
        if (estaVisible(tarjeta)) {
            tarjeta.style.opacity = '1';
            tarjeta.style.transform = 'translateY(0)';
        }
    });
});
