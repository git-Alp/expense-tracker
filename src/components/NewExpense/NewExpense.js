import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [extendStatus, setExtendStatus] = useState(false);
  
  const extendArea = () => setExtendStatus(true);
  const shrinkArea = () => setExtendStatus(false);
  

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    props.onAddExpense(expenseData);
    setExtendStatus(false);
  }

  return (
    <div className="new-expense">
      {!extendStatus && <button onClick={extendArea}>Add New Expense</button>}
      {extendStatus && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={shrinkArea} />}
    </div>
  )
}

export default NewExpense;