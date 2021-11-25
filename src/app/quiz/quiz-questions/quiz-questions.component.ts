import { Component, OnInit } from '@angular/core';
import { QuizService } from "../../quiz.service";
import { Observable } from "rxjs";
import { IQuiz } from "../../models/quiz";

@Component({
  selector: 'app-quiz-questions',
  templateUrl: './quiz-questions.component.html',
  styleUrls: ['./quiz-questions.component.scss']
})
export class QuizQuestionsComponent implements OnInit {

  quiz$: Observable<IQuiz[]>

  constructor(private quizService: QuizService) { }

  public ngOnInit(): void {
    this.getAll()
  }

  private getAll(): void {
    this.quiz$ = this.quizService.getAll()
  }

}
