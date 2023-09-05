const numeroA = document.getElementById("numberA");
const numeroB = document.getElementById("numberB");
const botao = document.getElementById("btn-submit");

botao.addEventListener("click", function(e) {
    e.preventDefault();

    const numA = parseFloat(numeroA.value);
    const numB = parseFloat(numeroB.value);

    const mensagemSucesso = `Formulário Válido! Número A: ${numA} < Número B: ${numB}`;
    const mensagemErro = "Aumente o número B, ele precisa ser maior que o A. Ou diminua o A, porque ele precisa ser menor que o B.";
    const mensagemIgualdade = "Os números são iguais, mude o B, para que se torne maior que A.";

    const exibirMensagemErro = document.querySelector('#numErrados');
    const mostreMensagemSucesso = document.querySelector('#numCorretos');
    const exibirMensagemIgualdade = document.querySelector('#numIguais');

    if (numA > numB) {
        exibirMensagemErro.textContent = mensagemErro;
        exibirMensagemErro.style.display = 'block';
        mostreMensagemSucesso.style.display = 'none';
        exibirMensagemIgualdade.style.display = 'none';
    } else if (numA < numB) {
        mostreMensagemSucesso.textContent = mensagemSucesso;
        mostreMensagemSucesso.style.display = 'block';
        exibirMensagemErro.style.display = 'none';
        exibirMensagemIgualdade.style.display = 'none';
        numeroA.value = "";
        numeroB.value = "";
    } else if (numA === numB) {
        exibirMensagemIgualdade.textContent = mensagemIgualdade;
        exibirMensagemIgualdade.style.display = 'block';
        exibirMensagemErro.style.display = 'none';
        mostreMensagemSucesso.style.display = 'none';
    }
});
