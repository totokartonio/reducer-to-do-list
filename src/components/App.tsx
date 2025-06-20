import { useReducer } from "react";
import TodoList from "./TodoList";
import CreateNewTodo from "./CreateNewTodo";
import type { Todo } from "../types";

type Action =
  | { type: "create-to-do"; id: string; value: string }
  | { type: "toggle-to-do"; id: string }
  | { type: "delete-to-do"; id: string };

const reducer = (todos: Todo[], action: Action) => {
  switch (action.type) {
    case "create-to-do": {
      return [
        ...todos,
        {
          value: action.value,
          id: action.id,
        },
      ];
    }
    case "toggle-to-do": {
      return todos.map((todo) => {
        if (todo.id !== action.id) {
          return todo;
        }

        return {
          ...todo,
          isCompleted: !todo.isCompleted,
        };
      });
    }
    case "delete-to-do": {
      return todos.filter((todo) => todo.id !== action.id);
    }
  }
};

const App = () => {
  const [todos, dispatch] = useReducer(reducer, []);
  const handleCreateTodo = (value: string) => {
    dispatch({
      type: "create-to-do",
      id: crypto.randomUUID(),
      value,
    });
  };

  const handleToggleTodo = (id: string) => {
    dispatch({
      type: "toggle-to-do",
      id,
    });
  };

  const handleDeleteTodo = (id: string) => {
    dispatch({
      type: "delete-to-do",
      id,
    });
  };
  return (
    <>
      <p>Hello World</p>
      <TodoList
        todos={todos}
        handleToggleTodo={handleToggleTodo}
        handleDeleteTodo={handleDeleteTodo}
      />
      <CreateNewTodo handleCreateTodo={handleCreateTodo} />
    </>
  );
};

export default App;
