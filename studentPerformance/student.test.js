const {analyzePerformance,calculateGrade}=require('./student')


describe('analyzePerformance function', () => {
    const students = [
            { name: 'APPLE', subject: 'Math', score: 85 },
            { name: 'Ala', subject: 'Science', score: 78 },
            { name: 'Bobai', subject: 'Math', score: 92 },
            { name: 'Eram', subject: 'English', score: 68 },
            { name: 'Tom', subject: 'Science', score: 76 },
            { name: 'jerry', subject: 'English', score: 95 },
            { name: 'raarau', subject: 'Math', score: 72 },
            { name: 'bond', subject: 'Science', score: 88 },
            { name: 'James', subject: 'English', score: 62 }
        ];

    const classStatistics = analyzePerformance(students);

    test('should return total students count', () => {
        expect(classStatistics.totalStudents).toBe(9);
    });

    test('should return correct grades distribution', () => {
        expect(classStatistics.gradesDistribution).toEqual({ 'A': 2, 'B': 2, 'C': 3, 'D': 2, 'F': 0 });
    });

});
 test('should return "Invalid Score" for score less than 0', () => {
            expect(calculateGrade(-5)).toBe('Invalid Score');
 });
 test('should return grade A for score between 90 and 100', () => {
                     expect(calculateGrade(95)).toBe('A');
   });
 test('should return error message for grade is not an integer', () => {
                    expect(calculateGrade("kr")).toThrow("please enter positive integer");
  });

  //test cases for student.js code