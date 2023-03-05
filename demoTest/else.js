function solution(S) {

    // find the length of a S
    const len = S.length;



    // loop through half of the S
    for (let i = 0; i < len / 2; i++) {

        // check if first and last S are same
        if (S[i]==='?' || S[len - 1 - i]==='?') {

            if(S[i]==='?'){
                S[i] = S[len - 1 -i]
            }
            if(S[len - 1 -i] ==="?"){
                 S[len - 1 -i] = S[i]
            }
        }
    }

    console.log(S)
    return 'It is a palindrome';
}

solution("?ab??a")