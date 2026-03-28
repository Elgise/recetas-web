const receta = {
  titulo: "Torrijas saludables (sin gluten, lactosa y azúcar)",
  imagen: "https://via.placeholder.com/500",
  descripcion: "Una versión saludable de las torrijas tradicionales, apta para intolerancias.",
  ingredientes: [
    "Pan sin gluten",
    "Bebida vegetal (almendra, avena sin gluten, etc.)",
    "Huevos",
    "Canela",
    "Edulcorante natural (eritritol o stevia)",
    "Aceite de oliva suave"
  ],
  pasos: [
    "Calienta la bebida vegetal con canela y edulcorante.",
    "Empapa las rebanadas de pan en la mezcla.",
    "Pásalas por huevo batido.",
    "Fríe en aceite hasta dorar.",
    "Espolvorea canela por encima y sirve."
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

// 🥚 Easter egg (clic 10 veces en el título)
let clicks = 0;
const titulo = document.getElementById("titulo");
const popup = document.getElementById("popup");
const cerrar = document.getElementById("cerrar");

titulo.addEventListener("click", () => {
  clicks++;
  if (clicks === 10) {
    popup.style.display = "flex";
    clicks = 0;
  }
});

cerrar.addEventListener("click", () => {
  popup.style.display = "none";
});
