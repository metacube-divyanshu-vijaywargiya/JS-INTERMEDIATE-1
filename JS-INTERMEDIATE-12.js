//Method to check type of values
function toCompareType(value1, value2) {
    return typeof value1 == typeof value2;
}

// Testing 
console.log(toCompareType(5, 10)); // TRUE as both are numbers
console.log(toCompareType('hello', 'world')); // TRUE as both are strings
console.log(toCompareType(5, '5')); // FALSE as both are different ,number and string
console.log(toCompareType(true, false)); // TRUE as both are booleans
console.log(toCompareType({name:'hello',roll_no:1}, {name:'hellooooo',roll_no:1111})); // TRUE AS both are objects
console.log(toCompareType(['hello', 1], {name:'hello',roll_no:1})); // TRUE as array (They inherit properties and methods from the Object prototype) and object