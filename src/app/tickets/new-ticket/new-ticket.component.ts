import { Component, output } from '@angular/core';
import { ControlComponent } from "../../components/control/control.component";
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [FormsModule, ControlComponent],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {


  public add = output<{ title: string, description: string }>();

  onSubmit(title: string, description: string) {
    this.add.emit({ title, description })
  }

}
