// 7. Case Converter

// В одном веб-приложении весь код бэкенда пишется в snake_case (все слова в нижнем регистре и разделяются нижним подчёркиванием), а фронтенд - в camelCase (слова не разделяются, первое слово пишется в нижнем регистре, у каждого следующего слова первая буква в верхнем регистре, остальные - в нижнем).

// Чтобы обеспечить корректную передачу данных с бэкенда на фронтенд необходимо написать функцию, которая принимает на вход строку в snake_case и превращает её в строку в camelCase.

// Пример:

// const snakeData = 'data_in_snake_case';

// const result = solutionFn(snakeData);
// console.log(result); // "dataInSnakeCase"

// Подсказка: при решении используйте встроенные методы строк (так быстрее и проще).


function solutionFn(str) {
    const words = str.split("_");
    return words.reduce((acc, word) =>  acc += word[0].toUpperCase() + word.slice(1));
}

const snakeData = 'data_in_snake_case';

const result = solutionFn(snakeData);
console.log(result); // "dataInSnakeCase"