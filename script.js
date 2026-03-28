const receta = {
  titulo: "Torrijas saludables (sin gluten, lactosa y azúcar)",
  ingredientes: [
    "1 Baguette sin glúten y sin lactosa del Mercadona",
    "1/2 litro de leche vegetal (preferiblemente avena o avellanas)",
    "2 Huevos medianos",
    "Canela en rama y en polvo",
    "Eritritol (o azúcar)",
    "Aceite de oliva o girasol",
    "Piel de 1/2 naranja",
    "Piel de 1/2 limón",
    "1 cdta. de miel",
  ],
  pasos: [
    "Precalentar el horno a máxima potencia con calor arriba y abajo",
    "Pelar la piel de la naranja y el limón retirando bien toda la parte blanca (amarga)",
    "Calentar la leche vegetal sin que llegue a hervir e introducir la rama de canela, las pieles de los cítricos y disolver la miel. Dejar infusionar durante 15 minutos",
    "Tostar la baguette durante 3-5 minutos vigilando que no se queme",
    "Pasados los 15 minutos pasar la leche infusionada con las pieles a una fuente/bandeja y dejar que enfríe durante 15 minutos. Retirar las pieles y la canela al terminar",
    "Partir la baguette en rodajas gruesas (2-3 dedos de grosor) e introducir en la leche infusionada 10 minutos por cada lado",
    "Sacar las torrijas de la leche, pasar por huevo batido y freír en una capa fina de aceite vegetal hasta conseguir el dorado deseado",
    "Escurrir el exceso de aceite sobre papel absorbente y espolvorear con una mezcla de eritritol y canela molida. Se recomienda dejarlas reposar en un tupper",
  ]
};

const contenedor = document.getElementById("recetas-container");

const div = document.createElement("div");
div.classList.add("receta");

div.innerHTML = `
  <img src="${receta.imagen}" alt="${receta.titulo}">
  <h2>${receta.titulo}</h2>

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
