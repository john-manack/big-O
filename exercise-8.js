// illustrates Rule 4: Drop Non Dominants
// in other words, we care about the most important term

const boxes = [1,2,3,4,5]

const printAllNumbersThenAllPairSums = (numbers) => {
    console.log('these are the numbers');
    numbers.forEach(number => console.log(number));

    console.log('and these are their sums:');
    numbers.forEach(firstNumber => {
        numbers.forEach(secondNumber => {
            console.log(firstNumber + secondNumber);
        });
    });
};

printAllNumbersThenAllPairSums(boxes)

// Big O = O(n + n^2)
// therefore we drop the non dominant n, and the answer is:
// O(n^2)