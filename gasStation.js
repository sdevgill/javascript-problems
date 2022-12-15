// Gas Station Problem

// There is a queue of N cars waiting at a gas station along a one lane road. The station is M miles away from the starting point. The station has unlimited supply of fuel but there are three gas pumps. Each pump has a different speed of filling the tank. Given the amount of fuel that car i needs to travel to the next gas station (array A of length N) and the speeds of the three pumps (X, Y, Z) in miles per hour, return the earliest time when the last car can start its journey to the gas station.

// For example, you are given N = 5, X = 7, Y = 11, Z = 3 and array A such that:
// A[0] = 2
// A[1] = 8
// A[2] = 4
// A[3] = 3
// A[4] = 2

// The function should return 8, as explained above.

// The earliest time when the last car can start its journey to the gas station is 8. The first car will be filled in 2/7 hours, the second car will be filled in 8/11 hours and the third car will be filled in 4/3 hours. The fourth car will be filled in 3/7 hours and the fifth car will be filled in 2/3 hours. The last car will be filled in 2/7 hours.

// Write an efficient algorithm for the following assumptions:
// N is an integer within the range [1..100,000];
// Each element of array A is an integer within the range [1..1,000,000,000];
// X, Y, Z are integers within the range [1..1,000,000,000];

function solution(A, X, Y, Z) {
  // Constant N equals to the length of array A
  const N = A.length;
  // Variable max equals to the sum of all elements of array A
  // Variable min equals to the maximum element of array A
  let max = 0;
  let min = 0;

  // Loop through the array A and update the value of max and min
  // This effectively sets 'max' to the sum of all elements of array A
  // and 'min' to the maximum element of array A
  for (let i = 0; i < N; i++) {
    max += A[i];
    min = Math.max(min, A[i]);
  }

  // Variable res to store the result of the function
  let res = -1;

  // Main loop for the binary search
  // While loop will run until min is less than or equal to max
  // The code first computes the mid value of min and max and assign it to variable mid
  // It then computes the time to complete the task and assign it to variable time
  while (min <= max) {
    const mid = Math.floor((min + max) / 2);
    const time = Math.ceil(A[0] / X) + Math.ceil((mid - A[0]) / Y);
    // If time is less than or equal to mid, then we update the value of result to mid
    // and decrease the value of max by 1
    // Else, we increase the value of min by 1
    if (time <= mid) {
      res = mid;
      max = mid - 1;
    } else {
      min = mid + 1;
    }
  }

  return res;
}

console.log(solution([2, 8, 4, 3, 2], 7, 11, 3)); // 8
console.log(solution([5], 4, 0, 3)); // -1
