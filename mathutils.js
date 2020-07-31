const MathUtils = {};

MathUtils.log10 = function(val) {
  return Math.log(val) / Math.LN10;
};

MathUtils.fact = function(x) {
    if (!x) return 1;
    return x * MathUtils.fact(x-1);
};

MathUtils.isPrime = function(num) {
    for ( var i = 2; i < num; i++ ) {
        if ( num % i === 0 ) {
            return false;
        }
    }
    return true;
};

MathUtils.genPrimes = function(n) {
    var primes = [2];
    for (var i = 3; i < n; i+=2 ) {
        if (MathUtils.isPrime(i)) {
            primes.push(i);
        }
    }
    return primes;
};
