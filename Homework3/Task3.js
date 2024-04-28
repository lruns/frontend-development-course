// 3. Больше никаких шуток про 1 + '1' === '11'

// В JavaScript оператор "+" помимо сложения чисел может выполнять роль конкатенации. Если один из операндов - строка, то второй автоматически преобразуется к строке, и они конкатенируются.

// Иногда это может привести к неожиданных последствиям...

// console.log(('b' + 'a' + + 'a' + 'a').toLowerCase()); // 'banana'

// Напишите функцию sum, которая:

//     Принимает два значения
//     Проверяет, является ли каждый из них числом
//     Если они оба числа, то возвращается их сумма
//     Если левый операнд не является числом, то выкидывается ошибка "The left operand is not number"
//     Если правый операнд не является числом, то выкидывается ошибка "The right operand is not number"
//     Если оба операнда не являются числами, то выкидывается ошибка "Operands are not numbers"

function sum(a, b) {
    let leftIsNumber = typeof a == "number";
    let rightIsNumber = typeof b == "number";
    
    if (!leftIsNumber && !rightIsNumber) {
        throw new Error("Operands are not numbers");
    } else if (!leftIsNumber) {
        throw new Error("The left operand is not number");
    } else if (!rightIsNumber) {
        throw new Error("The right operand is not number");
    } else {
        return a + b;
    }
}

function printSumOrCatchError(a, b) {
    try {
        console.log(sum(a, b));
      } catch (err) {
        console.log(err.message);
      }
}

printSumOrCatchError(1, 2);
printSumOrCatchError("a", 2);
printSumOrCatchError(1, "b");
printSumOrCatchError("a", null);