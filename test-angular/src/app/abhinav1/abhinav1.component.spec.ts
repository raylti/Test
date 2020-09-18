import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Abhinav1Component } from './abhinav1.component';

describe('Abhinav1Component', () => {
  let component: Abhinav1Component;
  let fixture: ComponentFixture<Abhinav1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Abhinav1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Abhinav1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
