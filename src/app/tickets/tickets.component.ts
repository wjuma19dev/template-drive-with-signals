import { Component } from '@angular/core';
import { Ticket } from './ticket.model';
import { NewTicketComponent } from "./new-ticket/new-ticket.component";
import { TicketComponent } from './ticket/ticket.component';

enum STATUS {
  'OPEN'= 'open',
  'CLOSED'= 'closed'
}

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NewTicketComponent, TicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css'
})
export class TicketsComponent {

  tickets: Ticket[] = [];

  onAdd(ticketData: { title: string, description: string }) {
    
    const ticket: Ticket = {
      title: ticketData.title,
      description: ticketData.description,
      id: new Date().getTime().toString(),
      status: STATUS.OPEN
    }

    this.tickets.push(ticket);

  }

}
