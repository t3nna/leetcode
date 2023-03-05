/*const isMonotonic = function (nums) {
    let ascending = [...nums].sort((a, b) => b - a)
    let descending = [...nums].sort((a, b) => a - b)

    console.log(ascending)
    console.log(descending)
    console.log(nums)
    return compareArrays(nums, ascending) || compareArrays(nums, descending);



};

const compareArrays = (a, b) => {
    return JSON.stringify(a) === JSON.stringify(b)
}*/
const isMonotonic = function (nums) {
    let ascending = true
    let descending = true
    for (let i = 0; i < nums.length-1; i++) {
        if(nums[i]>nums[i+1]){
            descending=false
        }
        if(nums[i]<nums[i+1]){
            ascending=false
        }
    }
    return ascending || descending
}



console.log(isMonotonic([1, 2, 2, 3]));
console.log(isMonotonic([6, 5, 4, 4]));
console.log(isMonotonic([1, 3, 2]));