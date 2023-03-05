const  shuffle = function(nums, n) {
    const res = []
    const half = nums.splice(n)
    for (let i = 0; i < n * 2; i+=2) {
        res[i]=nums[i/2]
        res[i+1]=half[i/2]
    }
    // console.log(nums,'\n', half)
    return res
};

const shuffle02 = function (nums, n){
    const res=[]

    for (let i = 0; i < n; i++) {
        res.push(nums[i], nums[i+n])
    }
    return res
}


console.log(shuffle([2,5,1,3,4,7],  3))
console.log(shuffle([1,2,3,4,4,3,2,1], 4))

console.log(shuffle02([2,5,1,3,4,7],  3))
console.log(shuffle02([1,2,3,4,4,3,2,1], 4))