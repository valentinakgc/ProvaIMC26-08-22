function CalcularIMC(event) {
    event.preventDefault();
  
    console.log("Calculando IMC");
  
    var peso = document.getElementById("peso").value;
    var altura = document.getElementById("altura").value / 100;
    var imc = Math.round(peso / (altura ** 2) * 100) / 100;

    var statusDoAlerta = "";
    var mensagemDoAlerta = "";
  
    if(imc < 18.5) {
      statusDoAlerta = 'warning';
      mensagemDoAlerta = 'Abaixo do peso';
    }
    else if(imc < 24.9) {
      statusDoAlerta = 'success';
      mensagemDoAlerta = 'Peso normal';
    }
    else if(imc < 29.9) {
      statusDoAlerta = 'warning';
      mensagemDoAlerta = 'Sobrepeso';
    }
    else if(imc < 34.9) { 
      statusDoAlerta = 'danger';
      mensagemDoAlerta = 'Obesidade grau I';
    }
    else {
      statusDoAlerta = 'danger';
      mensagemDoAlerta = 'Obesidade grau II';
    }
  
    respostas.push(Number(imc));
    console.log(respostas);
  
   
    document.getElementById("imc").innerHTML = ` 
      <h3>Resultado</h3>
      <div class="alert alert-${statusDoAlerta} text-center" role="alert">
        <p>${mensagemDoAlerta} - IMC : ${imc}</p>
      </div>
    `;
  
  
  }
  
  function limparCampos(event) {
    event.preventDefault();
  
    document.getElementById("peso").value = "";
    document.getElementById("altura").value = "";
    document.getElementById("imc").innerHTML = "";
  }