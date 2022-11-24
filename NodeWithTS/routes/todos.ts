// import express from 'express';

// const router = express.Router()

// shorter way
import { Router } from "express";

import { Todo } from "../models/todo";

// types
type RequestBody = { text: string };
type RequestParams = { todoId: string };

let todos: Todo[] = [];

const router = Router();

router.get("/", (req, res, next) => {
  res.status(200).json({ todos: todos });
});

router.post("/todo", (req, res, next) => {
  // const body = req.body as { text: string };

  const body = req.body as RequestBody;

  const newTodo: Todo = {
    id: new Date().toISOString(),
    text: body.text,
  };

  todos.push(newTodo);

  res.status(201).json({ message: " added todo ", newTodo, todos });
});

router.put("/todo/:todoId", (req, res, next) => {
  const params = req.params as RequestParams;
  const tid = params.todoId;

  const body = req.body as RequestBody;

  const todoIdx = todos.findIndex((todoItem) => todoItem.id === tid);
  if (todoIdx >= 0) {
    // todo found

    todos[todoIdx] = {
      id: todos[todoIdx].id,
      text: body.text,
    };

    return res.status(200).json({ message: " Item updated successfully" });
  }

  res.status(404).json({ message: " Item Not fount for given Id" });
});

router.delete("/todo/:todoId", (req, res, next) => {
  const params = req.params as RequestParams;

  let oldLen: number = todos.length;
  todos = todos.filter((eachTodo) => eachTodo.id !== params.todoId);

  if (todos.length === oldLen) {
    //no ele is removed
    return res.status(404).json({ message: " Item Not fount for given Id" });
  }

  res.status(200).json({ message: "Item delated successfully", todos: todos });
});

export default router;
