const combinationSum = function (candidates, target) {
    const res = []


    function checker(index, currentVal, arr) {
        if (currentVal < 0) return
        if (currentVal === 0) {
            res.push([...arr])
        }
        for (let i = index; i < candidates.length; i++) {
            arr.push(candidates[i])
            checker(i, currentVal - candidates[i], arr)
            arr.pop()

        }

    }

    checker(0, target, [])

    return res


};

console.log(combinationSum([2, 3, 6, 7], 7)) //[[2,2,3],[7]]
console.log(combinationSum([2, 3, 5], 8)) //[[2,2,2,2],[2,3,3],[3,5]]
console.log(combinationSum([2], 1)) //[]