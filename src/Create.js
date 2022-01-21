import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const task = { title, body };
    fetch("http://localhost:8001/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    }).then(() => {
      console.log("New Task Added");
    });
    setTitle("");
    setBody("");
  };

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
                  <button type="submit" className="btn btn-primary">
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
