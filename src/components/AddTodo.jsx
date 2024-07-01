import { useState } from "react";
import styles from "./AddTodo.module.css";
function AddTodo(props) {
  const [textInput, setTextImput] = useState("");
  const [dateInput, setDateImput] = useState("");
  const inputTextHandler = (event) => {
    setTextImput(event.target.value);
  };
  const inputDateHandler = (event) => {
    setDateImput(event.target.value);
  };

  return (
    <div className="container text-center">
        <div className="row row-css">
          <div className="col-6">
            <input 
              type="text" 
              className={styles["input-css"]} placeholder="Enter Task"
              onChange={inputTextHandler}
              value={textInput}
            />
          </div>
          <div className="col-4">
            <input 
              type="date"
              onChange={inputDateHandler}
              value={dateInput}
            />
          </div>
          <div className="col-2">
            <button 
              className="btn btn-success btn-css"
              onClick={
                () => {
                  props.inputHandler(textInput, dateInput)
                  setTextImput("");
                  setDateImput("");
                }
              }
            >
              Add
            </button>
          </div>
        </div>
    </div>
  );
}

export default AddTodo;