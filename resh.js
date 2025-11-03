// скорее всего вы использовали метод last, но он не работает у меня (я так понял у вас jQuery), поэтому я использовал метод at
// A) Массивы
// Верните последний элемент массива или undefined, если массив пуст.
// 1) last(arr)
let arr = [1, 2, 3];
if (!(arr.length === 0)) {
    console.log(arr.at(-1));
} else {
    console.log(undefined);
}

// 2) appendPure(arr, value)
// Верните новый массив с добавленным value в конец. Исходный arr не менять (используйте concat или spread).
const a = [1, 2, 3, 4, 5];
let value = 6;
//spread
let b1 = [...a, value];
console.log(b1);
//concat
let b2 = a.concat(value);
console.log(b2);
// 3) removeFirstInPlace(arr)
// Удалите первый элемент массива (mutating), верните удалённый элемент.
//   Примеры:
const x = [10, 20, 30];
let lastElement = x.shift(); // lastElement = 3, arr = [1, 2]
console.log(x);
x.unshift(lastElement);
console.log(x);
// 4) firstN(arr, n)
// Верните новый массив из первых n элементов (используйте slice).
// Примеры:
arr = [1, 2, 3, 4, 5];
let n = 2;
let firstN = arr.slice(0, n);
console.log(firstN);
// 5) removeFromMiddleInPlace(arr, start, count)
// Удалите count элементов начиная с индекса start (mutating, используйте splice). Верните массив удалённых.
//   Примеры:
const y = ['a', 'b', 'c', 'd', 'e'];
start = 1;
count = 2;
let removed = y.splice(start, count);
console.log(removed);
y.splice(start, 0, ...removed);
console.log(y);
// 6) unique(arr)
// Верните массив уникальных значений, сохранив порядок первых вхождений (Set или filter+indexOf).
const z = [1, 2, 2, 3, 1, 4];
let unique = [...new Set(z)];
console.log(unique);

// 7) evenNumbers(arr)
// Верните новый массив только из чётных чисел (filter).
const w = [1, 2, 3, 4, 5];
let evenNumbers = w.filter(a => a % 2 === 0);
console.log(evenNumbers); // [2,4]
// 8) squares(arr)
// Верните новый массив — квадраты чисел (map).
const v = [2, 3, 4];
const squares = v.map(a => a * a);
console.log(squares);

// 9) sum(arr)
// Верните сумму чисел (reduce).
const u = [1, 2, 3, 4];
const sum = u.reduce((acc, a) => acc + a, 0);
console.log(sum);

// 10) findFirstLongWord(words, minLen)
// Найдите первое слово длины >= minLen (find). Если нет — верните null.
const words = ['hi', 'book', 'car'];
const minLen = 4;
const FirstLongWord = words.find(word => word.length >= minLen);
console.log(FirstLongWord);

// 11) containsNegative(arr)
// Верните true, если в массиве есть отрицательное число (some).
arr = [3, 0, -1, 5];
const containsNegative = arr.some(a => a < 0);
console.log(containsNegative);

// 12) includesAll(arr, values)
// Верните true, если arr содержит все элементы массива values (every + includes).
arr = [1, 2, 3, 4];
values = [2, 4];
const includesAll = values.every(a => arr.includes(a));
console.log(includesAll);

// B) Строки
// 13) normalizeName(name)
// Обрежьте пробелы по краям и сделайте Имя с заглавной буквы (остальное — нижний регистр).
let name = '  аЛексЕЙ  ';
const normalizeName = name.trim().charAt(0).toUpperCase() + name.trim().slice(1).toLowerCase();
console.log(normalizeName);

// 14) countChar(str, ch)
// Посчитайте, сколько раз символ ch встречается в str (без учёта регистра).
let str = 'Abracadabra';
let ch = 'a';
const countChar = str.split('').filter(a => a.toLowerCase() === ch.toLowerCase()).length;
console.log(countChar);

// 15) getExtension(filename)
// Верните расширение файла без точки. Если точки нет — пустую строку (используйте lastIndexOf + slice).
let filename = 'photo.png';
if (filename.includes('.')) {
    const getExtension = filename.slice(filename.lastIndexOf('.') + 1);
    console.log(getExtension);
} else {
    console.log('');
}

// 16) isPalindrome(str)
// Проверьте, палиндром ли строка, игнорируя регистр и не-буквенно-цифровые символы (replace или match, затем reverse).

str = 'А роза упала на лапу Азора';
const isPalindrome = str.toLowerCase().replace(/[^a-z]/g, '').split('').reverse().join('') === str.toLowerCase().replace(/[^a-z]/g, '');
console.log(isPalindrome);

// 17) maskPhone(phone)
// Замаскируйте номер, оставив видимыми только последние 4 символа, остальное замените на '*'. Пробелы/дефисы можно убрать.
let phone = '8-999-123-45-67';
const maskPhone = phone.replace(/\D/g, '').slice(-4).padStart(phone.length, '*');
console.log(maskPhone);

// 18) truncate(str, maxLen, suffix = '...')
// Если длина строки > maxLen, обрежьте до maxLen - suffix.length и добавьте suffix, иначе верните исходную (slice).
str = 'Привет, мир!';
let maxLen = 8;
let suffix = '...';
const truncate = str.length > maxLen ? str.slice(0, maxLen - suffix.length) + suffix : str;
console.log(truncate);

// 19) toSlug(str)
// Преобразуйте строку в slug: нижний регистр, слова через '-', уберите лишние символы.
 str = '  Hello,   World!  ';
const toSlug = str.toLowerCase().replace(/[^a-z]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
console.log(toSlug);

// 20) extractNumbers(str)
// Верните массив чисел, найденных в строке (например, 'цена 12.5 и 7' -> [12.5, 7]).

str = 'цена 12.5 и 7';
const extractNumbers = str.match(/\d+(\.\d+)?/g);
console.log(extractNumbers);

// 21) sortWords(str)
// Получите слова из строки, отсортируйте их по алфавиту (без учёта регистра), верните обратно строкой через пробел.
str = 'Бета альфа Гамма';
const sortWords = str.split(' ').sort((a, b) => a.localeCompare(b)).join(' ');
console.log(sortWords);

// 22) isValidUrl(str)
// Верните true, если строка начинается с 'http://' или 'https://' и не содержит пробелов (startsWith, includes).
str = 'https://example.com';
const isValidUrl = str.startsWith('http://') || str.startsWith('https://') && !str.includes(' ');
console.log(isValidUrl);


// C) Другие типы и структуры данных
// 23) toNumberSafe(value)
// Преобразуйте value в число. Если результат NaN или Infinity/-Infinity — верните null.
value = 10/0 ; 
if (isNaN(value) || value === Infinity || value === -Infinity) {
    console.log(null);
} else {
    console.log(Number(value));
}

// 24) roundTo(value, decimals)
// Округлите число до указанного количества знаков после запятой, верните число (а не строку).
value = 1.2345;
n = 2;
const roundTo = Number(value.toFixed(n));
console.log(roundTo);

// 25) randomInt(min, max)
// Верните случайное целое число в диапазоне [min, max].
let min = 1;
let max = 30;
const randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomInt);

// 26) sumPrices(items)
// Сложите все цены из массива items, где элементы могут быть строками вида '10.5$', '20$', числом или мусором. Игнорируйте то, что не парсится (parseFloat).
items = ['10.5$', '20$', 'x', 2, null];
const sumPrices = items.reduce((acc, a) => {
    if (typeof a === 'string' && !isNaN(parseFloat(a))) {
        return acc + parseFloat(a);
    } else {
        return acc;
    }
}, 0);
console.log(sumPrices);

// 27) daysBetween(dateA, dateB)
// Верните количество полных дней между датами (строки формата 'YYYY-MM-DD'). Без учёта часовых поясов — оперируйте UTC.
let dateA = '2025-01-01';
let dateB = '2025-01-05';
const days = (new Date(dateB) - new Date(dateA)) / (1000 * 60 * 60 * 24);
console.log(days);

// 28) uniqueCount(arr)
// Верните количество уникальных значений в массиве (используйте Set).
arr = [1, 2, 2, 3, 1, 4];
const uniqueCount = new Set(arr).size;
console.log(uniqueCount);


// 29) wordFrequency(str)
// Верните объект с частотами слов (без учёта регистра). Слова — последовательности букв/цифр. Игнорируйте пустые.
str = 'Hi hi HI! test, Test';
const wordFrequency = str.toLowerCase().match(/\b\w+\b/g).reduce((acc, a) => {
    acc[a] = (acc[a] || 0) + 1;
    return acc;
}, {});
console.log(wordFrequency);

// 30) safeJSONParse(jsonStr, fallback = null)
// Без выброса ошибок: верните распарсенный объект или fallback, если парсинг не удался.
jsonStr = '{"a":1}';
try {
    const safeJSONParse = JSON.parse(jsonStr);
    console.log(safeJSONParse);
} catch (error) {
    console.log(fallback);
}
