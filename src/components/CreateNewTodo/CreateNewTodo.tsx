import { useState } from "react";
import styles from "./CreateNewTodo.module.css";

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
    <form onSubmit={(event) => onSubmit(event)} className={styles.form}>
      <input
        value={value}
        onChange={(event) => setValue(event.target.value)}
        className={styles.input}
      />
      <button className={styles.button}>Add</button>
    </form>
  );
};

export default CreateNewTodo;
