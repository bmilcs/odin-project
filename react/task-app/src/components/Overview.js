import React from "react";
import deleteIcon from "./delete.svg";
import "./overview.css";

const Overview = (props) => {
  const { tasks, deleteMethod } = props;

  return (
    <ul>
      {tasks.map((task) => {
        return (
          <li key={task.id}>
            <img
              alt="Delete task"
              src={deleteIcon}
              onClick={deleteMethod}
              data-task-id={task.id}
              data-task-text={task.text}
            ></img>
            #{task.num} {task.text}
          </li>
        );
      })}
    </ul>
  );
};

export default Overview;
