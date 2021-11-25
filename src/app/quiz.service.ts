import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { IQuiz, IQuizForm } from "./models/quiz";

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<IQuiz[]> {
    return this.http.get('assets/data/data.json').pipe(
      map(x => JSON.parse(JSON.stringify(x)))
    )
  }

  saveQuiz(body: IQuizForm[]) {
    return this.http.post('some/fake/url', body)
  }

}
