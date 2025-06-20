import { useState } from "react";

const CreateNewTodo = ({
  handleCreateTodo,
}: {
  handleCreateTodo: (value: string) => void;
}) => {
  const [value, setValue] = useState("");
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleCreateTodo(value);
    setValue("");
  };
  return (
    <form onSubmit={(event) => onSubmit(event)}>
      <input value={value} onChange={(event) => setValue(event.target.value)} />
      <button>Add</button>
    </form>
  );
};

export default CreateNewTodo;
