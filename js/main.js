// Espera a que todo el DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {
    // --- Navegación activa: resalta el enlace correspondiente
    const menuLinks = document.querySelectorAll('#nav-menu a');
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    menuLinks.forEach(link => {
      if (link.getAttribute('href') === currentPage) {
        link.classList.add('activo');
      }
    });
  
    // --- Botón "Back to Top": aparece al hacer scroll y regresa suavemente al inicio
    const backToTopBtn = document.getElementById('back-to-top');
    if (backToTopBtn) {
      window.addEventListener('scroll', () => {
        backToTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
      });
      backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  
    // --- Funcionalidad de Lightbox para ampliar la imagen (si se utiliza)
    const banner = document.querySelector('.banner-principal');
    const lightbox = document.getElementById('lightbox');
    if (banner && lightbox) {
      const lightboxImage = lightbox.querySelector('img');
      banner.style.cursor = 'pointer';
      banner.addEventListener('click', () => {
        lightboxImage.src = banner.src;
        lightbox.style.display = 'flex';
      });
      lightbox.addEventListener('click', () => {
        lightbox.style.display = 'none';
      });
    }
  });
  