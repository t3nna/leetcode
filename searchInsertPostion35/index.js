const searchInsert = function (nums, target) {
    if (target < nums[0]) {
        return 0
    }
    if (target > nums[nums.length - 1]) {
        return nums.length
    }
    if (nums.length===2){
        if (target>nums[0]&&target<nums[1]){
            return 1
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (target === nums[i]) {
            return i
        }
        if (i>0 && i<nums.length-1){
            if (target>nums[i-1]&&target<nums[i]){
                return i
            }
            if (target>nums[i]&&target<nums[i+1]){
                return i+1
            }

        }

    }
}

const binary = function(nums, target ){
    let start=0, finish = nums.length;
    while(start<finish){
        let mid = start + Math.floor((finish-start)/2) // start + because floor it's center of the certain part of the arr
        if(target > nums[mid]){
            start = mid+1
        }
        else{
            finish=mid
        }

    }
    return start


}

console.log(binary([1, 3, 5, 6,9], 2));
// console.log(searchInsert([1, 3], 2));
// console.log(binary([1, 3,5], 4));