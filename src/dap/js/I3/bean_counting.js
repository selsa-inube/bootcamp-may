const countChar = (word, letter) => {
    let count = 0;
    for (let i = 0; i < word.length; i++) {
        if (word[i].toUpperCase() === letter.toUpperCase()){
            count++;
        }
    }
    return count;
};

const countBs = (word) => {
    return countChar(word, 'B');
};


console.log(countBs('BOB'));
console.log(countChar("kakKerlak", "k"));