const singleNumber = function(nums) {
    const map = new Map
    for (let i = 0; i < nums.length; i++) {

        if(!map.has(nums[i])){
            map.set(nums[i], 1)
        }else{
            map.set(nums[i], map.get(nums[i])+1)
        }

        if(map.get(nums[i]) === 3){
            map.delete(nums[i])
        }

    }
    return map.entries().next().value[0]


};

console.log(singleNumber(nums = [2, 2, 3, 2]));// 3
console.log(singleNumber([0, 1, 0, 1, 0, 1, 99])); // 99