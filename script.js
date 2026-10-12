document.addEventListener('DOMContentLoaded', () => {
    // Menú Móvil
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');

            // Accesibilidad: cambiar aria-expanded
            const isExpanded = navLinks.classList.contains('active');
            menuToggle.setAttribute('aria-expanded', isExpanded);
        });
    }

    // Cerrar menú al hacer clic en un enlace (UX móvil)
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });
    });

    // Accordion Logic for Tools
    window.toggleTool = function (header) {
        const item = header.parentElement;
        const isActive = item.classList.contains('active');

        // Close all other items
        document.querySelectorAll('.tool-item').forEach(t => {
            t.classList.remove('active');
        });

        // Toggle current item
        if (!isActive) {
            item.classList.add('active');
        }
    };
});
