import { TodoProps } from ".";
import RowItem from "./row-item";

const List = (props: TodoProps) => {
  const rowItems = Object.keys(props.todos || {})
    .filter((key) => !props.todos[key].doneAt)
    .map((key) => <RowItem key={key} title={props.todos[key].message} />);
  if (rowItems.length === 0) {
    return (
      <div style={{ textAlign: "center", fontStyle: "italic", marginTop: 12 }}>
        No Todo item
      </div>
    );
  }
  return (
    <>
      <h3>Todo</h3>
      <ul id="incomplete-tasks">{rowItems}</ul>
    </>
  );
};

export default List;
