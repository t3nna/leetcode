const permute = function (nums) {
    let res = []
    /**
     * The goal is break down the problem by finding permutations in subarrays.
     * So we will maintain a subarray of fixed elements and a subarray for
     * exploring permutations.
     *
     *                  [1], [2, 3]    [1, 2], [3]    [1, 2, 3]
     * [], [1, 2, 3] -> [2], [1, 3] -> [1, 3], [2] -> [1, 3, 2]
     *                  [3], [1, 2]    [2, 1], [1]    [2, 1, 3]
     *                                 [2, 3], [1]    [2, 3, 1]
     *                                 [3, 1], [2]    [3, 1, 2]
     *                                 [3, 2], [1]    [3, 2, 1]
     */
    const subPermute = (curr, next) =>{
        if(next.length===0){
            res.push(curr)
            return
        }
        for (let i = 0; i<next.length; i++) {
            let newCurr = [...curr, next[i]]
            let newNext = [...next.slice(0, i), ...next.slice(i+1)]
            // console.log('curr', newCurr)
            // console.log('next', newNext)
            subPermute(newCurr, newNext)
        }


    }
    subPermute([], nums)
    return res
};



// from the Internet
let permuteInter = function(letters) {
    let res = [];
    dfs(letters, [], Array(letters.length).fill(false), res);
    return res;
}

function dfs(letters, path, used, res) {
    if (path.length == letters.length) {
        // make a deep copy since otherwise we'd be append the same list over and over
        res.push(Array.from(path));
        return;
    }
    for (let i = 0; i < letters.length; i++) {
        // skip used letters
        if (used[i]) continue;
        // add letter to permutation, mark letter as used
        path.push(letters[i]);
        used[i] = true;
        dfs(letters, path, used, res);
        // remove letter from permutation, mark letter as unused
        path.pop();
        used[i] = false;
    }
}


console.log(permuteInter([1, 2, 3]));
console.log(permuteInter([0, 1]));
console.log(permuteInter([1]));
