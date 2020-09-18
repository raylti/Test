import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Rahul1Component } from './rahul1.component';

describe('Rahul1Component', () => {
  let component: Rahul1Component;
  let fixture: ComponentFixture<Rahul1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Rahul1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Rahul1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
