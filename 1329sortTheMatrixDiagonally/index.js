const diagonalSort = function(mat) {
let m = mat.length
    let n = mat[0].length
    let res = []
    for (let i = 0; i < m; i++) {

        for (let j = 0; j < n; j++) {

        }
    }


    return res
};

console.log(diagonalSort(
    [
        [3,3,1,1],
        [2,2,1,2],
        [1,1,1,2]
    ]
)) //[[1,1,1,1],[1,2,2,2],[1,2,3,3]]
console.log(diagonalSort(
    [
        [5,17,4,1,52,7],
        [11,11,25,45,8,69],
        [14,23,25,44,58,15],
        [22,27,31,36,50,66],
        [84,28,75,33,55,68]
    ]
))