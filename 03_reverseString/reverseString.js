const reverseString = function(text) {
    arrText = text.split(""); 
    arrText.reverse();
    text = arrText.join("");
    return text;
};

// Do not edit below this line
module.exports = reverseString;
