export const initMenu = () => {
    // Seleção dos elementos do DOM usando seletores CSS e armazenando em const
    const menuToggle = document.querySelector('.menu-toggle');
    const navbar = document.querySelector('.navbar');

    // Estrutura de decisão (if) para garantir que o menu exista na página atual
    if (!menuToggle || !navbar) return;

    // Escutando o evento de clique do mouse para abrir/fechar o menu
    menuToggle.addEventListener('click', () => {
        navbar.classList.toggle('active');
        
        // Verifica se a classe está ativa para atualizar a acessibilidade
        const isOpen = navbar.classList.contains('active');
        menuToggle.setAttribute('aria-expanded', isOpen);
    });

    // querySelectorAll captura todos os links internos do menu mobile
    const navLinks = document.querySelectorAll('.nav-list a');

    // Executa uma Arrow Function para cada link da lista (forEach)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Fecha o menu automaticamente se um link for clicado
            navbar.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
        });
    });
};