// 1. Custom Array.prototype.filter

// У массивов есть встроенный метод filter, который создаёт новый массив со всеми элементами, прошедшими проверку, задаваемую в передаваемой функции.

// Пример:

// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter((word) => word.length > 6);

// console.log(result); // ["exuberant", "destruction", "present"]

// Реализуйте собственную функцию фильтрации массива, в следующем формате:

// /**
//  * Кастомная реализация метода Array.prototype.filter
//  * 
//  * @param {Array} array - массив
//  * @param {Function} filterFn - фильтрующая функция
//  * @param {Boolean} inplace - флаг "модифицируем исходный массив или нет"
//  * @returns {Array} - отфильтрованный массив
//  */
// function filter(array, filterFn, inplace = false) {
//     // ваш код здесь
// }

// Примечание: гарантируется, что фильтрующая функции всегда корректная, обработку ошибок и валидацию исходных данных в решении можно не закладывать.

// N.B. Функция не должна использовать нативный метод Array.prototype.filter.


function filter(array, filterFn, inplace = false) {
    if (inplace) {
        for (let i = 0; i < array.length; i++) {
            let word = array[i];
            if (!filterFn(word)) {
                array.splice(i, 1);
                i--;
            }
        }
        return;
    }

    const newArray = []
    for (let word of array) {
        if (filterFn(word)) {
            newArray.push(word)
        }
    }
    return newArray;
}

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = filter(words, (word) => word.length > 6);
console.log(result); // ["exuberant", "destruction", "present"]

filter(words, (word) => word.length > 6, inplace = true);
console.log(words); // ["exuberant", "destruction", "present"]