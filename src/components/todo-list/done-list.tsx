import { getTodo } from "@/servics/todo";
import RowItem from "./row-item";

const DoneList = async () => {
  const todoList = await getTodo();
  const rowItems = Object.keys(todoList)
    .filter((key) => todoList[key].doneAt)
    .map((key) => <RowItem key={key} title={todoList[key].message} done />);
  return (
    <>
      <h3>Completed</h3>
      <ul>{rowItems}</ul>
    </>
  );
};

export default DoneList;
