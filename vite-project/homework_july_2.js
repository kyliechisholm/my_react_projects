const numbers= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const expectedOutputEvenNumbers = [2, 4, 6, 8, 10];

const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers);