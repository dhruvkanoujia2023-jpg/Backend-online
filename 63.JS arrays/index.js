let arr = [1,2,5,6,8,9]

console.log(arr);
console.log(arr.length)

console.log(arr[0])
console.log(arr[2])
console.log(arr[4])

console.log(arr.toString())        // to convert array into string
console.log(arr.join(" and "))     // Use to joing array (which is now a string) using and

console.log(arr.pop())            // removes the last number of array


//  TRY IN CONSOLE OF THE WEBSITE



// arr.push(100)                 - this will push 100 in place of last number of array that is removed.
// arr.shift()                   - removes first number of array
// arr.unshift("Jack")           - add jack in the beggniing of array number
// delete arr[6]                 - deletes the 6 no. index (makes it empty) but length will remain same
// a1.concat(a2,a3)              - combine all 3 string (a1,a2,a3) 
// arr.splice(1,3)              - removes number from index 1 till 3count
// arr.splice(1,3,222,333)      -  removes number from index 1 till 3count and add 222,333 in their place 