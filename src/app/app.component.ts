import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LessonComponent } from './lesson/lesson.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LessonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'homework';
}
