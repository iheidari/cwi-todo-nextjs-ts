"use client";
// source: https://codepen.io/BeeC00des/pen/MWYEwov
import React, { useState } from "react";
import "./style.css";
import Header from "./header";
import Add from "./add";
import List from "./list";
import DoneList from "./done-list";
import Todo from "@/types/todo";
import Error from "./error";

interface Props {
  todos: Todo[];
}

const TodoList = (props: Props) => {
  const [todos, setTodos] = useState<Array<Todo>>(props.todos);
  const [error, setError] = useState<string>("");

  const handleAdd = (todo: Todo) => {
    setTodos((todos) => [...todos, todo]);
  };

  const handleError = (error: string) => {
    setError(error);
    setTimeout(() => {
      setError("");
    }, 5000);
  };

  return (
    <div className="container">
      <Header />
      <Add onAdd={handleAdd} onError={handleError} />
      <List todos={todos.filter((todo) => !todo.doneAt)} />
      <DoneList todos={todos.filter((todo) => todo.doneAt)} />
      <Error error={error} />
    </div>
  );
};

export default TodoList;
