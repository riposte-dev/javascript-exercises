const palindromes = function(string) {
    const letters = string.split("").filter(function(letter) {
        if (letter == " " || letter == "," || letter == "." || letter == "!") {
            return false;
        } else {
            return true;
        }
    });

    let forwardWord = letters.toString();
    let backwardWord = letters.toReversed().toString();

    if (forwardWord.toLowerCase() == backwardWord.toLowerCase()) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
