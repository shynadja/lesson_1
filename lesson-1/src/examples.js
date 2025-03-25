//
// ТИПЫ ДАННЫХ
//
// Примитивные типы данных
let age = 25; // число
let name = "John"; // строка
let isOnline = true; // логический тип
let x; // undefined
let obj = null; // null
const id = Symbol("id"); // symbol
const bigNum = 123456789012345678901234567890n; // bigint

// Ссылочный тип данных
let user = { name: "Alice", age: 30 }; // объект
let numbers = [1, 2, 3, 4]; // массив
function greet() {
  console.log("Hello!");
} // функция

//
// ОБЪЕКТЫ
//
// создание объекта
const newUser = {
  name: "John",
  age: 30,
  isAdmin: true,
};

// деструктуризация
// const { name, age } = user;
console.log(name); // "John"
console.log(age); // 30

// копирование
const copiedUser = { ...user };
const deepCopy = JSON.parse(JSON.stringify(user));

//
// МАССИВЫ
//
// создание массива
const num = [1, 2, 3, 4];
const fruits = ["apple", "banana", "cherry"];

// деструктуризация
const [first, second] = fruits;
console.log(first); // "apple"
console.log(second); // "banana"

// копирование
const copy = [...original];
const deepArrayCopy = JSON.parse(JSON.stringify(nestedArray));

// метод map()
const doubled = numbers.map((num) => num * 2);
console.log(doubled); // [2, 4, 6, 8]

// метод filter()
const evens = numbers.filter((num) => num % 2 === 0);
console.log(evens); // [2, 4]

// метод reduce()
const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum); // 10
// Остальные методы массивов https://skillbox.ru/media/code/metody-massivov-v-javascript-obyasnyaem-na-paltsakh-dlya-novichkov/

//
//  ОБЛАСТЬ ВИДИМОСТИ ПЕРЕМЕННЫХ
//
let globalVar = "Глобальная"; // Глобальная область

if (true) {
  let blockVar = "Блочная"; // Блочная область
  console.log(blockVar); // Блочная
}

console.log(globalVar); // Глобальная
// console.log(blockVar);     // Ошибка

// let name = "Alex";
// const age = 25;
var city = "Moscow";

//
// ФУНКЦИИ
//
// Объясление функции
function sum(a, b) {
  return a + b;
}

// Функциональное выражение
const sum = function (a, b) {
  return a + b;
};

// Стрелочная функция
const sum = (a, b) => a + b;

function greet(name) {
  return `Привет, ${name}!`;
}

console.log(sum(3, 5)); // 8

console.log(greet("Иван")); // Привет, Иван!

//
// УСЛОВИЯ
//
// Ложное значение
if (0) {
  console.log("Это не выполнится");
}

// Истинное значение
if ("Привет") {
  console.log("Это выполнится");
}

// Конструкция if/else
if (age < 18) {
  console.log("Несовершеннолетний");
} else if (age >= 18 && age < 65) {
  console.log("Взрослый");
} else {
  console.log("Пенсионер");
}

// оператор "?"
let message = age >= 18 ? "Взрослый" : "Несовершеннолетний";

// оператор "&&"
let isLoggedIn = true;
isLoggedIn && console.log("Добро пожаловать!");

// оператор "||"
let newName = null;
let displayName = newName || "Гость";
console.log(displayName); // "Гость"
