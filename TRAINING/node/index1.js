// built in 

// file system , operating sysytem, http, path

const fs = require('fs');
const os = require('os');
const http = require('http');

// let data = "dhruvv"
// fs.writeFileSync('./name.txt', data, "utf8");

//read
// const result = fs.readFileSync('./data.txt', 'utf8');
// console.log(result);

//update the file
// fs.appendFileSync('./data.txt', '\nDhruv is student', 'utf8');

//delete the file
// fs.unlinkSync('./data.txt');


//let data = "Dhruv is good boy"

//fs.writeFile('./data.txt', data, 'utf8', (data)=>{
 //   console.log('file is created');
//})

// console.log(os.hostname());
// console.log(os.platform());
// console.log(os.arch());
// 

// http


const server = http.createServer(function(req, res){
    res.end("Hello from Dhruv server")
});

server.listen(5000, () => {
    console.log('Server is running');   
})

