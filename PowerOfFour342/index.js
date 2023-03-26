const isPowerOfFour = function (n, power = 1) {

    let four = Math.pow(2, power)
    if (n === four) {
        return true
    }
    if (four < n) {
        return isPowerOfFour(n, power + 1)
    }

    return false


};

console.log(isPowerOfFour(16));
console.log(isPowerOfFour(5));
const isPowerOfTwo= function (n){
    if(n===1){
        return true
    }
   else if (n===0){
       return false
    }
   else if(n%2!==0){
       return false
    }
   return isPowerOfTwo(n/2)
}