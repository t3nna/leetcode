function miniMaxSum(arr) {
    const sortedArray = arr.sort((a,b)=> a-b)
    const mini = sortedArray.slice(0,4).reduce((acc, curr)=> acc+curr, 0)
    const maxi = sortedArray.slice(1).reduce((acc, curr) => acc+curr, 0)
    console.log(mini, maxi)


}
function plusMinus(arr) {
    let positive=0, negative=0, zero=0;
    for(let i of arr){
        if (i===0){
            zero++
        }else if(i>0){
            positive++
        }else {
            negative++
        }
    }
    console.log(positive/arr.length)
    console.log(negative/arr.length)
    console.log(zero/arr.length)

}

plusMinus([1,5,3,0,-9])