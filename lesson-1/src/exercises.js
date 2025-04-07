// Умение работать с массивами - это важный навык
// при разработке React-приложений. Часто нужно отрисовать
// список элементов, сделать сортировку или фильтрацию.
// С помощью этих уражнений вы сможете научиться работать
// с массивами на JavaScript, а также привыкнуть к синтаксису
// нового языка программирования.

// Вы можете выполнять упражнения как в песочнице codesandbox,
// так и у себя на компьютере. Чтобы начать работать в codesandbox:
// 1. нажмите Sign In в правом верхнем углу,
// 2. зарегистрируйтесь по гугл-почте или гитхабу,
// 3. затем нажмите Fork также в правом верхнем углу.
// У вас появится своя копия проекта для работы.

// Для работы на своем комьпьютере 
// склонируйте репозиторий https://github.com/ivannetreba/foundation-of-frontend.git

// 1. Клонирование массива

// Напишите функцию на JavaScript для клонирования массива.

// Тестовые данные:
// console.log(array_Clone([1, 2, 4, 0]));
// console.log(array_Clone([1, 2, [4, 0]]));

// Ожидаемый вывод:
// [1, 2, 4, 0]
// [1, 2, [4, 0]]

function array_Clone(arr) {
    return arr.map(item => Array.isArray(item) ? array_Clone(item) : item);
}

// 2. Первые элементы массива

// Напишите функцию на JavaScript для получения первого элемента массива.
// Передавая параметр 'n', можно получить первые 'n' элементов массива.

// Тестовые данные:
// console.log(first([7, 9, 0, -2]));
// console.log(first([],3));
// console.log(first([7, 9, 0, -2],3));
// console.log(first([7, 9, 0, -2],6));
// console.log(first([7, 9, 0, -2],-3));

// Ожидаемый вывод:
// 7
// []
// [7, 9, 0]
// [7, 9, 0, -2]
// []

function first(arr, n) {
    if (!arr || !Array.isArray(arr) || arr.length === 0) {
        return []; // Возвращаем пустой массив, если массив пуст или не передан
    }

    if (typeof n !== 'number' || n <= 0) {
        return arr[0]; // По умолчанию возвращаем первый элемент, если n не задан или меньше нуля
    }

    return arr.slice(0, n); // Возвращаем первые n элементов массива
}

// 3. Последние элементы массива

// Напишите функцию на JavaScript для получения последнего элемента массива.
// Передавая параметр 'n', можно получить последние 'n' элементов массива.

// Тестовые данные:
// console.log(last([7, 9, 0, -2]));
// console.log(last([7, 9, 0, -2],3));
// console.log(last([7, 9, 0, -2],6));

// Ожидаемый вывод:
// -2
// [9, 0, -2]
// [7, 9, 0, -2]

function last(arr, n) {
    if (!arr || !Array.isArray(arr) || arr.length === 0) {
        return []; // Возвращаем пустой массив, если массив пуст или не передан
    }

    if (typeof n !== 'number' || n <= 0) {
        return arr[arr.length - 1]; // По умолчанию возвращаем последний элемент, если n не задан или меньше нуля
    }

    return arr.slice(-n); // Возвращаем последние n элементов массива
}


// 4. Соединение элементов массива

// Напишите простую программу на JavaScript для объединения
// всех элементов следующего массива в строку.

// Пример массива: `myColor = ["Red", "Green", "White", "Black"];`

// Ожидаемый вывод:
// "Red,Green,White,Black"
// "Red,Green,White,Black"
// "Red+Green+White+Black"

const myColor = ["Red", "Green", "White", "Black"];

// Объединение элементов массива в строку с разделителем ","
const resultComma = myColor.join(",");
console.log(resultComma);

// Объединение элементов массива в строку с разделителем "+"
const resultPlus = myColor.join("+");
console.log(resultPlus);

// 5. Вставка дефисов между четными числами

// Напишите программу на JavaScript, которая принимает число
// в качестве ввода и вставляет дефисы (-) между каждым чётным числом.
// Например, если ввести 025468, вывод должен быть 0-254-6-8.

function insertDashesBetweenEvenNumbers(inputNumber) {
    const numberString = inputNumber.toString(); // Преобразуем число в строку
    let result = "";

    for (let i = 0; i < numberString.length; i++) {
        const currentDigit = numberString[i];
        const nextDigit = numberString[i + 1];
        
        result += currentDigit;

        // Если текущий символ четный и следующий символ существует,
        // добавляем дефис между ними
        if (currentDigit % 2 === 0 && nextDigit !== undefined) {
            result += "-";
        }
    }

    return result;
}

// 6. Сортировка массива

// Напишите программу на JavaScript для сортировки элементов массива.

// Пример массива:
// const arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];

// Ожидаемый вывод:
// -4,-3,1,2,3,5,6,7,8

const arr1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];

// Сортируем массив
arr1.sort((a, b) => a - b);

// Выводим отсортированный массив
console.log(arr1);

    return result;


// 7. Самый частый элемент массива

// Напишите программу на JavaScript для нахождения самого частого элемента в массиве.

// Пример массива:
// const arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

// Ожидаемый вывод:
// a ( 5 раз )

// Пример массива
const arr2 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

// Функция для нахождения самого частого элемента
function findMostFrequentElement(arr) {
    // Создаем объект для подсчета частоты элементов
    const frequencyMap = {};

    // Подсчитываем частоту каждого элемента
    arr.forEach(element => frequencyMap[element] = (frequencyMap[element] || 0) + 1);

    // Находим элемент с максимальной частотой
    let mostFrequentElement = null;
    let maxFrequency = 0;

    for (let element in frequencyMap) {
        if (frequencyMap[element] > maxFrequency) {
            mostFrequentElement = element;
            maxFrequency = frequencyMap[element];
        }
    }

    return `${mostFrequentElement} (${maxFrequency} раз)`;
}

// Вызываем функцию и выводим результат
console.log(findMostFrequentElement(arr2));

// 8. Переключение регистра в строке

// Напишите программу на JavaScript, которая принимает строку и
// меняет регистр каждого символа.
// Например, если ввести 'The Quick Brown Fox',
// вывод должен быть 'tHE qUICK bROWN fOX'.

function toggleCase(str) {
    let result = '';

    for (let char of str) {
        if (char === char.toUpperCase()) {
            result += char.toLowerCase();
        } else {
            result += char.toUpperCase();
        }
    }

    return result;
}

// Пример использования
const inputStr = "The Quick Brown Fox";
const outputStr = toggleCase(inputStr);
console.log(outputStr);

// 9. Сумма квадратов элементов массива

// Напишите программу на JavaScript для нахождения
// суммы квадратов чисел в массиве.

function sumOfSquares(arr) {
    return arr.reduce((sum, num) => sum + Math.pow(num, 2), 0);
}

// Пример использования
const numbers = [1, 2, 3, 4, 5];
const result = sumOfSquares(numbers);
console.log(result);

// 10. Сумма и произведение элементов массива

// Напишите программу на JavaScript для вычисления суммы и
// произведения элементов массива целых чисел.

// Функция для вычисления суммы элементов массива
function calculateSum(arr) {
    return arr.reduce((total, num) => total + num, 0);
}

// Функция для вычисления произведения элементов массива
function calculateProduct(arr) {
    return arr.reduce((product, num) => product * num, 1);
}

// Пример использования
const num = [1, 2, 3, 4, 5];
const sumResult = calculateSum(num);
const productResult = calculateProduct(num);

// 11. Удаление дубликатов

// Напишите программу на JavaScript для удаления дублирующихся
// элементов из массива (игнорируя чувствительность к регистру).

// Функция для удаления дубликатов, игнорируя регистр
function removeDuplicatesIgnoreCase(arr) {
    // Преобразуем все элементы массива в нижний регистр
    const lowerCaseArr = arr.map(item => item.toLowerCase());
    
    // Создадим новый массив уникальных значений
    const uniqueItems = [...new Set(lowerCaseArr)];
    
    // Преобразуем уникальные значения обратно в массив
    return uniqueItems.map(item => arr.find(elem => elem.toLowerCase() === item));
}

// Пример использования
const inputArray = ['Apple', 'apple', 'Banana', 'banana', 'Orange'];
const resultArray = removeDuplicatesIgnoreCase(inputArray);

console.log(resultArray);

// 12. Вывод цветов с порядковыми номерами

// У нас есть следующие массивы:
// color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// o = ["th", "st", "nd", "rd"]
// Напишите программу на JavaScript для отображения цветов в следующем формате:
// "1st choice is Blue."
// "2nd choice is Green."
// "3rd choice is Red."
// Примечание: Используйте порядковые числительные для указания их позиции.

const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinals = ["th", "st", "nd", "rd"];

// Функция для преобразования числа в порядковое числительное
function getOrdinal(number) {
    const remainder = number % 100;
    if (remainder >= 11 && remainder <= 13) {
        return `${number}th`;
    }
    switch (number % 10) {
        case 1: return `${number}st`;
        case 2: return `${number}nd`;
        case 3: return `${number}rd`;
        default: return `${number}th`;
    }
}

// Основной цикл для вывода сообщений
colors.forEach((color, index) => {
    const position = index + 1; // Нумерация начинается с 1
    const ordinal = getOrdinal(position);
    console.log(`${ordinal} choice is ${color}.`);
});