window.initPortfolioMotion = () => {
    // 1. Configura o observador de interseção para monitorizar o scroll da página
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Quando o elemento entra na área visível do ecrã
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Opcional: para a observação do elemento após a primeira revelação
                observer.unobserve(entry.target);
            }
        });
    }, { 
        // Dispara a animação ligeiramente antes do elemento estar totalmente visível
        threshold: 0.05,
        rootMargin: "0px 0px -50px 0px"
    });

    // 2. Encontra todos os blocos com a classe de animação e anexa-os ao observador
    const animatableElements = document.querySelectorAll('.reveal-on-scroll');
    animatableElements.forEach(el => observer.observe(el));
};