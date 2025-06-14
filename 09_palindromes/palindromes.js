const palindromes = function (str) {
    let strArr = [];
    let strLowerCase = str.toLowerCase();
    for(let i = 0; i < strLowerCase.length; i++){
        const code = strLowerCase.charCodeAt(i);
        if(code >= 97 && code <= 122 || code >= 48 && code <= 57){
            strArr.push(strLowerCase[i]);
        }
    }
    const strArrLength = strArr.length;
    for(let i = 0; i < Math.floor(strArrLength / 2); i++){
        if(strArr[i] != strArr[strArrLength - i - 1]){
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
