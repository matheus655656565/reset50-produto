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
    // Definir palavra fixa no título
    animatedWordElement.textContent = "DESIGN";
    
    // Definir ano atual no footer
    currentYearElement.textContent = new Date().getFullYear();
    
    // Adicionar event listeners
    setupEventListeners();
});

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
