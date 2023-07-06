import ExpenseItem from "./ExpenseItem"

const ExpenseDate = (props) => {
    const { date } = props;
    const day = date.getDate()
    const month = date.toLocaleDateString('US-en', { month: "long" })
    const year = date.getFullYear()
    return (
        <>
            < div className="expense-date" >
                <div className="expense-date__month">{month}</div>
                <div className="expense-date__day">{day}</div>
                <div className="expense-date__year">{year}</div>
            </div >
        </>
    )
}

export default ExpenseDate