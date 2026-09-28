// ==========================================
// STUDENT MANAGEMENT SYSTEM
// ==========================================

// 1. VARIABLES / PROPERTIES
let schoolName = "Calbayog City School";
let passingGrade = 75;
let totalStudents = 0;


// 2. ARRAYS
let students = [];
let subjects = ["Math", "Science", "English"];
let grades = [85, 90, 78];


// 3. OBJECT LITERALS
const schoolInfo = {
    name: schoolName,
    location: "Calbayog City",
    established: 2000
};

const systemSettings = {
    passingGrade: passingGrade,
    maxStudents: 100
};


// ==========================================
// 4. CLASS 1 - PERSON
// ==========================================

class Person {
    // CONSTRUCTOR #1
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // METHOD #1
    introduce() {
        return `My name is ${this.name} and I am ${this.age} years old.`;
    }
}


// ==========================================
// 5. CLASS 2 - STUDENT
// INHERITANCE #1
// ==========================================

class Student extends Person {

    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;

        // ENCAPSULATION #1
        let privateGrade = 0;

        this.setGrade = function(grade) {
            privateGrade = grade;
        };

        this.getGrade = function() {
            return privateGrade;
        };
    }

    // METHOD #2
    study() {
        return `${this.name} is studying.`;
    }

    // METHOD #3
    checkResult() {
        // CONDITIONAL #1
        if (this.getGrade() >= passingGrade) {
            return `${this.name} passed!`;
        } else {
            return `${this.name} failed.`;
        }
    }
}


// ==========================================
// 6. CLASS 3 - TEACHER
// INHERITANCE #2
// ==========================================

class Teacher extends Person {

    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;

        // ENCAPSULATION #2
        let salary = 0;

        this.setSalary = function(amount) {
            salary = amount;
        };

        this.getSalary = function() {
            return salary;
        };
    }

    // METHOD #4
    teach() {
        return `${this.name} teaches ${this.subject}.`;
    }
}


// ==========================================
// 7. CLASS 4 - SCHOOL
// ==========================================

class School {

    constructor(name) {
        this.name = name;
        this.students = [];
    }

    // METHOD #5
    addStudent(student) {
        this.students.push(student);
        totalStudents++;
    }

    // METHOD #6
    displayStudents() {

        // LOOP #1 - for loop
        for (let i = 0; i < this.students.length; i++) {
            console.log(this.students[i].name);
        }
    }

    // METHOD #7
    countStudents() {

        // LOOP #2 - while loop
        let i = 0;
        let count = 0;

        while (i < this.students.length) {
            count++;
            i++;
        }

        return count;
    }

    // METHOD #8
    checkStudents() {

        // LOOP #3 - forEach loop
        this.students.forEach(function(student) {

            // CONDITIONAL #2
            if (student.getGrade() >= 90) {
                console.log(student.name + " is an excellent student.");
            }

            // CONDITIONAL #3
            if (student.getGrade() < 75) {
                console.log(student.name + " needs improvement.");
            }
        });
    }
}


// ==========================================
// 8. ABSTRACTION
// ==========================================

// The user only calls calculateAverage()
// without needing to know how the calculation works.

class GradeCalculator {

    calculateAverage(grades) {
        let total = 0;

        // LOOP inside abstraction
        for (let grade of grades) {
            total += grade;
        }

        return total / grades.length;
    }
}


// ==========================================
// 9. OBJECTS
// ==========================================

const student1 = new Student("Juan", 18, "S001");
const student2 = new Student("Maria", 19, "S002");

const teacher1 = new Teacher("Mr. Santos", 35, "Mathematics");

const school = new School("Calbayog City School");


// ==========================================
// 10. SETTING VALUES
// ==========================================

student1.setGrade(90);
student2.setGrade(70);

teacher1.setSalary(30000);


// ==========================================
// 11. POLYMORPHISM
// ==========================================

// Both Student and Teacher inherit introduce()
// from Person, but the same method can work
// with different types of objects.

const people = [student1, teacher1];

people.forEach(function(person) {
    console.log(person.introduce());
});


// ==========================================
// 12. USING METHODS
// ==========================================

console.log(student1.study());
console.log(student1.checkResult());

console.log(student2.study());
console.log(student2.checkResult());

console.log(teacher1.teach());


// Add students to school
school.addStudent(student1);
school.addStudent(student2);


// Display students
school.displayStudents();


// Count students
console.log("Total students:", school.countStudents());


// Check student performance
school.checkStudents();


// Calculate average
const calculator = new GradeCalculator();

console.log(
    "Average grade:",
    calculator.calculateAverage(grades)
);
