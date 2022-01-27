const Button = ({ handleDelete, handleOnDone, task }) => {
  return (
    <div>
      <button
        onClick={() => handleOnDone(task)}
        className="btn btn-sm mx-1"
        style={{ color: "#fff", backgroundColor: "#1DB954", borderColor: "#1DB954" }}
      >
        Done
      </button>
      <button
        className="btn btn-sm mx-1"
        style={{ color: "#fff", backgroundColor: "#ff0000", borderColor: "#ff0000" }}
        onClick={() => handleDelete(task)}
      >
        Delete
      </button>
    </div>
  );
};

export default Button;
