const  singleNumber = function(nums) {
    const obj = {}
    for (let i = 0; i < nums.length; i++) {
        if (!obj[nums[i]]){
            obj[nums[i]]=1
        }
        else{
            obj[nums[i]]++
        }
    }
    for(const key in obj){
        if (obj[key]===1){
            return key
        }
    }
    return obj
};

console.log(singleNumber([2, 2, 1]));
console.log(singleNumber([4, 1, 2, 1, 2]));
console.log(singleNumber([1]));