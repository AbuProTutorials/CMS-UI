import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultInnerComponent } from './result-inner.component';

describe('ResultInnerComponent', () => {
  let component: ResultInnerComponent;
  let fixture: ComponentFixture<ResultInnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResultInnerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResultInnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
