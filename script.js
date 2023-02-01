$(document).ready(function () {
  setInterval(function () {
    $.get("https://spreadsheets.google.com/feeds/cells/1_khL1gjUifjGXxJMs2hR0wBbW7zGmENlYUN8-w20tPE/od6/public/basic?alt=json", function (data) {
      var entry = data.feed.entry;
      var message = entry[1].content.$t;
      $("#message").text("Mensagem: " + message);
    });
  }, 5000);
});
