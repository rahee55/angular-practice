import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskServiceService } from '../services/task-service.service';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  newTask: string = '';

  taskService: TaskServiceService = inject(TaskServiceService)
  OncreateTask(){
    this.taskService.onCreateTask(this.newTask)
  }
}
