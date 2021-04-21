import React from 'react';
import './ExpensesList'
import ExpenseItem from './ExpenseItem'

const ExpensesList = props => {
    let expensesContent = <p>No expenses found.</p>;

    if (props.items.length > 0) {
        
    }

    return (
    <ul className="expenses-list">
        expensesContent = props.items.map(expense => (
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
        ))
    </ul>
    )};

export default ExpensesList;
