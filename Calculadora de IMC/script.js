const calcular = document.getElementById("calcular");

function imc() {
  const nome = document.getElementById("nome").value;
  const altura = document.getElementById("altura").value;
  const peso = document.getElementById("peso").value;
  const resultado = document.getElementById("resultado");

  if (nome !== "" && altura !== "" && peso !== "") {
    const valorIMC = (peso / (altura * altura)).toFixed(1);

    let crasificacao = "";

    if (valorIMC < 18.5) {
      crasificacao = "Abaixo do peso.";
    } else if (valorIMC < 25) {
      crasificacao = "com o peso ideal!";
    } else if (valorIMC < 30) {
      crasificacao = "levemente acima do peso.";
    } else if (valorIMC < 35) {
      crasificacao = "com obesidade grau |";
    } else if (valorIMC < 40) {
      crasificacao = "com obesidade grau ||";
    } else if (valorIMC > 40) {
      crasificacao = "com obesidade grau |||";
    }

    resultado.textContent = `${nome} seu IMC é de ${valorIMC} e você esta ${crasificacao}`;
  } else {
  }
}

calcular.addEventListener("click", imc);
