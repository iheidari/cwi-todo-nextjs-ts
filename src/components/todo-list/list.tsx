const List = () => {
  return (
    <>
      <h3>Todo</h3>
      <ul id="incomplete-tasks">
        <li>
          <input type="checkbox" />
          <label>Pay Bills</label>
          <input type="text" />
          <button className="edit">Edit</button>
          <button className="delete">Delete</button>
        </li>
        <li>
          <input type="checkbox" />
          <label>Go Shopping</label>
          <input type="text" value="Go Shopping" />
          <button className="edit">Edit</button>
          <button className="delete">Delete</button>
        </li>
      </ul>
    </>
  );
};

export default List;
