import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YuguComponent } from './yugu.component';

describe('YuguComponent', () => {
  let component: YuguComponent;
  let fixture: ComponentFixture<YuguComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YuguComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YuguComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
