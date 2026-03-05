const express = require('express')
const app = express()
require('dotenv').config();
const PORT=process.env.PORT || 5000;
require('./config/db')
const Developer = require('./models/developer');
const developerRoute=require('./routes/developerRoutes')
app.use(express.json());
app.use('/api/developer',developerRoute)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
}) 