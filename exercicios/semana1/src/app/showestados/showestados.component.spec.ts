import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowestadosComponent } from './showestados.component';

describe('ShowestadosComponent', () => {
  let component: ShowestadosComponent;
  let fixture: ComponentFixture<ShowestadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowestadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowestadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
