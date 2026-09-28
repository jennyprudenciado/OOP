
let name = "John";
let age = 21;
let city = "Calbayog";
let score = 95;
let isStudent = true;
let course = "BSIT";
let yearLevel = 2;
let favoriteColor = "Blue";
let balance = 1500;
let greeting = "Hello";


const school = "ABC University";
const country = "Philippines";
const pi = 3.14159;
const maxScore = 100;
const passingScore = 75;
const semester = "First Semester";
const subject = "JavaScript";
const section = "IT-2A";
const currency = "PHP";
const currentYear = 2026;


const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const greetUser = (user) => `Hello, ${user}!`;

const isPassing = (grade) => grade >= passingScore;



const message1 = `My name is ${name}.`;
const message2 = `I am ${age} years old.`;
const message3 = `I live in ${city}.`;
const message4 = `My score is ${score}.`;
const message5 = `I am a student: ${isStudent}.`;
const message6 = `I am taking ${course}.`;
const message7 = `I am in year ${yearLevel}.`;
const message8 = `My favorite color is ${favoriteColor}.`;
const message9 = `My balance is ${currency} ${balance}.`;
const message10 = `${greeting}, welcome to ${school}!`;



const fruits = ["Apple", "Banana", "Mango"];
const [fruit1, fruit2, fruit3] = fruits;

const numbers = [10, 20, 30];
const [num1, num2, num3] = numbers;

const colors = ["Red", "Green", "Blue"];
const [color1, color2, color3] = colors;



const student = {
    studentName: "John",
    studentAge: 21,
    studentCourse: "BSIT"
};

const { studentName, studentAge, studentCourse } = student;


const person = {
    firstName: "Juan",
    lastName: "Dela Cruz",
    personAge: 20
};

const { firstName, lastName, personAge } = person;


const product = {
    productName: "Laptop",
    price: 35000,
    brand: "Acer"
};

const { productName, price, brand } = product;


const firstArray = [1, 2, 3];
const secondArray = [4, 5, 6];

const combinedArray = [...firstArray, ...secondArray];

const moreNumbers = [7, 8, 9];
const allNumbers = [...combinedArray, ...moreNumbers];


const basicInfo = {
    name: "John",
    age: 21
};

const contactInfo = {
    email: "john@example.com",
    phone: "09123456789"
};

const completeInfo = {
    ...basicInfo,
    ...contactInfo
};


const address = {
    city: "Calbayog",
    country: "Philippines"
};

const fullProfile = {
    ...completeInfo,
    ...address
};


const originalNumbers = [1, 2, 3, 4, 5];

const doubledNumbers = originalNumbers.map(
    number => number * 2
);

const squaredNumbers = originalNumbers.map(
    number => number * number
);



const scores = [50, 65, 75, 80, 90, 100];

const passingScores = scores.filter(
    score => score >= 75
);

const highScores = scores.filter(
    score => score >= 90
);


const userAccount = {
    username: "john123",
    profile: {
        email: "john@example.com"
    }
};

const email = userAccount?.profile?.email;


const employee = {
    name: "Maria",
    department: {
        manager: {
            name: "Mr. Santos"
        }
    }
};

const managerName = employee?.department?.manager?.name;


console.log(message1);
console.log(message2);
console.log(message3);
console.log(message4);
console.log(message5);
console.log(message6);
console.log(message7);
console.log(message8);
console.log(message9);
console.log(message10);

console.log(add(10, 5)); 
console.log(subtract(10, 5));
console.log(multiply(10, 5));
console.log(greetUser(name));
console.log(isPassing(score));

console.log(combinedArray); 
console.log(allNumbers);

console.log(completeInfo);
console.log(fullProfile);

console.log(doubledNumbers); 
console.log(squaredNumbers);

console.log(passingScores);//
console.log(highScores);

console.log(email);
console.log(managerName);
