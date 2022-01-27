import Button from "./Button";

const List = ({ tasks, setTasks }) => {
  const handleOnDone = (task) => {
    task.done = true;
    fetch("http://localhost:8000/tasks/" + task.id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTasks([...tasks, data]);
      });
  };

  const handleDelete = (task) => {
    fetch("http://localhost:8000/tasks/" + task.id, {
      method: "DELETE",
    }).then((e) => {
      fetch("http://localhost:8000/tasks")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setTasks(data);
        });
    });
  };

  return (
    <div>
      {tasks.map(
        (task) =>
          !task.done && (
            <div className="div-flush" key={task.id}>
              <div className="div-flush-item text-start py-3 px-2 d-flex justify-content-between align-items-center">
                <div>
                  <h5 className="mb-0">{task.title}</h5>
                  <p className="mb-0">{task.body}</p>
                </div>
                <Button task={task} handleOnDone={handleOnDone} handleDelete={handleDelete} />
              </div>
            </div>
          )
      )}
    </div>
  );
};

export default List;
