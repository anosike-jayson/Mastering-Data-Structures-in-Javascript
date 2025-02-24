// // Reverse a string
// function reverseString(str) {
//     return str.split('').reverse().join('')
// }
// console.log(reverseString('hello'));

// //check for palindrome
// function isPalindrome(str) {
//     return str === str.split('').reverse().join('')
// }   
// console.log(isPalindrome('racecar'));

// //anagram checker
// function isAnagram(str1, str2) {
//     return str1.split('').sort().join('') === str2.split('').sort().join('')
// }   
// console.log(isAnagram('listen', 'silent'));

// //sorting a card deck
// function sortDeck(deck) {
//     return deck.sort((a, b) => a - b)
// }
// console.log(sortDeck([34, 67, 99, 23445, 1]));

// //mapping 
// let numbers = [1, 3, 4, 5, 7];
// const double = numbers.map(num => num * 2)
// console.log(double)
// for (let num of numbers){
//     console.log(num)
// }
// numbers.forEach(num => console.log(num))

function sortDeck(deck) {
  // Define the order of suits and ranks
  const suitOrder = { hearts: 1, diamonds: 2, clubs: 3, spades: 4 };
  const rankOrder = { "2": 2, "3": 3, "4": 4, "5": 5, "6": 6, "7": 7, "8": 8, "9": 9, "10": 10, J: 11, Q: 12, K: 13, A: 14 };

  return deck.sort((cardA, cardB) => {
    // Split cards into rank and suit
    const [rankA, suitA] = cardA.split("-");
    const [rankB, suitB] = cardB.split("-");

    // Compare suits first
    if (suitOrder[suitA] !== suitOrder[suitB]) {
      return suitOrder[suitA] - suitOrder[suitB];
    }

    // If suits are the same, compare ranks
    return rankOrder[rankA] - rankOrder[rankB];
  });
}

console.log(sortDeck([
  "10-hearts", "3-diamonds", "A-clubs", "2-spades",
  "J-hearts", "7-clubs", "K-spades", "5-diamonds"
]));

// // Example usage
// const unsortedDeck = [
//   "10-hearts", "3-diamonds", "A-clubs", "2-spades", 
//   "J-hearts", "7-clubs", "K-spades", "5-diamonds"
// ];

// console.log(sortDeck(unsortedDeck));

// function reverseStr(string){
//   for (i = string.length -1; i < 0; i++){
//     console.log(i)
//   }
//   return string[1];
// }
// console.log(reverseStr("hello"))

//fizz buzz 
function counter(){
  for (let i=1; i<= 100; i++){
    if (i % 3 === 0 && i % 5 === 0 ){
      console.log(i, `fizzbuzz`)
    } else if (i % 5 === 0){
      console.log(i, `buzz`)
    } else if (i % 3 === 0 ){ 
      console.log(i, `fizz`)
    } else {
      console.log(i)
    }
  }
}

console.log(counter());