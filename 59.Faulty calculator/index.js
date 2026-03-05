/* create a faulty calculator using javascript

This faulty calculator does following:
1. It takes two numbers as input from the user.
2. It performs wrong opration as follows:

+ ----> -
* ----> +
- ----> / 
/ ----> **

It performs wrong operation 10% of the times. */



let a = prompt("enter the number a: ")
let b = prompt ("enter the number b: ")

let operation = prompt("Enter the opration: ")
a = Number.parseInt(a)
b=Number.parseInt(b)

if(operation=='+'){
    console.log("The sum of numbers are: ",a-b)
}
else if(operation=='*'){
    console.log("The multiplication of the numbers is: ",a+b)
}
else if(operation=='-'){
    console.log("The difference of the numbers is: ",a/b)
}
else if(operation=='/'){
    console.log("The division of the numbers is: ",a**b)
}
else{
    console.log("entered wrong choice")
}
