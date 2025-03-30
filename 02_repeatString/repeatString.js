const repeatString = function(word, times) {
    if(times < 0){
        return "ERROR";
    }
    let text = "";
    while(times > 0){
        text+= word;
        times--;
    }
    return text;
};

// Do not edit below this line
module.exports = repeatString;
