const Todo = require("../models/todoModel");

const getTodos = async (req,res)=>{
   
    // DB QUERY FOR GETTING ALL DOCUMENTS
    const todos = await Todo.find();

    if(!todos){
        res.json({msg : "No Todos !"});
    }

    res.json(todos);

};

const getTodo = (req,res)=>{
    res.json({
        msg:"Single Todo"
    });
};

const createTodo = (req,res)=>{
    res.send("Created !");
};

const removeTodo = (req,res)=>{
    res.send("Deleted!");
};

const updateTodo = (req,res)=>{
    res.send("Updated!");
};

module.exports = {createTodo,getTodos,getTodo,removeTodo,updateTodo}