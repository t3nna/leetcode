const combinationSum3 = function(k, n) {
    // const result = []
    //
    // function helper(target, counter, buffer) {
    //     if (counter < 0)
    //         return
    //     if (counter === 0) {
    //         result.push([...buffer])
    //         return
    //     }
    //     for (let i = counter; i >0; i--) {
    //
    //         buffer.push(i)
    //         helper(target, counter-i, buffer)
    //         buffer.pop()
    //     }
    //
    // }
    //
    // helper(n, n, [])
    // return result

    let res = []
    let nums = []
    for (let i = 0; i < n ; i++) {
        if(i+1 === 10) break
        nums[i] = i+1;


    }
    const backtracking = function(answer, nums, counter=0){
        if(counter>n)
            return
        if(nums.length === 0){
            if(counter === n && answer.length === k)
                res.push(answer)
            return
        }
        let counterTake=counter+nums[0]
        let counterIgnore = counter

        let answerIgnore = [...answer]
        let answerTake =[...answer, nums[0]]
        nums = [...nums.slice(1)]

        backtracking(answerTake, nums, counterTake)
        backtracking(answerIgnore, nums, counterIgnore)

    }

    backtracking([], nums)
    return res
};


const combinationSum301 = function(k, n) {
    const res = []

    function permute(arr, sum, start) {
        if(sum > n) return;

        if(arr.length === k) {
            if(sum === n) res.push(arr);
            return;
        }

        for(let i = start; i < 10; i++) {
            permute([...arr, i], sum+i, i+1);
        }
    }
    permute([], 0, 1);
    return res;
};

// console.log(combinationSum3(k = 9, n = 45));
// console.log(combinationSum301(k = 9, n = 45));
console.log(combinationSum301(k = 3, n = 9));
