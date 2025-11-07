document.getElementById("formContato").addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("numero").value;
    const assunto = document.getElementById("assunto").value;
    const mensagem = document.getElementById("mensagemAqui").value;

    const numeroPadaria = "5511919175458";

    const texto = `
    Contato via site da Padaria Bom Sabor

    Nome:* ${nome}
    E-mail:* ${email}
    Telefone:* ${telefone}
    Assunto:* ${assunto}
    Mensagem:${mensagem}`;

    const url = `https://wa.me/${numeroPadaria}?text=${encodeURIComponent(texto)}`;
    window.open(url, "_blank");
});