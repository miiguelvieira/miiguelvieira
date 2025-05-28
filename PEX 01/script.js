document.addEventListener('DOMContentLoaded', function() {
            // Smooth scroll para navegação
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            // block: 'start'
                        });
                    }
                });
            });

            // Animação suave para elementos
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = 1;
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            });

            document.querySelectorAll('.left-section, .right-section').forEach((el) => {
                el.style.opacity = 0;
                el.style.transform = 'translateY(20px)';
                el.style.transition = 'all 0.6s ease-out';
                observer.observe(el);
            });
        });

        // Lightbox
function openLightbox(imageSrc) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    
    lightbox.style.display = 'block';
    lightboxImg.src = imageSrc;
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

// Fechar ao clicar fora da imagem
window.onclick = function(event) {
    const lightbox = document.getElementById('lightbox');
    if (event.target == lightbox) {
        lightbox.style.display = 'none';
    }
}


// LIGHTBOX FUNCTIONS
function openLightbox(imageSrc) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    
    lightbox.style.display = "flex"; // Alterado para flex
    lightboxImg.src = imageSrc;
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = "none";
}

// Fechar ao clicar fora ou tecla ESC
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('lightbox')) {
        closeLightbox();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") closeLightbox();
});

function testPost() {
  const response = UrlFetchApp.fetch("https://script.google.com/macros/s/AKfycbx7oF-T-bGhrq_D6I3JMMgIvimk7WYws7SohVdn7y3odfWkdaFNmeZOINaIcNMD-atq/exec", {
    method: "post",
    payload: {
      nome: "Teste",
      email: "teste@email.com",
      telefone: "21999999999",
      data: "2024-05-25",
      horario: "10:00"
    }
  });
  Logger.log(response.getContentText());
}