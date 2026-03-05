let a = "Dhruv";
console.log(a [0]);                       //print single alphabet 
console.log(a [1]);
console.log(a [2]);
console.log(a [3]);
console.log(a [4]);
console.log(a [5]);

console.log(a.length)                           //print length of an array


//Template literals ---->  ${variable name}
let real_name = "Dhruv";
let friend = "Anshuman";

console.log(`His name is ${real_name} and his friend name is ${friend}`)

let b = "Shivam"
console.log(b.toUpperCase())                        //print the string in uppercase
console.log(b.toLowerCase())                        // print the string in lowercase

console.log(b.length)

console.log(b.slice(1,5))                             // print after 1 and before 5
console.log(b.slice(1))                               // print after 1 to end 

console.log (b.replace("Sh", "very"))                  // replacing
console.log(b.concat(" ", a, " Runner ", " Fish "))    //use to add all the given string but can also use + operator

