import React from "react";
import ExpenseForm from "./ExpenseForm";

const EditExpensePage = props => {
  console.log(props);
  return (
    <div>
      <h1>Edit Expense</h1>
      Editing the expense with id of {props.match.params.id}
      <ExpenseForm />
    </div>
  );
};

export default EditExpensePage;
