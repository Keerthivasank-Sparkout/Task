function findPrimes(num) {
    if (num < 2) {
        return [];
    }
    let primes = [];
    for (let i=2;i<=num;i++) {
        let isPrime = true;
        for (let j=2;j<i;j++) {
            if (i%j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primes.push(i);
        }
    }
    return primes;
}
console.log(findPrimes(20));
