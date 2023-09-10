
// Utilizando métodos de array e iterando sobre el array de pizzas, realizar las siguientes actividades, imprimiendo en consola:
// a)  Las pizzas que tengan un id impar.
// b) Responder: ¿Hay alguna pizza que valga menos de $600?
// c) El nombre de cada pizza con su respectivo precio.
// d) Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza que se esta recorriendo). 
// Ayuda: van a tener que realizar dos recorridos, ya que cada pizza del array de pizzas tiene una propiedad "ingredientes" 
// cuyo valor es un array con ingredientes.



const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];


// id impar
const pizzasIdImpar = pizzas.filter(function(pizza) {
  return pizza.id % 2 !== 0;
});
console.log("pizzas con id impar son: ");
console.log(pizzasIdImpar);


// b) Responder: ¿Hay alguna pizza que valga menos de $600?

const pizzaMasBarata = pizzas.some(function(pizza) {
  return pizza.precio < 600;
});

console.log(pizzaMasBarata);


// c) El nombre de cada pizza con su respectivo precio.
console.log("nombre y precio de cada pizza");
pizzas.forEach(function(pizza) {
  console.log(pizza.nombre, pizza.precio);
});


// d) Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza que se esta recorriendo). 

console.log("Ingredientes de cada pizza:");
pizzas.forEach(function(pizza) {
  console.log(`${pizza.nombre}:`);
  pizza.ingredientes.forEach(function(ingrediente) {
    console.log(ingrediente);
  });
});