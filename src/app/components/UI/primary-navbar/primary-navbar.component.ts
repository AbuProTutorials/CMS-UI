import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-primary-navbar',
  templateUrl: './primary-navbar.component.html',
  styleUrl: './primary-navbar.component.scss'
})
export class PrimaryNavbarComponent {
  @Input() path!:string
  @Input() header!:string
}
