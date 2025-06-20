import XIcon from "../../assets/xicon.svg?react";
import style from "./TodoItem.module.css";

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
    <li>
      <button
        onClick={() => handleOnToggle(id)}
        className={`${style.item} ${isCompleted ? style.completed : ""}`}
      >
        {value}
      </button>
      <button onClick={() => handleOnClick(id)} className={style.deleteButton}>
        <XIcon width="1.5rem" height="1.5rem" />
      </button>
    </li>
  );
};

export default TodoItem;
