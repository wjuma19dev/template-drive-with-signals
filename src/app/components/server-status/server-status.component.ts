import { afterNextRender, afterRender, Component, DestroyRef, effect, inject, OnInit, signal } from '@angular/core';
import { TimeInterval } from 'rxjs';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit {

  status = signal<'online' | 'offline' | 'unknown'>('offline')
  destroyRef = inject(DestroyRef);
  statusChangedInterval: any;

  constructor() {

    afterRender(() => {
      console.log('afterRender')
    });

    afterNextRender(() => {
      console.log('afterNextRender')
    });

    effect((onCleanUp) => {
      console.log(this.status())
      onCleanUp(() => {
        console.log('onCleanUp')
        clearInterval(this.statusChangedInterval);
      })
    });

  }

  ngOnInit(): void {
    
    this.statusChangedInterval = setInterval(() => {
      const randomNumber = Math.random();
      if(randomNumber <= 0.3) {
        this.status.set('online');
      } else if(randomNumber > 0.3 && randomNumber <= 0.6) {
        this.status.set('offline')
      } else {
        this.status.set('unknown');
      }
    }, 5000);

    setTimeout(() => {
      this.destroyRef.onDestroy(() => {
        console.log('Deteniendo el interval')
      });
    }, 11000);
  }
}
