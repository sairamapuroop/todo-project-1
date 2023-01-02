import Todo from "./Todo";
import { useSelector } from "react-redux";

const TodoList = () => {
  const todoItems = useSelector((state) => {
    return state.todo.items;
  });

  return (
    <div>
      {todoItems.map((todo) => {
        return <Todo key={todo.id} todo={todo} />;
      })}
    </div>
  );
};

export default TodoList;
