function thousands_separators(num) {
    // Converting number to string
    const numStr = num.toString();
    
    // Split the number into integer and decimal parts
    const [integerPart, decimalPart] = numStr.split('.');
    
    // Using regular expression to add commas
    const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    
    // Return new formatted number
    return decimalPart ? `${formattedInteger}.${decimalPart}` : formattedInteger;
}

// Testing
console.log(thousands_separators(1000));        // 1,000
console.log(thousands_separators(10000.23));    // 10,000.23
console.log(thousands_separators(100000));       // 100,000