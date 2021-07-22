import React from "react";
import PropTypes from "prop-types";

const Todo = ({ onClick, completed, text, date }) => {
  const divStyle = {
    listStyleType: "none",
    cursor: "pointer"
  };

  const dueDateStyle = {
    marginLeft: "40px"
  };

  return (
    <li
      onClick={onClick}
      style={{
        ...divStyle,
        textDecoration: completed ? "line-through" : "none"
      }}
    >
      <input type="checkbox" checked={completed} /> {text}
      <span style={dueDateStyle}>{date}</span>
      <span onClick={() => removeTodo()}>❌</span>
    </li>
  );
};

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default Todo;
