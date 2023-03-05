function solution(N) {
    let splitN = splitNumber(N)
    let res = []
    for (let i = 0; i < splitN.length; i++) {
        if(splitN[i] === 5){
            let temp = [...splitN]
            temp.splice(i, 1)

            res.push(combineNumber(temp))
        }
    }

    let maxValue = Math.max(...res)
    if(maxValue===-0){
        return 0
    }
    return  maxValue

}

function splitNumber(n){
    return Array.from(String(n), Number)
}

function combineNumber(n){
    if(isNaN(n[0])){
        n.splice(0,1)
    return -(Number(n.join('')))
    }
    return Number(n.join(''))


}
combineNumber([1,5,3,3])
//
console.log(solution(15958));
console.log(solution(-5859));
console.log(solution(-5000));