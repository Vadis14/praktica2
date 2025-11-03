// A) Массивы
// 1) last(arr)
// Верните последний элемент массива или undefined, если массив пуст.
//   Примеры:
console.log(last([1, 2, 3])); // 3
console.log(last([])); // undefined

// 2) appendPure(arr, value)
// Верните новый массив с добавленным value в конец. Исходный arr не менять (используйте concat или spread).
// Примеры:
const a = [1, 2];
const b = appendPure(a, 3);
console.log(a); // [1,2]
console.log(b); // [1,2,3]

// 3) removeFirstInPlace(arr)
// Удалите первый элемент массива (mutating), верните удалённый элемент.
//   Примеры:
const x = [10, 20, 30];
console.log(removeFirstInPlace(x)); // 10
console.log(x); // [20,30]

// 4) firstN(arr, n)
// Верните новый массив из первых n элементов (используйте slice).
// Примеры:
console.log(firstN([1, 2, 3, 4], 2)); // [1,2]
console.log(firstN([1], 5)); // [1]

// 5) removeFromMiddleInPlace(arr, start, count)
// Удалите count элементов начиная с индекса start (mutating, используйте splice). Верните массив удалённых.
//   Примеры:
const y = ['a', 'b', 'c', 'd', 'e'];
console.log(removeFromMiddleInPlace(y, 1, 2)); // ['b','c']
console.log(y); // ['a','d','e']

// 6) unique(arr)
// Верните массив уникальных значений, сохранив порядок первых вхождений (Set или filter+indexOf).
// Примеры:
console.log(unique([1, 2, 2, 3, 1, 4])); // [1,2,3,4]

// 7) evenNumbers(arr)
// Верните новый массив только из чётных чисел (filter).
//   Примеры:
console.log(evenNumbers([1, 2, 3, 4, 5])); // [2,4]

// 8) squares(arr)
// Верните новый массив — квадраты чисел (map).
//   Примеры:
console.log(squares([2, 3, 4])); // [4,9,16]

// 9) sum(arr)
// Верните сумму чисел (reduce).
//   Примеры:
console.log(sum([1, 2, 3, 4])); // 10
console.log(sum([])); // 0

// 10) findFirstLongWord(words, minLen)
// Найдите первое слово длины >= minLen (find). Если нет — верните null.
//   Примеры:
console.log(findFirstLongWord(['hi', 'book', 'car'], 4)); // 'book'
console.log(findFirstLongWord(['a', 'bb'], 3)); // null

// 11) containsNegative(arr)
// Верните true, если в массиве есть отрицательное число (some).
//   Примеры:
console.log(containsNegative([3, 0, -1, 5])); // true
console.log(containsNegative([1, 2, 3])); // false

// 12) includesAll(arr, values)
// Верните true, если arr содержит все элементы массива values (every + includes).
//   Примеры:
console.log(includesAll([1, 2, 3, 4], [2, 4])); // true
console.log(includesAll([1, 2, 3], [2, 5])); // false

// B) Строки
// 13) normalizeName(name)
// Обрежьте пробелы по краям и сделайте Имя с заглавной буквы (остальное — нижний регистр).
// Примеры:
console.log(normalizeName('  аЛексЕЙ  ')); // 'Алексей'

// 14) countChar(str, ch)
// Посчитайте, сколько раз символ ch встречается в str (без учёта регистра).
// Примеры:
console.log(countChar('Abracadabra', 'a')); // 5

// 15) getExtension(filename)
// Верните расширение файла без точки. Если точки нет — пустую строку (используйте lastIndexOf + slice).
// Примеры:
console.log(getExtension('photo.png')); // 'png'
console.log(getExtension('archive.tar.gz')); // 'gz'
console.log(getExtension('README')); // ''

// 16) isPalindrome(str)
// Проверьте, палиндром ли строка, игнорируя регистр и не-буквенно-цифровые символы (replace или match, затем reverse).
// Примеры:
console.log(isPalindrome('А роза упала на лапу Азора')); // true
console.log(isPalindrome('Hello')); // false

// 17) maskPhone(phone)
// Замаскируйте номер, оставив видимыми только последние 4 символа, остальное замените на '*'. Пробелы/дефисы можно убрать.
//   Примеры:
console.log(maskPhone('8-999-123-45-67')); // '*********4567' (вариант: убрать нецифры и маскировать)
//Совет: используйте замену нецифр и padStart.

// 18) truncate(str, maxLen, suffix = '...')
// Если длина строки > maxLen, обрежьте до maxLen - suffix.length и добавьте suffix, иначе верните исходную (slice).
//   Примеры:
console.log(truncate('Привет, мир!', 8)); // 'Прив...'
console.log(truncate('Коротко', 10)); // 'Коротко'

// 19) toSlug(str)
// Преобразуйте строку в slug: нижний регистр, слова через '-', уберите лишние символы.
//   Примеры:
console.log(toSlug('  Hello,   World!  ')); // 'hello-world'

// 20) extractNumbers(str)
// Верните массив чисел, найденных в строке (например, 'цена 12.5 и 7' -> [12.5, 7]).
// Примеры:
console.log(extractNumbers('x=10; y=20.5; z=oops')); // [10, 20.5]

// 21) sortWords(str)
// Получите слова из строки, отсортируйте их по алфавиту (без учёта регистра), верните обратно строкой через пробел.
//   Примеры:
console.log(sortWords('Бета альфа Гамма')); // 'альфа Бета Гамма' (или все в нижнем регистре — оговорите правило)

// 22) isValidUrl(str)
// Верните true, если строка начинается с 'http://' или 'https://' и не содержит пробелов (startsWith, includes).
//   Примеры:
console.log(isValidUrl('https://example.com')); // true
console.log(isValidUrl('http://example com')); // false
console.log(isValidUrl('ftp://example.com')); // false

// C) Другие типы и структуры данных
// 23) toNumberSafe(value)
// Преобразуйте value в число. Если результат NaN или Infinity/-Infinity — верните null.
//   Примеры:
console.log(toNumberSafe('42')); // 42
console.log(toNumberSafe('')); // 0
console.log(toNumberSafe('abc')); // null
console.log(toNumberSafe(1 / 0)); // null

// 24) roundTo(value, decimals)
// Округлите число до указанного количества знаков после запятой, верните число (а не строку).
// Примеры:
console.log(roundTo(1.2345, 2)); // 1.23
console.log(roundTo(1.2355, 3)); // 1.236

// 25) randomInt(min, max)
// Верните случайное целое число в диапазоне [min, max].
//   Примеры:
console.log(randomInt(1, 3)); // 1 или 2 или 3

// 26) sumPrices(items)
// Сложите все цены из массива items, где элементы могут быть строками вида '10.5$', '20$', числом или мусором. Игнорируйте то, что не парсится (parseFloat).
//   Примеры:
console.log(sumPrices(['10$', '7.5$', 'x', 2, null])); // 19.5

// 27) daysBetween(dateA, dateB)
// Верните количество полных дней между датами (строки формата 'YYYY-MM-DD'). Без учёта часовых поясов — оперируйте UTC.
//   Примеры:
console.log(daysBetween('2025-01-01', '2025-01-05')); // 4

// 28) uniqueCount(arr)
// Верните количество уникальных значений в массиве (используйте Set).
// Примеры:
console.log(uniqueCount(['a', 'b', 'a', 'c'])); // 3

// 29) wordFrequency(str)
// Верните объект с частотами слов (без учёта регистра). Слова — последовательности букв/цифр. Игнорируйте пустые.
//   Примеры:
console.log(wordFrequency('Hi hi HI! test, Test')); // { hi: 3, test: 2 }

// 30) safeJSONParse(jsonStr, fallback = null)
// Без выброса ошибок: верните распарсенный объект или fallback, если парсинг не удался.
//   Примеры:
console.log(safeJSONParse('{"a":1}')); // { a: 1 }
console.log(safeJSONParse('{oops}', [])); // []
