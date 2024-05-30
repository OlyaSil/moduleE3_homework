function createAdder(num1) {
    return function(num2) {
        return num1 + num2;
    };
}

// Пример использования:
const addFive = createAdder(5);
const sum = addFive(3); // Возвращает сумму 5 + 3
console.log(sum); /
