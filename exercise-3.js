// testing knowledge of O(1) and O(n)
// each notation is added up line by line, and result is at the bottom

'use strict';

const funChallenge = (input) => {
    let a = 10; // O(1)
    a = 50 + 3; // O(1)

    for (let i = 0; i < input.length; i++) { // O(n)
        anotherFunction(); // O(n)
        let stranger = true; // O(n)
        a++; // O(n)
    }

    return a; // O(1)
}

// result = 3 + n + n + n + n
// BIG O(3 + 4n)
// but the above gets simplified to O(n)