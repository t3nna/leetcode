const deckRevealedIncreasing = function (deck) {
    deck.sort((a, b) => b - a)
    const res = []
    res.push(deck[0])
    for (let i = 1; i < deck.length; i++) {
        const temp = res.splice(res.length-1, 1)
        res.unshift(...temp)
        res.unshift(deck[i])



    }
    return res
};

console.log(deckRevealedIncreasing(deck = [17, 13, 11, 2, 3, 5, 7]))
