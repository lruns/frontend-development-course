// 4. CVS на минималках

// CVS - система контроля версий файлов. Основное предназначение - сохранение истории изменения файлов.

// Напишите функцию getMinimalCVS, которая будет выполнять роль CVS для некоторого массива.

// Она должна принимать на вход массив и возвращать объект с четырьмя свойствами:

//     head - функция, возвращающая последнюю версию массива
//     history - функция, возвращаюся массив со всеми версиями массива
//     push - функция, принимающая элемент и сохраняющая новую версию массива с добавленным элементом в конце
//     pop - функция, сохраняющая новую версию массива без последнего элемента и возвращающая этот последний элемент

// Пример работы функции:

// const cvs = getMinimalCVS(['a', 'b', 'c']);

// console.log(cvs.head());    // ['a', 'b', 'c']
// console.log(cvs.pop());     // 'c'

// cvs.push('d');
// cvs.push('e');

// console.log(cvs.head());    // ['a', 'b', 'd', 'e']
// console.log(cvs.history());
// /**
//  * [
//  *   ['a', 'b', 'c'],
//  *   ['a', 'b'],
//  *   ['a', 'b', 'd'],
//  *   ['a', 'b', 'd', 'e']
//  * ]
//  */

// Несмотря на то, что в задании написано использовать функцию, class в js является синтактическим сахаром и под капотом
// все равно используются функции с прототипом
class getMinimalCVS {

    constructor(newArray) {
        this.allArrays = [newArray];
    }

    head() {
        return this.allArrays[this.allArrays.length - 1];
    }

    history() {
        return this.allArrays;
    }

    push(newElement) {
        this.#addNewHead().push(newElement);
    }

    pop() {
        return this.#addNewHead().pop();
    }

    #addNewHead() {
        const head = this.head();
        const newHead = head.slice();
        this.allArrays.push(newHead);
        return newHead;
    }

}

const cvs = new getMinimalCVS(['a', 'b', 'c']);

console.log(cvs.head());    // ['a', 'b', 'c']
console.log(cvs.pop());     // 'c'

cvs.push('d');
cvs.push('e');

console.log(cvs.head());    // ['a', 'b', 'd', 'e']
console.log(cvs.history());
/**
 * [
 *   ['a', 'b', 'c'],
 *   ['a', 'b'],
 *   ['a', 'b', 'd'],
 *   ['a', 'b', 'd', 'e']
 * ]
 */