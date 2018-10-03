import React from 'react';
import { connect } from 'react-redux';
import totalPrice from '../selectors/expenses-totalPrice';
import selectExpenses from '../selectors/expenses';
import numeral from 'numeral';

const ExpenseTotalPrice = (props) => (
  <div className="content-container">
    <h2 className="list-item__total">{numeral(props.totalPrice / 100).format('$0,0.00')}</h2>
  </div>
);

const mapStateToProps = (state) => {
  return {
    totalPrice: totalPrice(selectExpenses(state.expenses, state.filters))
  };
};

export default connect(mapStateToProps)(ExpenseTotalPrice);
