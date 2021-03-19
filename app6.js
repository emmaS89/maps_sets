// Maps & Sets

// Example 1
// What does the following code return?

// new Set([1,1,2,2,3,4])

// Solution 1

console.log(new Set([1,1,2,2,3,4])); // Set(4) {1, 2, 3, 4}

// *******************************************

// Example 2
// Quick Question #2
// What does the following code return?

// [...new Set("referee")].join("")

// Solution 2

console.log( [...new Set("referee")].join("")); // ref

// **********************************************

// Example 3
// Quick Questions #3
// What does the Map m look like after running the following code?

// let m = new Map();
// m.set([1,2,3], true);
// m.set([1,2,3], false);

// Solution 3

let m = new Map();
console.log(m.set([1,2,3], true)); // Map(1) {Array(3) => true}
console.log(m.set([1,2,3], false)); // Map(2) {Array(3) => true, Array(3) => false}

// **************************************

// Example 4
// hasDuplicate
// Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate

// hasDuplicate([1,3,2,1]) // true
// hasDuplicate([1,5,-1,4]) // false

// Solution 4

// OPTION 1
function hasDuplicate(array) {
  return new Set(array).size !== array.length
}

console.log(hasDuplicate([1,3,2,1])) // true
console.log(hasDuplicate([1,5,-1,4])) // false

// OPTION 2
// const hasDuplicate = array => new Set(array).size !== array.length

// console.log(hasDuplicate([1,3,2,1])) // true
// console.log(hasDuplicate([1,5,-1,4])) // false

// *********************************************

// Example 5

// vowelCount
// Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.

// vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
// vowelCount('Colt') // Map { 'o' => 1 }

// Solution 5
function isVowel(character){
  return 'aeiou'.includes(character);
}

function vowelCount(string){
  const vowelMap = new Map();
  for(let character of string){
    let lowerCaseChar = character.toLowerCase()
    if(isVowel(lowerCaseChar)){
      if(vowelMap.has(lowerCaseChar)){
        vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1);
      } else {
        vowelMap.set(lowerCaseChar, 1);
      }
    }
  }
  return vowelMap;
}

console.log(vowelCount('awesome') ) // Map(3) {"a" => 1, "e" => 2, "o" => 1}
console.log(vowelCount('Colt')) // Map(1) {"o" => 1}