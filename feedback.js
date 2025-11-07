document.getElementById("btnFeedbackEnvio").addEventListener("click", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome1").value;
    const email = document.getElementById("email1").value;
    const assunto = document.getElementById("assunto1").value;
    const mensagem = document.getElementById("mensagemAqui").value;

    const numeroPadaria = "5511919175458"; 

    const texto = `
    Feedback via site da Padaria Bom Sabor

    Nome:* ${nome}
    E-mail:* ${email}
    Tipo de Feedback:* ${assunto}
    Mensagem:* ${mensagem}
    `;

    const url = `https://wa.me/${numeroPadaria}?text=${encodeURIComponent(texto)}`;
    window.open(url, "_blank");
});