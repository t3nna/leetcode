const pivotArray = function(nums, pivot) {
   const res = []
    let lessCounter = 0
    for (let i = 0; i < nums.length; i++) {
        if(nums[i]<pivot){
            res.splice(lessCounter, 0, nums[i])
            lessCounter++
        }
        else if(nums[i]>pivot){
           res.push(nums[i])
        }
        else{
            res.splice(lessCounter, 0, nums[i])
        }

    }
    return res
};

console.log(pivotArray(nums = [9,12,5,10,14,3,10], pivot = 10))

// -------------------

const pivotArray02 = (nums, pivot) => {
    let N = nums.length;
    let output = [];

    // pointers to iterate array from start/end
    let i = 0;
    let j = N - 1;

    // pointers to save elements in correct spot
    let L = 0;
    let R = N - 1;

    // select elements starting from start and end of array
    // add elements to correct spot if conditions are met.
    while (i < nums.length) {
        if (nums[i] < pivot) output[L++] = nums[i];
        if (nums[j] > pivot) output[R--] = nums[j];

        i++;
        j--;
    }

    // fill middle with pivot
    while (L <= R) {
        output[L++] = pivot;
    }

    return output;
};