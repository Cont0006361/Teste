var form = document.getElementById("formulario");
form.addEventListener("submit", function(event) {
  event.preventDefault();
  gapi.load("client:auth2", function() {
    gapi.client.init({
      apiKey: "AIzaSyDbNiBBtTSzv5csaTMEJ-HKADstm4NpxmQ",
      clientId: "772377516775-6ej6g7ff3qp4n8ljb94ukt3834qd0hi9.apps.googleusercontent.com",
      discoveryDocs: ["https://sheets.googleapis.com/$discovery/rest?version=v4"],
      scope: "https://www.googleapis.com/auth/spreadsheets"
    }).then(function() {
      var input = document.getElementById("input").value;
      var spreadsheetId = "1_khL1gjUifjGXxJMs2hR0wBbW7zGmENlYUN8-w20tPE";
      var range = "Sheet1!A1";
      gapi.client.sheets.spreadsheets.values.update({
        spreadsheetId: spreadsheetId,
        range: range,
        valueInputOption: "RAW",
        resource: {
          values: [[input]]
        }
      }).then(function(response) {
        console.log(response);
        alert("Dados enviados com sucesso!");
      }, function(reason) {
        console.error(reason);
        alert("Erro ao enviar dados.");
      });
    });
  });
});



$(document).ready(function() {
  $("#submit").click(function() {
    var input = $("#input").val();
    $.post("https://sheets.googleapis.com/v4/spreadsheets/1_khL1gjUifjGXxJMs2hR0wBbW7zGmENlYUN8-w20tPE/values/Sheet1!A1:append?valueInputOption=RAW&key=AIzaSyDbNiBBtTSzv5csaTMEJ-HKADstm4NpxmQ", {
      values: [[input]]
    }, function(data) {
      alert("Dados enviados com sucesso!");
    }).fail(function() {
      alert("Erro ao enviar dados.");
    });
  });
});
