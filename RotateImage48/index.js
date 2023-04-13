const rotate = function(matrix) {
    let matrixLen = matrix.length
    for (let i = 0; i < matrixLen; i++) {
        for (let j = i; j < matrixLen; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
           // [matrix[i][j], matrix[i][matrixLen-j-1]] =[matrix[i][matrixLen-j-1], matrix[i][j]]


        }

    }
    for (let i = 0; i < matrixLen; i++) {
        for (let j = 0; j < matrixLen/2; j++) {
           [matrix[i][matrixLen-j-1], matrix[i][j]] = [matrix[i][j], matrix[i][matrixLen-j-1]]
        }

    }
    return matrix
};

rotate([
    [1,2,3], // 2: 0, 1 => 1, 2; 3: 0, 2 => 2, 2
    [4,5,6],    // 4: 1, 0 => 0, 1
    [7,8,9]     // 8: 1, 2 => 0, 1
])
/*
* [
*   [7,4,1],
*   [8,5,2],
*   [9,6,3]
* ]
*
*
*
*
* */
/*
If rotated anticlockwise, element at (a,b) will be transfered
to the new coordinate of (s-b-1 ,a) with s being the length
or width of the matrix.We are trying to find out the in place
operations needed in order to transform the coordinate from
(a, b) to (s-b-1, a), with some fundumantal operations
' coordinate transformation characteristics in mind.
*/
