import React from "react";
import PropTypes from "prop-types";

const Todo = ({ onClick, completed, text }) => {
  const divStyle = {
    listStyleType: "none",
    cursor: "pointer"
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
    </li>
  );
};

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default Todo;
