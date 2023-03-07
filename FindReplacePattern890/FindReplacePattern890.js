/*const findAndReplacePattern = function (words, pattern) {
    let res = []
    const patternObj = {}

    for (let i = 0; i < pattern.length; i++) {
        if (patternObj[pattern[i]]) {
            patternObj[pattern[i]]++
            continue
        }
        patternObj[pattern[i]] = 1
    }
    const patternEntry = Object.entries(patternObj)
    const words2 = []
    for (let i = 0; i < words.length; i++) {

        let word = words[i]
        let wordObj = {}
        for (let i = 0; i < word.length; i++) {
            if (wordObj[word[i]]) {
                wordObj[word[i]]++
                continue
            }
            wordObj[word[i]] = 1
        }
        words2.push(Object.entries(wordObj))
    }

    console.log(patternEntry)
    console.log(words2)

    // compare Values
    for (let i = 0; i < words2.length; i++) {
        let word = words2[i]
        if (word.length === patternEntry.length) {
            let valid = true
            for (let j = 0; j < word.length; j++) {
                if (word[j][1] !== patternEntry[j][1]) {
                    valid = false
                    break
                }
            }
            valid && res.push(words[i])

        }
    }
    return res


};*/
/*
function findAndReplacePattern(words, pattern) {
    let matches = []
    for(const word of words){
        if(word.length !== pattern.length)continue
        let map = new Map(), set = new Set(), equals = true
        for(let i = 0; i < pattern.length; i++){
            if(map.has(pattern[i])){
                if(map.get(pattern[i]) !== word[i]){
                    equals = false
                    break
                }
            }else{
                if(set.has(word[i])){
                    equals = false
                    break
                }
                map.set(pattern[i], word[i])
                set.add(word[i])
            }
        }
        if(equals)matches.push(word)
    }
    return matches
}*/


var findAndReplacePattern = function(words, pattern) {
    let list = []
    for(let word of words){
        let p = new Array(26).fill(0)
        let w = new Array(26).fill(0)
        let same = true
        for(let i=0; i<word.length; i++){
            if(w[word.charCodeAt(i)] != p[pattern.charCodeAt(i)]){
                same = false
                break
            } else{
                w[word.charCodeAt(i)] = p[pattern.charCodeAt(i)] = i+1
            }
        }
        if(same)    list.push(word)
    }
    return list
};

console.log(findAndReplacePattern(["abc", "deq", "mee", "aqq", "dkd", "ccc"], "abb"));
console.log(findAndReplacePattern(["a", "b", "c"], "a"));