import { Component } from '@angular/core';
import { QuizService } from '../../../services/quiz.service';

@Component({
  selector: 'app-quiz-score',
  templateUrl: './quiz-score.component.html',
  styleUrl: './quiz-score.component.scss'
})
export class QuizScoreComponent {
  constructor(){
    this.total=localStorage.getItem("total")!
    this.score=localStorage.getItem("score")!
  }

  score:string=""
  total:string=""

}
