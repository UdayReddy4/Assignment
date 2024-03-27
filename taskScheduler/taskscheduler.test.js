const Task = require('./taskscheduler');

describe('Task', () => {
    test('Create task with valid due date format', () => {
        const task = new Task("Complete project", "Monday", "high", "2024-04-01");
        expect(task.dueDate).toBe("2024-04-01");
    });

    test('Create task with invalid due date format', () => {
        expect(() => new Task("Invalid Date Task", "Saturday", "high", "2024/04/01")).toThrowError("Invalid due date format. Please use the format YYYY-MM-DD.");
    });

    test('Create task with valid priority', () => {
        const task = new Task("Submit report", "Wednesday", "medium", "2024-04-03");
        expect(task.priority).toBe("medium");
    });

    test('Create task with invalid priority', () => {
        expect(() => new Task("Attend meeting", "Friday", "urgent", "2024-04-05")).toThrowError("Invalid priority. Priority should be 'low', 'medium', or 'high'.");
    });
});
