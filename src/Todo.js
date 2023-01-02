import { useDispatch } from "react-redux";
import { todoActions } from "./store";

const Todo = (props) => {
  const dispatch = useDispatch();

  const removeItemHandler = () => {
    dispatch(todoActions.removeTodo(props.todo.id));
  };

  return <div onClick={removeItemHandler}>{props.todo.task}</div>;
};

export default Todo;
