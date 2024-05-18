import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.scss'
})
export class SmallCardComponent {
  @Input() path!:string
  @Input() header!:string
}
