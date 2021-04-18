import React from 'react';
import './ExpenseForm'

const ExpenseForm = () => {
    const titleChanegHandler =() => {};

    return <form>
        <div className="new-expense_controls">
            <div className="new-expense_control">
                <label>Title</label>
                <input type="text" onChange={titleChanegHandler} />
            </div>
        </div>
        <div className="new-expense_controls">
            <div className="new-expense_control">
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" />
            </div>
        </div>
        <div className="new-expense_controls">
            <div className="new-expense_control">
                <label>Date</label>
                <input type="date" min="2001-01-01" max="2025-12-31" />
            </div>
        </div>
        <div className="new-expense_actions">
            <button type="submit">Add Expense</button>
        </div>
    </form>
};

export default ExpenseForm;