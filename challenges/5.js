/**

This problem was asked by Jane Street.

cons(a, b) constructs a pair, and car(pair) and cdr(pair) returns the first and last element of that pair. 

For example, car(cons(3, 4)) returns 3, and cdr(cons(3, 4)) returns 4.

Given this implementation of cons:

def cons(a, b):
    def pair(f):
        return f(a, b)
    return pair


Implement car and cdr.
 */

function cons(a, b) {
    function pair(func) {
        return func(a, b);
    }

    return pair;
}

// const cons = (a,b) => func => func(a,b);

// car(cons(3, 4))

function car(cons) {
    function printFirsElement(a, _) {
        console.log(a);
        return a;
    }

    return cons(printFirsElement);
}

// cdr(cons(3, 4))

function cdr(cons) {
    function printLastElement(_, b) {
        console.log(b);
        return b;
    }

    return cons(printLastElement);
}
