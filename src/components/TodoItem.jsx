import styles from "./TodoItem.module.css"
function TodoItem(props) {
  return (
    <>
      <div className={`container ${styles["items-container"]}`}>
        <div className={"row row-css"}>
          <div className="col-6">{props.taskName}</div>
          <div className="col-4">{props.dueDate}</div>
          <div className="col-2">
            <button 
              className="btn btn-danger btn-css"
              onClick={() => props.deleteHandler(props.taskName)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoItem;
