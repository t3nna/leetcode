const merge = function(intervals) {
/*    for (let i = 0, len=intervals.length; i < len-1; i++) {
        let item = intervals[i]
        let nextItem = intervals[i+1]

        if (item[1]>=nextItem[0]){
            let minFirst = Math.min(item[0], nextItem[0])
            let minSecond = Math.max(nextItem[1], item[1])

            intervals[i]=[minFirst,minSecond]
            intervals.splice(i+1, 1)
            len--
        }
    }
    return intervals*/

    if(!intervals.length) return [];
    intervals.sort((a, b) => a[0] - b[0]);
    let res = []
    for (let i = 0, len=intervals.length; i <len-1 ; i++) {
        let item = intervals[i]
        for (let j = i+1; j <len ; j++) {
            let nextItem = intervals[j]

            if (between(nextItem[0], item[0], item[1]) || between(nextItem[1], item[0], item[1])){
                // intervals[i]=[minFirst,minSecond]
                let minFirst = Math.min(item[0], nextItem[0])
                let maxSecond = Math.max(nextItem[1], item[1])
                res.push([minFirst, maxSecond])

                intervals.splice(i+1, 1)
                intervals.splice(i, 1)

                len-=2
                break
            }
        }

    }
    res = [...res, ...intervals]

    return res

    function between(x, min, max) {
        return x >= min && x <= max;
    }
};

console.log(merge([[1, 3], [2, 6], [8, 10], [15, 18]])); //[[1,6],[8,10],[15,18]]
console.log(merge([[1,4],[4,5]])); //[[1,5]]
console.log(merge([[1,4],[0,4]])); //[[0,4]]