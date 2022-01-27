import { useEffect, useState } from "react";
import List from "./List";

const Home = () => {
  const [tasks, setTasks] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/tasks")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setTasks(data);
        });
    }, 200);
  }, []);

  return (
    <section>
      <div className="container pt-5">
        <div className="row justify-content-center">
          <div className="col-10">
            <div className="d-flex justify-content-between bg-dark text-white px-3 py-2">
              <h5 className="mb-0">Tasks</h5>
              <h5 className="mb-0">Action</h5>
            </div>
            {tasks && <List tasks={tasks} setTasks={setTasks} />}
            {(!tasks || tasks.length === 0) && <h2>Loading...</h2>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
