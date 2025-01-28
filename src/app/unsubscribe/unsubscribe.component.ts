import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { interval } from 'rxjs/internal/observable/interval';

@Component({
  selector: 'app-unsubscribe',
  imports: [CommonModule],
  templateUrl: './unsubscribe.component.html',
  styleUrl: './unsubscribe.component.css'
})
export class UnsubscribeComponent {
  counter = interval(1000);
  data: number[] = [];
  subscriber1: any;

  onSubscribe(){
    this.subscriber1 = this.counter.subscribe((value) => {
      this.data.push(value)
    })
  }
  onUnsubscribe(){
    this.subscriber1.unsubscribe()
    console.log('cliked me ');
  }
}
