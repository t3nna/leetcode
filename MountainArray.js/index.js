const validMountainArray = function (arr) {
    const peak = Math.max(...arr)
    let peakIndex = arr.indexOf(peak)
    if(peakIndex===0 || peakIndex ===arr.length-1){
        return false
    }

    let ascending = true
    let descending = true

    for (let i = 0; i < arr.length-1; i++) {
        if(i<peakIndex){
            if(arr[i]>=arr[i+1]){
                ascending = false
            }
        }
        else{
            if(arr[i]<=arr[i+1]){
                descending = false
            }
        }
    }

    return ascending && descending
};

// from inet
let validMountainArray01 = function(A) {
    if(A.length < 3) return false

    let isDecreasing = false
    let isIncreasing = false

    for(let i = 1, j = 0; i < A.length; i++, j++){

        if(A[j] < A[i] && !isDecreasing){
            isIncreasing = true
            continue
        }

        isDecreasing = true

        if(A[j] <= A[i]) return false

    }

    return isDecreasing && isIncreasing
};

console.log(validMountainArray([2, 1]))
console.log(validMountainArray([3, 5, 5]))
console.log(validMountainArray([0, 3, 2, 1]))