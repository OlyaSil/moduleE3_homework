function getIsPrime(a) {
    if (a > 1000 || a <= 0) {
        console.log("Вы ввели неверное число");
        return;
    }
    if (a === 1) {
        console.log("Число не является простым");
        return;
    }
    if (a === 2) {
        console.log("Число является простым");
        return;
    }
    let isPrime = true;
    for (let n = 2; n <= Math.sqrt(a); n++) {
        if (a % n === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log("Число является простым");
    } else {
        console.log("Число не является простым");
    }
}
