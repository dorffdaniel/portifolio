let areaProfissao = document.querySelector('.areaProfissao');

let valor = "Desenvolvedor Front-end";

let index =0;

function efeitoPalavra(){
   let textoAtual = valor.substring(0, index)

   let part1 = textoAtual.substring(0,13)
   let part2 = textoAtual.substring(13)
   
   areaProfissao.innerHTML = `${part1} <span class='amarela'> ${part2}</span>`
    index++;
    if(index > valor.length){
        index =0;
    }

}

setInterval(efeitoPalavra, 500);



let hamburguer = document.querySelector('.hamburguer');
let nav = document.querySelector('.nav-list')

hamburguer.addEventListener('click', ()=>{
    nav.classList.toggle('ativado')
    hamburguer.classList.toggle('ativa')
})