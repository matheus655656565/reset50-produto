document.addEventListener('DOMContentLoaded', () => {
    const words = ["DESIGN", "ESTRATÉGIA", "INOVAÇÃO"];
    let wordIndex = 0;
    const animatedWord = document.getElementById('animated-word');

    // Troca das palavras animadas
    const updateWord = () => {
        animatedWord.textContent = words[wordIndex];
        wordIndex = (wordIndex + 1) % words.length;
    };
    setInterval(updateWord, 2000);

    // Fade-in ao rolar
    const handleIntersection = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    };
    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.2 });
    document.querySelectorAll('.fade-in-section').forEach(section => observer.observe(section));

    // Ano automático no rodapé
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // TODO: Renderizar recursos, FAQ e projetos (pode copiar do seu script atual)
});
