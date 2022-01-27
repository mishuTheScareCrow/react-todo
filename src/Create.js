import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const task = { title, body, done: false };
    fetch("http://localhost:8000/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    }).then(() => {
      history.push("/");
    });
    setTitle("");
    setBody("");
  };

  const history = useHistory();

  return (
    <section>
      <div className="container pt-5">
        <div className="row justify-content-center">
          <div className="col-10">
            <h5 className="mb-3">Create a New Task</h5>
            <form onSubmit={handleSubmit}>
              <div className="row g-3">
                <div className="col-12 text-start">
                  <label className="form-label">Task Title</label>
                  <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} required />
                </div>
                <div className="col-12 text-start">
                  <label className="form-label">Task Description</label>
                  <textarea className="form-control" rows="3" value={body} onChange={(e) => setBody(e.target.value)} required />
                </div>
                <div className="col-auto">
                  <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
                    Add Task
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Create;
