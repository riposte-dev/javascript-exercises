const punctuationList = [" ", ",", ".", "!", "?"];

const palindromes = function(string) {
    const letters = string.split("").filter(letter => !punctuationList.includes(letter));

    let forwardWord = letters.toString().toLowerCase();
    let backwardWord = letters.toReversed().toString().toLowerCase();

    if (forwardWord == backwardWord) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
