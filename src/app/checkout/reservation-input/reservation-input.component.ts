import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'slr-reservation-input',
  templateUrl: './reservation-input.component.html',
  styleUrls: ['./reservation-input.component.scss']
})
export class ReservationInputComponent implements OnInit {

  public reservationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.initForm();
  }

  ngOnInit(): void {
  }

  private initForm() {
    this.reservationForm = this.fb.group({
      checkin: ['', [Validators.required]],
      checkout: ['', [Validators.required]],
      adults: [1, [Validators.required, Validators.min(1)]],
      childrens: [0],
      pets: ["false", [Validators.required]]
    });
  }

  // Add or remove adults from form input
  public adultStep(step: number) {
    const actualValue = this.reservationForm.controls.adults.value;
    const newValue = actualValue + step;
    if (newValue >= 0) {
      this.reservationForm.controls.adults.setValue(newValue);
    }
  }
  // Add or remove childrens from form input
  public childrenStep(step: number) {
    const actualValue = this.reservationForm.controls.childrens.value;
    const newValue = actualValue + step;
    if (newValue >= 0) {
      this.reservationForm.controls.childrens.setValue(newValue);
    }
  }

}
