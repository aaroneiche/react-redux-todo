import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

const AddTodo = ({ dispatch }) => {
  let input;
  let dateInput;

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }

          dispatch(addTodo(input.value, dateInput.value));
          input.value = "";
        }}
      >
        <input ref={(node) => (input = node)} />
        <input ref={(node) => (dateInput = node)} type="date" />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default connect()(AddTodo);