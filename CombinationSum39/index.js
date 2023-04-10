const combinationSum = function (candidates, target) {
    let index = 0
    let tempDataStruct = []
    let result = []

    function backtracking(index, target, tempDataStruct) {
        if(target === 0) {
            result.push([...tempDataStruct])
            return
        }

        if(target < 0) return;

        for(let i=index; i<candidates.length; i++) {
            tempDataStruct.push(candidates[i])
            backtracking(i, target-candidates[i], tempDataStruct)
            tempDataStruct.pop()
        }
    }
    backtracking(index, target, tempDataStruct)
    return result;
};

console.log(combinationSum([2, 3, 6, 7], 7))
console.log(combinationSum(candidates = [2, 3, 5], target = 8))


function factorial (n ){
    if(n<=1){
        return 1
    }
    return n*factorial(n-1 )
}

console.log(factorial(4));