import TodoItem from "./TodoItem";
function TodoItems(props) {
  const itemsList = props.tasks
  return (
    <>
      {itemsList.length === 0 && <h2>Enjoy Your Day</h2>}
      {itemsList.map((item) =>
        <TodoItem key={itemsList.indexOf(item)} taskName={item.name} dueDate={item.dueDate} deleteHandler={props.deleteHandler} />
      )}
    </>
  );
}

export default TodoItems;
