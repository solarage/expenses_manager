import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Header from './containers/Header';
import ExpensesList from './components/ExpensesList';
import { updateTotalSum, deleteExpense } from './actions/actions';
import { sortArray } from './helpers/helpers';

import logo from './money_time.png';
import './App.css'; 

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Expenses manager</h1>
        </header>
        <Header {...this.props} />
        <ExpensesList {...this.props} deleteExpense={ this.deleteExpense }/>
      </div>
      
    );
  }

  deleteExpense = (event) => {
    this.props.expensesActions.delExpenses(+event.currentTarget.parentNode.id)
  }

}

const mapStateToProps = (state, ownProps) => {
 
  return {
    expensesState: state.expenses,
    totalState: state.total,
    sortedExpensesState: sortArray(state.expenses, state.sortField.sortBy),
    ownProps
  };
}

const saveActionsToProps = (dispatch) => {
  return {
    expensesActions: {
      upTotalSum: bindActionCreators(updateTotalSum, dispatch),
      delExpenses: bindActionCreators(deleteExpense, dispatch)
    }
  }
}

export default connect(mapStateToProps, saveActionsToProps)(App);