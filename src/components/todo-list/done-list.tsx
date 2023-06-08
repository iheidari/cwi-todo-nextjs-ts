import RowItem from "./row-item";

const DoneList = () => {
  return (
    <>
      <h3>Completed</h3>
      <ul>
        <RowItem title="See the Doctor" done />
      </ul>
    </>
  );
};

export default DoneList;
