import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationReviewComponent } from './reservation-review.component';

describe('ReservationReviewComponent', () => {
  let component: ReservationReviewComponent;
  let fixture: ComponentFixture<ReservationReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservationReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
