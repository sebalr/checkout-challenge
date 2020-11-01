import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationInputComponent } from './reservation-input.component';

describe('ReservationInputComponent', () => {
  let component: ReservationInputComponent;
  let fixture: ComponentFixture<ReservationInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservationInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
