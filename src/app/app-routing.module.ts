import { ResultInnerComponent as StudentResultInner } from './components/user/result-inner/result-inner.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { LoginMenuComponent } from './components/auth/login-menu/login-menu.component';
import { HomeComponent as UserHome } from './components/user/home/home.component';
import { TeacherLoginComponent } from './components/teacher/teacher-login/teacher-login.component';
import { FormComponent } from './components/auth/form/form.component';
import { SolutionsComponent } from './components/teacher/solutions/solutions.component';
import { EventsComponent } from './components/teacher/events/events.component';
import { HomeworkComponent as UserHomework } from './components/user/homework/homework.component';
import { StudentLoginComponent } from './components/user/student-login/student-login.component';
import { StudentProfileComponent } from './components/user/student-profile/student-profile.component';
import { QuizStartComponent } from './components/user/quiz-start/quiz-start.component';
import { QuizOptionComponent } from './components/user/quiz-option/quiz-option.component';
import { QuizScoreComponent } from './components/user/quiz-score/quiz-score.component';
import { ResultComponent as StudentResult } from './components/user/result/result.component';
import { QuestionListComponent } from './components/user/question-list/question-list.component';
import { AskQuestionComponent } from './components/user/ask-question/ask-question.component';
import { AnswerComponent } from './components/user/answer/answer.component';
import { ResultComponent as TeacherResultComponent } from './components/teacher/result/result.component';
import { HomeComponent as TeacherHomeworkComponent } from './components/teacher/home/home.component';
import { AttendanceComponent } from './components/teacher/attendance/attendance.component';
import { AddMarkComponent } from './components/teacher/add-mark/add-mark.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'login-menu', component: LoginMenuComponent },
  { path: 'teacher-login', component: TeacherLoginComponent },
  { path: 'student-login', component: StudentLoginComponent },
  { path: 'form', component: FormComponent },
  { path: 'user-home', component: UserHome },
  { path: 'notice-events', component: EventsComponent },
  { path: 'solutions', component: SolutionsComponent },
  {path:"student-profile",component:StudentProfileComponent},
  {path:"quiz-start",component:QuizStartComponent},
  {path:"quiz-options",component:QuizOptionComponent},
  {path:"quiz-score",component:QuizScoreComponent},
  { path: 'user-homework', component: UserHomework },
  { path: 'student-result', component: StudentResult }, 
  { path: 'inner-result', component: StudentResultInner },
  { path: 'student-question-list', component:QuestionListComponent},
  { path: 'student-ask-question', component:AskQuestionComponent},
  { path: 'student-answer', component: AnswerComponent},
  { path: 'teacher-result', component: TeacherResultComponent},
  { path: 'teacher-homework', component: TeacherHomeworkComponent},
  { path: 'teacher-attendance', component: AttendanceComponent},
  { path: 'teacher-add-mark', component: AddMarkComponent},
  { path: 'student-ask-question', component:AskQuestionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
