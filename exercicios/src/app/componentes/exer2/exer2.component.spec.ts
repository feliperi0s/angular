import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exer2Component } from './exer2.component';

describe('Exer2Component', () => {
  let component: Exer2Component;
  let fixture: ComponentFixture<Exer2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exer2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Exer2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
