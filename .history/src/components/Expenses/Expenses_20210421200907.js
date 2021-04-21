import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';


const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }

    const filtereeExpenses = props.i

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangefilter={filterChangeHandler} />
            {props.items.map(expense => <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />)}
        </Card>
    );
}

export default Expenses;
