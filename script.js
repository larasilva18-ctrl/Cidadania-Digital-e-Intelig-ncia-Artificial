// Banco de perguntas do jogo
const perguntas = [
    {
        pergunta: "1. Você recebeu um áudio de um famoso pedindo Pix para uma campanha beneficente urgente. O que você faz?",
        opcoes: [
            "Acredito e envio o dinheiro na hora para ajudar.",
            "Desconfio. Vozes podem ser clonadas por IA. Procuro o perfil oficial do famoso para checar."
        ],
        correta: 1
    },
    {
        pergunta: "2. Ao olhar uma foto de uma notícia, você nota que a pessoa tem 6 dedos em uma das mãos e o fundo está borrado de forma estranha. O que isso indica?",
        opcoes: [
            "É apenas um defeito da câmera fotográfica comum.",
            "Há grandes chances de ser uma imagem gerada por Inteligência Artificial."
        ],
        correta: 1
    },
    {
        pergunta: "3. Qual é a melhor atitude ao receber uma notícia alarmante em um grupo de mensagens?",
        opcoes: [
            "Não repassar antes de jogar o título da notícia em um buscador para ver se é real.",
            "Encaminhar imediatamente para o máximo de grupos possível para alertar a todos."
        ],
        correta: 0
    }
];

let perguntaAtual = 0;
let pontuacao = 0;

function carregarPergunta() {
    const elementoPergunta = document.getElementById("pergunta");
    const elementoAlternativas = document.getElementById("alternativas");
    const elementoResultado = document.getElementById("resultado");
    const btnProximo = document.getElementById("btn-proximo");

    elementoResultado.innerHTML = "";
    btnProximo.style.display = "none";
    elementoAlternativas.innerHTML = "";

    if (perguntaAtual < perguntas.length) {
        let dadosPergunta = perguntas[perguntaAtual];
        elementoPergunta.innerText = dadosPergunta.pergunta;

        dadosPergunta.opcoes.forEach((opcao, indice) => {
            const botao = document.createElement("button");
            botao.innerText = opcao; // CORRIGIDO: Removido o erro do 'opacity'
            botao.classList.add("btn-opcao");
            botao.onclick = () => verificarResposta(indice);
            elementoAlternativas.appendChild(botao);
        });
    } else {
        elementoPergunta.innerText = "🎉 Jogo Terminado!";
        elementoAlternativas.innerHTML = `<p>Você acertou ${pontuacao} de ${perguntas.length} perguntas.</p>`;
    }
}

function verificarResposta(indiceSelecionado) {
    const elementoResultado = document.getElementById("resultado");
    const btnProximo = document.getElementById("btn-proximo");
    const dadosPergunta = perguntas[perguntaAtual];

    const botoes = document.querySelectorAll(".btn-opcao");
    botoes.forEach(btn => btn.disabled = true);

    if (indiceSelecionado === dadosPergunta.correta) {
        elementoResultado.innerHTML = "✅ Muito bem! Você agiu como um cidadão digital consciente.";
        elementoResultado.style.color = "#2ecc71";
        pontuacao++;
    } else {
        elementoResultado.innerHTML = "❌ Atenção! Essa ação pode ajudar a espalhar golpes ou fake news.";
        elementoResultado.style.color = "#e74c3c";
    }

    btnProximo.style.display = "block";
}

function proximaPergunta() {
    perguntaAtual++;
    carregarPergunta();
}

window.onload = carregarPergunta;
