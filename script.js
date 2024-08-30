const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPergunta = document.querySelector('.caixa-pergunta');
const caixaAlternativa = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');

const perguntas = [
    {
        enunciado: "você se interessa pela inteligencia artificial?",
        alternativas:["sim","não"]
    },
    {
        enunciado: "você usa a inteligencia artificial?",
        alternativas:["sim","não"]
    },
    {
        enunciado: "voê depende da inteligencia artificial?",
        alternativas:["sim","não"]
    }
]

let posicao = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas[posicao];
    caixaPergunta.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativa){
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa;
    }
}

mostraPergunta();