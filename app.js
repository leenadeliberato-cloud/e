// Evento fornecido pelo Google Ads para a ação "Clique Whats".
function gtag_report_conversion(url) {
  var callback = function () {
    if (typeof url !== 'undefined') window.location = url;
  };
  gtag('event', 'conversion', {
    send_to: 'AW-16759195248/COMKCLmA8bEdEPCMtLc-',
    value: 1.0,
    currency: 'BRL',
    event_callback: callback
  });
  return false;
}

document.querySelectorAll('a.whatsapp').forEach(function (link) {
  link.addEventListener('click', function () {
    try {
      // O próprio link abre o WhatsApp em nova aba, mesmo sem medição.
      // Sem URL no callback, não há redirecionamento adicional.
      if (typeof gtag === 'function') gtag_report_conversion();
    } catch (_) {
      // Bloqueadores de medição não devem impedir o atendimento.
    }
  });
});
