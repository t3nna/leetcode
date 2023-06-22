const strStr = function(haystack, needle) {
    for (let i=0; i<haystack.length; i++){
        if(haystack.charAt(i) === needle.charAt(0)){
            for (let j = 0; j < needle.length; j++) {
               if(haystack.charAt(i+j) === needle.charAt(j)){
                   if(j===needle.length-1){
                       return i
                   }
                   continue
               }
               break
            }
        }
    }
    return -1
};

console.log(strStr('leetcode', 'bet'))