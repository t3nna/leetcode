const sortTheStudents = function(score, k) {
    // for(let student of score){
    //
    // }
    score.sort((a,b) => b[k]-a[k])

    return score
};

console.log(sortTheStudents([[10,6,9,1],[7,5,11,2],[4,8,3,15]], 2)); //[[7,5,11,2],[10,6,9,1],[4,8,3,15]]
console.log(sortTheStudents([[3,4],[5,6]], 0)); //[[5,6],[3,4]]