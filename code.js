let age = 20;
let schoolId = "2024-535-1";
let studentName = "Jenny Rose"; // let used when the variable can be reassigned 

// arrays
var course = ["CSELECT 1", "CS303 LEC", "GE ELEC"]; // var used when the you will declaring variable.
var roomNumber = [303,401,305];
var floor = ["first floor", " second floor", "third floor"];

// conditinals of 3 variables and 3 for let
// this is for the let condition
if (age < 18){
    console.log("the student is not at legal age.");
} else if (age >= 18 && age < 22){ // this operator is logical AND for condition 
    console.log ("the student is at legal age.");
} else {
    console.log(" this is not student in this university");
}

if (schoolId === "2024-525-1"){ // (=, assignment; you need to change the variable)(==, this is used for comparing the variable)(===, this is used for strict comparison of the variable this is the general recommendation for comapring a variabe.)
    console.log("This student is studying here.");
} else {
    console.log("This is not a student here.");
}

if (studentName === "Jenny Rose"){
    console.log("NOTE: this is student of this university");
} else {
    console.log("NOTE: This is not student of this university");
}

// for loops (in loop used i,j,k for counter or index)
console.log ("\n Course:");
for (var i = 0; i < course.length; i++){
    console.log ((i+1) + "."+ course[i]); // j+1, k+1, i+1 means = 1
}

console.log("\n Room Number:"); // >, greater than; < less than
for (var j = 0; j < roomNumber.length; j++ ){
    console.log((j+1)+ "." + roomNumber[j]);
}

console.log("\n Floor:"); // "\n this is used for next line"
for (var k = 0; k < floor.length; k++){
    console.log((k+1)+ "."+ floor[k] );
}
