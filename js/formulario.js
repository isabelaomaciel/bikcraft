const formulario = document.querySelector('form');

function formularioEnviado(resposta) {
   if (resposta.ok) {
      formulario.innerHTML = "<p class='font-2-l' style='grid-column: 1 / -1; padding: 1rem; border-radius: 4px; background: #f7f7f7;'> Mensagem enviada, em breve entraremos em contato.</p>"
   } else {
      formulario.innerHTML =
        "<p class='font-2-l' style='grid-column: 1 / -1; padding: 1rem; border-radius: 4px; background: #f7f7f7;'>Erro no envio. Você pode enviar diretamente para o nosso email em: contato@bikcraft.com</p>";
 }
}




function enviarFormulario(event) {
   event.preventDefault();
   const button = document.querySelector('form button');
   button.disabled = true;
   button.innerText = 'Enviando...';


   const data = new FormData(formulario);

   fetch('./enviar.php', {
      method: 'POST',
      body: data
   }).then(formularioEnviado);

}

formulario.addEventListener('submit', enviarFormulario);