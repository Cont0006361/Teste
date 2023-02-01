function updateMessage() {
  $.getJSON("https://spreadsheets.google.com/feeds/cells/e/2PACX-1vSutQXMNVvXC5BEqHBgHFd2sVkPtDzFkEDpVOv4HIrLf2S8n5e0OrJ3AwggWalAthfxtDeuaHR-fiSD/1/public/basic?alt=json",
  function(data) {
    var entry = data.feed.entry[1]; // coluna A, linha 2
    var message = entry.content.$t;
    $("#message").text("Mensagem: " + message);
  });
}

updateMessage();
setInterval(updateMessage, 5000); // atualiza a cada 5 segundos
