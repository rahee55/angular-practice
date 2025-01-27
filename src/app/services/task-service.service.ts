import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {
  // CreateTask: EventEmitter<string> = new EventEmitter<string>();

  CreateTask = new Subject<string>();
  onCreateTask(value: string){
    this.CreateTask.next(value);
  }
}
