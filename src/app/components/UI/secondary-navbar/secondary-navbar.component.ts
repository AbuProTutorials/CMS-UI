import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-secondary-navbar',
  templateUrl: './secondary-navbar.component.html',
  styleUrl: './secondary-navbar.component.scss'
})
export class SecondaryNavbarComponent {
  @Input() path!:string

  upload(){
    document.getElementById("input-file")!.click()
  }
}
