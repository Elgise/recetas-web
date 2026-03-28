const recetas = [
  {
    titulo: "Tortilla Española",
    imagen: "https://via.placeholder.com/300",
    descripcion: "Huevos, patatas y cebolla."
  },
  {
    titulo: "Pasta Carbonara",
    imagen: "https://via.placeholder.com/300",
    descripcion: "Pasta con huevo, queso y panceta."
  },
  {
    titulo: "Ensalada César",
    imagen: "https://via.placeholder.com/300",
    descripcion: "Lechuga, pollo y salsa César."
  }
];

const contenedor = document.getElementById("recetas-container");

recetas.forEach(receta => {
  const div = document.createElement("div");
  div.classList.add("receta");

  div.innerHTML = `
    <img src="${receta.imagen}" alt="${receta.titulo}">
    <h2>${receta.titulo}</h2>
    <p>${receta.descripcion}</p>
  `;

  contenedor.appendChild(div);
});