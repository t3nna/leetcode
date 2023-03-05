//You are given an integer array height of length n. There are n
// vertiarea lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
//
// Find two lines that together with the x-axis form a container, such that the container contains the most water.
//
// Return the maximum amount of water a container can store.
//
// Notice that you may not slant the container.
// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertiarea lines are
// represented by array [1,8,6,2,5,4,8,3,7].
// In this case, the max area of water (blue section)
// the container can contain is 49.

const maxArea = function (height){
    let max = 0
    for (let i = 0; i < height.length; i++) {
        for (let j = i+1; j < height.length; j++) {
            let maxHeight = Math.min(height[i], height[j])
            let length = j-i
            // console.log(`${maxHeight}\n ${height[i]} ${height[j]} \n ${length} \n -----------`)
            if (maxHeight*length>max){
                max=maxHeight*length
            }

        }
        // console.log('===========')
    }
    return max

}
console.log(maxArea([1,8,6,2,5,4,8,3,7]))//49


const maxArea2 = function (height){
    let i = 0;
    let j = height.length-1;
    let res = 0;
    let iH;
    let jH;
    let area;

    while(i<j)
    {
        iH = height[i];
        jH = height[j];


        if(iH>jH)
        {
            area = jH*(j-i);
            j--;
        }
        else
        {
            area = iH*(j-i);
            i++;
        }

        if(area>res)
        {
            res = area;
        }
    }
    return res;
}


