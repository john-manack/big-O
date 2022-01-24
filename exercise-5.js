// illustrating Rule 2 - Removing Constants

'use strict';

const array = new Array(107).fill('John')

const printFirstItemThenFirstHalfThenSayHi100Times = (items) => {
    console.log(items[0]); // O(1)

    const middleIndex = Math.floor(items.length / 2); // O(n / 2)
    let index = 0;// O(1)

    while (index < middleIndex) { // O(n)
        console.log(items[index]); // O(n)
        index ++;  // O(n)
    };

    for (let i = 0; i < 100; i++) {  // O(100)
        console.log('hi') // O(100)
    };
};

printFirstItemThenFirstHalfThenSayHi100Times(array);

// Big O = O(3n + (n / 2) + 202), simplified to O(n)

// In this example, we drop the constants ("3", "divided by 2", and "202"). So it simplifies to O(n)