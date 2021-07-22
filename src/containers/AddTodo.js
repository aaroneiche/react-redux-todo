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

          let dateVal;
          if (dateInput.value === "") {
            //set the date value to today.
            let d = new Date();
            dateVal = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
          } else {
            dateVal = dateInput.value;
          }

          dispatch(addTodo(input.value, dateVal));
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
