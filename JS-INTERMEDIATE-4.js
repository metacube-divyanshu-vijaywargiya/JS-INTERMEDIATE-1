// First we need to find GCD in order to find lcm
function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// to calculate the lcm of two numbers
function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

// to calculate the LCM
function lcm_more_than_two_numbers(numbers) {
    let result = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        result = lcm(result, numbers[i]);
    }
    return result;
}

// Testing
console.log(lcm_more_than_two_numbers([100, 90, 80, 7])); 
console.log(lcm_more_than_two_numbers([5, 10, 15, 25])); 