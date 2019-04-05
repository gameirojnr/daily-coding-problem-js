/*This problem was asked by Google.

Given the root to a binary tree, implement serialize(root), which serializes the tree into a string, and deserialize(s), which deserializes the string back into the tree.

For example, given the following Node class

class Node:
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
The following test should pass:

node = Node('root', Node('left', Node('left.left')), Node('right'))
assert deserialize(serialize(node)).left.left.val == 'left.left'*/

class Node {
    constructor(val, left = 'none', right = 'none') {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

var tree = new Node(
    'root',
    new Node('left', new Node('left.left')),
    new Node('right')
);

// (VAL:LEFT:RIGHT)
/*
{
    val: "root",
    left: null,
    right: null,
}
*/

// (VAL:(VAL:LEFT:RIGHT):RIGHT)

/*
{
    val: "root",
    left: {
        val: "root",
        left: null,
        right: null,
    },
    right: null,
}
*/

function serializeNode(node) {
    if (node === 'none') {
        return null;
    }

    return {
        val: node.val,
        left: serialize(node.left),
        right: serialize(node.right)
    };
}

function serialize(root) {
    return JSON.stringify(serializeNode(root));
}

console.log(serialize(new Node('root', new Node('left'))));
/*
{
    val: "root",
    left: {
        val: "left",
        left: null,
        right: null,
    },
    right: null,
}
*/

console.log(
    serialize(
        new Node(
            'root',
            new Node('left', new Node('left.left')),
            new Node('right')
        )
    )
);
/*
{
    val: "root",
    left: {
        val: "left",
        left: {
            val: "left.left",
            left: null,
            right: null
        },
        right: null,
    },
    right: null,
}
*/

function deserialize(string) {
    if (string === 'null') {
        return 'none';
    }
    var node = JSON.parse(string);

    return new Node(node.val, deserialize(node.left), deserialize(node.right));
}

var tree = new Node(
    'root',
    new Node('left', new Node('left.left')),
    new Node('right')
);

console.log(
    'It should be true: ->',
    deserialize(serialize(tree)).left.left.val === 'left.left'
);
