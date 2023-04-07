const merge = function (intervals) {
    intervals.sort((a, b) => a[0]-b[0])
    let intervalLen = intervals.length
    for (let i = 0; i < intervalLen-1; i++) {

        let curr = intervals[i]
        let next = intervals[i + 1]

        if(curr[1] > next[0] || curr[1] === next[0]){
            let temp = [curr[0], Math.max(next[1], curr[1])]
            intervals.splice(i, 2)
            intervals.splice(i,0, temp)
            intervalLen--
            i--

        }


    }
    return intervals
};

console.log(merge([[2, 3], [2, 6], [12, 10], [15, 18]])); //[[1,6],[8,10],[15,18]]
console.log(merge([[1, 4], [4, 5]])); //[[1,5]]
console.log(merge([[1, 4], [0, 4]])); //[[0,4]]
console.log(merge([[1,4], [2,3]]))
console.log(merge([[1,4],[0,2],[3,5]]))