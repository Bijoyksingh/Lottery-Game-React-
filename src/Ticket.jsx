import TicketNum from "./TicketNum";
import "./Ticket.css"

export default function Ticket({ticket}){
    return(
        <div className="ticket">
            <h5>Ticket</h5>
            {ticket.map((num, idx)=>(
                <TicketNum num={num} key={idx}/>
            ))}
        </div>
    );
}