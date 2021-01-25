// % remainder operator

function isEven (num){
    let bool;
    if(num % 2 == 0){
        bool = true
    }else{
        bool = false
    }
    return "The number is even? " + bool;
}

console.log(isEven(30))