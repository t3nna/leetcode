const groupThePeople = function (groupSizes) {
    const res = []
    const hash = {}

    for (let i = 0; i < groupSizes.length; i++) {
        let group = groupSizes[i]

        if(hash[group]){
           hash[group].push(i)
        }
        if(!hash[group]){
            hash[group]=[i]
        }

        if(hash[group].length === group){
            res.push(hash[group])
            delete hash[group]
        }
    }

    return res
};



console.log(groupThePeople([2,2,1,1,1,1,1,1]));
console.log(groupThePeople([3, 3, 3, 3, 3, 1, 3]));
