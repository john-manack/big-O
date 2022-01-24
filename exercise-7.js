// Illustrates O(n^2) - nested loops

// interview question:
// Log all pairs of array

const boxes = [1,2,3,4,5];

const logAllPairs = (intArray) => {
    intArray.forEach(ints => {
        for (let i = 0; i < intArray.length; i++) {
            console.log(`[${ints},${intArray[i]}]`);
        }
    })
};

logAllPairs(boxes);

// what is the big O? a good rule of thumb is that any time you see nested loops,
// the element (n) is multiplied by 2 (not added as we did in exercise-6.js)