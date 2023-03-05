const plusOne = function (digits) {

    for(let i = digits.length - 1; i >= 0; i--){
        digits[i]++;
        if(digits[i] > 9){
            digits[i] = 0;
        }else{
            return digits;
        }
    }
    digits.unshift(1);
    return digits;

};


// console.log(plusOne([1, 2, 3]));
console.log(plusOne([4, 3, 2, 1, 3,4,9,9,9,9,9]));
plusOne([1,2,3,4,5,9,9,9])