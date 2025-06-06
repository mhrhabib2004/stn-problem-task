//  Task - 1. Array Filtering and Mapping   
const people = [
  { name: 'Evan', age: 22, gender: 'male' },
  { name: 'Sophia', age: 27, gender: 'female' },
  { name: 'Liam', age: 32, gender: 'male' },
  { name: 'Olivia', age: 29, gender: 'female' }
];

function filterAndMap(peopleArray) {
  return peopleArray
    .filter(person => person.gender !== 'female')
    .map(person => person.name);
}

// console.log(filterAndMap(people)); // Output: ['Evan', 'Liam']

// Task - 2. Object Manipulation
const books = [
  { title: 'Sapiens', author: 'Yuval Noah Harari', year: 2011 },
  { title: 'Atomic Habits', author: 'James Clear', year: 2018 },
  { title: 'Deep Work', author: 'Cal Newport', year: 2016 }
];

function getBookTitles(booksArray) {
  return booksArray.map(book => book.title);
}

// console.log(getBookTitles(books)); // Output: ['Sapiens', 'Atomic Habits', 'Deep Work']

// Task - 3. Function Composition

function square(num) {
  return num * num;
}

function double(num) {
  return num * 2;
}

function addFive(num) {
  return num + 5;
}

function composeFunctions(num) {
  return addFive(double(square(num)));
}

// console.log(composeFunctions(4)); // square(4)=16, double=32, +5 = 37

// Task - 4. Sorting Objects
const cars = [
  { make: 'Tesla', model: 'Model S', year: 2022 },
  { make: 'BMW', model: 'X5', year: 2019 },
  { make: 'Audi', model: 'A4', year: 2021 }
];

function sortCarsByYear(carsArray) {
  return carsArray.sort((a, b) => a.year - b.year);
}

// console.log(sortCarsByYear(cars));

//  Task - 5. Find and Modify


const myPeople = [
  { name: 'Zara', age: 20 },
  { name: 'Noah', age: 24 },
  { name: 'Emma', age: 28 }
];

function updateAgeByName(peopleArray, name, newAge) {
  const person = peopleArray.find(p => p.name === name);
  if (person) {
    person.age = newAge;
  }
  return peopleArray;
}

// console.log(updateAgeByName(myPeople, 'Noah', 26));

// Task - 6. Array Reduction

const numbers = [12, 15, 18, 21, 24, 27];

function sumEvenNumbers(numbersArray) {
  return numbersArray.reduce((sum, num) => {
    return num % 2 === 0 ? sum + num : sum;
  }, 0);
}

// console.log(sumEvenNumbers(numbers)); // 12+18+24 = 54

// Task - 7. Unique Values

const numbers1 = [7, 8, 7, 9, 10, 10, 11];

function getUniqueNumbers(numbersArray) {
  return [...new Set(numbersArray)];
}

// console.log(getUniqueNumbers(numbers1)); // Output: [7, 8, 9, 10, 11]







