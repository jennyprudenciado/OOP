<<<<<<< HEAD
// 3 variables
let myName = "Jenny";
let favColor = "Pink";
let myAge = 20;

// 3 arrays
var foods = ["adobo","spaghetti", "sinigang"];
var drinks = ["coke", "chuckie", "yakult"];
var nameOfPerfumes = ["sweettalk", "golden hours","serenity"];

// 3 Conditionals
// first Conditional: Name
if( myName === "Jenny" ){
    console.log("\n Welcome Jenny");
} else {
    console.log("N/A");
}
// second Conditional: Favorite Color
if(favColor === "Pink"){
    console.log("\n Pink is my favorite color");
} else {
    console.log("N/A");
}
// third Conditional: Favorite Number
if(myAge === 20){
    console.log("\n I'm 20 years old");
} else{
    console.log("\n Incorrect");
}

// 3 loops
// first loop: foods
console.log ("\n Favorite Foods:");
for (var i = 0; i < foods.length; i++){
    console.log ((i+1)+ "." + foods[i]);
}
// second loop: drinks
console.log ("\n Favorite Drinks:");
for(var j = 0; j < drinks.length; j++){
    console.log((j+1)+"."+ drinks[j]);
}
// third loop: Name of Perfumes 
console.log("\n Favorite Perfumes:");
for(var k = 0; k < nameOfPerfumes.length; k++){
    console.log((k+1)+"."+nameOfPerfumes[k]);
}
// Object Literals #1
let Room = {
     room1: 301,
     floor: "second floor",
     numStudent: 45
};
console.log(Room.room1);
console.log(Room.floor);
console.log(Room.numStudent);

// Object Literals #2
let Univ = {
    dep1: "CCIS",
    dep2:"CEA",
    dep3: "CCJS"
};
console.log(Univ.dep1);
console.log(Univ.dep2);
console.log(Univ.dep3);


//4 classes
// class #1
class Pillars {
    //constructor #1
    constructor(encapsulation,abstraction,inheritance, polymorphism){
        this.encapsulation = encapsulation;
        this.abstraction = abstraction;
        this.inheritance = inheritance;
        this.polymorphism = polymorphism;
    }
    // method #1
    fourPillar(){
        console.log(this.encapsulation + ":Data hiding");
        console.log(this.abstraction + ":Simplicity");
        console.log(this.inheritance + ":Reusability");
        console.log(this.polymorphism + ":Many forms");
    }
}
//object #1
let pillar = new Pillars ("\nEncapsulation","Abstraction","Inheritance","Polymorphism");
pillar.fourPillar();

// class 2: Encapsulation #1
class Student {
    #name;
    // method #2
    get name(){
        return this.#name;
    } 
    // method #3
    set name(name){
        this.#name = name;
    }
}
//object #2
let std = new Student();
std.name = "Jenny Rose"
console.log(std.name);

// class 3:Encapsulation #2
class My {
    #age;

    get age(){
        return this.#age;     
    }
    set age(age){
        this.#age = age;
    }
}
let ag = new My();
ag.age = 20
console.log(ag.age);

// class 4: Abstraction #1
class Owner {
    
    #mine()
    {
        console.log("\nActivity 1.2 OOP Recap")
    }
    // method #4
    me(){
        this.#mine();
        console.log("This is my second activity")
    }
}
//object #3
let own = new Owner();
own.me();

// class 5
class Fruit {
    // constructor #2
    constructor(name){
        this.name = name;
    }
    // method #5
    color(){
        console.log("The fruit has different color");
    }
}
// inheritance #1
class Apple extends Fruit {
    color(){
        console.log(this.name + " red");
    }
}
// inheritance #2
class Pineapple extends Fruit {
    color() {
        console.log(this.name + " yellow");
    }
}
//object 4
let apple = new Apple ("Yummy");
let pineapple = new Pineapple ("Delicious");

// polymorphism #1
apple.color();
=======
// 3 variables
let myName = "Jenny";
let favColor = "Pink";
let myAge = 20;

// 3 arrays
var foods = ["adobo","spaghetti", "sinigang"];
var drinks = ["coke", "chuckie", "yakult"];
var nameOfPerfumes = ["sweettalk", "golden hours","serenity"];

// 3 Conditionals
// first Conditional: Name
if( myName === "Jenny" ){
    console.log("\n Welcome Jenny");
} else {
    console.log("N/A");
}
// second Conditional: Favorite Color
if(favColor === "Pink"){
    console.log("\n Pink is my favorite color");
} else {
    console.log("N/A");
}
// third Conditional: Favorite Number
if(myAge === 20){
    console.log("\n I'm 20 years old");
} else{
    console.log("\n Incorrect");
}

// 3 loops
// first loop: foods
console.log ("\n Favorite Foods:");
for (var i = 0; i < foods.length; i++){
    console.log ((i+1)+ "." + foods[i]);
}
// second loop: drinks
console.log ("\n Favorite Drinks:");
for(var j = 0; j < drinks.length; j++){
    console.log((j+1)+"."+ drinks[j]);
}
// third loop: Name of Perfumes 
console.log("\n Favorite Perfumes:");
for(var k = 0; k < nameOfPerfumes.length; k++){
    console.log((k+1)+"."+nameOfPerfumes[k]);
}
// Object Literals #1
let Room = {
     room1: 301,
     floor: "second floor",
     numStudent: 45
};
console.log(Room.room1);
console.log(Room.floor);
console.log(Room.numStudent);

// Object Literals #2
let Univ = {
    dep1: "CCIS",
    dep2:"CEA",
    dep3: "CCJS"
};
console.log(Univ.dep1);
console.log(Univ.dep2);
console.log(Univ.dep3);


//4 classes
// class #1
class Pillars {
    //constructor #1
    constructor(encapsulation,abstraction,inheritance, polymorphism){
        this.encapsulation = encapsulation;
        this.abstraction = abstraction;
        this.inheritance = inheritance;
        this.polymorphism = polymorphism;
    }
    // method #1
    fourPillar(){
        console.log(this.encapsulation + ":Data hiding");
        console.log(this.abstraction + ":Simplicity");
        console.log(this.inheritance + ":Reusability");
        console.log(this.polymorphism + ":Many forms");
    }
}
//object #1
let pillar = new Pillars ("\nEncapsulation","Abstraction","Inheritance","Polymorphism");
pillar.fourPillar();

// class 2: Encapsulation #1
class Student {
    #name;
    // method #2
    get name(){
        return this.#name;
    } 
    // method #3
    set name(name){
        this.#name = name;
    }
}
//object #2
let std = new Student();
std.name = "Jenny Rose"
console.log(std.name);

// class 3:Encapsulation #2
class My {
    #age;

    get age(){
        return this.#age;     
    }
    set age(age){
        this.#age = age;
    }
}
let ag = new My();
ag.age = 20
console.log(ag.age);

// class 4: Abstraction #1
class Owner {
    
    #mine()
    {
        console.log("\nActivity 1.2 OOP Recap")
    }
    // method #4
    me(){
        this.#mine();
        console.log("This is my second activity")
    }
}
//object #3
let own = new Owner();
own.me();

// class 5
class Fruit {
    // constructor #2
    constructor(name){
        this.name = name;
    }
    // method #5
    color(){
        console.log("The fruit has different color");
    }
}
// inheritance #1
class Apple extends Fruit {
    color(){
        console.log(this.name + " red");
    }
}
// inheritance #2
class Pineapple extends Fruit {
    color() {
        console.log(this.name + " yellow");
    }
}
//object 4
let apple = new Apple ("Yummy");
let pineapple = new Pineapple ("Delicious");

// polymorphism #1
apple.color();
>>>>>>> 9e256f85ab07662ea7942749299df5aaf7ab63b3
pineapple.color();