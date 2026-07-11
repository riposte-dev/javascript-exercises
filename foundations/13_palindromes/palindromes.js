const punctuationList = [" ", ",", ".", "!", "?"];

const palindromes = function(string) {
    const letters = string.split("").filter(letter => !punctuationList.includes(letter));

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
