const combinationSum = function (candidates, target) {
    const res = []

    function helper (A=[], counter, idx=0){
        if(counter>target){
            return
        }
        if(counter ===target){
            res.push([...A])
            return;
        }
        for (let i = idx; i < candidates.length; i++) {
            helper([...A, candidates[i]], counter+candidates[i], i)
        }
    }

    helper([], 0)

    return res



};

const combinationSumInter = function (candidates, target) {
    const result = [];

    function permute(arr=[], sum=0, idx=0) {
        if(sum === target) {
            result.push(arr);
            return;
        }
        for(let i = idx; i < candidates.length; i++) {
            if(sum + candidates[i] <= target){
                permute([...arr, candidates[i]], sum+candidates[i], i);
            }
        }
    }
    permute()
    return result;
}

console.log(combinationSum([2, 3, 6, 7], 7)) //[[2,2,3],[7]]
console.log(combinationSum([2, 3, 5], 8)) //[[2,2,2,2],[2,3,3],[3,5]]
console.log(combinationSum([2], 1)) //[]