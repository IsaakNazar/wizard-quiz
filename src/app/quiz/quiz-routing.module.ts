import { QuizQuestionsComponent } from "./quiz-questions/quiz-questions.component";
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { QuizSectionComponent } from "./quiz-section/quiz-section.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'quiz',
    pathMatch: 'full'
  },
  {
    path: 'quiz',
    component: QuizQuestionsComponent
  },
  {
    path: 'quiz/:section',
    component: QuizSectionComponent
  },
  // {
  //   path: 'quiz/:section/:id',
  //   component: QuizSectionComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizRoutingModule { }
