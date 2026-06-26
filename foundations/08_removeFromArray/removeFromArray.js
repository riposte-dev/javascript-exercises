const removeFromArray = function(array, ...excluded) {
    for (excludedNum of excluded) {
        while (array.indexOf(excludedNum) > -1) {
            array.splice(array.indexOf(excludedNum), 1);

            if (array.indexOf(excludedNum) == -1) {
                break;
            }
        }
    }
    
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
