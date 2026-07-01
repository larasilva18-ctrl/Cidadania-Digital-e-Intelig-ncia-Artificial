function verificarResposta(escolhaIncorreta) {
    const resultado = document.getElementById("resultado");
    
    if (escolhaIncorreta) {
        resultado.innerHTML = "❌ Incorreto! Compartilhar sem checar ajuda a espalhar desinformação.";
        resultado.style.color = "#e74c3c";
    } else {
        resultado.innerHTML = "✅ Correto! Sempre cheque as fontes antes de espalhar qualquer informação.";
        resultado.style.color = "#2ecc71";
    }
}
