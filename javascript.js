// Número que o cliente vai ser encaminhado 
const TamaraWhatsApp = "999482064"; // Número de exemplo

// Mensagem pré-definida que vai cair no chat com o delivery
const mensagem = "Olá, gostaria de fazer um pedido no seu delivery!";

// Seleciona todos os botões com a ID "#btnWhatsApp"
const btnWhatsAppElements = document.querySelectorAll("#btnWhatsApp");

// Função para abrir o link do WhatsApp com a mensagem pré-definida
function enviarWhatsApp() {
  const url = `https://api.whatsapp.com/send?phone=${TamaraWhatsApp}&text=${encodeURIComponent(mensagem)}`;
  window.open(url, '_blank');
}

btnWhatsAppElements.forEach(function(btn) {
  btn.addEventListener("click", enviarWhatsApp);
});
