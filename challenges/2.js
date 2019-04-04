/** 
 * This problem was asked by Uber.

Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].

Follow-up: what if you can't use division?
*/

var given = [3, 2, 1];
var sum = 1;
var newArray = [];

for (let i = 0; i < given.length; i++) {
    sum = sum * given[i];
}

for (let i = 0; i < given.length; i++) {
    newArray[i] = sum / given[i];
}

console.log(newArray);
// [2,3,6]

// Follow up without division

var given = [3, 2, 1];
var left = Array(given.length).fill(1);
var right = Array(given.length).fill(1);
var prod = Array(given.length).fill(1);

//     [ 3,     2, 1]
// [1, 1*3, 1*3*2]

// Result do For [1 , 1*3, 1*3*2] = [1,3,6]
for (let index = 1; index < given.length; index++) {
    left[index] = given[index - 1] * left[index - 1];
}

//[ 3,    2,       1]
//       [2*1*1, 1*1, 1]

// Result do For [1*2 , 1*1, 1] = [2,1,1]
for (let index = given.length - 2; index >= 0; index--) {
    right[index] = given[index + 1] * right[index + 1];
}

// Initial Array [3, 2, 1]
// End Array [2*1, 3*1, 3*2]

// Left  [1,     1*3, 1*3*2]
// Right [2*1*1, 1*1, 1    ]
for (let index = 0; index < given.length; index++) {
    prod[index] = left[index] * right[index];
}

console.log(prod);
