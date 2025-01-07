// Reverse a string
function reverseString(str) {
    return str.split('').reverse().join('')
}
console.log(reverseString('hello'));

//check for palindrome
function isPalindrome(str) {
    return str === str.split('').reverse().join('')
}   
console.log(isPalindrome('racecar'));

//anagram checker
function isAnagram(str1, str2) {
    return str1.split('').sort().join('') === str2.split('').sort().join('')
}   
console.log(isAnagram('listen', 'silent'));

//sorting a card deck
function sortDeck(deck) {
    return deck.sort((a, b) => a - b)
}
console.log(sortDeck([34, 67, 99, 23445, 1]));
