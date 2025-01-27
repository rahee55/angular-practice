import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewTaskComponent } from './new-task/new-task.component';
import { ShowTaskComponent } from './show-task/show-task.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NewTaskComponent, ShowTaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular-practice';
}
