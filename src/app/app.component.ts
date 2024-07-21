import { Component, ElementRef, viewChild, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from './components/button/button.component';
import { ControlComponent } from "./components/control/control.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, ButtonComponent, ControlComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  // @ViewChild('form', { static: true }) private form!: ElementRef<HTMLFormElement>;

  // REVIEW ViewChild Signals
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');


  onSubmit() {
    // console.log({ 'title': title.value, 'description': description.value })
    // console.log('Form: ', this.form)
    this.form().nativeElement.reset();
    // console.log(this.form().nativeElement)
  }
}
