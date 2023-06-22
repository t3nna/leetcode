const combine = function(n, k) {
    let res = []

    function helper(A, idx=1 ){
        if(A.length===k){
            res.push(A)
            return
        }
        for (; idx <= n; idx++) {
            helper([...A, idx], idx+1)
        }
    }
    helper([], 1)
    return res
};

console.log(combine(4, 3));
console.log(combine(5, 3))
