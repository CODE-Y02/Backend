"use strict";
// import express from 'express';
Object.defineProperty(exports, "__esModule", { value: true });
// const router = express.Router()
// shorter way
const express_1 = require("express");
let todos = [];
const router = (0, express_1.Router)();
router.get("/", (req, res, next) => {
    res.status(200).json({ todos: todos });
});
router.post("/todo", (req, res, next) => {
    const newTodo = {
        id: new Date().toISOString(),
        text: req.body.text,
    };
    todos.push(newTodo);
    res.status(201).json({ message: " added todo ", newTodo, todos });
});
router.put("/todo/:todoId", (req, res, next) => {
    const tid = req.params.todoId;
    const todoIdx = todos.findIndex((todoItem) => todoItem.id === tid);
    if (todoIdx >= 0) {
        // todo found
        todos[todoIdx] = {
            id: todos[todoIdx].id,
            text: req.body.text,
        };
        return res.status(200).json({ message: " Item updated successfully" });
    }
    res.status(404).json({ message: " Item Not fount for given Id" });
});
router.delete("/todo/:todoId", (req, res, next) => {
    todos = todos.filter((eachTodo) => eachTodo.id !== req.params.todoId);
    res.status(200).json({ message: "Item delated successfully", todos: todos });
});
exports.default = router;
