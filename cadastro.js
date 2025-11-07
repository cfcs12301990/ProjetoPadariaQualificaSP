document.getElementById("btnCadastroEnvio").addEventListener("click", function (event) {
    event.preventDefault(); 
    alert("🥖 Cadastro realizado com sucesso!");

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("numero").value;
    const dataNasc = document.getElementById("dataNasc").value;
    const endereco = document.getElementById("endereco").value;

    const prod1 = document.getElementById("produto1").checked ? "Salgados" : "";
    const prod2 = document.getElementById("produto2").checked ? "Doces" : "";
    const prod3 = document.getElementById("produto3").checked ? "Bebidas" : "";

    const produtosEscolhidos = [prod1, prod2, prod3].filter(p => p !== "").join(", ");

    const aceitaContato = document.getElementById("accept").checked ? "Sim" : "Não";
    const aceitaTermos = document.getElementById("accept1").checked ? "Sim" : "Não";

    const numeroPadaria = "5511919175458";

    const texto = `
    Cadastro via site da Padaria Bom Sabor

    Nome:* ${nome}
    E-mail:* ${email}
    Telefone:* ${telefone}
    Data de nascimento:* ${dataNasc}
    Endereço:* ${endereco}

    Produtos favoritos: ${produtosEscolhidos || "Não informado"}

    Aceita receber ofertas? ${aceitaContato}
    Aceitou os termos de uso? ${aceitaTermos}`
    ;

    const url = `https://wa.me/${numeroPadaria}?text=${encodeURIComponent(texto)}`;
    window.open(url, "_blank");
});
