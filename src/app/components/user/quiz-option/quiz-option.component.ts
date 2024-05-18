import { Component } from '@angular/core';
import { QuizGetall } from '../../../models/quiz-getall';
import { QuizService } from '../../../services/quiz.service';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-quiz-option',
  templateUrl: './quiz-option.component.html',
  styleUrl: './quiz-option.component.scss'
})
export class QuizOptionComponent {
  quizList!:QuizGetall

  constructor(private quizService:QuizService, private router:Router){
    this.quizGetAll("")
    console.log(this.quizList)
    localStorage.setItem("total","0")
    localStorage.setItem("score","0")
  }

  quiz!:QuizGetall
  path:string=""

  question:string=""
  option1:string=""
  option2:string=""
  option3:string=""
  option4:string=""

  score:number=0
  total:number=0


  index:number=0
    
  quizGetAll( answear:string ){

    if(this.quizList!=null)
    {
      console.log("javobni tekshirish 1")
      if(this.quizList.$values[this.index-1]!=null)
      {
        console.log("javobni tekshirish 2")

        console.log(this.quizList.$values[this.index-1].correctAnswer+`  ${answear}`)

        if(this.quizList.$values[this.index-1].correctAnswer==answear)
        {
          localStorage.setItem("score", String(Number(localStorage.getItem("score")) + 1));
          console.log("Javob togri")
        }
      }
    }


    this.quizService.getAllQuiz().subscribe({
      next:(data)=>{
        this.quizList=data
        console.log("malumot keldi")
        console.log(this.quizList)

        localStorage.setItem("total",String(this.quizList.$values.length))

        this.quizService.total=this.quizList.$values.length

        if(this.quizList.$values.length>this.index)
        {
          this.question=this.quizList.$values[this.index].question
          this.option1=this.quizList.$values[this.index].optionsA
          this.option2=this.quizList.$values[this.index].optionsB
          this.option3=this.quizList.$values[this.index].optionsC
          this.option4=this.quizList.$values[this.index].optionsD
          this.path=`${environment.mainPath}${this.quizList.$values[this.index].descriptionPhotoPath}`
          this.index+=1
        }
        else{
          this.router.navigate(["quiz-score"])
        }
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }
 
}
