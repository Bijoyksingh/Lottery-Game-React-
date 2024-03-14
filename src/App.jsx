import './App.css'
import Lottery from './Lottery'
import Ticket from './Ticket'
import TodoList from './TodoList'
import {sum} from "./helper"


function App() {
let winCondition = (ticket)=>{
  return sum(ticket) === 15;
  //  ticket.every((num)=> num === ticket[0]);
    // sum(ticket) === 15;
    // ticket[0]===0;
  
}

  return (
    <>
    <Lottery n={3} winCondition={winCondition}/>
    </>
  )
}

export default App
