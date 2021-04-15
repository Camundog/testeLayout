import './css/style.scss';
import './css/reset.scss';

//variaveis de valor
var nome = document.getElementById("firstName");
var sobrenome = document.getElementById("lastName");
var participacao = document.getElementById("participation");

//variavel de validação
let validacaoCampo1 = document.getElementById('firstName');
let validacaoCampo2 = document.getElementById('lastName');
let validacaoCampo3 = document.getElementById('participation')

window.addLinha = function (idTabela) {
    //Validação de campo vazio ou nulo
    if (validacaoCampo1.value == null || validacaoCampo1.value == "") {
        alert('Preencha o seu primeiro nome');
    }
    else if (validacaoCampo2.value == null || validacaoCampo2.value == "") {
        alert("Preencha o seu sobrenome");
    }
    else if (validacaoCampo3.value == null || validacaoCampo3.value == "") {
        alert("Preencha a porcentagem de participação")
    }

    //Validação de valor acima de 100 ou negativo
    else {

        let campo3 = participacao.value;

        if (campo3 > 100) {
            alert('Proibido valores acima de 100')
        }
        else if (campo3 < 0) {
            alert('Proibido valores negativos')
        }


        else {
            var tabela = document.getElementById(idTabela);
            var numeroLinhas = tabela.rows.length;
            var linha = tabela.insertRow(numeroLinhas);
            var celula = linha.insertCell(0)
            var celula1 = linha.insertCell(1);
            var celula2 = linha.insertCell(2);

            let dadosParticipation = [];

            let campo1 = nome.value;
            let campo2 = sobrenome.value;

            celula.innerHTML = campo1;
            celula1.innerHTML = campo2;
            celula2.innerHTML = campo3;
        }

        //Limpando os campos
        validacaoCampo1.value = "";
        validacaoCampo2.value = "";
        validacaoCampo3.value = "";
    }

}



document.querySelector(".area---input").addEventListener("click", function (event) {

    event.preventDefault()
});
