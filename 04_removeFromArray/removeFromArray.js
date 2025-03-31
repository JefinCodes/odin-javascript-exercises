const removeFromArray = function(arr) {
    let modifiedArr = arr;
    for(let i = 1; i < arguments.length; i++){
        modifiedArr = modifiedArr.filter(item => item !== arguments[i])
    }
    const resultArr = modifiedArr;
    return resultArr;
};

// Do not edit below this line
module.exports = removeFromArray;
