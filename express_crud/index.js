const express = require('express')
const app = express()
require("dotenv").config ();
const port = process.env.PORT || 3000;

app.use (express.json()); //middleware to parse json data


const users = [{
    id :1,
    name : "Dhruv",
    email:"dhruv@gmail.com",
    age:22
},
{
    id : 2,
    name : "Anshuman",
    email : "anshu@gmail.com",
    age :21
}
]

// Get all the users
app.get ("/users", (req, res) => {                  //API building
    res.send (users);
})

//get single user by id
app.get("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const user = users.find(u => u.id === id);

  if (!user) {
    return res.status(404).send("User not found");
  }

  res.send(user);
});

//create
 app. post ("/users", (req, res) => {
    let data  = req.body  ;  //getting data from body
    console.log(data);
 })


// create user

app.post ("/users", (req, res) => {
  let { name, email, age } = req.body;      //destructuring

  let newUser = {
    id: users.length + 1,
    name: name,
    email : email,
    age: age
  };

  console.log(newUser);

  // delete user
  app.delete("/users/:id", (req, res) => {
    const id = req.params.id;
    const userIndex = users.findIndex((item) => item.id == id);

    user.splice(user,1); //delete 1 item from user array
    
    res.json({ message: "User deleted successfully" })

  // update user
  app.put("/users/:id", (req, res) => {
  })

  
  // add to users array and send response
  users.push(newUser);
  res.status(201).json(newUser);
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})





//update data

app.put("/api/developer/:id", async(req, res) => {

  const id = req.params.id;
  const data = request.body;

  const updatedData = await Developer.findByIdAndUpdate(id, data, { new: true });

  res.json({
    message: "developer updated",
    updatedData
  })  

})




app.delete('/api/developer/:id', async(req, res) => {

  const id = req.params.id;
  const 







app.listen(port, () => {
  console.log(`Serving is running on port ${port}`)
})
