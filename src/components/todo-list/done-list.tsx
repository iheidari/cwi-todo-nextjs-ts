import RowItem from "./row-item";
import { TodoProps } from ".";

const DoneList = (props: TodoProps) => {
  const rowItems = Object.keys(props.todos || {})
    .filter((key) => props.todos[key].doneAt)
    .map((key) => <RowItem key={key} title={props.todos[key].message} done />);
  if (rowItems.length === 0) {
    return null;
  }
  return (
    <>
      <h3>Completed</h3>
      <ul>{rowItems}</ul>
    </>
  );
};

export default DoneList;
