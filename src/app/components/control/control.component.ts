import { Component, contentChild, ContentChild, ElementRef, inject, input } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css'
})
export class ControlComponent {

  public label = input.required<string>();

  private el: ElementRef<HTMLDivElement> = inject(ElementRef);

  // @ContentChild('input') input!: ElementRef<HTMLInputElement | HTMLTextAreaElement>;

  private input = contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');

  // onClick() {
  //   // console.log(this.input()?.nativeElement)
  //   // console.log(this.el.nativeElement)
  // }

}
