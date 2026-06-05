window.initPortfolioMotion = () => {
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Para de observar após animar
            }
        });
    }, { 
        threshold: 0.05,
        rootMargin: "0px 0px -50px 0px"
    });

    const animatableElements = document.querySelectorAll('.reveal-on-scroll');
    animatableElements.forEach(el => observer.observe(el));

    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            
            const submitBtn = contactForm.querySelector('.submit-btn');
            if (submitBtn) submitBtn.innerText = "ENVIANDO...";

            emailjs.sendForm('service_9h8v9qj', 'template_1l7m8n9', this)
                .then(function() {
                    alert('Mensagem enviada com sucesso!');
                    contactForm.reset();
                    if (submitBtn) submitBtn.innerText = "ENVIAR MENSAGEM";
                }, function(error) {
                    alert('Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.');
                    if (submitBtn) submitBtn.innerText = "ENVIAR MENSAGEM";
                    console.error('EmailJS Error:', error);
                });
        });
    }
}