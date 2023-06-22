const findDuplicates = function (nums) {
    const counter = new Array(nums.length).fill(0)
    const res =[]
    console.log(counter)
    for (let i = 0; i < nums.length; i++) {
       counter[nums[i]-1]++
       if(counter[nums[i]-1] === 2){
           res.push(nums[i])
       }
    }
    return res
};



const findDuplicatesInternet = function(nums) {
    const duplicates = [];

    for (const currentNum of nums) {
        // Get the index that currentNum points to:
        // Note: we have to use Math.abs because the currentNum
        // could have been flipped:
        const otherIndex = Math.abs(currentNum) - 1;

        // If the number at otherIndex > 0 (hasn't been flipped):
        if (nums[otherIndex] > 0) {
            // Flip it to negative to mark that we've visited it:
            nums[otherIndex] = nums[otherIndex] * (-1);
        }
        // If the number at otherIndex < 0 (has been flipped):
        else {
            // We know that we've visited this currentNum before because
            // it leads us to the same number.
            duplicates.push(Math.abs(currentNum));
        }
    }
    return duplicates;
};

findDuplicatesInternet([4,3,2,7,8,2,3,1])
