import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeworkPopUpComponent } from './homework-pop-up.component';

describe('HomeworkPopUpComponent', () => {
  let component: HomeworkPopUpComponent;
  let fixture: ComponentFixture<HomeworkPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeworkPopUpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeworkPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
