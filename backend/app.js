
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const employeeRoutes = require('./routes/employeeRoutes')

const app = express()
app.use(cors())


app.use('/employee',employeeRoutes)

mongoose.connect('').then(() => {
    console.log('Connected to MongoDB');
  }).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

app.listen(8000,()=>{
    console.log('server running')
})
