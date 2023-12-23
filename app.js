let listaDeNumerosSorteados = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 100');
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    console.log (numeroSecreto);
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

/*
function saudacao() ... -> Sem retorno e sem parâmetro = Execução de bloco de código simples.
function cumprimentar(nome) ... -> Sem retorno e com parâmetro = Execução de bloco de código com argumentos.
function gerarNumeroAleatorio() ... -> Com retorno e sem parâmetro = Cálculo e retorno de um valor específico.
function somar(a, b) ... -> Com retorno e com parâmetro = Cálculo e retorno baseado em argumentos.
let saudacao = function() ... -> Função anônima = Definição de função sem nome localmente.
let quadrado = x => x * x; -> Arrow function = Definição concisa de funções curtas.

let = Declara uma variável local no escopo do bloco atual, opcionalmente iniciando-a com um valor.
${numeroSecreto}; ${campo}; ${chute};

function = São blocos de construção que encapsulam um conjunto de instruções reutilizáveis para executar tarefas específicas.
gerarNumeroAleatorio(); exibirTextoNaTela(); verificarChute(); 

document.querySelector = Retorna o primeiro 'element' no documento que corresponde ao seletor ou grupo de seletores especificado.

innerHTML = Obtém ou define a marcação HTML ou XML contido no elemento.

.value = É uma propriedade que recupera o valor atual de um campo de entrada (input) em um formulário.

console.log() = Método estático envia uma mensagem para o console. Pode ser uma string ou pode ser qualquer um ou mais objetos.
'==' Igual = Retorna verdadeiro caso os operadores sejam iguais.

return = Finaliza a execução de uma função e especifica os valores que devem ser retornados para onde a função foi chamada.

parseInt = Analisa um argumento 'string' e retorna um inteira na base especificada.

Math.random() = Retorna um númer pseudoaleatório que é maior ou igual a 0 e menor que 1.

Array = É uma estrutura de dados que permite armazenar e organizar vários valores em uma única variável.
Para criar um 'Array' declaramos uma variável e atribuimos os valores entre [].
Os elementos de uma 'array' são acessados usando índices numéricos, que começam em 0.
Para adicionar um elemento ao final da 'array', podemos usar o método 'push'.
Para remover o último elemento, usamos o método 'pop'.
*/