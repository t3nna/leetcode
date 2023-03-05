const arrayRankTransform = function(arr) {
    const iterator = [...arr.entries()].sort((a, b) => a[1]-b[1])
    let res = []

    for (let i = 0; i < iterator.length; i++) {
        iterator[i][2] = i+1
    }
    for (let i of iterator){
        console.log(i)
        res[i[0]] = i[2]
    }
    console.log()
    return res
};

console.log(arrayRankTransform([40, 10, 20, 30]));
arrayRankTransform([100,100,100])
arrayRankTransform([37,12,28,9,100,56,80,5,12])