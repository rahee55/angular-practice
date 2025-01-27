import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { TaskServiceService } from '../services/task-service.service';

@Component({
  selector: 'app-show-task',
  imports: [CommonModule],
  templateUrl: './show-task.component.html',
  styleUrl: './show-task.component.css'
})
export class ShowTaskComponent implements OnInit{
  task: string[] = ['task', 'task', 'task']

  taskService: TaskServiceService = inject(TaskServiceService)
  ngOnInit(){
    this.taskService.CreateTask.subscribe((value) =>{
      this.task.push(value)
    })
  }
}
