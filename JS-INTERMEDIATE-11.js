//Method to return all the properties of Array
function all_properties(array) {
    // to access all properties of object
    const properties = Object.getOwnPropertyNames(array);

    // Returning list of all properties
    return properties;
}

// Testing
console.log(all_properties(Array)); //[ 'length', 'name', 'prototype', 'isArray', 'from', 'of', 'fromAsync' ]
