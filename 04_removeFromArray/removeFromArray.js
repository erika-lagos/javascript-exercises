const removeFromArray = function(initialArray, ...itemsToRemove) {
    let filteredArray = initialArray;
    for (item of itemsToRemove) {
        filteredArray = filteredArray.filter(el => el !== item);
    }
    return filteredArray;
};

// Do not edit below this line
module.exports = removeFromArray;
