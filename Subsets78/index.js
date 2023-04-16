const subsets = function (nums) {
    const res = []
    const backtracking = function(answer, nums){
        if(nums.length ===0){
            res.push(answer)
            return
        }
        let answerIgnore = [...answer]
        let answerTake =[...answer, nums[0]]
        nums = [...nums.slice(1)]

       backtracking(answerTake, nums)
       backtracking(answerIgnore, nums)

    }
    backtracking([], nums)
    return res
};
// 2^n
subsets([1, 2, 3]) // [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
// [], [1], [2], [3], [1,2], [1,3], [2, 3], [1,2,3]
subsets([0]) // [[],[0]]