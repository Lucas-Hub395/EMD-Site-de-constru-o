// Mobile Menu Toggle
document.getElementById('mobileMenuBtn').addEventListener('click', function() {
    const mobileMenu = document.getElementById('mobileMenu');
    const menuIcon = this.querySelector('.menu-icon');
    
    mobileMenu.classList.toggle('active');
    menuIcon.textContent = mobileMenu.classList.contains('active') ? '✕' : '☰';
});

// Smooth Scroll to Section
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const headerOffset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });

        // Close mobile menu if open
        const mobileMenu = document.getElementById('mobileMenu');
        const menuBtn = document.getElementById('mobileMenuBtn');
        if (mobileMenu.classList.contains('active')) {
            mobileMenu.classList.remove('active');
            menuBtn.querySelector('.menu-icon').textContent = '☰';
        }
    }
}

// Image Carousel Functions
function prevSlide(button) {
    const carousel = button.closest('.service-carousel');
    const images = carousel.querySelectorAll('.carousel-img');
    const dots = carousel.querySelectorAll('.dot');
    let currentIndex = Array.from(images).findIndex(img => img.classList.contains('active'));
    
    images[currentIndex].classList.remove('active');
    dots[currentIndex].classList.remove('active');
    
    currentIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    
    images[currentIndex].classList.add('active');
    dots[currentIndex].classList.add('active');
}

function nextSlide(button) {
    const carousel = button.closest('.service-carousel');
    const images = carousel.querySelectorAll('.carousel-img');
    const dots = carousel.querySelectorAll('.dot');
    let currentIndex = Array.from(images).findIndex(img => img.classList.contains('active'));
    
    images[currentIndex].classList.remove('active');
    dots[currentIndex].classList.remove('active');
    
    currentIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    
    images[currentIndex].classList.add('active');
    dots[currentIndex].classList.add('active');
}

function goToSlide(dotElement, index) {
    const carousel = dotElement.closest('.service-carousel');
    const images = carousel.querySelectorAll('.carousel-img');
    const dots = carousel.querySelectorAll('.dot');
    
    // Remove active from all
    images.forEach(img => img.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Add active to selected
    images[index].classList.add('active');
    dots[index].classList.add('active');
}

// Auto-advance carousels (optional)
function initAutoCarousel() {
    const carousels = document.querySelectorAll('.service-carousel');
    
    carousels.forEach(carousel => {
        const images = carousel.querySelectorAll('.carousel-img');
        if (images.length > 1) {
            setInterval(() => {
                const nextBtn = carousel.querySelector('.carousel-btn.next');
                if (nextBtn) {
                    nextSlide(nextBtn);
                }
            }, 5000); // Change slide every 5 seconds
        }
    });
}

// Initialize auto carousel on page load
document.addEventListener('DOMContentLoaded', function() {
    initAutoCarousel();
    
    // Set minimum date for booking
    const dateInput = document.getElementById('booking-date');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.setAttribute('min', today);
    }
});

// Toast Notification
function showToast(message, type = 'info') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = `toast ${type} show`;
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Booking Form Submission
document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('booking-name').value;
    const phone = document.getElementById('booking-phone').value;
    const service = document.getElementById('booking-service').value;
    const date = document.getElementById('booking-date').value;
    const time = document.getElementById('booking-time').value;
    
    // Validation
    if (!name || !phone || !service || !date || !time) {
        showToast('Por favor, preencha todos os campos', 'error');
        return;
    }
    
    // Format date to Portuguese
    const dateObj = new Date(date + 'T00:00:00');
    const dateFormatted = dateObj.toLocaleDateString('pt-PT', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });
    
    // Get service name from select
    const serviceSelect = document.getElementById('booking-service');
    const serviceName = serviceSelect.options[serviceSelect.selectedIndex].text;
    
    // Create formatted message for WhatsApp
    const message = `📋 *Nova Marcação - EMD Serviços*

👤 *Nome:* ${name}
📞 *Telefone:* ${phone}
🔧 *Serviço:* ${serviceName}
📅 *Data:* ${dateFormatted}
⏰ *Horário:* ${time}

_Enviado através do site EMD Serviços_`;
    
    // 1. Open WhatsApp
    const whatsappNumber = '351914040103';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    // 2. Try to open SMS (works on mobile)
    const smsMessage = `Nova Marcação EMD:\nNome: ${name}\nTel: ${phone}\nServiço: ${serviceName}\nData: ${dateFormatted}\nHorário: ${time}`;
    const smsUrl = `sms:+351914040103?body=${encodeURIComponent(smsMessage)}`;
    
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
        setTimeout(() => {
            window.location.href = smsUrl;
        }, 1000);
    }
    
    // 3. Prepare Email
    const emailSubject = `Nova Marcação - ${name}`;
    const emailBody = `Nova Marcação recebida através do site EMD Serviços:

Nome: ${name}
Telefone: ${phone}
Serviço: ${serviceName}
Data: ${dateFormatted}
Horário: ${time}

---
Enviado automaticamente pelo sistema de marcações EMD Serviços`;
    
    const emailUrl = `mailto:emdservicos2025@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Open email after delay
    setTimeout(() => {
        window.location.href = emailUrl;
    }, 2000);
    
    showToast('Redirecionando para WhatsApp, SMS e Email...', 'success');
    
    // Clear form
    this.reset();
});

// Contact Form Submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('contact-name').value;
    const phone = document.getElementById('contact-phone').value;
    
    // Validation
    if (!name || !phone) {
        showToast('Por favor, preencha todos os campos', 'error');
        return;
    }
    
    // Create formatted message
    const message = `📞 *Pedido de Orçamento Urgente*

👤 *Nome:* ${name}
📱 *Telefone:* ${phone}

🔔 Olá, PRECISO de UM ORÇAMENTO ME LIGUE DE VOLTA

_Enviado através do site EMD Serviços_`;
    
    // 1. Open WhatsApp
    const whatsappNumber = '351914040103';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    // 2. Try to open SMS (works on mobile)
    const smsMessage = `Pedido Orçamento EMD:\nNome: ${name}\nTel: ${phone}\n\nOlá, PRECISO de UM ORÇAMENTO ME LIGUE DE VOLTA`;
    const smsUrl = `sms:+351914040103?body=${encodeURIComponent(smsMessage)}`;
    
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
        setTimeout(() => {
            window.location.href = smsUrl;
        }, 1000);
    }
    
    // 3. Prepare Email
    const emailSubject = `Pedido de Orçamento Urgente - ${name}`;
    const emailBody = `Pedido de Orçamento recebido através do site EMD Serviços:

Nome: ${name}
Telefone: ${phone}

Mensagem: Olá, PRECISO de UM ORÇAMENTO ME LIGUE DE VOLTA

---
Enviado automaticamente pelo formulário de contacto EMD Serviços`;
    
    const emailUrl = `mailto:emdservicos2025@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Open email after delay
    setTimeout(() => {
        window.location.href = emailUrl;
    }, 2000);
    
    showToast('Ligaremos em breve, obrigado!', 'success');
    
    // Clear form
    this.reset();
});

// Add scroll animation for sections
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });
});

// Header scroll effect
let lastScroll = 0;
const header = document.getElementById('header');

window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        return;
    }
    
    if (currentScroll > lastScroll && currentScroll > 100) {
        // Scrolling down
        header.style.transform = 'translateY(-100%)';
    } else {
        // Scrolling up
        header.style.transform = 'translateY(0)';
        header.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// Add transition to header
header.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';

// Prevent form resubmission on page refresh
if (window.history.replaceState) {
    window.history.replaceState(null, null, window.location.href);
}
