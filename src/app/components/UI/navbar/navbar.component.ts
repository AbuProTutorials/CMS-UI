import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  @ViewChild('homeworkHeader') homeworkHeader!: ElementRef;

  menuToggle: string = 'site-header';

  toggleMenu() {
    if (this.menuToggle === 'site-header menu-clicked') {
      this.menuToggle = 'site-header';
      this.homeworkHeader.nativeElement.parentNode.nextElementSibling.children[0].children[0].style.width =
        '82vw';
    } else {
      this.menuToggle = 'site-header menu-clicked';
      this.homeworkHeader.nativeElement.parentNode.nextElementSibling.children[0].children[0].style.width =
        '95.7vw';
    }
  }

  ngAfterViewInit() {
    console.dir(
      this.homeworkHeader.nativeElement.parentNode.nextElementSibling
        .children[0].style
    );
  }
}
