import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { QuizService } from "../../quiz.service";
import { IQuiz, IQuizForm } from "../../models/quiz";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-quiz-section',
  templateUrl: './quiz-section.component.html',
  styleUrls: ['./quiz-section.component.scss']
})
export class QuizSectionComponent implements OnInit, OnDestroy {

  quiz: IQuizForm[] = []
  counter: number = 1
  formNumber: number = 0
  private subscription: Subscription
  constructor(private quizService: QuizService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.getAll()
    this.toNavigate()
  }

  get progressBar(): number {
    return this.quiz.length && Math.ceil(100 * this.counter / this.quiz.length)
  }

  public getAll(): void {
    this.subscription = this.quizService.getAll().subscribe(
      (resp: IQuiz[]) => {
        this.quiz = resp.find((q: IQuiz) => q.code === this.route.snapshot.params.section)!.group
        this.formNumber = this.quiz.length
      }
    )
  }

  public nextQuiz(): void {
    this.increment()
    this.toNavigate()
  }

  public prevQuiz(): void {
    this.decrement()
    this.toNavigate()
  }

  public saveForm(quiz: any): void {
    console.log(quiz);
    // this.quizService.saveQuiz(quiz)
    // .subscribe(resp => do something else)
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  private increment(): void {
    if (this.formNumber > this.counter) {
      this.counter++
    }
  }

  private decrement(): void {
    if (this.counter > 1) {
      this.counter--
    }
  }

  private toNavigate(): void {
    this.router.navigate(
      [],
      {
        relativeTo: this.route,
        queryParams: {id: this.counter},
        queryParamsHandling: 'merge'
      }
    )
  }

}
