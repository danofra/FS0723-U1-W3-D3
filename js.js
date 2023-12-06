const form = document.getElementById("main-form");
const input = document.getElementById("text-1");
const art = document.getElementById("art-1");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (input.value.trim() === "") {
    console.log("campo vuoto");
    alert("Compilare il campo!");
  } else {
    const userCard = document.createElement("div");
    userCard.classList.add("task");
    userCard.innerHTML = `
        <span class="list" onclick="barrato(event)">${input.value}</span>
        <button class="btn-1" class="delete" onclick="deleted(event)">Elimina</button>
    `;

    art.appendChild(userCard);
    input.value = "";
  }
});

const barrato = function (event) {
  event.target.classList.toggle("barrato");
};

const deleted = function (event) {
  event.target.closest(".task").remove(); // Rimuovi l'elemento invece di aggiungere la classe "delete"
};
