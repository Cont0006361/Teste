
const updateMessage = () => {
  const sheetURL = "https://spreadsheets.google.com/feeds/cells/e/2PACX-1vSutQXMNVvXC5BEqHBgHFd2sVkPtDzFkEDpVOv4HIrLf2S8n5e0OrJ3AwggWalAthfxtDeuaHR-fiSD/1/public/basic?alt=json";
  const xhr = new XMLHttpRequest();

  xhr.open("GET", sheetURL, true);
  xhr.onreadystatechange = function() {
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
      const data = JSON.parse(this.responseText);
      const message = data.feed.entry[1].content.$t;
      document.querySelector(".message").innerHTML = `Mensagem: ${message}`;

      setTimeout(updateMessage, 5000);
    }
  };
  xhr.send();
};
