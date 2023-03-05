const fairCandySwap = function(aliceSizes, bobSizes) {
    const sum = [...aliceSizes, ...bobSizes]
    let candyAmount = sum.reduce( (acc, curr) => acc + curr, 0) / 2

    for (let i = 0; i < aliceSizes.length; i++) {
        let temp = [...aliceSizes]
        temp[i]=0
        let candyCount = temp.reduce((acc, curr) => acc+curr)

        for (let j = 0; j < bobSizes.length; j++) {
            if(candyCount+bobSizes[j] === candyAmount){
                return [aliceSizes[i], bobSizes[j]]
            }

        }

    }
    console.log(sum, candyAmount)
};

//formInternet

const fairCandySwap01 = function(aliceSizes, bobSizes) {
    const totalAliceSize = aliceSizes.reduce((prev, current) => prev + current, 0);
    const totalBobSize = bobSizes.reduce((prev, current) => prev + current, 0);

    const resolve = (array1, array2, difference) => {
        const hashmap = new Map();
        for (let i = 0; i < array1.length; i++) {
            hashmap.set(array1[i], i);
        }

        for (let i = 0; i < array2.length; i++) {
            if (hashmap.has(array2[i] + difference/2)) return [array2[i] + difference/2, array2[i]];
        }
    }

    return resolve(aliceSizes, bobSizes, totalAliceSize - totalBobSize);
};


console.log(fairCandySwap01([1,1], [2,2]))
// console.log(fairCandySwap01([1,2], [2,3]))
// console.log(fairCandySwap01([2],  [1,3]))