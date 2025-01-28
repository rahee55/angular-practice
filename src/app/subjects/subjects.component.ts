import { Component, OnInit } from '@angular/core';
import { AsyncSubject } from 'rxjs/internal/AsyncSubject';

@Component({
  selector: 'app-subjects',
  imports: [],
  templateUrl: './subjects.component.html',
  styleUrl: './subjects.component.css'
})
export class SubjectsComponent implements OnInit{
  
  ngOnInit(){
    const asyncSubject = new AsyncSubject();

    asyncSubject.next(100);
    asyncSubject.next(200);
    asyncSubject.next(300);
    asyncSubject.complete();

    asyncSubject.subscribe((data) => console.log(`Subscriber 1: ${data}`))
   }
}
