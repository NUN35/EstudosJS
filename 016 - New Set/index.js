const number = [1, 4, 3, 2, 3, 4, 5, 6, 7, 8, 1, 3, 4, 6, 9];

const string = ["Banana", "Pera", "Maça", "Pera", "Maça", "Morango", "Abacaxi", "Maça", "Morango", "Abacaxi"];

const uniqueNum = [...new Set(number)];
const uniqueStr = [...new Set(string)];

console.log(uniqueNum.sort());
console.log(uniqueStr.sort());
