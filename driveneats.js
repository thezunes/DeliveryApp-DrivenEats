
let comidaSelecionada;
let precodaComida;



function selecionarComida(selecionando){

    const botaoSelecinadoAnt = document.querySelector('.principal .selecionado');

    comidaSelecionada = selecionando.querySelector('.titulo').innerHTML;
    precodaComida = selecionando.querySelector('.preco').innerHTML;

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

let liberouclick;

function liberarBotao(){

    const liberou = document.querySelector('.botaoComprar'); 

    if(comidaSelecionada !== undefined){

        if(BebidaSelecionada !== undefined){

            if(sobremesaSelecionada !== undefined){

                liberou.innerHTML = `Fechar Pedido`;
                liberou.classList.add('finalizar')
                liberouclick = 1;
            }
        }
    }
}


function fecharPedido(){

    const foodprice = Number(precodaComida.replace('R$','').replace(',','.'))
    const drinkprice = Number(precodaBebida.replace('R$','').replace(',','.'))
    const dessertprice = Number(precodaSobremesa.replace('R$','').replace(',','.'))


    const precoTotal = foodprice + drinkprice + dessertprice;

    const mensagemfinal = `Olá gostaria de fazer o pedido: \n - Prato: ${comidaSelecionada} \n - Bebida: ${BebidaSelecionada} \n - Sobremesa: ${sobremesaSelecionada}\n Total: R$ ${precoTotal} `

    alert(mensagemfinal);
    const textcod = encodeURIComponent(mensagemfinal)
    window.open(`https://wa.me/5521993260416?text=${textcod}`)

}







