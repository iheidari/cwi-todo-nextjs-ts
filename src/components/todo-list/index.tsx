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

export interface TodoProps {
  todos: { [key: string]: Todo };
}

const TodoList = (props: TodoProps) => {
  const [todos, setTodos] = useState(props.todos);
  const [error, setError] = useState<string>("");

  const handleAdd = (todo: Todo) => {
    setTodos((item) => ({ ...item, [todo.key]: todo }));
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
      <List todos={todos} />
      <DoneList todos={todos} />
      <Error error={error} />
    </div>
  );
};

export default TodoList;
