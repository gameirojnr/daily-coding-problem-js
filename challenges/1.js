// This problem was recently asked by Google.

// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

// Bonus: Can you do this in one pass?

var given = [10, 15, 3, 7];
var k = 17;
var knownNumbers = [];
var result = false;

for (let index = 0; index < given.length; index++) {
    const currentElement = given[index];
    const existsInKnowNumber = knownNumbers.find(
        elem => elem === currentElement
    );

    if (existsInKnowNumber) {
        result = true;
        break;
    } else {
        const subtraction = k - currentElement;
        knownNumbers = knownNumbers.concat(subtraction);
    }
}

console.log(result);
