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
    let result = numbers.reduce((temp, current) => lcm(temp, current));
    return result ;
}

// Testing
console.log(lcm_more_than_two_numbers([100, 90, 80, 7])); 
console.log(lcm_more_than_two_numbers([5, 10, 15, 25])); 