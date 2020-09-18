import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Abhinav3Component } from './abhinav3.component';

describe('Abhinav3Component', () => {
  let component: Abhinav3Component;
  let fixture: ComponentFixture<Abhinav3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Abhinav3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Abhinav3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
