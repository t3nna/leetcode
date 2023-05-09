const numIslands = function(grid) {
    let res = 0
    for (let i = 0; i <grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if(grid[i][j] === '1'){
                res++
                helper(grid, i, j)
            }
        }

    }
    return res
};

function helper(grid, row, column){
    // base condition: if all sides == zero return
    // if( grid[row][column] === undefined) return
    if(row<0 || row>grid.length-1 || column<0 || column>grid[0].length-1)
        return;
    if(grid[row][column] === '0' ){
        return
    }
    grid[row][column]='0'
    helper(grid, row+1, column)
    helper(grid, row-1, column)
    helper(grid, row, column+1)
    helper(grid, row, column-1)
}

// console.log(numIslands(
//     [
//         ["1", "1", "1", "1", "0"],
//         ["1", "1", "0", "1", "0"],
//         ["1", "1", "0", "0", "0"],
//         ["0", "0", "0", "0", "0"]
//     ]
// ));
console.log(numIslands([
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"]
    ]
));