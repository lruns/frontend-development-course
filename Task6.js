// 6. Hit Or Run

// Вы пишите искусственный интеллект (ИИ) для одной пошаговой стратегии. ИИ в один момент времени может либо бить hit, либо бежать run.

// Напишите функцию hitOrRun, которая:

//     Принимает на вход два натуральных числа a и b (a < b)
//     Генерирует рандомное число в промежутке [a, b]
//     Проверяет, является ли оно простым
//     Если является, то возвращает строку run
//     Если не является, то возвращает строку hit

function getRandomInclusive(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  

function isPrime(num) {
    if (num % 2 == 0) {
        return num == 2;
    }

    let d = 3;
    while (d * d <= num && num % d != 0) {
        d += 2;
    }

    return d * d > num;
}

function hitOrRun(a, b) {
    let rand = getRandomInclusive(a, b);
    console.log(rand)
    if (isPrime(rand)) {
        return "run"
    } else {
        return "hit"
    }
}

console.log(hitOrRun(2,2)) // always "run"
console.log(hitOrRun(4,4)) // always "hit"
console.log(hitOrRun(1,100)) // random "run" or "hit"
