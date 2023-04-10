const permute = function (nums) {
    let res = []
    const subArrays = (curr, rest) => {
        if (rest.length === 0) {
            res.push(curr)
            return
        }
        for (let i = 0; i < rest.length; i++) {
            let tempCurr = [...curr, rest[i]]
            let tempRest = [...rest]
            tempRest.splice(i, 1)
            // console.log(tempCurr)
            // console.log(tempRess
            subArrays(tempCurr, tempRest)

        }
    }
    subArrays([], nums)
    return res
};

console.log(permute([1, 2, 3]));
permute([0, 1])
permute([1])