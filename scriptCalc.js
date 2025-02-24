document.addEventListener("DOMContentLoaded", async () => {
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
      verificarOperadores("%");
    });

  const botaoDividir = document
    .getElementById("dividir")
    .addEventListener("click", () => {
      verificarOperadores("÷");
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
      verificarOperadores("×");
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
      verificarOperadores("-");
    });

  const botaoUm = document
    .getElementById("um")
    .addEventListener("click", () => {
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
      verificarOperadores("+");
    });

  const botaoRaizQuadrada = document
    .getElementById("raiz quadrada")
    .addEventListener("click", () => {
      verificarOperadores("√");
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
      verificarOperadores(",");
    });

  const contas = document.getElementById("contas");

  const operadores = ["+", "%", "÷", "×", "√", ",", "-"];

  const botaoIgual = document
    .getElementById("igual")
    .addEventListener("click", () => {
      if (operadores.some((op) => textoTela.includes(op)) == true) {
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
          textoTela = textoTela.replace("%", "/100*");
        }
        let expressao = textoTela;
        try {
          let result = math.evaluate(expressao);
          historicoCalculos.push(`${textoInicial} = ${result}`);
          let conta = "";
          for (historico of historicoCalculos) {
            conta = `${conta}
                <li>${historico}</li>
                `;
          }
          contas.innerHTML = conta;
          textoTela = `${result}`;
          textoTela = textoTela.replace(".", ",");
          tela.setAttribute("value", textoTela);
        } catch (error) {}
      }
    });

  const botaoBackspace = document
    .getElementById("apagar")
    .addEventListener("click", () => {
      textoTela = textoTela.slice(0, -1);
      tela.setAttribute("value", textoTela);
    });

  const botaoDeletarHistorico = document
    .getElementById("deletar-historico")
    .addEventListener("click", () => {
      historicoCalculos = [];
      contas.innerHTML = "";
    });

  const verificarOperadores = (novoOperador) => {
    let index = textoTela.slice(-1);
    const operadores = "+-%÷×√,";
    if (operadores.includes(index) == true) {
      textoTela = textoTela.slice(0, -1);
      textoTela += novoOperador;
      tela.setAttribute("value", textoTela);
      return;
    }
    textoTela += novoOperador;
    tela.setAttribute("value", textoTela);
    return;
  };
});
