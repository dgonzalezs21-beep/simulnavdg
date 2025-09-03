const searchInput = document.getElementById("search");
const suggestionsBox = document.getElementById("suggestions");

const suggestions = [
      "Aviones",
      "Avena",
      "Aerolinea",
      "Banana",
      "Bombastic",
      "Bomberman",
      "Cartulina",
      "Cartagena",
      "Cigarrillos",
      "Dinosaurios",
      "Doritos",
      "Dalmatas",
      "Parangaricutirimicaro",
      "Perro con perro",
      "Queso Mozzarella",
      "Wilmar Barrios",
      "Elden Ring",
      "Rapido",
      "Tamarindo"
];

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  suggestionsBox.innerHTML = "";

  if (query) {
    const filtered = suggestions.filter(item =>
      item.toLowerCase().includes(query)
    );

    if (filtered.length > 0) {
      filtered.forEach(suggestion => {
        const li = document.createElement("li");
        li.textContent = suggestion;
        li.addEventListener("click", () => {
          searchInput.value = suggestion;
          suggestionsBox.style.display = "none";
        });
        suggestionsBox.appendChild(li);
      });
      suggestionsBox.style.display = "block";
    } else {
      suggestionsBox.style.display = "none";
    }
  } else {
    suggestionsBox.style.display = "none";
  }
});
