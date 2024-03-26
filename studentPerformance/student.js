
function calculateGrade(score) {                //calculate grade
    let grade;
    if(!Number==grade){
        throw new Error("please enter positive integer");
    }
    switch (true) {
        case (score >= 90 && score <= 100):
            grade = 'A';
            break;
        case (score >= 80 && score < 90):
            grade = 'B';
            break;
        case (score >= 70 && score < 80):
            grade = 'C';
            break;
        case (score >= 60 && score < 70):
            grade = 'D';
            break;
        case (score >= 0 && score < 60):
            grade = 'F';
            break;
        default:
            grade = 'Invalid Score';
    }

    return grade;
}


function analyzePerformance(students) {
    let classStats = {
        totalStudents: students.length,
        gradesDistribution: { 'A': 0, 'B': 0, 'C': 0, 'D': 0, 'F': 0 },
        subjectGrades: {}
    };

    students.forEach(student => {
        const overallGrade = calculateGrade(student.score);  //overall grade
        classStats.gradesDistribution[overallGrade]++;

        if (!classStats.subjectGrades[student.subject]) {
            classStats.subjectGrades[student.subject] = { 'A': 0, 'B': 0, 'C': 0, 'D': 0, 'F': 0 };
        }
        classStats.subjectGrades[student.subject][overallGrade]++;
    });

    return classStats;
}
// const students = [
//     { name: 'APPLE', subject: 'Math', score: 85 },
//     { name: 'Ala', subject: 'Science', score: 78 },
//     { name: 'Bobai', subject: 'Math', score: 92 },
//     { name: 'Eram', subject: 'English', score: 68 },
//     { name: 'Tom', subject: 'Science', score: 76 },
//     { name: 'jerry', subject: 'English', score: 95 },
//     { name: 'raarau', subject: 'Math', score: 72 },
//     { name: 'bond', subject: 'Science', score: 88 },
//     { name: 'James', subject: 'English', score: 62 }
// ];

// const classStatistics = analyzePerformance(students);

// console.log('Class Statistics:');
// console.log('-----------------');
// console.log('Total Students:', classStatistics.totalStudents);
// console.log('Grades Distribution:', classStatistics.gradesDistribution);
// console.log('Subject-wise Grades:', classStatistics.subjectGrades);

// Output for the code 

module.exports={analyzePerformance,calculateGrade}