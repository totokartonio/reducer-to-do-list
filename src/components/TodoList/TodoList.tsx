import type { Todo } from "../../types";
import TodoItem from "../TodoItem";

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
          <TodoItem
            key={id}
            id={id}
            value={value}
            isCompleted={isCompleted}
            handleOnToggle={handleToggleTodo}
            handleOnClick={handleDeleteTodo}
          />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
