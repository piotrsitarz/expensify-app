// Get total price of expenses

export default (expenses) => {
  return expenses.reduce(function(sum, expense) {
      return sum+=expense.amount;
  }, 0);
};
