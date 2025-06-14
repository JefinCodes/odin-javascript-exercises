const getTheTitles = function(arrOfObjs) {
    return arrOfObjs.reduce((arrOfTitles, element) =>{
        arrOfTitles.push(element.title);
        return arrOfTitles;
    },[])
};

// Do not edit below this line
module.exports = getTheTitles;
