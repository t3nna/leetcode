const checkArithmeticSubarrays = function(nums, l, r) {
    let res = []
    for (let i = 0; i < l.length; i++) {
        let array = nums.slice(l[i], r[i]+1).sort((a,b) => b-a)
        res.push(checkArithmetic(array))
    }

    return res

};

function checkArithmetic(A){
    const temp = A.map((n, i, a) => n - a[i + 1])
    return A.length > 1
        ? new Set(temp.slice(0, -1))
        .size === 1
        : !!A.length;

}

console.log(checkArithmeticSubarrays([4, 6, 5, 9, 3, 7], [0, 0, 2], [2, 3, 5])); //[true,false,true]
console.log(checkArithmeticSubarrays([-12, -9, -3, -12, -6, 15, 20, -25, -20, -15, -10], [0, 1, 6, 4, 8, 7], [4, 4, 9, 7, 9, 10])); //[false,true,false,false,true,true]
