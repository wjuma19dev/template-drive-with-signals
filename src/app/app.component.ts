import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from './components/button/button.component';
import { ControlComponent } from "./components/control/control.component";
import { ServerStatusComponent } from "./components/server-status/server-status.component";
import { NewTicketComponent } from "./tickets/new-ticket/new-ticket.component";
import { TicketsComponent } from "./tickets/tickets.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, ButtonComponent, ControlComponent, ServerStatusComponent, NewTicketComponent, TicketsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {}
