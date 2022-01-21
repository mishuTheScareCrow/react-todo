import Button from "./Button";

const List = ({ tasks }) => {
  return (
    <div>
      {tasks.map((task) => (
        <div className="div-flush" key={task.id}>
          <div className="div-flush-item text-start py-3 px-2 d-flex justify-content-between align-items-center">
            <div>
              <h5 className="mb-0">{task.title}</h5>
              <p className="mb-0">{task.body}</p>
            </div>
            <Button />
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;
