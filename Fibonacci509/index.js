const fib = function (n) {
    if (n === 0) {
        return 0
    }
    if (n === 1) {
        return 1
    }
    return fib(n - 1) + fib(n - 2)
};

console.log(fib(10));
console.log(fib(4));
console.log(fib(2));

const reverseString = (str) => {
    if (str === '') {
        return ''
    }
    return reverseString(str.substring(1)) + str.charAt(0)
}

console.log(reverseString('Ivan'));

function isPalindrome(input) {
    if (input.length === 0 || input.length === 1) {
        return true
    }

    if (input.charAt(0) === input.charAt(input.length - 1)) {
        return isPalindrome(input.substring(1, input.length - 1))
    }

    return false
}

console.log(isPalindrome('kayak'));
console.log(isPalindrome('kaya'));

function sumNatural(num) {
    if (num === 0) {
        return num
    }

    return sumNatural(num - 1) + num

}

console.log(sumNatural(10));

function decimalToBinary(decimal, res) {
    if (decimal === 0) {
        return res
    }

    res = decimal % 2 + res
    return decimalToBinary(decimal / 2, res)
}

// binary search recursive

function binarySearch (A, left=0, right = A.length, x){
    if (left>right){
        return -1
    }

    let mid = (left+right) / 2

    if(x===A[mid]){
        return mid
    }

    if(x<A[mid])
        return binarySearch(A, left, mid-1, x)

    return binarySearch(A, mid-1, right, x)
}

let _ = undefined
console.log(binarySearch([1, 4, 5, 6, 7, 11, 22, 33, 44, 55], _, _, 33));

// fibonacci

function fib(n){
    if((n===0) || (n===1)){
        return n
    }

    else
        return fib(n-1) - fib(n-2)
}

// merge sort

function mergeSort(data, start, end){
    if(start < end){
        let mid = (start + end ) / 2
        mergeSort(data, start, mid)
        mergeSort(data, mid+1, end)
        merge(data, start, mid, end)
    }
}

function merge( data, start, mid, end){
    let temp = []

    let i = start, j = mid + 1, k = 0

    // while both sub-array have values, then try and merge them in sorted order
    while (i<=mid && j <= end){
        if(data[i] <= data[j]){
            temp[k] = data[i]
            i++
            k++
        }else{
            temp[k++] = data[j++]
        }
    }

    // add the rest of the values from the left sub-array into the result

    while(i<=mid){
        temp[k] = data[i]
        k++; i++;
    }

    // add the rest of the values from the right sub-array into the result
    while(j<= end){
        temp[k] = data[j]
        k++; j++;

    }

    for(let i = start; i <= end; i++){
        data[i] = temp[i-start]
    }
}