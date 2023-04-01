import ExpenseItem from "./ExpenseItem";

function Expenses (props) {

    return (
        <div>
            <ExpenseItem title={props.infoExp[0].title} amount={props.infoExp[0].amount} date={props.infoExp[0].date}/>
            <ExpenseItem title={props.infoExp[1].title} amount={props.infoExp[1].amount} date={props.infoExp[1].date}/>
            <ExpenseItem title={props.infoExp[2].title} amount={props.infoExp[2].amount} date={props.infoExp[2].date}/>
            <ExpenseItem title={props.infoExp[3].title} amount={props.infoExp[3].amount} date={props.infoExp[3].date}/>
        </div>
    )
}

export default Expenses;