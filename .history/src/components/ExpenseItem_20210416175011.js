import './ExpensiveItem.css'

function ExpenseItem() {
    const expenseDate = new Date(2021, 2);



    return (
        <div className="expense-item">
            <div>March 28th 2021</div>
            <div className="expense-item__description">
                <h2 className="expense-item h2">car Insurance</h2>
                <div className="expense-item__price">$294.54</div>
            </div>
        </div>
    );
}

export default ExpenseItem