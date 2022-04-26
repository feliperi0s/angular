import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exer6Component } from './exer6.component';

describe('Exer6Component', () => {
  let component: Exer6Component;
  let fixture: ComponentFixture<Exer6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exer6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Exer6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
