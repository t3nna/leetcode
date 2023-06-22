const spiralOrder = function(matrix) {
    const res=[]
    let m= matrix.length
    let n = matrix[0].length
    const boundaries = [[0, n-1], [m-1, n-1], [m-1, 0], [1, 0]]
    function helper (l_t, r_t, r_b, l_b) {
        if(r_t[1]<l_t[1]){
            return
        }
        // if(r_b[1]<l_b[1]){
        //     return;
        // }
        // top
        for (let i = l_t[1]; i <= r_t[1]; i++) {
            res.push(matrix[r_t[0]][i])
        }
        if(r_b[0]<r_t[0]){
            return
        }
        // right
        for (let i = r_t[0] + 1; i <= r_b[0]; i++) {
            res.push(matrix[i][r_b[1]])
        }
        if(l_b[1]>r_b[1]){
            return
        }

        // bottom

        for (let i = r_b[1] - 1; i >= l_b[1]; i--) {
            res.push(matrix[l_b[0]][i])
        }
        if(l_t[0]>l_b[0]){
            return
        }

        // left
        for (let i = l_b[0] - 1; i >= l_t[0]; i--) {
            res.push(matrix[i][l_t[1]])
        }

        helper([l_t[0]+1, l_t[1]+1],[r_t[0]+1, r_t[1]-1],[r_b[0]-1, r_b[0]-1],[l_b[0]-1, l_b[1]+1])
    }
    helper(boundaries[3],boundaries[0], boundaries[1], boundaries[2])


    return res
};


// console.log(spiralOrder(matrix = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]));
// console.log(spiralOrder(matrix = [[1,2,3],[4,5,6],[7,8,9]]))
console.log(spiralOrder(matrix = [[2,3]]))