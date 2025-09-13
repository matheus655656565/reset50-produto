// Dados dos projetos
const PROJECTS = [
    {
        id: "reset-stream",
        title: "RESET50 - Portfólio Oficial",
        tagline: "Identidade, mascote, site e experiência tipo streaming",
        preview: "https://via.placeholder.com/900x500.png?text=RESET50+Preview",
        description: "Criação completa: identidade visual, mascote, layout streaming, e-commerce de conteúdo. Tecnologias: React, Tailwind, Firebase, MercadoPago.",
        highlights: [
            "Mascote guia interativo",
            "Catálogo estilo streaming (cards)",
            "Checkout transparente integrado",
        ],
        role: "Design + Frontend + Mascote + Deploy",
    },
    {
        id: "sites",
        title: "Sites Profissionais",
        tagline: "Landing pages, e-commerce e sistemas sob medida",
        preview: "https://via.placeholder.com/900x500.png?text=Sites",
        description: "Sites completos desenvolvidos do zero, com design exclusivo, SEO otimizado e responsividade total.",
        role: "Programação + Design + Deploy",
    },
    {
        id: "mascotes",
        title: "Criação de Mascotes",
        tagline: "Personagens exclusivos para marcas",
        preview: "https://via.placeholder.com/900x500.png?text=Mascotes",
        description: "Criação de mascotes ilustrados ou digitais para representar marcas e dar vida a identidades visuais.",
        role: "Design + Ilustração",
    },
    {
        id: "posts",
        title: "Posts para Redes Sociais",
        tagline: "Artes criativas e impactantes",
        preview: "https://via.placeholder.com/900x500.png?text=Posts",
        description: "Posts para Instagram, Facebook e outras plataformas, sempre alinhados à identidade visual da marca.",
        role: "Design + Identidade Visual",
    },
    {
        id: "banners",
        title: "Banners Profissionais",
        tagline: "Campanhas publicitárias e identidade visual",
        preview: "https://via.placeholder.com/900x500.png?text=Banners",
        description: "Banners para sites, anúncios digitais e impressos, criados para destacar e impactar.",
        role: "Design Gráfico",
    },
];

// Array de palavras para animação do título
const words = ["DESIGN", "DESENVOLVIMENTO", "ESTRATÉGIA", "INOVAÇÃO"];
let wordIndex = 0;

// Elementos DOM
const animatedWordElement = document.getElementById('animated-word');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalHighlights = document.getElementById('modal-highlights');
const modalClose = document.getElementById('modal-close');
const currentYearElement = document.getElementById('current-year');
const projectCards = document.querySelectorAll('.project-card');
const faqQuestions = document.querySelectorAll('.faq-question');

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    // Iniciar animação de palavras
    startWordAnimation();
    
    // Definir ano atual no footer
    currentYearElement.textContent = new Date().getFullYear();
    
    // Adicionar event listeners
    setupEventListeners();
    
    // Configurar observador de interseção para animações
    setupIntersectionObserver();
});

// Animação de palavras no título
function startWordAnimation() {
    // Mostrar a primeira palavra
    animateWord(words[wordIndex]);
    
    // Mudar a palavra a cada 3 segundos
    setInterval(() => {
        wordIndex = (wordIndex + 1) % words.length;
        animateWord(words[wordIndex]);
    }, 3000);
}

function animateWord(word) {
    // Limpar o conteúdo atual
    animatedWordElement.innerHTML = '';
    
    // Adicionar cada letra com um atraso
    word.split('').forEach((char, index) => {
        const span = document.createElement('span');
        span.textContent = char === ' ' ? '\u00A0' : char;
        span.style.display = 'inline-block';
        span.style.opacity = '0';
        span.style.transform = 'translateY(50px)';
        
        animatedWordElement.appendChild(span);
        
        // Animar a letra após um delay
        setTimeout(() => {
            span.style.transition = 'opacity 0.5s, transform 0.5s';
            span.style.opacity = '1';
            span.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// Configurar event listeners
function setupEventListeners() {
    // Event listeners para os cards de projeto
    projectCards.forEach((card, index) => {
        card.addEventListener('click', () => {
            openModal(PROJECTS[index]);
        });
    });
    
    // Event listener para fechar o modal
    modalClose.addEventListener('click', closeModal);
    
    // Event listener para fechar o modal clicando fora
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Event listeners para as FAQs
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const isOpen = answer.classList.contains('open');
            
            // Fechar todas as FAQs
            document.querySelectorAll('.faq-answer').forEach(ans => {
                ans.classList.remove('open');
            });
            
            // Abrir a FAQ clicada se não estava aberta
            if (!isOpen) {
                answer.classList.add('open');
            }
        });
    });
}

// Abrir modal com informações do projeto
function openModal(project) {
    modalImage.src = project.preview;
    modalImage.alt = project.title;
    modalTitle.textContent = project.title;
    modalDescription.textContent = project.description;
    
    // Limpar e adicionar destaques se existirem
    modalHighlights.innerHTML = '';
    if (project.highlights) {
        project.highlights.forEach(highlight => {
            const li = document.createElement('li');
            li.textContent = highlight;
            modalHighlights.appendChild(li);
        });
    }
    
    // Mostrar o modal
    modal.classList.add('open');
    
    // Prevenir scroll do body
    document.body.style.overflow = 'hidden';
}

// Fechar modal
function closeModal() {
    modal.classList.remove('open');
    document.body.style.overflow = 'auto';
}

// Configurar observador de interseção para animações
function setupIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observar todos os elementos com a classe fade-in
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}

// Adicionar classes de animação aos elementos
function addAnimationClasses() {
    // Adicionar classe fade-in para todas as seções
    const sections = document.querySelectorAll('.section > div, .feature, .project-card');
    sections.forEach((section, index) => {
        section.classList.add('fade-in');
        section.style.setProperty('--index', index);
    });
    
    // Adicionar classe stagger-children para containers
    const containers = document.querySelectorAll('.features-grid, .projects-grid');
    containers.forEach(container => {
        container.classList.add('stagger-children');
    });
}

// Chamar a função para adicionar classes de animação após o carregamento
window.addEventListener('load', addAnimationClasses);
