// O(1) example

const boxes = [0,1,2,3,4,5];

function logFirstTwoBoxes (boxArray) {
    console.log(boxArray[0]); // O(1)
    console.log(boxArray[1]); // O(1)
}

logFirstTwoBoxes(boxes); // in total, runs O(2), but the function is still referred to as O(1) - "Constant time"