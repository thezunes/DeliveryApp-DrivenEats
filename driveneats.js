let comidaSelecionada;
let precodaComida;

function selecionarComida(selecionando){

    const botaoSelecinadoAnt = document.querySelector('.principal .selecionado');

    comidaSelecionada = selecionando.querySelector('.titulo').innerHTML;
    precodaComida = selecionando.querySelector('.preco').innerHTML;

    console.log(precodaComida);

    if ( botaoSelecinadoAnt !== null){

        botaoSelecinadoAnt.classList.remove('selecionado');
    }

    selecionando.classList.toggle('selecionado');
    liberarBotao();
    

}

let BebidaSelecionada;
let precodaBebida;

function selecionarBebida(selecionando){



    const botaoSelecinadoAnt = document.querySelector('.bebida .selecionado');

    BebidaSelecionada = selecionando.querySelector('.titulo').innerHTML;
    precodaBebida = selecionando.querySelector('.preco').innerHTML;

    if ( botaoSelecinadoAnt !== null){

        botaoSelecinadoAnt.classList.remove('selecionado');
    }

    selecionando.classList.toggle('selecionado');
    liberarBotao();

}

let sobremesaSelecionada;
let precodaSobremesa;

function selecionarSobremesa(selecionando){

    sobremesaSelecionada = selecionando.querySelector('.titulo').innerHTML;
    precodaSobremesa = selecionando.querySelector('.preco').innerHTML;

    const botaoSelecinadoAnt = document.querySelector('.sobremesa .selecionado');

    if ( botaoSelecinadoAnt !== null){

        botaoSelecinadoAnt.classList.remove('selecionado');
    }

    selecionando.classList.toggle('selecionado');
    liberarBotao();
}

function liberarBotao(){

    const temSelecionado1= document.querySelector('.principal .selecionado');
    const temSelecionado2 = document.querySelector('.bebida .selecionado');
    const temSelecionado3 = document.querySelector('.sobremesa .selecionado');
    const liberou = document.querySelector('.botaoComprar'); 

    if(temSelecionado1 !== null){

        if(temSelecionado2 !== null){

            if(temSelecionado3 !== null){

                liberou.innerHTML = `Fechar Pedido`;
                liberou.classList.add('finalizar')
            }
        }
    }
}

function fecharPedido(){

}