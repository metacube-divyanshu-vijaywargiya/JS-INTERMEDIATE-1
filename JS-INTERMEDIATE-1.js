function findSecondLowestAndGreatest(arr) {
    if (arr.length < 2) {
        return "Array must contain at least two numbers.";
    }

    let lowest = Infinity;
    let secondLowest = Infinity;
    let greatest = -Infinity;
    let secondGreatest = -Infinity;

    for (let num of arr) {
        // Update lowest and second lowest
        if (num < lowest) {
            secondLowest = lowest;
            lowest = num;
        } else if (num < secondLowest && num !== lowest) {
            secondLowest = num;
        }

        // Update greatest and second greatest
        if (num > greatest) {
            secondGreatest = greatest;
            greatest = num;
        } else if (num > secondGreatest && num !== greatest) {
            secondGreatest = num;
        }
    }

    return [secondLowest, secondGreatest];
}

// Sample array
const sampleArray = [1, 2, 3, 4, 5];
const result = findSecondLowestAndGreatest(sampleArray);
console.log(result); // Output: [2, 4]
