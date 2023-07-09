import { get } from "./api";

export const getTodo = async () => {
  const response = await get("/todo");
  const todoList = await response.json();
  return todoList;
};
