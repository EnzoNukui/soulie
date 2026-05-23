/**
 * Inicializa os comportamentos dinâmicos da página de Solução.
 * Controla o sistema de ofensivas em formato de linha do tempo cumulativa via Event Delegation.
 */
export const initSolucao = () => {
    const containerDias = document.querySelector(".ui-days-row");
    const containerMensagem = document.querySelector(".ui-streak-message");

    // Trava de segurança: se não encontrar os elementos, interrompe a execução
    if (!containerDias || !containerMensagem) return;

    // Mensagens curtas, diretas e sem emojis
    const frasesSoulie = [
        "Segunda-feira concluída! Foco total na semana.",
        "Terça-feira feita! Economia de energia ativada.",
        "Metade da semana! Ofensiva mantida com sucesso.",
        "Quinta-feira concluída! Excelente consistência.",
        "Sexta-feira feita! Metas semanais batidas.",
        "Sábado ativo! Comunidades movimentadas.",
        "Ofensiva completa! Excelente progresso semanal."
    ];

    // Event Delegation ouvindo apenas o elemento pai
    containerDias.addEventListener("click", (event) => {
        const diaClicado = event.target.closest(".ui-day");
        if (!diaClicado) return;

        const listaDias = Array.from(containerDias.children);
        const indice = listaDias.indexOf(diaClicado);

        if (indice !== -1) {
            listaDias.forEach((dia, i) => {
                if (i <= indice) {
                    dia.classList.add("done");
                    dia.classList.remove("active");
                } else {
                    dia.classList.remove("done", "active");
                }
            });

            // Atualiza a mensagem com efeito suave de transição
            if (frasesSoulie[indice]) {
                containerMensagem.style.opacity = "0";
                
                setTimeout(() => {
                    containerMensagem.textContent = frasesSoulie[indice];
                    containerMensagem.style.opacity = "1";
                }, 150);
            }
        }
    });
};