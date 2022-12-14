// Tree Constructor

// Have the function TreeConstructor(strArr) take the array of strings stored in strArr, which will contain pairs of integers in the following format: (i1, i2), where i1 represents a child node in a tree and the second integer i2 signifies that it is the parent of i1.

// For example: if strArr is["(1,2)", "(2,4)", "(7,2)"], then this forms the following tree:
// 4 /  \ 2   7 /  \ 1

// which you can see forms a proper binary tree.Your program should, in this case, return the string true because a valid binary tree can be formed.If a proper binary tree cannot be formed with the integer pairs, then return the string false.All of the integers within the tree will be unique, which means there can only be one node in the tree with the given integer value.

//   Examples
// Input: ["(1,2)", "(2,4)", "(5,7)", "(7,2)", "(9,5)"]
// Output: true
// Input: ["(1,2)", "(3,2)", "(2,12)", "(5,2)"]
// Output: false


function treeConstructor(strArr) {
  // Initialize empty object
  const counts = {};

  // Iterate over strArr from beginning to end
  for (let i = 0; i < strArr.length; i++) {
    // Use a regex to match any digit and store it in nums
    let nums = strArr[i].match(/[0-9]/g);
    // Increment the value in the counts object at key 'nums[0]' by 1
    // If there is no value, initialize it to 0
    counts[nums[0]] = (counts[nums[0]] || 0) + 1;
    // // Increment the value in the counts object at key 'nums[1]' by 1
    // If there is no value, initialize it to 0
    counts[nums[1]] = (counts[nums[1]] || 0) + 1;

    // If key is >= 4 return false
    if (counts[nums[0]] >= 4 || counts[nums[1]] >= 4) {
      return false;
    }
  }

  return true;
}

// console.log(treeConstructor(readline()));
console.log(treeConstructor(["(1,2)", "(2,4)", "(5,7)", "(7,2)", "(9,5)"])); // True
console.log(treeConstructor(["(1,2)", "(3,2)", "(2,12)", "(5,2)"])); // False



// function TreeConstructor(strArr) {
//   var counts = {};
//   for (i = 0; i < strArr.length; i++) {
//     var nums = strArr[i].match(/[0-9]/g);
//     counts[nums[0]] = (counts[nums[0]] || 0) + 1;
//     counts[nums[1]] = (counts[nums[1]] || 0) + 1;
//   }
//   for (j in counts) {
//     if (counts[j] >= 4) {
//       return false;
//     }
//   }
//   return true;
// }


// function treeConstructor(strArr) {
//   var counts = {};
//   for (i = 0; i < strArr.length; i++) {
//     var nums = strArr[i].match(/[0-9]/g);
//     counts[nums[0]] = (counts[nums[0]] || 0) + 1;
//     counts[nums[1]] = (counts[nums[1]] || 0) + 1;
//   }

//   for (j in counts) {
//     if (counts[j] >= 4) {
//       return false;
//     }
//   }
//   return true;
// }
