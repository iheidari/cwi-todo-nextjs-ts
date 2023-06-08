// source: https://codepen.io/BeeC00des/pen/MWYEwov
import React from "react";
import "./style.css";
import Header from "./header";
import Add from "./add";
import List from "./list";
import DoneList from "./done-list";

const TodoList = () => {
  return (
    <div className="container">
      <Header />
      <Add />
      <List />
      <DoneList />
    </div>
  );
};

export default TodoList;
