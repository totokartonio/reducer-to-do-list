import XIcon from "../../assets/xicon.svg?react";
import styles from "./TodoItem.module.css";

type Props = {
  id: string;
  value: string;
  isCompleted?: boolean;
  handleOnToggle: (id: string) => void;
  handleOnClick: (id: string) => void;
};

const TodoItem = ({
  id,
  value,
  isCompleted,
  handleOnToggle,
  handleOnClick,
}: Props) => {
  return (
    <li className={styles.itemRow}>
      <button
        onClick={() => handleOnToggle(id)}
        className={`${styles.item} ${isCompleted ? styles.completed : ""}`}
      >
        {value}
      </button>
      <button onClick={() => handleOnClick(id)} className={styles.deleteButton}>
        <XIcon width="1.5rem" height="1.5rem" />
      </button>
    </li>
  );
};

export default TodoItem;
