function nice (name) {
    console.log ("hey " + name + " good to know")
    console.log ("you " + name + " are a bitch")
    console.log ("you " + name + " are a dumbass")
}

nice("Anshuman")

function sum (a,b, c =3 ) {
    // console.log(a + b) 
    return a + b + c
}

result1 = sum (3 ,5)
result2 = sum (4, 5)
result3 = sum (8 ,6)

console.log ("the sum of these numbers is: ", result1)

const func=(x)=>{
    console.log("Zebra: ", x)
}

func(1)
func(6)
func(10)