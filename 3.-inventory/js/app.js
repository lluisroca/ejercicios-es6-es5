// En este ejercicio te ayudaremos con la solucion de ES5, solo tendras que pasarlo a ES6

const inventory = [
  { name: "Inka Cola", category: "beverage", stock: "10" },
  { name: "Cusqueña", category: "beverage", stock: "15" },
  { name: "Pisco", category: "beverage", stock: "20" },
  { name: "Lúcuma", category: "fruit", stock: "30" },
  { name: "Aguaymanto", category: "fruit", stock: "5" },
  { name: "Tequila", category: "beverage", stock: "50" },
  { name: "Mezcal", category: "beverage", stock: "25" },
  { name: "Aguacate", category: "fruit", stock: "100" },
  { name: "Chayote", category: "fruit", stock: "5" },
  { name: "Cuitlacoche", category: "fungus", stock: "10" },
  { name: "Arándonos", category: "fruit", stock: "19" },
  { name: "Ciruela", category: "fruit", stock: "8" }
];

// funcion generica que te suma todos los numeros en stock de los elementos de cada categoria
const totalByCategory = (inventory, category) => {
  //para cada elemento de la lista retornara true si es de la categoria o false si no es de la categoria correcta
  const filterCategory = (prod) => {
    const totalProd = prod.category === category;
    return totalProd;
  };
  //esta funcion sumara de inventorio de cada elemento de la lista que sea stock en el diccionario
  const sumInventory = (prodAnterior, prodActual) => {
    const base = prodAnterior + parseInt(prodActual.stock, 10);
    return base;
  };
  //aqui para la funcion generica, iteras en cada uno de los elementos para aplicar el filtro de categorias y reducir.
  const filtrando = inventory.filter(filterCategory).reduce(sumInventory, 0);
  console.log(filtrando);
  return filtrando;
};

totalByCategory(inventory, "beverage");


// Comenta todo el código de arriba (ecepto la const inventory) y pasa el código a ES6

