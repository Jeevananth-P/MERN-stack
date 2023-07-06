import './ExpenseItem.css'
import './ExpenseDate.css'
import ExpenseDate from './ExpenseDate.jsx'

const ExpenseItem = (props) => {
    const { date, title, amount } = props;
    return (
        <div className="expense-item">
            {/*date*/}
            <ExpenseDate date={date}/>
            {/*title and amount*/}
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">{amount}</div>
            </div>
        </div>
    )
};

export default ExpenseItem;