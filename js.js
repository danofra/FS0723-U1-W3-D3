const form = document.getElementById("main-form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("Comincio a recuperare i dati del form");
  const inputText = document.getElementById("text-1");
  console.log(inputText.value);
  const userCard = document.createElement("div");
  userCard.innerHTML = `
        <p>${inputText.value}</p>
    `;
  const cardArticle = document.getElementById("card");
  cardArticle.appendChild(userCard);

  inputText.value = "";
});

const cards = document.createElement("div");
cards.classList.add("barrato");
cards.appendChild(userCard);
cards.addEventListener("onclick", function (e) {
  userCard.classList.toggle("completo");
  (cards.style.display = userCard.classList.contains("completo")), "hidden";
});
