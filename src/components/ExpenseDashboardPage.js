import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpenseTotalPrice from './ExpenseTotalPrice';

const ExpenseDashboardPage = () => (
  <div>
    <ExpenseListFilters />
    <ExpenseList />
    <ExpenseTotalPrice />
  </div>
);

export default ExpenseDashboardPage;
