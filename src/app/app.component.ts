import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewTaskComponent } from './new-task/new-task.component';
import { ShowTaskComponent } from './show-task/show-task.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { UnsubscribeComponent } from './unsubscribe/unsubscribe.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NewTaskComponent, ShowTaskComponent, SubjectsComponent, UnsubscribeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular-practice';
}
