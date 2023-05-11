function deletarConta() {
    return new Promise(resolve => {
        // Cria uma div com a mensagem de confirmação
        const divConfirmacao = document.createElement("div");
        divConfirmacao.innerHTML = "Deseja sair da sua conta?";
        divConfirmacao.style.backgroundColor = "#048387";
        divConfirmacao.style.color = "white";
        divConfirmacao.style.padding = "70px";
        divConfirmacao.style.position = "fixed";
        divConfirmacao.style.top = "50%";
        divConfirmacao.style.borderRadius = "10px";
        divConfirmacao.style.left = "50%";
        divConfirmacao.style.transform = "translate(-50%, -50%)";
        divConfirmacao.style.zIndex = "9999";

        // Cria um botão "OK" e adiciona um evento de clique a ele
        const botaoOk = document.createElement("button");
        botaoOk.innerHTML = "OK";
        botaoOk.style.backgroundColor = "white";
        botaoOk.style.color = "green";
        botaoOk.style.padding = "10px";
        botaoOk.style.paddingInline = "30px";
        botaoOk.style.cursor = "pointer";
        botaoOk.style.border = "none";
        botaoOk.style.marginRight = "10px";
        botaoOk.style.marginTop = "70px";
        botaoOk.style.borderRadius = "10px";
        botaoOk.addEventListener("click", () => {
            // Resolve a promessa com true ao clicar no botão "OK"
            resolve(true);
            document.body.removeChild(divConfirmacao);
        });
        
        // Cria um botão "CANCELAR" e adiciona um evento de clique a ele
        const botaoCancelar = document.createElement("button");
        botaoCancelar.innerHTML = "CANCELAR";
        botaoCancelar.style.backgroundColor = "white";
        botaoCancelar.style.padding = "10px";
        botaoCancelar.style.color = "green";
        botaoCancelar.style.border = "none";
        botaoCancelar.style.marginLeft = "20px";
        botaoCancelar.style.borderRadius = "10px";
        botaoCancelar.style.cursor = "pointer";
        botaoCancelar.addEventListener("click", () => {
            // Resolve a promessa com false ao clicar no botão "CANCELAR"
            resolve(false);
            document.body.removeChild(divConfirmacao);
        });

        // Cria uma div para conter os botões
        const divBotoes = document.createElement("div");
        divBotoes.appendChild(botaoOk);
        divBotoes.appendChild(botaoCancelar);

        // Adiciona a div de confirmação e a div de botões ao corpo do documento
        divConfirmacao.appendChild(divBotoes);
        document.body.appendChild(divConfirmacao);
    });
}

export default deletarConta;