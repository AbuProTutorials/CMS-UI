import { Component } from '@angular/core';

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrl: './solutions.component.scss'
})
export class SolutionsComponent {
  upload(){
    document.getElementById("real-input")?.click()
  }
}
