// Lista de productos (puedes personalizar esta lista)
const productos = [
  "Queso Untable",
  "Queso Cremoso",
  "Huevos",
  "Frutas",
  "Cebolla",
  "Cebolla de Verdeo",
  "Morron",
  "Tomate",
  "Lechuga",
  "Papa",
  "Zanahoria",
  "Ajo",
  "Galletitas",
  "Leche",
  "Mayonesa",
  "Esencia de Vainilla",
  "Congelados",
  "Yerba",
  "Cafe",
  "Te",
  "Azucar",
  "Levadura",
  "Harina 000",
  "Harina 0000",
  "Harina Leudante",
  "Fecula de Maiz",
  "Fideos",
  "Arroz",
  "Conservas",
  "Soja Texturizada",
  "Pan Rallado",
  "Aceite",
  "Sal",
  "Vinagre",
  "Humo Liquido",
  "Oregano",
  "Pimenton",
  "Provenzal",
  "Nuez Moscada",
  "Saborizantes",
  "Escarbadientes",
  "Papel Higiénico",
  "Jabón de Tocador",
  "Jabón Líquido",
  "Pasta Dental",
  "Shampoo",
  "Acondicionador",
  "Desodorante Nico",
  "Desodorante Agus",
  "Hisópos",
  "Talco",
  "Lavandina",
  "Limpiador",
  "Detergente",
  "Jabón de Ropa",
  "Desodorante",
  "Esponjas",
  "Limpia Muebles",
  "Limpiador Cremoso",
  "Perfumina",
  "Servilletas",
  "Bolsas de Residuo",
  "Lavandina en Gel",
  "Pastillas",
  "Alimento de Floki",
  "Alimento de Gorhan",
  "Alimento de Rain",
];

// Contenedor donde se añadirán los botones
const productosContainer = document.getElementById("productos-container");

// Función para cargar el estado de los productos desde localStorage
function cargarEstado() {
  const estadoGuardado = localStorage.getItem("estadoProductos");
  return estadoGuardado ? JSON.parse(estadoGuardado) : {};
}

// Función para guardar el estado de los productos en localStorage
function guardarEstado(estado) {
  localStorage.setItem("estadoProductos", JSON.stringify(estado));
}

// Función para cambiar el estado del producto
function cambiarEstado(boton, producto, estado) {
  if (estado[producto]) {
    boton.classList.remove("con-stock");
    boton.classList.add("sin-stock");
  } else {
    boton.classList.remove("sin-stock");
    boton.classList.add("con-stock");
  }
  estado[producto] = !estado[producto];
  guardarEstado(estado);
}

// Cargar el estado inicial
const estadoProductos = cargarEstado();

// Crear botones para cada producto
productos.forEach((producto) => {
  const boton = document.createElement("button");
  boton.textContent = producto;
  boton.classList.add("producto-boton");
  if (estadoProductos[producto]) {
    boton.classList.add("con-stock");
  } else {
    boton.classList.add("sin-stock");
  }
  boton.addEventListener("click", () =>
    cambiarEstado(boton, producto, estadoProductos)
  );
  productosContainer.appendChild(boton);
});
