import TodoList from "./TodoList";
import { useSelector, useDispatch } from "react-redux";
import { todoActions } from "./store";

function App() {
  const todoItems = useSelector((state) => {
    return state.todo.items;
  });
  const dispatch = useDispatch();

  let value = "";

  const inputHandler = (event) => {
    event.preventDefault();

    value = event.target.value;
  };

  const addTodoHandler = () => {
    dispatch(
      todoActions.addTodo({
        id: todoItems.length + 1,
        task: value,
      })
    );

    console.log(value);
  };

  return (
    <div>
      <h1>TodoList App</h1>
      <input type="text" onChange={inputHandler} placeholder="Enter task..." />
      <button onClick={addTodoHandler}>Add</button>
      <TodoList />
    </div>
  );
}

export default App;
