// A) Массивы

// 1) last(arr)
// Верните последний элемент массива или undefined, если массив пуст.
let arr = [1, 2, 3];
function last(arr) {
    if (arr.length === 0) {
        return undefined;
    }
    return arr.at(-1);
}
console.log(last([1, 2, 3])); // 3
console.log(last([])); // undefined

// 2) appendPure(arr, value)
// Верните новый массив с добавленным value в конец. Исходный arr не менять (используйте concat или spread).
const a = [1, 2];
let value = 3;
function appendPure(arr, value) {
    return [...arr, value];
    // или: return arr.concat(value);
}
console.log(a); // [1,2]
console.log(appendPure(a, value)); // [1,2,3]

// 3) removeFirstInPlace(arr)
// Удалите первый элемент массива (mutating), верните удалённый элемент.
const x = [10, 20, 30];
function removeFirstInPlace(arr) {
    return arr.shift();
}
console.log(removeFirstInPlace(x)); // 10
console.log(x); // [20,30]

// 4) firstN(arr, n)
// Верните новый массив из первых n элементов (используйте slice).
arr = [1, 2, 3, 4, 5];
let n = 2;
function firstN(arr, n) {
    return arr.slice(0, n);
}
console.log(firstN([1, 2, 3, 4], 2)); // [1,2]
console.log(firstN([1], 5)); // [1]

// 5) removeFromMiddleInPlace(arr, start, count)
// Удалите count элементов начиная с индекса start (mutating, используйте splice). Верните массив удалённых.
const y = ['a', 'b', 'c', 'd', 'e'];
let start = 1;
let count = 2;
function removeFromMiddleInPlace(arr, start, count) {
    return arr.splice(start, count);
}
console.log(removeFromMiddleInPlace(y, 1, 2)); // ['b','c']
console.log(y); // ['a','d','e']

// 6) unique(arr)
// Верните массив уникальных значений, сохранив порядок первых вхождений (Set или filter+indexOf).
const z = [1, 2, 2, 3, 1, 4];
function unique(arr) {
    return [...new Set(arr)];
}
console.log(unique([1, 2, 2, 3, 1, 4])); // [1,2,3,4]

// 7) evenNumbers(arr)
// Верните новый массив только из чётных чисел (filter).
const w = [1, 2, 3, 4, 5];
function evenNumbers(arr) {
    return arr.filter(a => a % 2 === 0);
}
console.log(evenNumbers([1, 2, 3, 4, 5])); // [2,4]

// 8) squares(arr)
// Верните новый массив — квадраты чисел (map).
const v = [2, 3, 4];
function squares(arr) {
    return arr.map(a => a * a);
}
console.log(squares([2, 3, 4])); // [4,9,16]

// 9) sum(arr)
// Верните сумму чисел (reduce).
const u = [1, 2, 3, 4];
function sum(arr) {
    return arr.reduce((acc, a) => acc + a, 0);
}
console.log(sum([1, 2, 3, 4])); // 10
console.log(sum([])); // 0

// 10) findFirstLongWord(words, minLen)
// Найдите первое слово длины >= minLen (find). Если нет — верните null.
const words = ['hi', 'book', 'car'];
let minLen = 4;
function findFirstLongWord(words, minLen) {
    const found = words.find(word => word.length >= minLen);
    return found || null;
}
console.log(findFirstLongWord(['hi', 'book', 'car'], 4)); // 'book'
console.log(findFirstLongWord(['a', 'bb'], 3)); // null

// 11) containsNegative(arr)
// Верните true, если в массиве есть отрицательное число (some).
arr = [3, 0, -1, 5];
function containsNegative(arr) {
    return arr.some(a => a < 0);
}
console.log(containsNegative([3, 0, -1, 5])); // true
console.log(containsNegative([1, 2, 3])); // false

// 12) includesAll(arr, values)
// Верните true, если arr содержит все элементы массива values (every + includes).
arr = [1, 2, 3, 4];
let values = [2, 4];
function includesAll(arr, values) {
    return values.every(a => arr.includes(a));
}
console.log(includesAll([1, 2, 3, 4], [2, 4])); // true
console.log(includesAll([1, 2, 3], [2, 5])); // false

// B) Строки

// 13) normalizeName(name)
// Обрежьте пробелы по краям и сделайте Имя с заглавной буквы (остальное — нижний регистр).
let name = '  аЛексЕЙ  ';
function normalizeName(name) {
    const trimmed = name.trim();
    if (trimmed.length === 0) return '';
    return trimmed.charAt(0).toUpperCase() + trimmed.slice(1).toLowerCase();
}
console.log(normalizeName('  аЛексЕЙ  ')); // 'Алексей'

// 14) countChar(str, ch)
// Посчитайте, сколько раз символ ch встречается в str (без учёта регистра).
let str = 'Abracadabra';
let ch = 'a';
function countChar(str, ch) {
    return str.split('').filter(a => a.toLowerCase() === ch.toLowerCase()).length;
}
console.log(countChar('Abracadabra', 'a')); // 5

// 15) getExtension(filename)
// Верните расширение файла без точки. Если точки нет — пустую строку (используйте lastIndexOf + slice).
let filename = 'photo.png';
function getExtension(filename) {
    const dotIndex = filename.lastIndexOf('.');
    if (dotIndex === -1) {
        return '';
    }
    return filename.slice(dotIndex + 1);
}
console.log(getExtension('photo.png')); // 'png'
console.log(getExtension('archive.tar.gz')); // 'gz'
console.log(getExtension('README')); // ''

// 16) isPalindrome(str)
// Проверьте, палиндром ли строка, игнорируя регистр и не-буквенно-цифровые символы (replace или match, затем reverse).
str = 'А роза упала на лапу Азора';
function isPalindrome(str) {
    const cleaned = str.toLowerCase().replace(/[^a-zа-яё0-9]/g, '');
    return cleaned.split('').reverse().join('') === cleaned;
}
console.log(isPalindrome('А роза упала на лапу Азора')); // true
console.log(isPalindrome('Hello')); // false

// 17) maskPhone(phone)
// Замаскируйте номер, оставив видимыми только последние 4 символа, остальное замените на '*'. Пробелы/дефисы можно убрать.
let phone = '8-999-123-45-67';
function maskPhone(phone) {
    const digits = phone.replace(/\D/g, '');
    const lastFour = digits.slice(-4);
    return lastFour.padStart(phone.length, '*');
}
console.log(maskPhone('8-999-123-45-67')); // '*********4567'

// 18) truncate(str, maxLen, suffix = '...')
// Если длина строки > maxLen, обрежьте до maxLen - suffix.length и добавьте suffix, иначе верните исходную (slice).
str = 'Привет, мир!';
let maxLen = 8;
let suffix = '...';
function truncate(str, maxLen, suffix = '...') {
    if (str.length > maxLen) {
        return str.slice(0, maxLen - suffix.length) + suffix;
    }
    return str;
}
console.log(truncate('Привет, мир!', 8)); // 'Прив...'
console.log(truncate('Коротко', 10)); // 'Коротко'

// 19) toSlug(str)
// Преобразуйте строку в slug: нижний регистр, слова через '-', уберите лишние символы.
str = '  Hello,   World!  ';
function toSlug(str) {
    return str.toLowerCase()
        .replace(/[^a-z0-9]/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '');
}
console.log(toSlug('  Hello,   World!  ')); // 'hello-world'

// 20) extractNumbers(str)
// Верните массив чисел, найденных в строке (например, 'цена 12.5 и 7' -> [12.5, 7]).
str = 'цена 12.5 и 7';
function extractNumbers(str) {
    const matches = str.match(/\d+(\.\d+)?/g);
    return matches ? matches.map(Number) : [];
}
console.log(extractNumbers('x=10; y=20.5; z=oops')); // [10, 20.5]

// 21) sortWords(str)
// Получите слова из строки, отсортируйте их по алфавиту (без учёта регистра), верните обратно строкой через пробел.
str = 'Бета альфа Гамма';
function sortWords(str) {
    return str.split(' ').sort((a, b) => a.localeCompare(b)).join(' ');
}
console.log(sortWords('Бета альфа Гамма')); // 'альфа Бета Гамма'

// 22) isValidUrl(str)
// Верните true, если строка начинается с 'http://' или 'https://' и не содержит пробелов (startsWith, includes).
str = 'https://example.com';
function isValidUrl(str) {
    return (str.startsWith('http://') || str.startsWith('https://')) && !str.includes(' ');
}
console.log(isValidUrl('https://example.com')); // true
console.log(isValidUrl('http://example com')); // false
console.log(isValidUrl('ftp://example.com')); // false

// C) Другие типы и структуры данных

// 23) toNumberSafe(value)
// Преобразуйте value в число. Если результат NaN или Infinity/-Infinity — верните null.
let valueToConvert = '42';
function toNumberSafe(value) {
    const num = Number(value);
    if (isNaN(num) || num === Infinity || num === -Infinity) {
        return null;
    }
    return num;
}
console.log(toNumberSafe(valueToConvert)); // 42
console.log(toNumberSafe('')); // 0
console.log(toNumberSafe('abc')); // null
console.log(toNumberSafe(1 / 0)); // null

// 24) roundTo(value, decimals)
// Округлите число до указанного количества знаков после запятой, верните число (а не строку).
let valueToRound = 1.2345;
let decimals = 2;
function roundTo(value, decimals) {
    return Number(value.toFixed(decimals));
}
console.log(roundTo(valueToRound, decimals)); // 1.23
console.log(roundTo(1.2355, 3)); // 1.236

// 25) randomInt(min, max)
// Верните случайное целое число в диапазоне [min, max].
let min = 1;
let max = 3;
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(randomInt(1, 3)); // 1 или 2 или 3

// 26) sumPrices(items)
// Сложите все цены из массива items, где элементы могут быть строками вида '10.5$', '20$', числом или мусором. Игнорируйте то, что не парсится (parseFloat).
let items = ['10$', '7.5$', 'x', 2, null];
function sumPrices(items) {
    return items.reduce((acc, a) => {
        if (typeof a === 'number') {
            return acc + a;
        }
        if (typeof a === 'string') {
            const num = parseFloat(a);
            if (!isNaN(num)) {
                return acc + num;
            }
        }
        return acc;
    }, 0);
}
console.log(sumPrices(['10$', '7.5$', 'x', 2, null])); // 19.5

// 27) daysBetween(dateA, dateB)
// Верните количество полных дней между датами (строки формата 'YYYY-MM-DD'). Без учёта часовых поясов — оперируйте UTC.
let dateA = '2025-01-01';
let dateB = '2025-01-05';
function daysBetween(dateA, dateB) {
    const date1 = new Date(dateA);
    const date2 = new Date(dateB);
    const diffTime = date2 - date1;
    return Math.floor(diffTime / (1000 * 60 * 60 * 24));
}
console.log(daysBetween('2025-01-01', '2025-01-05')); // 4

// 28) uniqueCount(arr)
// Верните количество уникальных значений в массиве (используйте Set).
arr = ['a', 'b', 'a', 'c'];
function uniqueCount(arr) {
    return new Set(arr).size;
}
console.log(uniqueCount(['a', 'b', 'a', 'c'])); // 3

// 29) wordFrequency(str)
// Верните объект с частотами слов (без учёта регистра). Слова — последовательности букв/цифр. Игнорируйте пустые.
str = 'Hi hi HI! test, Test';
function wordFrequency(str) {
    const words = str.toLowerCase().match(/\b\w+\b/g);
    if (!words) return {};
    return words.reduce((acc, a) => {
        acc[a] = (acc[a] || 0) + 1;
        return acc;
    }, {});
}
console.log(wordFrequency('Hi hi HI! test, Test')); // { hi: 3, test: 2 }

// 30) safeJSONParse(jsonStr, fallback = null)
// Без выброса ошибок: верните распарсенный объект или fallback, если парсинг не удался.
let jsonStr = '{"a":1}';
let fallback = null;
function safeJSONParse(jsonStr, fallback = null) {
    try {
        return JSON.parse(jsonStr);
    } catch (error) {
        return fallback;
    }
}
console.log(safeJSONParse('{"a":1}')); // { a: 1 }
console.log(safeJSONParse('{oops}', [])); // []
