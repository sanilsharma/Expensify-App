import { createStore, combineReducers } from "redux";
import uuid from "uuid";

//ADD_EXPENSE
const addExpense = ({
  description = "",
  note = "",
  amount = 0,
  createdAt = 0
} = {}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

//REMOVE_EXPENSE
<<<<<<< HEAD

=======
>>>>>>> fc4c14d10a996b6763c6a3d92dc5cce9c4af4ce8
const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id
});
<<<<<<< HEAD
=======

>>>>>>> fc4c14d10a996b6763c6a3d92dc5cce9c4af4ce8
//EDIT_EXPENSE
//SET_TEXT_FIELD
//SORT_BY_DATE
//SORT_BY_AMOUNT
//SET_START_DATE
//SET_END_DATE

//Expenses Reducers
//Filters Reducers

const expenseReducerDefaultState = [];
const filterReducerDefaultState = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined
};

const expenseReducer = (state = expenseReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense];
    case "REMOVE_EXPENSE":
      return state.filter(({ id }) => id !== action.id);
    default:
      return state;
  }
};

const filterReducer = (state = filterReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const store = createStore(
  combineReducers({
    expenses: expenseReducer,
    filters: filterReducer
  })
);

store.subscribe(() => {
  console.log(store.getState());
});

const expenseOne = store.dispatch(
  addExpense({ description: "Rent", amount: 100 })
);
const expenseTwo = store.dispatch(
  addExpense({ description: "Coffee", amount: 300 })
);
<<<<<<< HEAD
store.dispatch(removeExpense({ id: expenseOne.expense.id }));
=======

const r = store.dispatch(removeExpense({ id: expenseOne.expense.id }));

console.log(expenseOne);
console.log(r);
>>>>>>> fc4c14d10a996b6763c6a3d92dc5cce9c4af4ce8

const demoState = {
  expenses: [
    {
      id: "jhjkfhakjh",
      description: "January Rent",
      note: "This was the final payment for the address",
      amount: 54500,
      createdAt: 0
    }
  ],
  filters: {
    text: "rent",
    sortBy: "amount", //date or amount
    startDate: undefined,
    endDate: undefined
  }
};
