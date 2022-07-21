import { useState } from 'react';
import ExpensesList from './ExpensesList';
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from './ExpensesChart';
import Card from "../UI/Card";
import "./Expenses.css"

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filteredChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  }
  const filteredExpenses = props.items.filter(item => item.date.getFullYear().toString() === filteredYear)

  
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filteredChangeHandler} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}
export default Expenses;