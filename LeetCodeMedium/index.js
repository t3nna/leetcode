//A decimal number is called deci-binary if each of its digits is either
// 0 or 1 without any leading zeros. For example, 101 and 1100
// are deci-binary, while 112 and 3001 are not.
//
// Given a string n that represents a positive decimal integer,
// return the minimum number of positive deci-binary numbers
// needed so that they sum up to n.
//Input: n = "32"
// Output: 3
// Explanation: 10 + 11 + 11 = 32
//Input: n = "82734"
// Output: 8

function deciBinary (n){
    while (n>1) {

        if (n % 10 === 0 || n % 10 === 1) {
            n = Math.floor(n/10)
        }
        else return false
    }

    return n
}

console.log(deciBinary(1100111))
console.log(deciBinary(101111011111010))

const minPartitions = function(n){
    let res = 0

    return res
}

// console.log(minPartitions(32))//3
// console.log(minPartitions(82734))//8

