type RowItemProps = {
  title: string;
  done?: boolean;
};

const RowItem = (props: RowItemProps) => {
  return (
    <li>
      <input type="checkbox" checked={props.done} />
      <label className={props.done ? "line-through" : ""}>{props.title}</label>
      <input type="text" />
      <button className="edit">Edit</button>
      <button className="delete">Delete</button>
    </li>
  );
};

export default RowItem;
