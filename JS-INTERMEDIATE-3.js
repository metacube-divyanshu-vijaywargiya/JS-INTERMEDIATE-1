// given student data in assignment
const studentsArrayData = [
    { name: "David", marks: 80 },
    { name: "Vinoth", marks: 77 },
    { name: "Divya", marks: 88 },
    { name: "Ishitha", marks: 95 },
    { name: "Thomas", marks: 68 }
];

// To find average marks
function calculateAverage(students) {
    let totalMarks = 0;
    let numberOfStudents = students.length;
    for (let student of students) {
        totalMarks += student.marks;
    }
    return totalMarks / numberOfStudents;
}

// To find grade according to average marks
function determineGrade(average) {
    const roundedAverage = Math.floor(average / 10); // 63/0 = 6.3 => Math.floor(6.3) = 6

    switch (roundedAverage) {
        case 6:
            return 'D';
        case 7:
            return 'C';
        case 8:
            return 'B';
        case 9: 
            return 'A';
        default:
            return 'F'; 
    }
}

// calculate average marks with student data and grade as well
const averageMarks = calculateAverage(studentsArrayData);
const grade = determineGrade(averageMarks);

// results
console.log(`Average Marks: ${averageMarks}`);
console.log(`Grade: ${grade}`);
