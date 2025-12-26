// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
});

// Scroll to Section
function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        mobileMenu.classList.remove('active');
    }
}

// Toast Notification
function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
        <span style="font-size: 24px;">${type === 'success' ? '✓' : '✕'}</span>
        <span>${message}</span>
    `;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// Booking Form Handler
const bookingForm = document.getElementById('bookingForm');
bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('booking-name').value;
    const phone = document.getElementById('booking-phone').value;
    const service = document.getElementById('booking-service').value;
    const date = document.getElementById('booking-date').value;
    const time = document.getElementById('booking-time').value;
    
    if (!name || !phone || !service || !date || !time) {
        showToast('Por favor, preencha todos os campos', 'error');
        return;
    }
    
    // Format date
    const dateObj = new Date(date + 'T00:00:00');
    const dateFormatted = dateObj.toLocaleDateString('pt-PT', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });
    
    // Create message
    const message = `📋 *Nova Marcação - EMD Serviços*

👤 *Nome:* ${name}
📞 *Telefone:* ${phone}
🔧 *Serviço:* ${service}
📅 *Data:* ${dateFormatted}
⏰ *Horário:* ${time}

_Enviado através do site EMD Serviços_`;
    
    // 1. WhatsApp
    const whatsappUrl = `https://wa.me/351914040103?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    // 2. SMS (mobile)
    const smsMessage = `Nova Marcação EMD:\nNome: ${name}\nTel: ${phone}\nServiço: ${service}\nData: ${dateFormatted}\nHorário: ${time}`;
    const smsUrl = `sms:+351914040103?body=${encodeURIComponent(smsMessage)}`;
    
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
        setTimeout(() => {
            window.location.href = smsUrl;
        }, 1000);
    }
    
    // 3. Email
    const emailSubject = `Nova Marcação - ${name}`;
    const emailBody = `Nova Marcação recebida através do site EMD Serviços:

Nome: ${name}
Telefone: ${phone}
Serviço: ${service}
Data: ${dateFormatted}
Horário: ${time}

---
Enviado automaticamente pelo sistema de marcações EMD Serviços`;
    
    const emailUrl = `mailto:emdservicos2025@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    
    setTimeout(() => {
        window.location.href = emailUrl;
    }, 2000);
    
    showToast('Redirecionando para WhatsApp, SMS e Email...', 'success');
    
    // Clear form
    bookingForm.reset();
});

// Contact Form Handler
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('contact-name').value;
    const phone = document.getElementById('contact-phone').value;
    
    if (!name || !phone) {
        showToast('Por favor, preencha todos os campos', 'error');
        return;
    }
    
    // Create message
    const message = `📞 *Pedido de Orçamento Urgente*

👤 *Nome:* ${name}
📱 *Telefone:* ${phone}

🔔 Olá, PRECISO de UM ORÇAMENTO ME LIGUE DE VOLTA

_Enviado através do site EMD Serviços_`;
    
    // 1. WhatsApp
    const whatsappUrl = `https://wa.me/351914040103?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    // 2. SMS (mobile)
    const smsMessage = `Pedido Orçamento EMD:\nNome: ${name}\nTel: ${phone}\n\nOlá, PRECISO de UM ORÇAMENTO ME LIGUE DE VOLTA`;
    const smsUrl = `sms:+351914040103?body=${encodeURIComponent(smsMessage)}`;
    
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
        setTimeout(() => {
            window.location.href = smsUrl;
        }, 1000);
    }
    
    // 3. Email
    const emailSubject = `Pedido de Orçamento Urgente - ${name}`;
    const emailBody = `Pedido de Orçamento recebido através do site EMD Serviços:

Nome: ${name}
Telefone: ${phone}

Mensagem: Olá, PRECISO de UM ORÇAMENTO ME LIGUE DE VOLTA

---
Enviado automaticamente pelo formulário de contacto EMD Serviços`;
    
    const emailUrl = `mailto:emdservicos2025@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    
    setTimeout(() => {
        window.location.href = emailUrl;
    }, 2000);
    
    showToast('Ligaremos em breve, obrigado!', 'success');
    
    // Clear form
    contactForm.reset();
});

// Set minimum date for booking (today)
const bookingDateInput = document.getElementById('booking-date');
const today = new Date().toISOString().split('T')[0];
bookingDateInput.setAttribute('min', today);

// Header scroll effect
let lastScroll = 0;
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > lastScroll && currentScroll > 100) {
        header.style.transform = 'translateY(-100%)';
    } else {
        header.style.transform = 'translateY(0)';
    }
    
    lastScroll = currentScroll;
});

header.style.transition = 'transform 0.3s ease';