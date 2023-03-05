function solution(A, B) {
    let lenSum = A+B
    if(lenSum<4){
        return 'NO'
    }
    let maxSide = lenSum%4


    lenSum-=maxSide
    let oneSide = lenSum/4
    while (Math.floor(A/oneSide)+Math.floor(B/oneSide) !==4){
        oneSide--


    }

    return oneSide

}

// console.log(solution(10, 21));
// console.log(solution(11, 13));
console.log(solution(1,8));
// console.log(solution(2, 1));