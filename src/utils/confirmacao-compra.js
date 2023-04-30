// Código para mostrar a tela de confirmação
function mostrarConfirmacao() {
    // Cria uma div com a mensagem de confirmação
        const divConfirmacao = document.createElement("div");
            divConfirmacao.innerHTML = "Produto adicionado ao carrinho!";
            divConfirmacao.style.backgroundColor = "green";
            divConfirmacao.style.color = "white";
            divConfirmacao.style.padding = "10px";
            divConfirmacao.style.position = "fixed";
            divConfirmacao.style.top = "90%";
            divConfirmacao.style.left = "50%";
            divConfirmacao.style.transform = "translate(-50%, -50%)";
            divConfirmacao.style.zIndex = "9999";
            
            // Adiciona a div ao corpo do documento
            document.body.appendChild(divConfirmacao);
            
            // Remove a div após 3 segundos
            setTimeout(() => {
                document.body.removeChild(divConfirmacao);
            }, 3000);
}

export default mostrarConfirmacao;