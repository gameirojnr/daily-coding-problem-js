/*
This problem was asked by Stripe.

Given an array of integers, find the first missing positive integer in linear time and constant space. 
In other words, find the lowest positive integer that does not exist in the array. 
The array can contain duplicates and negative numbers as well.

For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.

You can modify the input array in-place. 
*/

var input = [1, 2, 0];
var output = 3;

var input1 = [3, 4, -1, 1];
var output1 = 2;

var input2 = [3, 4, -1, 1, 2];
var output2 = 5;


function process(array) {
    function findLowestPositive(array){
        return array.reduce(function (previousLowestNumber, currentLowestValue) {
            const isLower = currentLowestValue > -1 && currentLowestValue < previousLowestNumber;

            return isLower ? currentLowestValue : previousLowestNumber;
        }, array[0])
    }

    var result = findLowestPositive(array) + 1;

    // If exists the the lowest positive plus 1 in the array lets find the greatest and add +1 
    if(array.includes(result)){
        result = Math.max.apply(null, array) + 1;
    }
    return result;
}

process([1, 2, 0]);
process([3, 4, -1, 1]);
process([3, 4, -1, 1, 2]);

// Other Approach should filter only positive numbers 
