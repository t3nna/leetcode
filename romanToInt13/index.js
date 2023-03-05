const romanToInt = function (s) {
    let res = 0
    const values = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
        'IV': 4,
        'IX': 9,
        'XL': 40,
        'XC': 90,
        'CD': 400,
        'CM': 900
    }
    // for (let i in s){
    for (let i = 0; i < s.length; i++) {
        let double
        if (s[i]) {
            double = s[i] + s[i + 1]
            if (values[double]) {
                res += values[double]
                i++
                console.log('additional value ' + values[double])
            } else {
                res += values[s[i]]
            }
        }
    }
    return res
};

function romanToIntLeet(s) {
    let symbols = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    };

    let value = 0;
    for (let i = 0; i < s.length; i += 1) {
        symbols[s[i]] < symbols[s[i + 1]]
            ? value -= symbols[s[i]]
            : value += symbols[s[i]]
    }
    return value
}

romanToInt('III')
romanToInt('LVIII')
console.log(romanToInt('MCMXCIV'));
console.log(romanToIntLeet('MCMXCIV'));
