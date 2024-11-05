function getEmails() {
  let resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "";
  for (let i = 0; i < 10; i++) {
    axios
      .get("https://flynn.boolean.careers/exercises/api/random/mail")
      .then(function (response) {
        resultDiv.innerHTML += `<p><strong>Email:</strong> ${response.data.response}</p>`;
      })
      .catch(function (error) {
        resultDiv.innerHTML = "Errore nella richiesta API: " + error.message;
      });
  }
}

getEmails();
