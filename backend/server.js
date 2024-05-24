const express = require('express');
const { connectDB } = require('./config/db_config');

require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 5000;

// DB connection
connectDB();

// Root dictionary

app.get("/",(req,res)=>{
    res.json({
        msg:"All Todos"
    });
});

//Todo Routes

app.use('/api/todo',require("./routes/todoRoutes"));


app.listen(PORT,()=>{
    console.log(`server is running at PORT : ${PORT}`);
});