function ISO_numeric_date(date) {
    const day = date.getDay();
    
    //if day is 0 (sunday), return 7; otherwise, return day
    return (day === 0 ? 7 : day);
}

// Test Data
let dt = new Date("2025-01-29"); // January 29, 2025
console.log(ISO_numeric_date(dt)); // Output: 3 for wednesday
