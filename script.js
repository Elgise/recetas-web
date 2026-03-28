const receta = {
  titulo: "Risotto de setas",
  imagen: "https://via.placeholder.com/500",
  descripcion: "Un risotto cremoso con setas, perfecto para los amantes de la cocina natural.",
  ingredientes: [
    "Arroz arborio",
    "Setas variadas",
    "Caldo vegetal",
    "Queso parmesano",
    "Ajo",
    "Cebolla"
  ],
  pasos: [
    "Sofríe la cebolla y el ajo.",
    "Añade las setas y cocina unos minutos.",
    "Incorpora el arroz y remueve.",
    "Añade caldo poco a poco sin dejar de remover.",
    "Agrega el queso al final y mezcla bien."
  ]
};

const contenedor = document.getElementById("recetas-container");

const div = document.createElement("div");
div.classList.add("receta");

div.innerHTML = `
  <img src="${receta.imagen}" alt="${receta.titulo}">
  <h2>${receta.titulo}</h2>
  <p>${receta.descripcion}</p>

  <h3>Ingredientes:</h3>
  <ul>
    ${receta.ingredientes.map(i => `<li>${i}</li>`).join("")}
  </ul>

  <h3>Pasos:</h3>
  <ol>
    ${receta.pasos.map(p => `<li>${p}</li>`).join("")}
  </ol>
`;

contenedor.appendChild(div);

// 🎁 Easter egg
let contador = 0;

document.addEventListener("keydown", (e) => {
  if (e.key.toLowerCase() === "a") {
    contador++;
    if (contador === 5) {
      document.getElementById("easter-egg").style.display = "block";
    }
  } else {
    contador = 0;
  }
});
