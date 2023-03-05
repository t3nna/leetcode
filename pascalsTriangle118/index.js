const generate = function (numRows) {
    let res = []
    for (let i = 0; i < numRows; i++) {
        res[i] = []
        let row = res[i]
        for (let j = 0, len = i + 1; j < len; j++) {
            if (res[i - 1] && res[i - 1].length > 1) {
                let prevRow = res[i - 1]
                // if (prevRow) {
                    let prevRowValue1 = prevRow[j - 1] ? prevRow[j - 1] : 0
                    let prevRowValue2 = prevRow[j] ? prevRow[j] : 0
                    row[j] = prevRowValue2 + prevRowValue1
                // }
                // row[j]=3

            } else {
                row[j] = 1

            }

        }


    }
    return res

};

const pascalSolution = function (numRows){
    let pascal = [];
    for (let i = 0; i < numRows; i++) {
        pascal[i] = [];
        pascal[i][0] = 1;
        for (let j = 1; j < i; j++) {
            pascal[i][j] = pascal[i-1][j-1] + pascal[i-1][j]
        }
        pascal[i][i] = 1;
    }
    return pascal;
}

console.log(generate(21));
console.log(generate(1));
console.log(generate(2));