import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'slr-reservation-input',
  templateUrl: './reservation-input.component.html',
  styleUrls: ['./reservation-input.component.scss']
})
export class ReservationInputComponent implements OnInit {

  public reservationForm: FormGroup;

  constructor() {
    this.initForm();
  }

  ngOnInit(): void {
  }

  private initForm() {
    this.reservationForm = new FormGroup({
      checkin: new FormControl(),
      checkout: new FormControl()
    }
    );
  }

}
