import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { QuizGetall } from '../models/quiz-getall';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  constructor(private http:HttpClient) { }
  baseURL=environment.baseUrl

  total!:number
  score!:number

  getAllQuiz():Observable<QuizGetall>{
    return this.http.get<QuizGetall>(this.baseURL+"/Quiz/GetAllQuizes")
  }
}
