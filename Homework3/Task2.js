// 2. Ключи и свойства

// Реализуйте функцию, которая получает на вход объект, а возвращает объект, в котором в качестве ключей указаны типы, встречающиеся в исходном объекте, а в качестве значений - как часто они встречались.

// Пример:

// const initialObj = {
//     a: 'some string 1',
//     b: 42,
//     c: { c1: 'some string 2' },
//     d: [],
//     e: 123,
// };

// const resultObj = solutionFn(initialObject);

// console.log(resultObj);
// /**
//  * {
//  *   string: 1,
//  *   number: 2,
//  *   object: 2
//  * } 
//  */

// Примечание: в решении достаточно использовать оператор typeof.

function solutionFn(initialObject) {
    const result = {};
    for (let key in initialObject) {
        let newKey = typeof initialObject[key];
        let value = result[newKey]
        result[newKey] = value == undefined ? 1 : value + 1;
    }
    
    return result;
}

const initialObj = {
    a: 'some string 1',
    b: 42,
    c: { c1: 'some string 2' },
    d: [],
    e: 123,
};

const resultObj = solutionFn(initialObj);

console.log(resultObj);
/**
 * {
 *   string: 1,
 *   number: 2,
 *   object: 2
 * } 
 */
