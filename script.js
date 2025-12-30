document.getElementById('whatsapp-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Pegar valores dos campos para o WhatsApp
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const servico = document.getElementById('servico').value;
    const data = document.getElementById('data').value;
    const numero = "351914040103";

    const mensagem = `Olá EMD Serviços! Gostaria de agendar um orçamento:%0A%0A` +
        `*Nome:* ${nome}%0A` +
        `*Telefone:* ${telefone}%0A` +
        `*Serviço:* ${servico}%0A` +
        `*Data pretendida:* ${data}`;

    window.open(`https://wa.me/${numero}?text=${mensagem}`, '_blank');
});
// Lógica dos Carrosséis (independente do formulário)
document.querySelectorAll('.card').forEach(card => {
    const track = card.querySelector('.carousel-track');
    const dots = card.querySelectorAll('.dot');
    const nextBtn = card.querySelector('.next-btn');
    const prevBtn = card.querySelector('.prev-btn');
    const images = track.querySelectorAll('img');
    
    let currentIndex = 0;

    function updateCarousel(index) {
        if (index >= images.length) currentIndex = 0;
        else if (index < 0) currentIndex = images.length - 1;
        else currentIndex = index;

        track.style.transform = `translateX(-${currentIndex * 100}%)`;

        const activeDot = card.querySelector('.dot.active');
        if (activeDot) activeDot.classList.remove('active');
        if (dots[currentIndex]) dots[currentIndex].classList.add('active');
    }

    if(nextBtn) {
        nextBtn.addEventListener('click', (e) => {
            e.preventDefault();
            updateCarousel(currentIndex + 1);
        });
    }

    if(prevBtn) {
        prevBtn.addEventListener('click', (e) => {
            e.preventDefault();
            updateCarousel(currentIndex - 1);
        });
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', (e) => {
            e.preventDefault();
            updateCarousel(index);
        });
    });
});