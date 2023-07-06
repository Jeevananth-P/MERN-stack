import ExpenseItem from "./ExpenseItem"
import './Expenses.css'

const Expenses = () => {
    const Expenses = [
        {
            date: new Date(),
            title: 'Book',
            amount: 200
        },
        {
            date: new Date(),
            title: 'Laptop',
            amount: 50000
        },
        {
            date: new Date(),
            title: 'Phone',
            amount: 20000
        }
    ]
    return (
        <>
            <div className='expenses'>
                {Expenses.map((item, index) =>
                    <ExpenseItem key={index} date={item.date} title={item.title} amount={item.amount} />)}
            </div>


        </>
    )
}

export default Expenses