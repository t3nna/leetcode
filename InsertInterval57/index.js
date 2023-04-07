const insert = function (intervals, newInterval) {
    let [start, end] = newInterval
    let left=[], right = []

    for (const interval of intervals){
        const [first, last] = interval

        if(last < start) left.push(interval)

        else if(end< first) right.push(interval)

        else{
            start = Math.min(start, first)
            end = Math.max(end, last)

        }
    }
    return [...left, [start, end], ...right]
   /* intervals.splice(0, 0, newInterval)
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
    return intervals*/
/*    let intervalsLen = intervals.length
    for (let i = 0; i < intervalsLen - 1; i++) {
        let start = intervals[i][0]
        let finish = intervals[i][1]

        let next = intervals[i + 1]

        if (newInterval[0] >= start && newInterval[1] <= finish) {
            return intervals
        }
        if ((newInterval[0] >= start && newInterval[1] < next[0])) {
             finish = newInterval[1]
        }
         if(newInterval[0]>= start && newInterval[0]<=finish ){

        }
    }
    return intervals*/
};


console.log(insert(intervals = [[1, 3], [6, 9]], newInterval = [2, 5])) //[[1,5],[6,9]]
console.log(insert(intervals = [[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], newInterval = [4, 8])) // [[1,2],[3,10],[12,16]]