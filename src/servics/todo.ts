import { get, post } from "./api";

export const getTodo = async () => {
  const response = await get("/todo");
  const todoList = await response.json();
  return todoList;
};

export const createTodo = async (todo: { message: string }) => {
  const response = await post("/todo", todo);
  const todoList = await response.json();
  return todoList;
};
