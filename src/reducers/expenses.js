// Expenses Reducer
import axios from 'axios';
let expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'GET_EXPENSES':
      return [
        ...state,
        ...action.expensesList.expenses
      ];
    case 'ADD_EXPENSE':
      axios.post('/expenses_add', action.expense)
        .then(function (response) {
      })
        .catch(function (error) {
          console.log(error);
      });
      return [
        ...state,
        action.expense
      ];
    case 'REMOVE_EXPENSE':
      axios.post('/expenses_remove', {id:action.id})
        .then(function (response) {
      })
        .catch(function (error) {
          console.log(error);
      });
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_EXPENSE':
      axios.post('/expenses_edit', {id:action.id, new:action.updates})
        .then(function (response) {
      })
        .catch(function (error) {
          console.log(error);
      });
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          };
        } else {
          return expense;
        };
      });
    default:
      return state;
  }
};
