const mergeTwoLists = function(list1, list2) {
    let res = []
    let l1=0, l2=0


    while (l1<list1.length || l2<list2.length){
        if (list1[l1]<=list2[l2]){
            res.push(list1[l1])
            l1++
        }
        else{
            res.push(list2[l2])
            l2++
        }
    }
    return res

}

// console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]));
// console.log(mergeTwoLists([], []));
console.log(mergeTwoLists([], [0]));