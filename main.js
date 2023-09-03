// A pangram is a string that contains every letter of the alphabet. Given a sentence determine whether it is a pangram in the English alphabet. Ignore case. Return either pangram or not pangram as appropriate.

function pangrams(s) {
    // Write your code here
    let onlyLetters = s.replace(/[.,!?\s]/g, '')
    onlyLetters = onlyLetters.toUpperCase()
    let letters = []
    for(let i of onlyLetters){
        if(letters.indexOf(i) === -1) letters.push(i)
    }
    if(letters.length === 26) return 'pangram'

    return 'not pangram'
}