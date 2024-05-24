
const express = require('express');
const { createTodo, getTodos, removeTodo, updateTodo, getTodo } = require('../controller/todoController');

const router = express.Router();

// READ

router.get("/",getTodos);

// Read Single Todo

router.get("/:id",getTodo)

// CREATE

router.post("/", createTodo);

// DELETE ,REMOVE

router.delete("/:id",removeTodo);

// UPDATE

router.put("/:id",updateTodo);

module.exports = router;