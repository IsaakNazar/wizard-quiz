import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizSectionComponent } from "./quiz-section/quiz-section.component";
import { QuizGroupComponent } from "./quiz-group/quiz-group.component";
import { QuizQuestionsComponent } from './quiz-questions/quiz-questions.component';
import { QuizRoutingModule } from "./quiz-routing.module";
import { MatButtonModule } from "@angular/material/button";
import { QuizFormComponent } from './quiz-form/quiz-form.component';
import { MatCardModule } from "@angular/material/card";
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    QuizSectionComponent,
    QuizGroupComponent,
    QuizQuestionsComponent,
    QuizFormComponent
  ],
  imports: [
    CommonModule,
    QuizRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatProgressBarModule,
    MatGridListModule,
    MatIconModule
  ]
})
export class QuizModule {
}
