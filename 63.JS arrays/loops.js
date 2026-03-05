let a = [1,6,2,7,4]

for (let index = 0; index < a.length; index++) {
    const element = a[index];
    console.log(element)           // print array's number
} 


a.forEach((value, index, arr )=> {
    console.log(value, index, arr)       // value = 1, index = 0, arr = a
})                                     



