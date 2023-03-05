const findRelativeRanks = function(score) {
    const res = []
    const places =['Gold Medal', 'Silver Medal', 'Bronze Medal']
    const iterator = [...score.entries()].sort((a, b) => b[1]-a[1])
    console.log(iterator)
    for (let i = 0; i < iterator.length; i++) {
        if(i<3){
            res[iterator[i][0]]=places[i]
        }else {
            res[iterator[i][0]]=`${i+1}`
        }
    }


    return res
};

console.log(findRelativeRanks([5,4,3,2,1]))
console.log(findRelativeRanks([10,3,8,9,4]))