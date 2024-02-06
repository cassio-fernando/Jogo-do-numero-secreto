ListaDeNumerosSorteados = []
let numeroLimite = 10
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2})
}

function mensagemInicial() {
    exibirTextoNaTela("h1", "Jogo do numero secreto");
    exibirTextoNaTela("p", "Escolha um numero de 1 a 10");
}

mensagemInicial()

function verificarChute() {
  let chute = document.querySelector('input').value;

  if (chute == numeroSecreto) {
    exibirTextoNaTela("h1", "Acertou");
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
    let mensagemTentatva = `Voce descobriu o numero secreto com ${tentativas} ${palavraTentativa}`
    exibirTextoNaTela("p", mensagemTentatva);
    document.getElementById('reiniciar').removeAttribute('disabled')
  } else {
    if (chute > numeroSecreto)
      exibirTextoNaTela("p", "O numero secreto é menor");
    else {
      exibirTextoNaTela("p", "O numero secreto é maior");
    }
    tentativas++
  }
}

function gerarNumeroAleatorio() {
  let numeroEscolhdo = parseInt(Math.random() * numeroLimite + 1);
  let quantidadeDeElementosNaLista = ListaDeNumerosSorteados.length;

  if (quantidadeDeElementosNaLista == numeroLimite) {
    ListaDeNumerosSorteados = []
  }
  if(ListaDeNumerosSorteados.includes(numeroEscolhdo)) {
     return gerarNumeroAleatorio()
  }else {
    ListaDeNumerosSorteados.push(numeroEscolhdo)
    console.log(ListaDeNumerosSorteados)
    return numeroEscolhdo;
  }
}

function limparCampo() {
    chute = document.querySelector('input')
    chute.value = ''
}

function reiniciarJogo() {
    limparCampo()
    mensagemInicial()
    tentativas = 1
    numeroSecreto = gerarNumeroAleatorio()
    document.getElementById('reiniciar').setAttribute('disabled', true)

}