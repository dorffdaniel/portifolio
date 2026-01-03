
let areaProfissao = document.querySelector('.areaProfissao');

let valor = "Desenvolvedor Front-end";

let index = 0;

function efeitoPalavra() {
    let textoAtual = valor.substring(0, index)

    let part1 = textoAtual.substring(0, 13)
    let part2 = textoAtual.substring(13)

    areaProfissao.innerHTML = `${part1} <span class='amarela'> ${part2}</span>`
    index++;
    if (index > valor.length) {
        index = 0;
    }

}

setInterval(efeitoPalavra, 500);



let hamburguer = document.querySelector('.hamburguer');
let nav = document.querySelector('.nav-list')

hamburguer.addEventListener('click', () => {
    nav.classList.toggle('ativado')
    hamburguer.classList.toggle('ativa')
})

function anoAtual() {
    let ano = new Date().getFullYear();

    return ano;
}


function calcularIdade(dataNasc) {

    const hoje = new Date();
    const nascimento = new Date(dataNasc);

    let idade = hoje.getFullYear() - nascimento.getFullYear();

    const mesAtual = hoje.getMonth();
    const mesNascimento = nascimento.getMonth();

    if (mesAtual < mesNascimento || (mesAtual === mesNascimento && hoje.getDate() < nascimento.getDate())
    ) {
        idade--;
    }

    return idade;

}

function baixarCurriculo() {
    const link = document.createElement("a");

    link.href = "./src/Daniel-Alves.pdf";
    link.download = "meu_Curriculo.pdf";
    link.click();
}


document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("anoAtual").innerHTML = anoAtual();
    document.getElementById("idade").innerHTML = calcularIdade("1998-10-02");

})

