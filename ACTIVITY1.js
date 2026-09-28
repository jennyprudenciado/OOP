let ownerName = "Jenny Rose";
let ownerAge = 20;
let ownerAddress = "Korea";
//arrays
var properties = ["condo", "house", "resort"];
var vehicle = ["car", "motorcycle", "van"];
var pets = ["dog", "cat", "fish"];

console.log ("\n Properties:");
for (var j = 0; j < properties.length; j++){
    console.log((j+1) +"."+ properties[j]);
}

console.log ("\n Vehicle:");
for (var i = 0; i < vehicle.length; i++){
    console.log((i+1)+"."+ vehicle[i] );
}

console.log ("\n Pets:");
for (var k = 0; k < pets.length; k++){
    console.log((k+1)+ "." + pets[k]);
}

if (ownerAge < 18){
    console.log ("\n The owner is minor.");
} else if (ownerAge >= 18 && ownerAge < 60){
    console.log ("\n The owner is adult.");
} else {
    console.log ("\n The owner is senior.");
}

if (properties.length >= 3){
    console.log("\n The owner own 3 properties.");
} else {
    console.log("\n The owner own less than 3 properties.");
}

if (pets.length > 0){
    console.log("\n The owner has pets.");
} else {
    console.log("\n The owner has no pets.");
}