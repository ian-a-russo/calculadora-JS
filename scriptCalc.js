let textoTela = "";
let ParentesesAberto = false;
let historicoCalculos = [];
const tela = document.getElementById("screen");

const botaoClear = document
  .getElementById("C")
  .addEventListener("click", () => {
    textoTela = "";
    tela.setAttribute("value", textoTela);
  });

const botaoParenteses = document
  .getElementById("parenteses")
  .addEventListener("click", () => {
    if (!ParentesesAberto) {
      textoTela += "(";
      ParentesesAberto = true;
      tela.setAttribute("value", textoTela);
      return;
    }
    return (
      (textoTela += ")"),
      (ParentesesAberto = false),
      tela.setAttribute("value", textoTela)
    );
  });

const botaoPorcentagem = document
  .getElementById("porcentagem")
  .addEventListener("click", () => {
    textoTela += "%×";
    tela.setAttribute("value", textoTela);
  });

const botaoDividir = document
  .getElementById("dividir")
  .addEventListener("click", () => {
    textoTela += "÷";
    tela.setAttribute("value", textoTela);
  });

const botaoSete = document
  .getElementById("sete")
  .addEventListener("click", () => {
    textoTela += "7";
    tela.setAttribute("value", textoTela);
  });

const botaoOito = document
  .getElementById("oito")
  .addEventListener("click", () => {
    textoTela += "8";
    tela.setAttribute("value", textoTela);
  });

const botaoNove = document
  .getElementById("nove")
  .addEventListener("click", () => {
    textoTela += "9";
    tela.setAttribute("value", textoTela);
  });

const botaoMultiplicar = document
  .getElementById("multiplicar")
  .addEventListener("click", () => {
    textoTela += "×";
    tela.setAttribute("value", textoTela);
  });

const botaoQuatro = document
  .getElementById("quatro")
  .addEventListener("click", () => {
    textoTela += "4";
    tela.setAttribute("value", textoTela);
  });

const botaoCinco = document
  .getElementById("cinco")
  .addEventListener("click", () => {
    textoTela += "5";
    tela.setAttribute("value", textoTela);
  });

const botaoSeis = document
  .getElementById("seis")
  .addEventListener("click", () => {
    textoTela += "6";
    tela.setAttribute("value", textoTela);
  });

const botaoSubtrair = document
  .getElementById("subtrair")
  .addEventListener("click", () => {
    textoTela += "-";
    tela.setAttribute("value", textoTela);
  });

const botaoUm = document.getElementById("um").addEventListener("click", () => {
  textoTela += "1";
  tela.setAttribute("value", textoTela);
});

const botaoDois = document
  .getElementById("dois")
  .addEventListener("click", () => {
    textoTela += "2";
    tela.setAttribute("value", textoTela);
  });

const botaoTres = document
  .getElementById("tres")
  .addEventListener("click", () => {
    textoTela += "3";
    tela.setAttribute("value", textoTela);
  });

const botaoSomar = document
  .getElementById("somar")
  .addEventListener("click", () => {
    textoTela += "+";
    tela.setAttribute("value", textoTela);
  });

const botaoRaizQuadrada = document
  .getElementById("raiz quadrada")
  .addEventListener("click", () => {
    textoTela += "√";
    tela.setAttribute("value", textoTela);
  });

const botaoZero = document
  .getElementById("zero")
  .addEventListener("click", () => {
    textoTela += "0";
    tela.setAttribute("value", textoTela);
  });

const botaoVirgula = document
  .getElementById("virgula")
  .addEventListener("click", () => {
    textoTela += ",";
    tela.setAttribute("value", textoTela);
  });

const contas = document.getElementById("contas");

const botaoIgual = document
  .getElementById("igual")
  .addEventListener("click", () => {
    let textoInicial = textoTela;
    for (let caractere of textoTela) {
      if (caractere == "√") {
        let calcRaiz = /(?<=√)\d+/;
        let valorRaiz = textoTela.match(calcRaiz);
        if (valorRaiz) {
          let raizCompleta = /(\√)\d+/;
          let raiz = textoTela.match(raizCompleta);
          if (raiz) {
            textoTela = textoTela.replace(
              raiz[0],
              Math.sqrt(Number(valorRaiz[0])).toString()
            );
          }
        }
        console.log("valor: ", valorRaiz);
        console.log(textoTela);
      }
      textoTela = textoTela.replace("×", "*");
      textoTela = textoTela.replace("÷", "/");
      textoTela = textoTela.replace(",", ".");
    }
    let expressao = textoTela;
    let result = math.evaluate(expressao);
    textoTela = `${result}`;
    textoTela = textoTela.replace(".", ",");
    tela.setAttribute("value", textoTela);
    historicoCalculos.push(`${textoInicial} = ${result}`);
    let conta = "";
    for (historico of historicoCalculos) {
      conta = `${conta}
        <li>${historico}</li>
        `;
    }
    contas.innerHTML = conta;
  });
const botaoBackspace = document
  .getElementById("apagar")
  .addEventListener("click", () => {
    textoTela = textoTela.slice(0, -1);
    tela.setAttribute("value", textoTela);
  });
