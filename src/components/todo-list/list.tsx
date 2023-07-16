import RowItem from "./row-item";
import Todo from "@/types/todo";

interface Props {
  todos: Todo[];
}

const List = (props: Props) => {
  if (props.todos.length === 0) {
    return (
      <div
        style={{
          width: "100%",
          textAlign: "center",
          margin: 16,
          fontStyle: "italic",
        }}
      >
        Please add a new todo
      </div>
    );
  }
  const rowItems = props.todos.map((todo) => (
    <RowItem key={todo.key} title={todo.message} />
  ));

  return (
    <>
      <h3>Todo</h3>
      <ul id="incomplete-tasks">{rowItems}</ul>
    </>
  );
};

export default List;
