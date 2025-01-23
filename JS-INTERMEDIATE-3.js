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
    if (average < 60) {
        return 'F';
    } else if (average < 70) {
        return 'D';
    } else if (average < 80) {
        return 'C';
    } else if (average < 90) {
        return 'B';
    } else {
        return 'A';
    }
}

// calculate average marks with student data and grade as well
const averageMarks = calculateAverage(studentsArrayData);
const grade = determineGrade(averageMarks);

// results
console.log(`Average Marks: ${averageMarks}`);
console.log(`Grade: ${grade}`);
