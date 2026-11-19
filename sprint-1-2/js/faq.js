export const initFAQ = () => {
    // querySelectorAll captura todas as perguntas (que funcionam como botões)
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    // Teste lógico para encerrar o script caso não exista FAQ na página atual
    if (faqQuestions.length === 0) return;

    // Percorre a lista/coleção de perguntas aplicando o evento em cada uma delas
    faqQuestions.forEach(question => {
        // Escuta o evento de clique do mouse na pergunta correspondente
        question.addEventListener('click', () => {
            const currentItem = question.parentElement; // Elemento pai (.faq-item)

            // Percorre todos os itens do FAQ para fechar os que não foram clicados
            document.querySelectorAll('.faq-item').forEach(item => {
                // Estrutura de decisão para verificar se o item é diferente do atual
                if (item !== currentItem) {
                    item.classList.remove('active');
                }
            });

            // Abre ou fecha o item clicado alternando a classe active
            currentItem.classList.toggle('active');
        });
    });
};