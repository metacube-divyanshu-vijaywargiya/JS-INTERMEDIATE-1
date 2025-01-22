//method to find array of n fibonacci numbers
function fibonacciArrayMethod(n){
    const fibonacciArray = [];
    
    for (let i = 0; i < n; i++) {
        if (i === 0) {
            fibonacciArray.push(0);
        } else if (i === 1) {
            fibonacciArray.push(1);
        } else {
            fibonacciArray.push(fibonacciArray[i - 1] + fibonacciArray[i - 2]);
        }
    }
    
    return fibonacciArray;
}

//printing results array
console.log(fibonacciArrayMethod(6)); //output [0, 1, 1, 2, 3, 5 ]
console.log(fibonacciArrayMethod(5)); //output [0, 1, 1, 2, 3 ]
console.log(fibonacciArrayMethod(16)); //output [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610]