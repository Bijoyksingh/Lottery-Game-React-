import { useState } from "react";
import "./Lottery.css";
import {genTicket, sum} from "./helper";
import Ticket from "./Ticket";
import Button from "./Button";

export default function Lottery({n=3, winCondition}){
    let [ticket, setTicket]= useState(genTicket(n));
    let isWinning = winCondition(ticket);

    let buyTicket = ()=>{
        setTicket(genTicket(n));
    }
    return(
        <div>
            <h1>Lottery Game</h1>
            <h5>Win when ticket total is 15</h5>
            <Ticket ticket={ticket}/>
            <h3>{isWinning && "Congratulations, you won"}</h3>
            <Button action={buyTicket}/>
            
        </div>
    )
}