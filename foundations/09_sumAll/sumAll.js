const sumAll = function(a, b) {
    if (a < 0 || b < 0 || !Number.isInteger(a) || !Number.isInteger(b)) {
        return "ERROR";
    }

    let sum = 0;
    let upperBound = a < b ? b : a;
    let lowerBound = a < b ? a : b;

    for (let i = lowerBound; i <= upperBound; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
