export const initContato = () => {
    const form = document.querySelector('form');
  
    if (!form) return;

    form.addEventListener('submit', (event) => {
        event.preventDefault(); 
        
        const inputNome = form.querySelector('input[type="text"]');
        const inputEmail = form.querySelector('input[type="email"]');
        const textareaMensagem = form.querySelector('textarea');

        const nome = inputNome ? inputNome.value.trim() : "";
        const email = inputEmail ? inputEmail.value.trim() : "";
        const mensagem = textareaMensagem ? textareaMensagem.value.trim() : "";

        // Teste lógico para verificar se existem campos totalmente vazios
        if (nome === "" || email === "" || mensagem === "") {
            alert("Por favor, preencha todos os campos antes de enviar!");
            return;
        }

        if (nome.length < 3) {
            alert("Por favor, insira um nome válido (mínimo de 3 caracteres).");
            return;
        }
        alert(`Sucesso! Obrigado pelo feedback, ${nome}.`);
        form.reset();
    });
};