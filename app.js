let titulo = document.querySelector('h1')
titulo.innerHTML = ("Hora do desafio")

let Console = document.querySelector('button_Console')

function botao_console() {
    console.log("O botão foi pressionado!");
}

function botao_alert() {
    alert("Eu amo JS");
}

function botao_prompt() {
    let cidade = prompt("Informe o nome de uma cidade!");
    alert(`Estive em ${cidade} e lembrei de você!`);
}

function botao_soma() {

    let a = parseInt(prompt("Informe um número"));
    let b = parseInt(prompt("informe outro"));
    let soma = a + b;

    alert(`O resultado ${soma}`);
}