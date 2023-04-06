const partitionLabels = function(s) {
    let res = []
    // let lastIndexCurrentLetter = s.lastIndexOf(s[0])
    let pointer = s.lastIndexOf(s[0])
    for (let i = 0; i < s.length; i++) {
       if(s.lastIndexOf(s[i])>pointer){
          pointer = s.lastIndexOf(s[i])
       }
       if(i===pointer){
           res.push(pointer+1)
       }
    }
    for (let i = res.length-1; i>= 1; i--) {
      res[i]=res[i]-res[i-1]
    }
   return res
};

console.log(partitionLabels("ababcbacadefegdehijhklij"))
console.log(partitionLabels("eccbbbbdec"))