import { Component, Input } from '@angular/core';
import { IQuizQA } from "../../models/quiz";

@Component({
  selector: 'app-quiz-form',
  templateUrl: './quiz-form.component.html',
  styleUrls: ['./quiz-form.component.scss']
})
export class QuizFormComponent {

  @Input() quizForm: IQuizQA

}
