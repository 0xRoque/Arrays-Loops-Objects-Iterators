/* Write a function justCoolStuff() that takes in two arrays of strings, and, using the built-in .filter() method, returns an array with the items that are present in both arrays.

let arr1 = ['this', 'not this', 'nor this'];
let arr2 = ['thing 1', 'thing 2', 'this'];

justCoolStuff(arr1, arr2); // Should return ['this']

to Clipboard

You can test your function when you’re ready by passing in the myStuff and coolStuff arrays or by making arrays of your own! */

// Write your code here:

// const justCoolStuff =(arr,arr2)=>{
//   return arr.filter(e=>arr2.includes(e))
// }

const justCoolStuff = (arr1, arr2) => {
  const result = []; // Novo array para armazenar os itens comuns

  // Loop através de cada item do arr1
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      // Verifica se o item de arr1 está em arr2
      result.push(arr1[i]); // Se sim, adiciona ao resultado
    }
  }

  return result; // Retorna o array com os itens comuns
};

const coolStuff = [
  "gameboys",
  "skateboards",
  "backwards hats",
  "fruit-by-the-foot",
  "pogs",
  "my room",
  "temporary tattoos",
];

const myStuff = [
  "rules",
  "fruit-by-the-foot",
  "wedgies",
  "sweaters",
  "skateboards",
  "family-night",
  "my room",
  "braces",
  "the information superhighway",
];

console.log(justCoolStuff(myStuff, coolStuff));
