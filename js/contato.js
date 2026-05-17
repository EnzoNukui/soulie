export const initContato = () => {
    const form = document.querySelector('form');
    
    // Valida se o formulário existe na página atual
    if (!form) return;

    // Escuta o evento de envio (submit) do formulário
    form.addEventListener('submit', (event) => {
        const inputNome = form.querySelector('input[type="text"]');
        const inputEmail = form.querySelector('input[type="email"]');
        const textareaMensagem = form.querySelector('textarea');

        // Captura os valores digitados tirando espaços vazios
        const nome = inputNome ? inputNome.value.trim() : "";
        const email = inputEmail ? inputEmail.value.trim() : "";
        const mensagem = textareaMensagem ? textareaMensagem.value.trim() : "";

        // Teste lógico para verificar se existem campos totalmente vazios
        if (nome === "" || email === "" || mensagem === "") {
            event.preventDefault(); // Impede a página de recarregar e enviar os dados vazios
            alert("Por favor, preencha todos os campos antes de enviar!");
            return;
        }

        // Teste lógico para evitar nomes com menos de 3 caracteres
        if (nome.length < 3) {
            event.preventDefault();
            alert("Por favor, insira um nome válido (mínimo de 3 caracteres).");
            return;
        }

        // Alerta de sucesso caso passe por todas as validações do 'if'
        alert(`Sucesso! Obrigado pelo feedback, ${nome}.`);
    });
};