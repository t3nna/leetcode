const countPoints = function (points, queries) {
    let res = []
    for (let circle of queries) {
        let x1 = circle[0]
        let y1 = circle[1]

        let pointsCount=0

        for (let i = 0; i < points.length; i++) {
            let x2 = points[i][0]
            let y2 = points[i][1]
            let disBetweenPoints = findDistance(x1, y1, x2, y2)
            if(disBetweenPoints<= circle[2]){
                pointsCount++
            }
        }
        res.push(pointsCount)
    }

    return res

};

function findDistance(x1, y1, x2, y2) {
    return Math.sqrt(((x2 - x1)**2) + ((y2 - y1)**2))
}


console.log(countPoints([[1, 1], [2, 2], [3, 3], [4, 4], [5, 5]], [[1, 2, 2], [2, 2, 2], [4, 3, 2], [4, 3, 3]]));
console.log(countPoints([[1, 3], [3, 3], [5, 3], [2, 2]], [[2, 3, 1], [4, 3, 1], [1, 1, 2]]));