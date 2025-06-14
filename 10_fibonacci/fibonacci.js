const fibonacci = function(num) {
    const cleanedNum = parseInt(num);
    if(cleanedNum < 0){
        return "OOPS";
    }
    if(cleanedNum == 0){
        return 0;
    }
    let fib1 = 0;
    let fib2 = 1;
    for(let i = 1; i < cleanedNum; i++){
        let temp = fib2;
        fib2 = fib1 + fib2;
        fib1 = temp;
    }
    return fib2;
};

// Do not edit below this line
module.exports = fibonacci;
