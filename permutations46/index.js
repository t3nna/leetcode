const permute = function (nums) {
    let res = []


    solve(nums, 0, res)
    return res
};
function solve(nums, index, res) {
    if (index === nums.length) {
        res.push(nums.slice(0))
        return
    }
    for (let i = index; i < nums.length; i++) {
        [nums[i], nums[index]] = [nums[index], nums[i]];
        solve(nums, index + 1, res);
        [nums[index], nums[i]] = [nums[i], nums[index]]


    }

}

// function understandRecursion(arr, index = 0) {
//     if (arr[index + 1] === undefined) {
//         return 0
//     }
//     return 1 + understandRecursion(arr, index + 1)
// }
//
// console.log(understandRecursion([1, 2, 3, 4, 5, 6, 7]));


console.log(permute([1, 2, 3]));
permute([0,1])
permute([1])