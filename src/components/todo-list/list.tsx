import RowItem from "./row-item";

const List = () => {
  return (
    <>
      <h3>Todo</h3>
      <ul id="incomplete-tasks">
        <RowItem title="Do lundry" />
        <RowItem title="Clean my room" />
        <RowItem title="Go Shopping" />
      </ul>
    </>
  );
};

export default List;
