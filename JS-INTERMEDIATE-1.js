function findSecondLowestAndGreatest(arr) {
    if (arr.length < 2) {
        return "Array must contain atleast two numbers.";
    }

    let lowest = Infinity;
    let secondLowest = Infinity;
    let greatest = -Infinity;
    let secondGreatest = -Infinity;

    for (let i = 0 ; i < arr.length ; i++) {
        // Update lowest and second lowest
        if (arr[i] < lowest) {
            secondLowest = lowest;
            lowest = arr[i];
        } else if (arr[i] < secondLowest && arr[i] !== lowest) {
            secondLowest = arr[i];
        }

        // Update greatest and second greatest
        if (arr[i] > greatest) {
            secondGreatest = greatest;
            greatest = arr[i];
        } else if (arr[i] > secondGreatest && arr[i] !== greatest) {
            secondGreatest = arr[i];
        }
    }

    return [secondLowest, secondGreatest];
}

// Input sample array
const inputArray = [1, 2, 3, 75, 5];
const result = findSecondLowestAndGreatest(inputArray);
console.log(result); // Output: [2, 4]
