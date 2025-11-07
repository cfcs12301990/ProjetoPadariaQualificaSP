let carrinho = []

let totalCarrinho = 0

document.querySelectorAll(".comprar").forEach(btn => {
    btn.addEventListener('click', (event) => {
        event.preventDefault();

        let produto = btn.dataset.produto;
        let preco = parseFloat(btn.dataset.preco);

        carrinho.push({ produto, preco });
        totalCarrinho += preco;

        let li = document.createElement("li");
        li.textContent = `${produto} - R$ ${preco.toFixed(2)}`;

        document.getElementById("listaCarrinho").appendChild(li);
        document.getElementById("totalCarrinho").innerHTML = totalCarrinho.toFixed(2);
    });
});

document.getElementById("limparPedido").addEventListener('click', ()=> {
    carrinho = []

    totalCarrinho = 0

    document.getElementById("listaCarrinho").innerHTML = ""

    document.getElementById("totalCarrinho").innerHTML = 0.00


})


function calcularItem(nome, preco, idInput, idResultado){

let qtd = parseInt(document.getElementById(idInput).value)

let subtotal = qtd * preco

let desconto = 0;

if(nome === "Pao" && qtd > 5) desconto = subtotal * 0.1;
else if(nome === "Bolo" && qtd > 5) desconto = subtotal * 0.1;
else if(nome === "Humb" && qtd > 5) desconto = subtotal * 0.1;
else if(nome === "Torta" && qtd > 2) desconto = subtotal * 0.1;


let total = subtotal - desconto

let taxaDeEntrega = 5.00

let totalComTaxa = total + taxaDeEntrega

document.getElementById(idResultado).innerHTML = 
`${nome}: ${qtd} x R$ ${subtotal.toFixed(2)} | Total: R$ ${desconto.toFixed(2)}  |  Taxa de Entrega: R$ ${taxaDeEntrega} | Total com Taxa de Entrega: R$ ${totalComTaxa.toFixed(2)}`;
}


const btnTop = document.getElementById('btnTop')

btnTop.addEventListener('click', () => {
        window.scrollTo(0,0)
})


document.getElementById('botaoPedido').addEventListener('click', () =>{

    const precoInput = parseFloat(document.getElementById('preco').value)
    const quantidadeInput = parseInt(document.getElementById('quantidade').value)
    const distanciaInput = parseFloat(document.getElementById('distancia').value)

    const subtotal = preco * quantidade
    const frete = distancia * 2
    const total = subtotal + frete

    document.getElementById('resultado').textContent = 
    `Subtotal: R$ ${subtotal.toFixed(2)} | Frete: (km) ${frete.toFixed(2)} | Total: R$ ${total.toFixed(2)}}`

})


document.addEventListener("DOMContentLoaded", () => {

    document.getElementById('pedidos').addEventListener('submit', (e) => {
        e.preventDefault() 

        const numeroDaLoja = "5511919175458"

        const nome = document.getElementById('nome').value
        const email = document.getElementById('email').value
        const telefone = document.getElementById('telefone').value
        const endereco = document.getElementById('endereco').value
        const tipoNode = document.querySelector("input[name='tipo']:checked");
        const tipo = tipoNode ? tipoNode.value : "-";
        const quantidade = Array.from(document.querySelectorAll('.quantidade'))
            .reduce((acc, el) => acc + (parseInt(el.value) || 0), 0);
        const dataEntregaInput = document.querySelector("input[name='data_entrega']").value
        const textoObservacoes = document.getElementById('textoObservacoes').value


        let dataEntrega = "Não informada";
            if (dataEntregaInput) {
        const partes = dataEntregaInput.split("-");
        dataEntrega = `${partes[2]}/${partes[1]}/${partes[0]}`;
        }

        let mensagem = `Novo pedido a caminho \n\n`

        mensagem += `Nome: ${nome}\n`
        mensagem += `E-mail: ${email}\n`
        mensagem += `Telefone: ${telefone}\n`
        mensagem += `Endereço: ${endereco}\n`
        mensagem += `Pedido: ${tipo}\n`
        mensagem += `Quantidade ${quantidade}\n`
        mensagem += `Data de Entrega ${dataEntrega}\n`
        mensagem += `Observações: ${textoObservacoes}\n`


        const url = `https://wa.me/${numeroDaLoja}?text=${encodeURIComponent(mensagem)}`
        window.open(url, "_blank") ;
 

    })


})