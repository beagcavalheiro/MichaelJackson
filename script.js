document.getElementById('feedbackForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Aqui poderia ser enviado para um servidor ou outro serviço de armazenamento de feedback

    // Exibe um alerta de agradecimento ao enviar o formulário
    alert(`Obrigado, ${name}! Seu feedback foi enviado:\n\nEmail: ${email}\nMensagem: ${message}`);

    // Limpa o formulário após o envio
    document.getElementById('feedbackForm').reset();
});
