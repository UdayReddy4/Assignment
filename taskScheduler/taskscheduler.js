
class Task {
    constructor(description, day, priority, dueDate) {
        this.description = description;
        this.day = day;
        if (!this.isValidPriority(priority)) {
            throw new Error("Invalid priority. Priority should be 'low', 'medium', or 'high'.");
        }
        this.priority = priority;
        if (!this.isValidDate(dueDate)) {
            throw new Error("Invalid due date format. Please use the format YYYY-MM-DD.");
        }else
        this.dueDate = dueDate;
    }
    //

    isValidPriority(priority) {
        const validPriorities = ["low", "medium", "high"];
        return validPriorities.includes(priority);
    }

    isValidDate(date) {
        const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
        return dateRegex.test(date);
    }
}


const tasks = [
    new Task("Complete project", "Monday", "high", "2024-04-01"),
    new Task("Submit report", "Wednesday", "medium", "2024-04-03"),
    new Task("Attend meeting", "Friday", "low", "05042024")
];

console.log(tasks);


module.exports=Task
