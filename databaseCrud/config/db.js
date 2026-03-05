const mongoose=require('mongoose');
const mongo_url=process.env.MONGO_URI;
mongoose.connect(mongo_url)
  .then(() => {
    console.log('Database connected successfully');
  })
  .catch(error => {
    console.error('Initial connection error:', error); 
  });