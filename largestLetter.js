// We are given a string S consisting of N letters. We want to find the alphabetically largest letter that
// occurs in both lowercase and uppercase in S, or decide that there is no such letter.

// Note: One letter is alphabetically larger than another if it appears later in the English alphabet. For
// example, "E" is alphabetically larger than "D", and "b" is alphabetically larger than "a".

// Write a function:
// function solution(S);
// that, given a string S consisting of one letter - the alphabetically largest letter that occurs in both
// lowercase and uppercase in S, or the string "NO" if there is no such letter.

// Examples:
// 1. Given S = "aaBabcDaA", your function should return "B". Letters occuring in both lowercase and uppercase are "A", "B" ("B" is alphabetically larger than "A").

// 2. Given S = "Codility", your function should return "NO". There is no letter that occurs in both lowercase and uppercase.

// 3. Given S = "WeTestCodErs", your function should return "T". Letters occuring in both lowercase and uppercase are "T", "E" ("T" is alphabetically larger).

// Write an efficient algorithm for the following assumptions:
// N is an integer within the range [1..200,000];
// string S consists only of the following characters: "a"-"z", "A"-"Z".

// function solution(S) {
//   let arr = S.split("");
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === arr[i].toUpperCase()) {
//       if (arr.includes(arr[i].toLowerCase())) {
//         result.push(arr[i]);
//       }
//     }
//   }
//   if (result.length === 0) {
//     return "NO";
//   } else {
//     return result.sort()[result.length - 1];
//   }
// }

// function solution(S) {
//   // Split the string into an array of chars
//   let arr = S.split('');

//   // Create an empty array to store the valid letters
//   // that occur in both lower and uppercase in S
//   let res = [];

//   // Loop through the chars
//   for (let i = 0; i < arr.length; i++) {
//     // Check if curr char is uppercase
//     if (arr[i] === arr[i].toUpperCase()) {
//       // If it is, check is input string includes
//       // the lowercase letter
//       if (arr.includes(arr[i].toLowerCase())) {
//         // It it does, add uppercase letter to the array
//         // of valid letters
//         res.push(arr[i]);
//       }
//     }
//   }

//   // Check for any valid letters
//   if (res.length === 0) {
//     // If not, return NO
//     return 'NO';
//   } else {
//     // If there are, sort the valid letters in alphabetical
//     // order and return the last one, which will be the largest
//     return res.sort()[res.length - 1];
//   }
// }

// I think this is an efficient algorithm for the given assumptions.
// Time complexity is O(n^2)
// It could be further optimized for larger inputs, using hashes, see below.

function solution(S) {
  // Create an empty object to store the occurrences of
  // each character in S
  let charCounts = {};

  // Loop through the characters in S and count the
  // occurrences of each character
  for (let i = 0; i < S.length; i++) {
    let char = S[i];
    if (charCounts[char]) {
      charCounts[char]++;
    } else {
      charCounts[char] = 1;
    }
  }

  // Create an empty array to store the valid letters
  // that occur in both lower and uppercase in S
  let res = [];

  // Loop through the charCounts object and check if
  // each uppercase letter has a corresponding
  // lowercase letter
  for (let char in charCounts) {
    if (char === char.toUpperCase()) {
      let lowerChar = char.toLowerCase();
      if (charCounts[lowerChar]) {
        res.push(char);
      }
    }
  }

  // Check for any valid letters
  if (res.length === 0) {
    // If not, return NO
    return 'NO';
  } else {
    // If there are, sort the valid letters in alphabetical
    // order and return the last one, which will be the largest
    return res.sort()[res.length - 1];
  }
}

// Time Complexity: O(N)
// Space Complexity: O(N)

console.log(solution("aaBabcDaA")); // B
console.log(solution("Codility")); // NO
console.log(solution("WeTestCodErs")); // T
