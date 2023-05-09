const subsetsWithDup = function (nums){
    const res = []

    const calc = function(answer, nums) {
        if(nums.length === 0){
            res.push(answer)
            return
        }
        let take = [...answer, nums[0]]
        let ignore = [...answer]
        nums = [...nums.slice(1)]

        calc( take, nums)
        calc(ignore, nums)
    }
    calc([], nums)
    return res
}


const subsetsWithDub2 = function (nums){
    function findSubset(arr, curr){
        res.push([...curr])
        for (let i = 0; i < arr.length; i++) {
           if(i===0 || arr[i] !== arr[i-1]){
               curr.push(arr[i])
               findSubset(arr.slice(i+1), curr)
               curr.pop()
           }
        }

    }
    let res = []
    nums.sort((a,b) => a-b)
    findSubset(nums, [])
    return res
}

console.log(subsetsWithDub2([1, 2, 2]));
console.log(subsetsWithDup([0]));