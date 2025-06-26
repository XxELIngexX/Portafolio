document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form[action^="https://formsubmit.co"]');
    const mensaje = document.getElementById('mensaje-exito');
    if (!form || !mensaje) return;

    // Mostrar mensaje si la URL contiene ?success
    if (window.location.search.includes('success')) {
        form.style.display = 'none';
        mensaje.style.display = 'block';
    }

    // Mostrar mensaje al enviar el formulario
    form.addEventListener('submit', function() {
        setTimeout(function() {
            form.style.display = 'none';
            mensaje.style.display = 'block';
        }, 100);
    });
});