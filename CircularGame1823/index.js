// Use queue data structure
// Iteratively dequeue(remove from front) k-1 elements from it
// Enqueue(push/append) the removed (k-1) elements to the back of the same array.
// Delete the kth element
// Now you have a que of length of (previous-queue-length -1)
// Repeat this until you have only one number left in your queue
// Return the number from your queue!


const findTheWinner = function (n, k) {
// Build queue
    let que = []
    for (let i = 1; i <= n; i++) {
        que.push(i)
    }

    while(que.length>1){
        let len = k-1
        while (len>0){
            que.push(que.shift())
            len--
        }
        que.shift()
    }

    return que.shift()



};


console.log(findTheWinner(5, 2));
console.log(findTheWinner(6, 5));
// console.log(findTheWinner(8, 8));