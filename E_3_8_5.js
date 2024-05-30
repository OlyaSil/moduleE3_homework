const power = (x, n) => {
    if (n === 0) {
        return 1;
    }
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= x;
    }
    return result;
};

// Пример использования:
const base = 2;
const exponent = 5;
const result = power(base, exponent);
console.log(`${base} в степени ${exponent} равно ${result}`);
