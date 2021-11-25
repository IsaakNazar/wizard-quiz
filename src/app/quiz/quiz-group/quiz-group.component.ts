import { Component, Input } from '@angular/core';
import { IQuizForm } from "../../models/quiz";

@Component({
  selector: 'app-quiz-group',
  templateUrl: './quiz-group.component.html',
  styleUrls: ['./quiz-group.component.scss'],
})
export class QuizGroupComponent {

  @Input() quiz: IQuizForm

}
