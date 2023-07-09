import { getTodo } from "@/servics/todo";
import RowItem from "./row-item";

const List = async () => {
  const todoList = await getTodo();
  const rowItems = Object.keys(todoList)
    .filter((key) => !todoList[key].doneAt)
    .map((key) => <RowItem key={key} title={todoList[key].message} />);
  return (
    <>
      <h3>Todo</h3>
      <ul id="incomplete-tasks">{rowItems}</ul>
    </>
  );
};

export default List;
