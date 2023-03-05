const isPalindrome = function(s) {
    s = s.replace(/[^A-Za-z 0-9 \.,\?""!@#\$%\^&\*\(\)-_=\+;:<>\/\\\|\}\{\[\]`~]*/g, '');
    console.log(s)

};

isPalindrome("A man, a plan, a canal: Panama")
isPalindrome("race a car")
isPalindrome(" ")