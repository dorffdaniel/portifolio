let areaProfissao = document.querySelector('.areaProfissao');

let valor = "Desenvolvedor Front-end";

let index =0;

function efeitoPalavra(){
    areaProfissao.innerHTML= valor.substring(0, index);

    index++;
    if(index > valor.length){
        index =0;
    }

}

setInterval(efeitoPalavra, 500);