import style from "./TodoList.module.css";
import type { Todo } from "../../types";

type Props = {
  todos: Todo[];
  handleToggleTodo: (id: string) => void;
  handleDeleteTodo: (id: string) => void;
};

const TodoList = ({ todos, handleToggleTodo, handleDeleteTodo }: Props) => {
  return (
    <>
      <ul>
        {todos.map(({ id, value, isCompleted }: Todo) => (
          <li key={id} className={isCompleted ? style.completed : ""}>
            {value}
            <button onClick={() => handleToggleTodo(id)}>Toggle</button>
            <button onClick={() => handleDeleteTodo(id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
